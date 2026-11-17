// Librerías e importaciones
import { Text, StyleSheet } from 'react-native';

// Componente Dos
export default function Dos() {
  return (
    <Text style={style.text}>Dos</Text>
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