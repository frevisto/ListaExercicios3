import React from 'react';
import { View, Button, Alert, Linking } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import { globalStyles } from '../styles';

type MailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Mail'>;

interface Props {
  navigation: MailScreenNavigationProp;
}

const MailScreen: React.FC<Props> = ({ navigation }) => {
  const sendMail = () => {
    const to = 'arley.souza@fatec.sp.gov.br';
    const subject = 'Aula de programação';
    const body = 'Boa noite.\n\nAula de envio de e-mail.\n\nAtenciosamente.';

    const url = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          Alert.alert('Erro', 'Nenhum aplicativo de e-mail está configurado neste dispositivo.');
        }
      })
      .catch((err) => console.error('Erro ao tentar abrir o cliente de e-mail', err));
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.buttonContainer}>
        <Button title="Enviar E-mail" onPress={sendMail} />
      </View>
    </View>
  );
};

export default MailScreen;