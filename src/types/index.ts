import { Contact as ExpoContact } from "expo-contacts";

export interface Contact extends ExpoContact {
  // Adicione propriedades personalizadas aqui, se necessário
}

export interface ImageItem {
  id: string;
  uri: string;
}