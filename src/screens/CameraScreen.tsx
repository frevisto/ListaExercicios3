import React, { useState, useEffect } from 'react';
import { View, Button, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import * as ImagePicker from 'expo-image-picker';
import { Video, ResizeMode } from 'expo-av';
import { RootStackParamList } from '../../App';
import { globalStyles } from '../styles';

type CameraScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Camera'>;

interface Props {
  navigation: CameraScreenNavigationProp;
}

const CameraScreen: React.FC<Props> = ({ navigation }) => {
  const [video, setVideo] = useState<string | null>(null);
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      setHasCameraPermission(status === 'granted');
    })();
  }, []);

  const recordVideo = async () => {
    if (hasCameraPermission === null) return;
    
    if (hasCameraPermission === false) {
      Alert.alert('Sem permissão', 'Sem permissão para acessar a câmera');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets[0]) {
      setVideo(result.assets[0].uri);
    }
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.buttonContainer}>
        <Button title="Gravar Vídeo" onPress={recordVideo} />
      </View>
      
      {video && (
        <Video
          source={{ uri: video }}
          style={globalStyles.video}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
        />
      )}
      
      <View style={globalStyles.buttonContainer}>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default CameraScreen;