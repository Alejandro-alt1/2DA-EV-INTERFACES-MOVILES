// Librerías e importaciones
import { Text, StyleSheet } from 'react-native';

// Componente Uno
export default function Uno() {
  return (
    <Text style={style.text}>Uno</Text>
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