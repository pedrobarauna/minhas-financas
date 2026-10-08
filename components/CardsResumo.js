import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { cores, espacamento, raio } from "../theme";

export function CardsResumo({ receitas, despesas }) {
  return (
    <View style={styles.container}>
      <View style={[styles.card, { backgroundColor: cores.receitaFundo }]}>
        <Ionicons name="arrow-up-circle" size={24} color={cores.receita} />
        <Text style={styles.titulo}>Receitas</Text>
        <Text style={[styles.valor, { color: cores.receita }]}>
          R$ {receitas.toFixed(2)}
        </Text>
      </View>
      <View style={[styles.card, { backgroundColor: cores.despesaFundo }]}>
        <Ionicons name="arrow-down-circle" size={24} color={cores.despesa} />
        <Text style={styles.titulo}>Despesas</Text>
        <Text style={[styles.valor, { color: cores.despesa }]}>
          R$ {despesas.toFixed(2)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: espacamento.md,
    paddingHorizontal: espacamento.md,
  },
  card: {
    flex: 1,
    padding: espacamento.md,
    borderRadius: raio.md,
    alignItems: "center",
  },
  titulo: { fontSize: 14, color: cores.subtexto, marginVertical: 4 },
  valor: { fontSize: 18, fontWeight: "bold" },
});
