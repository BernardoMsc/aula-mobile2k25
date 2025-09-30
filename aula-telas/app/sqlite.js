import { View, Text, Button, StyleSheet, FlatList, TextInput } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("despesass.db");


db.execSync(`
  PRAGMA journal_mode = WAL;
  DROP TABLE IF EXISTS despesas;
  CREATE TABLE IF NOT EXISTS despesas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    descricao TEXT NOT NULL,
    valor REAL NOT NULL,
    categoria TEXT 
  );
`);

function getDespesas() {
  return db.getAllSync("SELECT * FROM despesas ORDER BY id DESC");
}

function insertDespesa(descricao, valor, categoria) {
  db.runSync(
    "INSERT INTO despesas (descricao, valor, categoria) VALUES (?, ?, ?)",
    [descricao, valor, categoria]
  );
}

function deleteDespesa(id) {
  db.runSync("DELETE FROM despesas WHERE id = ?", [id]);
}

function deleteAll() {
  db.runSync("DELETE FROM despesas");
}

export default function SqliteDespesas() {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [categoria, setCategoria] = useState("");
  const [despesas, setDespesas] = useState(getDespesas());

  function salvarDespesa() {
    const desc = descricao.trim();
    const val = parseFloat(valor);
    const cat = categoria.trim() || "Outros";


    insertDespesa(desc, val, cat);
    setDescricao("");
    setValor("");
    setCategoria("");
    carregarDespesas();
  }

  function carregarDespesas() {
    setDespesas(getDespesas());
  }

  function removerDespesa(id) {
    deleteDespesa(id);
    carregarDespesas();
  }

  function limparTudo() {
    deleteAll();
    carregarDespesas();
  }

  const total = despesas.reduce((soma, d) => soma + d.valor, 0);

  return (
    <SafeAreaView style={estilos.container}>
      <Text style={estilos.titulo}>Despesas</Text>

      <View style={estilos.linhaEntrada}>
        <TextInput
          value={descricao}
          onChangeText={setDescricao}
          placeholder="Descrição..."
          style={estilos.campoTexto}
        />
      </View>

      <View style={estilos.linhaEntrada}>
        <TextInput
          value={valor}
          onChangeText={setValor}
          placeholder="Valor"
          keyboardType="numeric"
          style={estilos.campoTexto}
        />
      </View>

      <View style={estilos.linhaEntrada}>
        <TextInput
          value={categoria}
          onChangeText={setCategoria}
          placeholder="Categoria"
          style={estilos.campoTexto}
        />
      </View>

      <View style={estilos.linhaEntrada}>
        <Button title="Salvar" onPress={salvarDespesa} />
        <Button title="Carregar" onPress={carregarDespesas} />
        <Button title="Apagar todas" onPress={limparTudo} />
      </View>

      <FlatList
        data={despesas}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={estilos.item}>
            <Text style={estilos.textoItem}>
              {item.descricao} - R$ {item.valor.toFixed(2)} [{item.categoria}]
            </Text>
            <Button title="X" onPress={() => removerDespesa(item.id)} />
          </View>
        )}
      />

      <Text style={estilos.total}>Total: R$ {total.toFixed(2)}</Text>

      <View style={estilos.rodape}>
        <Button title="Voltar" onPress={() => router.back()} />
        <Button title="Início" onPress={() => router.replace("/")} />
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  titulo: { fontSize: 18, fontWeight: "600", marginBottom: 8 },
  linhaEntrada: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    gap: 8,
  },
  campoTexto: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 6,
  },
  textoItem: {
    fontSize: 16
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 12
  },
  rodape: {
    flexDirection: "row",
    gap: 8,
    marginTop: 12
  }
})
