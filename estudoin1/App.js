import { View, Text, ImageBackground, Button, ScrollView } from "react-native";


export default function App() {
  return (
    <ImageBackground
      source={require('./vaca-saturno-saturnita.jpeg')}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View>
        <ScrollView>
          <Text style={{
    fontSize: 42,
    padding: 12,
    color:"yellow"
  }}>
    Vaca Saturno Saturnita, Vaca Saturnina, Vaca Planetária, Vaca Espacial, Vaca Cósmica, Vaca Galáctica, Vaca Estelar, Vaca Interplanetária, Vaca Astronômica, 
    Vaca Universal, Vaca Nebulosa, Vaca Quântica, Vaca Multidimensional, Vaca Transcendental, Vaca Metafísica, Vaca Dimensional, Vaca Temporal, Vaca Interdimensional
          </Text>
        </ScrollView>
        <Button
          title="Clique para virar uma vaca Planetária"
        />
        <Text
          style={{ color: "white", textAlign: "center" }}
        >Vaca Cósmica</Text>
      </View>
    </ImageBackground>
  );
}