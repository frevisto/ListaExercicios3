import React from 'react';
import { View, Button, Alert, Linking } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import { globalStyles } from '../styles';

type WhatsappScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Whatsapp'>;

interface Props {
  navigation: WhatsappScreenNavigationProp;
}

const WhatsappScreen: React.FC<Props> = ({ navigation }) => {
  const sendWhatsapp = () => {
    const phoneNumber = '5512987654321';
    const message = 'Boa noite!\nCorpo da mensagem a ser enviada.\nAtenciosamente.';

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          Alert.alert('Erro', 'O WhatsApp não está instalado neste dispositivo.');
        }
      })
      .catch((err) => console.error('Erro ao tentar abrir o WhatsApp', err));
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.buttonContainer}>
        <Button title="Enviar WhatsApp" onPress={sendWhatsapp} />
      </View>
    </View>
  );
};

export default WhatsappScreen;