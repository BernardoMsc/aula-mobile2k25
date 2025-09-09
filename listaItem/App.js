import { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [texto, setTexto] = useState(0);
  const [lista, setLista] = useState([]);

  function adicionarNaLista() {
    setLista([...lista, { id: String(lista.length + 1), valor: texto }]);
    setTexto("");
  }

  return (
    <SafeAreaView style={estilos.areaSegura}>
      <Text style={estilos.titulo}>Digite um item:</Text>
      <TextInput
        style={estilos.campo}
        placeholder="Escreva algo"
        value={texto}
        onChangeText={setTexto}
      />
      <Button title="Adicionar" onPress={adicionarNaLista} />

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={estilos.itemLista}>{item.valor}</Text>
        )}
        style={estilos.lista}
      />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  areaSegura: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 18,
    marginBottom: 10,
  },
  campo: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  lista: {
    marginTop: 20,
  },
  itemLista: {
    fontSize: 16,
    padding: 8,
    borderBottomWidth: 1,
    borderColor: "#ff0000ff",
  },
});
