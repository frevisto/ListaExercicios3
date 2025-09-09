import React from 'react';
import { View, Button, Alert, Linking } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import { globalStyles } from '../styles';

type SmsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Sms'>;

interface Props {
  navigation: SmsScreenNavigationProp;
}

const SmsScreen: React.FC<Props> = ({ navigation }) => {
  const sendSms = () => {
    const phoneNumber = '1234567890';
    const message = 'Boa noite!\nCorpo da mensagem a ser enviada.\nAtenciosamente.';

    const url = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;

    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          Alert.alert('Erro', 'Este dispositivo não suporta envio de SMS.');
        }
      })
      .catch((err) => console.error('Erro ao enviar SMS', err));
  };

  // Exercício 1 - YouTube
  const openYouTube = () => {
    Linking.openURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  };

  // Exercício 2 - Discagem
  const openDialer = () => {
    Linking.openURL('tel:1234567890');
  };

  // Exercício 3 - Instagram
  const openInstagram = () => {
    Linking.openURL('https://www.instagram.com/fatecjacarei/');
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.buttonContainer}>
        <Button title="Exercício 1 - Abrir YouTube" onPress={openYouTube} />
      </View>
      <View style={globalStyles.buttonContainer}>
        <Button title="Exercício 2 - Discar Número" onPress={openDialer} />
      </View>
      <View style={globalStyles.buttonContainer}>
        <Button title="Exercício 3 - Instagram Fatec" onPress={openInstagram} />
      </View>
      <View style={globalStyles.buttonContainer}>
        <Button title="Enviar SMS" onPress={sendSms} />
      </View>
    </View>
  );
};

export default SmsScreen;