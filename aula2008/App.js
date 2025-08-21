import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={estilos.tela}>
      <View style={estilos.ajuste}>
        <View>
          <Text style={estilos.titulo}>Quadro de tarefas</Text>
          <Text style={estilos.subtitulo}>Kanban estático</Text>
        </View>
      </View>

      <View>
        <Text style={estilos.menutitulo}>Quadro</Text>
      </View>


      <ScrollView horizontal style={estilos.ajustesv}>
        <View style={estilos.ajustecard}>
          <Text style={estilos.textocard}>teste</Text>
          <View style={estilos.card}>
            <Text style={estilos.titulocard}>Trabalho de Matemática</Text>
          </View>
          <View style={estilos.card}>
            <Text style={estilos.titulocard}>Prova de Física (Importante)</Text>
          </View>
          <View style={estilos.card}>
            <Text style={estilos.titulocard}>Leitura de História</Text>
          </View>
          <View style={estilos.card}>
            <Text style={estilos.titulocard}>Educação física</Text>
          </View>
        </View>

        <View style={estilos.ajustecard}>
          <View style={estilos.card}>
            <Text style={estilos.titulocard}>Trabalho de Matemática</Text>
          </View>
          <View style={estilos.card}>
            <Text style={estilos.titulocard}>Prova de Física (Importante)</Text>
          </View>
          <View style={estilos.card}>
            <Text style={estilos.titulocard}>Leitura de História</Text>
          </View>
          <View style={estilos.card}>
            <Text style={estilos.titulocard}>Educação física</Text>
          </View>
        </View>

        <View style={estilos.ajustecard}>
          <View style={estilos.card}>
            <Text style={estilos.titulocard}>Trabalho de Matemática</Text>
          </View>
          <View style={estilos.card}>
            <Text style={estilos.titulocard}>Prova de Física (Importante)</Text>
          </View>
          <View style={estilos.card}>
            <Text style={estilos.titulocard}>Leitura de História</Text>
          </View>
          <View style={estilos.card}>
            <Text style={estilos.titulocard}>Educação física</Text>
          </View>
        </View>

      </ScrollView>
      <View>
        <TouchableOpacity style={[estilos.botaocpa, { backgroundColor: "#af22d6ff" }]}>
          <Text style={estilos.textoBotao}>COMPRAR CURSO</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffffffff",
  },
  titulo: {
    fontWeight: "900",
    fontSize: 20,
    marginTop: 3,
    marginBottom: 6,
    marginLeft: 20
  },
  subtitulo: {
    marginBottom: 6,
    marginLeft: 20
  },
  ajuste: {
    flexDirection: "row",
    alignItems: "center",
  },
  menutitulo: {
    fontWeight: "900",
    fontSize: 15,
    marginTop: 10,
    padding: 10
  },
  ajustaBotao: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  botao: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 4,
    borderRadius: 3,
    alignItems: "center",
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  ajustecard: {
    height: 600,
    padding: 10,
    backgroundColor: "gray"
  },

  textocard: {
    fontWeight: "900",
    fontSize: 15,
    textAlign: "center",
    marginBottom: 20
  },
  card: {
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  titulocard: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  subcard: {
    fontSize: 14,
    color: "#555"
  },
  ajustecpa: {
    fontWeight: "900",
    fontSize: 15,
    marginTop: 20,
    padding: 10
  },
  textocpa: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center'
  },
  botaocpa: {
    padding: 10,
    borderRadius: 2,
    marginTop: 10
  },
  ajustesv: {
    maxHeight: 500,
    overflow: "hidden"
  },

});