import React, { useState, useEffect } from 'react';
import { View, Button, Image, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import * as ImagePicker from 'expo-image-picker';
import { RootStackParamList } from '../../App';
import { globalStyles } from '../styles';

type PhotoScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Photo'>;

interface Props {
  navigation: PhotoScreenNavigationProp;
}

const PhotoScreen: React.FC<Props> = ({ navigation }) => {
  const [image, setImage] = useState<string | null>(null);
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      setHasCameraPermission(status === 'granted');
    })();
  }, []);

  const takePhoto = async () => {
    if (hasCameraPermission === null) return;
    
    if (hasCameraPermission === false) {
      Alert.alert('Sem permissão', 'Sem permissão para acessar a câmera');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets[0]) {
      setImage(result.assets[0].uri);
      
      // Opcional: navegar de volta para a galeria com a nova imagem
      // navigation.navigate('Galeria', { newImage: result.assets[0].uri });
    }
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.buttonContainer}>
        <Button title="Tirar Foto" onPress={takePhoto} />
      </View>
      
      {image && (
        <Image source={{ uri: image }} style={globalStyles.image} />
      )}
      
      <View style={globalStyles.buttonContainer}>
        <Button title="Voltar para Galeria" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default PhotoScreen;