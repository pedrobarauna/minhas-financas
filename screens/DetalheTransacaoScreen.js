import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { cores, espacamento, raio } from "../theme";

export default function DetalheTransacaoScreen({ route, navigation }) {
  // Extrai a transação que foi passada pelo clique no Dashboard
  const { transacao } = route.params;
  const isReceita = transacao.tipo === "receita";

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.cabecalho}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.botaoVoltar}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.titulo}>Detalhe da Transação</Text>
      </View>

      <View style={styles.card}>
        <View
          style={[
            styles.iconeBg,
            {
              backgroundColor: isReceita
                ? cores.receitaFundo
                : cores.despesaFundo,
            },
          ]}
        >
          <Ionicons
            name={isReceita ? "trending-up" : "trending-down"}
            size={40}
            color={isReceita ? cores.receita : cores.despesa}
          />
        </View>
        <Text style={styles.descricao}>{transacao.descricao}</Text>
        <Text
          style={[
            styles.valor,
            { color: isReceita ? cores.receita : cores.texto },
          ]}
        >
          {isReceita ? "+" : "-"} R$ {transacao.valor.toFixed(2)}
        </Text>

        <View style={styles.linhaInfo}>
          <Text style={styles.label}>Data do Registo:</Text>
          <Text style={styles.info}>{transacao.data}</Text>
        </View>
        <View style={styles.linhaInfo}>
          <Text style={styles.label}>Categoria:</Text>
          <Text style={styles.info}>{transacao.tipo.toUpperCase()}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: cores.fundo },
  cabecalho: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: cores.primaria,
    paddingHorizontal: espacamento.md,
    paddingVertical: espacamento.lg,
  },
  botaoVoltar: { marginRight: espacamento.md },
  titulo: { color: "#fff", fontSize: 20, fontWeight: "bold" },
  card: {
    backgroundColor: cores.cartao,
    margin: espacamento.md,
    padding: espacamento.lg,
    borderRadius: raio.lg,
    alignItems: "center",
    elevation: 3,
  },
  iconeBg: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: espacamento.md,
  },
  descricao: {
    fontSize: 24,
    fontWeight: "bold",
    color: cores.texto,
    marginBottom: 8,
  },
  valor: { fontSize: 32, fontWeight: "bold", marginBottom: espacamento.lg },
  linhaInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  label: { fontSize: 16, color: cores.subtexto },
  info: { fontSize: 16, fontWeight: "600", color: cores.texto },
});
