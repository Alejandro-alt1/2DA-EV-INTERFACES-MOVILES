// Librerías e importaciones
import { Text, StyleSheet } from 'react-native';

// Componente Yo
export default function Yo() {
  return (
    <Text style={style.text}>Yo</Text>
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