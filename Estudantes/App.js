import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={estilos.tela}>
      <View style={estilos.ajuste}>
        <Image style={estilos.avatar}
          source={require('./vaca-saturno-saturnita.jpeg')}
        />
        <View>
          <Text style={estilos.titulo}>Olá, Estudante</Text>
          <Text style={estilos.subtitulo}>Bem-Vindo ao seu painel</Text>
        </View>
      </View>

      <View>
        <Text style={estilos.menutitulo}>Menu</Text>

        <View style={estilos.ajustaBotao}>
          <TouchableOpacity style={[estilos.botao, { backgroundColor: "#2c86e0ff" }]}>
            <Text style={estilos.textoBotao}>NOTAS</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[estilos.botao, { backgroundColor: "#2dc935ff" }]}>
            <Text style={estilos.textoBotao}>AULAS</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[estilos.botao, { backgroundColor: "#af22d6ff" }]}>
            <Text style={estilos.textoBotao}>AVISOS</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Text style={estilos.menutitulo}>Próximas atividades</Text>
      </View>
      <ScrollView style={estilos.ajustesv}>
        <View style={estilos.ajustecard}>
          <View style={estilos.card}>
            <Text style={estilos.titulocard}>Trabalho de Matemática</Text>
            <Text style={estilos.subcard}>Entrega: 20/08</Text>
          </View>
          <View style={estilos.card}>
            <Text style={estilos.titulocard}>Prova de Física (Importante)</Text>
            <Text style={estilos.subcard}>Data: 22/08</Text>
          </View>
          <View style={estilos.card}>
            <Text style={estilos.titulocard}>Leitura de História</Text>
            <Text style={estilos.subcard}>Cap. 3 e 4</Text>
          </View>
          <View style={estilos.card}>
            <Text style={estilos.titulocard}>Educação física</Text>
            <Text style={estilos.subcard}>Levar chuteira</Text>
          </View>
        </View>

      </ScrollView>
      <View>
        <Text style={estilos.ajustecpa}>Chamada para ação</Text>
        <View style={estilos.textocpa}>
          <Text>Adquira um novo curso e continue aprendendo!</Text>
          <TouchableOpacity style={[estilos.botaocpa, { backgroundColor: "#af22d6ff" }]}>
            <Text style={estilos.textoBotao}>COMPRAR CURSO</Text>
          </TouchableOpacity>
        </View>
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
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: 8,
    marginTop: 5
  },
  titulo: {
    fontWeight: "900",
    fontSize: 20,
    marginTop: 3,
    marginBottom: 2,
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
    padding: 10,
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
    maxHeight: 250,
    overflow: "hidden"
  },

});