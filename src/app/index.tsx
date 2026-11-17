// Librerías e importaciones
import { Text, View, StyleSheet } from 'react-native';
// Importamos todos tus componentes, incluyendo el nuevo Tres
import HolaTercero from '../components/hola';
import YoComponente from '../components/yo';
import UnoComponente from '../components/uno';
import DosComponente from '../components/dos';
import TresComponente from '../components/tres';

// Función principal
export default function App() {
  return (
    <View style={style.container}>
      {/* Tus dos Hola Mundo originales */}
      <Text style={style.text}>Hola Mundo 1</Text>
      <Text style={style.text}>Hola Mundo 2</Text>

      {/* El Hola Mundo de hola.tsx */}
      <HolaTercero />

      {/* El Hola Mundo de yo.tsx */}
      <YoComponente />

      {/* El Hola Mundo de uno.tsx */}
      <UnoComponente />

      {/* El Hola Mundo de dos.tsx */}
      <DosComponente />

      {/* El nuevo Hola Mundo de tres.tsx */}
      <TresComponente />
    </View>
  );
}

// Estilos originales
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontFamily: 'Roboto',
    color: '#d72525',
  },
});