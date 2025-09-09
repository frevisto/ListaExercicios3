import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#222",
    padding: 20,
  },
  buttonContainer: {
    marginVertical: 10,
  },
  row: {
    width: "100%",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
    paddingBottom: 10,
    paddingLeft: 10,
  },
  name: {
    color: "yellow",
    fontSize: 16,
  },
  number: {
    color: "#fff",
    fontSize: 14,
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 20,
    alignSelf: 'center',
  },
  video: {
    width: 300,
    height: 300,
    marginTop: 20,
    alignSelf: 'center',
  },
  imageContainer: {
    position: 'relative',
    margin: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'red',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});