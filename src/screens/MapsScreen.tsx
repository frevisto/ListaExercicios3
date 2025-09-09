import React from 'react';
import { View, Button, Alert, Linking } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import { globalStyles } from '../styles';

type MapsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Maps'>;

interface Props {
  navigation: MapsScreenNavigationProp;
}

const MapsScreen: React.FC<Props> = ({ navigation }) => {
  const openMap = () => {
    const latitude = -23.295122027241426;
    const longitude = -45.967088557159585;
    const label = "Fatec Jacarei";

    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}&query_place_id=${encodeURIComponent(label)}`;

    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          Alert.alert('Erro', 'Não foi possível abrir o Google Maps.');
        }
      })
      .catch((err) => console.error('Erro ao tentar abrir o aplicativo de mapas', err));
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.buttonContainer}>
        <Button title="Abrir Google Maps" onPress={openMap} />
      </View>
    </View>
  );
};

export default MapsScreen;