import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import SmsScreen from './src/screens/SmsScreen';
import WhatsappScreen from './src/screens/WhatsappScreen';
import MailScreen from './src/screens/MailScreen';
import MapsScreen from './src/screens/MapsScreen';
import ContactsScreen from './src/screens/ContactsScreen';
import GaleriaScreen from './src/screens/GaleriaScreen';
import PhotoScreen from './src/screens/PhotoScreen';
import CameraScreen from './src/screens/CameraScreen';

export type RootStackParamList = {
  Home: undefined;
  Sms: undefined;
  Whatsapp: undefined;
  Mail: undefined;
  Maps: undefined;
  Contacts: undefined;
  Galeria: undefined;
  Photo: undefined;
  Camera: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Lista de Exercícios 3' }} />
        <Stack.Screen name="Sms" component={SmsScreen} options={{ title: 'Enviar SMS' }} />
        <Stack.Screen name="Whatsapp" component={WhatsappScreen} options={{ title: 'Enviar WhatsApp' }} />
        <Stack.Screen name="Mail" component={MailScreen} options={{ title: 'Enviar E-mail' }} />
        <Stack.Screen name="Maps" component={MapsScreen} options={{ title: 'Google Maps' }} />
        <Stack.Screen name="Contacts" component={ContactsScreen} options={{ title: 'Contatos' }} />
        <Stack.Screen name="Galeria" component={GaleriaScreen} options={{ title: 'Galeria' }} />
        <Stack.Screen name="Photo" component={PhotoScreen} options={{ title: 'Câmera Foto' }} />
        <Stack.Screen name="Camera" component={CameraScreen} options={{ title: 'Câmera Vídeo' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}