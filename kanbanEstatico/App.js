import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={estilos.tela}>
      <View style={estilos.ajuste}>
        <View>
          <Text style={estilos.titulo}>Quadro de Tarefas</Text>
          <Text style={estilos.subtitulo}>Kanban estático</Text>
        </View>
      </View>

      <View>
        <Text style={estilos.menutitulo}>Quadro</Text>
      </View>

      <ScrollView horizontal>

        <View style={estilos.coluna}>
          <Text style={estilos.tituloColuna}>A Fazer</Text>
          <ScrollView>
            <View style={estilos.card}><Text>Configurar ambiente</Text></View>
            <View style={estilos.card}><Text>Entregar layout (Importante)</Text></View>
            <View style={estilos.card}><Text>Revisar textos</Text></View>
          </ScrollView>
        </View>

        <View style={estilos.coluna}>
          <Text style={estilos.tituloColuna}>Em Progresso</Text>
          <ScrollView>
            <View style={estilos.card}><Text>Tela inicial</Text></View>
            <View style={estilos.card}><Text>API de login</Text></View>
            <View style={estilos.card}><Text>Documento</Text></View>
          </ScrollView>
        </View>

        <View style={estilos.coluna}>
          <Text style={estilos.tituloColuna}>Concluído</Text>
          <ScrollView>
            <View style={estilos.card}><Text>Setup projeto</Text></View>
            <View style={estilos.card}><Text>Componentes base</Text></View>
            <View style={estilos.card}><Text>README</Text></View>
          </ScrollView>
        </View>

      </ScrollView>

      <View style={estilos.rodape}>
        <TouchableOpacity style={[estilos.botao, { backgroundColor: "#007bff" }]}>
          <Text style={estilos.textoBotao}>ADICIONAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[estilos.botao, { backgroundColor: "#6c757d" }]}>
          <Text style={estilos.textoBotao}>FILTRAR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
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
  coluna: {
    width: 250,
    marginRight: 12,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 10,
  },
  tituloColuna: {
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  rodape: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15
  },
  botao: {
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
  },
});
