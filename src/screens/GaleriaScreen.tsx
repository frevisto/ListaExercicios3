import React, { useState } from 'react';
import { View, Button, Image, ScrollView, TouchableOpacity, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';
import { RootStackParamList } from '../../App';
import { globalStyles } from '../styles';
import { ImageItem } from '../types';

type GaleriaScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Galeria'>;

interface Props {
  navigation: GaleriaScreenNavigationProp;
}

const GaleriaScreen: React.FC<Props> = ({ navigation }) => {
  const [images, setImages] = useState<ImageItem[]>([]);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets[0]) {
      const newImage: ImageItem = {
        id: Date.now().toString(),
        uri: result.assets[0].uri
      };
      setImages(prev => [...prev, newImage]);
    }
  };

  const takePhoto = async () => {
    navigation.navigate('Photo');
  };

  const removeImage = (id: string) => {
    setImages(prev => prev.filter(img => img.id !== id));
  };

  return (
    <View style={globalStyles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 }}>
        <Button title="Abrir Galeria" onPress={pickImage} />
        <Button title="Tirar Foto" onPress={takePhoto} />
      </View>

      <ScrollView>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
          {images.map((image) => (
            <View key={image.id} style={globalStyles.imageContainer}>
              <Image source={{ uri: image.uri }} style={globalStyles.image} />
              {/* Exercício 8 - Botão para remover imagem */}
              <TouchableOpacity 
                style={globalStyles.closeButton}
                onPress={() => removeImage(image.id)}
              >
                <MaterialIcons name="close" size={24} color="white" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
        
        {images.length === 0 && (
          <Text style={{ color: 'white', textAlign: 'center', marginTop: 20 }}>
            Nenhuma imagem selecionada
          </Text>
        )}
      </ScrollView>
    </View>
  );
};

export default GaleriaScreen;