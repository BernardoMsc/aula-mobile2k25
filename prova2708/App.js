import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={estilos.tela}>
      <View style={estilos.ajuste}>
        <View>
          <Text style={estilos.titulo}>React Native</Text>
          <Text style={estilos.subtitulo}>Avaliação dia 27/08</Text>
        </View>
      </View>

      <View style={estilos.ajustebt1}>
        <TouchableOpacity style={[estilos.botao1, { backgroundColor: "#b4c2d1ff" }]}>
          <Text style={estilos.textoBotao1}>Batatas são macias.</Text>
        </TouchableOpacity>
      </View>
      <View style={estilos.ajustebt2}>
        <TouchableOpacity style={[estilos.botao2, { backgroundColor: "#0088ffff" }]}>
          <Text style={estilos.textoBotao2}>ENVIAR</Text>
        </TouchableOpacity>
      </View>


    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    padding: 13,
    backgroundColor: "#fff",
  },
  titulo: {
    fontWeight: "900",
    fontSize: 20,
    marginTop: 3,
    marginBottom: 6,
    marginLeft: 10
  },
  subtitulo: {
    marginBottom: 6,
    marginLeft: 10
  },
  ajuste: {
    flexDirection: "row",
    alignItems: "center",
  },
  botao1: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  botao2: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textoBotao1: {
    color: "#000000ff",
    fontWeight: "bold",
  },
  textoBotao2: {
    color: "#ffffffff",
    fontWeight: "bold",
  },
  ajustebt1: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 300,
  },
  ajustebt2: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
});
