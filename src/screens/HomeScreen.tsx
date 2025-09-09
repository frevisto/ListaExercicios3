import React from 'react';
import { View, Button, StyleSheet, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import { globalStyles } from '../styles';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const exercises = [
    { title: 'Exercício 1 - YouTube', screen: 'Sms' as keyof RootStackParamList },
    { title: 'Exercício 2 - Discagem', screen: 'Sms' as keyof RootStackParamList },
    { title: 'Exercício 3 - Instagram', screen: 'Sms' as keyof RootStackParamList },
    { title: 'Exercício 4 - Contatos com C', screen: 'Contacts' as keyof RootStackParamList },
    { title: 'Exercício 5 - Primeiro Nome', screen: 'Contacts' as keyof RootStackParamList },
    { title: 'Exercício 6 - Galeria/Câmera', screen: 'Galeria' as keyof RootStackParamList },
    { title: 'Exercício 7 - Exibir Imagens', screen: 'Galeria' as keyof RootStackParamList },
    { title: 'Exercício 8 - Remover Imagens', screen: 'Galeria' as keyof RootStackParamList },
    { title: 'Enviar SMS', screen: 'Sms' as keyof RootStackParamList },
    { title: 'Enviar WhatsApp', screen: 'Whatsapp' as keyof RootStackParamList },
    { title: 'Enviar E-mail', screen: 'Mail' as keyof RootStackParamList },
    { title: 'Google Maps', screen: 'Maps' as keyof RootStackParamList },
    { title: 'Contatos', screen: 'Contacts' as keyof RootStackParamList },
    { title: 'Tirar Foto', screen: 'Photo' as keyof RootStackParamList },
    { title: 'Gravar Vídeo', screen: 'Camera' as keyof RootStackParamList },
  ];

  return (
    <ScrollView style={globalStyles.container}>
      {exercises.map((exercise, index) => (
        <View key={index} style={globalStyles.buttonContainer}>
          <Button
            title={exercise.title}
            onPress={() => navigation.navigate(exercise.screen)}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default HomeScreen;