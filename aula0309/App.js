import { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  function somar(num1, num2) {
    const n1Convertido = parseFloat(num1);
    const n2Convertido = parseFloat(num2);
    const soma = n1Convertido + n2Convertido;
    return soma;
  }

  function subtrair(num1, num2) {
    const n1Convertido = parseFloat(num1);
    const n2Convertido = parseFloat(num2);
    const subtrair = n1Convertido - n2Convertido;
    return subtrair;
  }

  function multiplicar(num1, num2) {
    const n1Convertido = parseFloat(num1);
    const n2Convertido = parseFloat(num2);
    const multiplicar = n1Convertido * n2Convertido;
    return multiplicar;
  }

    function dividir(num1, num2) {
    const n1Convertido = parseFloat(num1);
    const n2Convertido = parseFloat(num2);
    let div = n1Convertido / n2Convertido;
    if (n2Convertido == 0) {
      div = "Não pode dividir por 0!!";
    }
    return div;
  }

  return (
    <SafeAreaView style={estilos.areaSegura}>
      <TextInput
        style={estilos.campo}
        placeholder="Digite um número:"
        keyboardType="numeric"
        onChangeText={setNum1}
        value={num1}
      />
      <TextInput
        style={estilos.campo}
        placeholder="Digite um número:"
        keyboardType="numeric"
        onChangeText={setNum2}
        value={num2}
      />

      <View style={estilos.botao}>
        <Button title=" + " onPress={() => setResult(somar(num1, num2))} />
        <Button title=" - " onPress={() => setResult(subtrair(num1, num2))} />
        <Button title=" * " onPress={() => setResult(multiplicar(num1, num2))} />
        <Button title=" / " onPress={() => setResult(dividir(num1, num2))} />
      </View>
      <Button title="Resetar" onPress={() => setResult(result == 0)}></Button>
      <Text style={estilos.texto}>Resultado: {result}</Text>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  areaSegura: {
    padding: 10,
    flex: 1,
  },
  texto: {
    fontSize: 20,
  },
  campo: {
    borderWidth: 1,
    borderRadius: 10
  },
  botao: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
    marginTop: "10",
  }
});


