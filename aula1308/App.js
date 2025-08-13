import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={{height: 500}}>
      <View style={estilos.centralizar}>
        <Text style = {estilos.textoRoxo}>Universal React with Expo</Text>
        <Text style = {estilos.textoRoxo}>Universal React with Expo</Text>
        <Text style = {estilos.textoRoxo}>aooo</Text>
    </View>

    <View style={estilos.centralizar}>
    <View style={estilos.caixaret}></View>
    <View style={estilos.bola}></View>
    </View>
    
    </View>
  );
}


const estilos = StyleSheet.create({
  textoRoxo:{
    color: "purple"
  },

  tela:{
    marginTop: 80,
    marginLeft: 120,

  },
  
  textoVerm:{
    color: "red"
  },

  caixaret:{
    width: 100,
    height: 100,
    backgroundColor: "green"
  },

  bola:{
    width: 100,
    height: 100,
    backgroundColor: "green",
    borderRadius: 50
  },

  centralizar:{
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between"
  },
})