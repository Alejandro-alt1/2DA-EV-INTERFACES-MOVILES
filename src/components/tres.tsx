// Librerías e importaciones
import { Text, StyleSheet } from 'react-native';

// Componente Tres
export default function Tres() {
  return (
    <Text style={style.text}>Tres</Text>
  );
}

const style = StyleSheet.create({
  text: {
    fontSize: 24,
    fontFamily: 'Roboto',
    color: '#d72525',
    marginTop: 10,
  },
});