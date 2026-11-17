// Librerías e importaciones
import { Text, StyleSheet } from 'react-native';

// Tercer componente separado
export default function Hola() {
  return (
    <Text style={style.text}>Z</Text>
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