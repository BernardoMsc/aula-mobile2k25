import { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  const [contador, setContador] = useState(0);

  return (
    <SafeAreaView style={estilos.areaSegura}>
      <Button title="Adicionar 1" onPress={() => setContador(contador + 1)}></Button>
      <Button title="Resetar" onPress={() => setContador(contador == 0)}></Button>
      <Button title="Diminuir 1" onPress={() => setContador(contador - 1)}></Button>
      <Text style={estilos.texto}>Contador: {contador}</Text>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  texto: {
    fontSize: 20,
  }
});


