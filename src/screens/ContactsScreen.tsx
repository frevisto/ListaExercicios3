import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, Alert, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import * as Contacts from 'expo-contacts';
import { RootStackParamList } from '../../App';
import { globalStyles } from '../styles';
import { Contact } from '../types';

type ContactsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Contacts'>;

interface Props {
  navigation: ContactsScreenNavigationProp;
}

const ContactsScreen: React.FC<Props> = ({ navigation }) => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [showFiltered, setShowFiltered] = useState(false);
  const [showFirstName, setShowFirstName] = useState(false);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    setHasPermission(status === 'granted');
    
    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync({
        fields: [
          Contacts.Fields.FirstName,
          Contacts.Fields.PhoneNumbers,
          Contacts.Fields.Emails
        ],
      });

      setContacts(data as Contact[]);
    }
  };

  // Exercício 4 - Contatos que começam com C
  const filteredContacts = showFiltered 
    ? contacts.filter(contact => contact.name && contact.name.toUpperCase().startsWith('C'))
    : contacts;

  // Exercício 5 - Usar primeiro nome
  const displayContacts = showFirstName
    ? filteredContacts.map(contact => ({
        ...contact,
        name: contact.firstName || contact.name || 'Sem nome'
      }))
    : filteredContacts;

  // Função keyExtractor corrigida - sempre retorna string
  const keyExtractor = (item: Contact, index: number): string => {
    return item.id || `contact-${index}`;
  };

  if (hasPermission === null) {
    return <View style={globalStyles.container} />;
  }

  if (hasPermission === false) {
    return (
      <View style={globalStyles.container}>
        <Text style={{ color: 'white' }}>Sem acesso aos contatos</Text>
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 }}>
        <Button 
          title={showFiltered ? "Todos" : "Começam com C"} 
          onPress={() => setShowFiltered(!showFiltered)} 
        />
        <Button 
          title={showFirstName ? "Nome Completo" : "Primeiro Nome"} 
          onPress={() => setShowFirstName(!showFirstName)} 
        />
      </View>
      
      <FlatList
        data={displayContacts}
        keyExtractor={keyExtractor}
        renderItem={({ item }) => (
          <View style={globalStyles.row}>
            <Text style={globalStyles.name}>{item.name}</Text>
            {item.phoneNumbers && item.phoneNumbers.map((phone, index) => (
              <Text key={`phone-${index}`} style={globalStyles.number}>
                {phone.number}
              </Text>
            ))}
          </View>
        )}
        ListEmptyComponent={
          <Text style={{ color: 'white', textAlign: 'center' }}>
            Nenhum contato encontrado
          </Text>
        }
      />
    </View>
  );
};

export default ContactsScreen;