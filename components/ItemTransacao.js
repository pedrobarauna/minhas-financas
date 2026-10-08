import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { cores, espacamento, raio } from "../theme";

export function ItemTransacao({ descricao, valor, tipo, data, onPress }) {
  const isReceita = tipo === "receita";
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconeBg}>
        <Ionicons
          name={isReceita ? "trending-up" : "trending-down"}
          size={20}
          color={isReceita ? cores.receita : cores.despesa}
        />
      </View>
      <View style={styles.detalhes}>
        <Text style={styles.descricao}>{descricao}</Text>
        <Text style={styles.data}>{data}</Text>
      </View>
      <Text
        style={[
          styles.valor,
          { color: isReceita ? cores.receita : cores.texto },
        ]}
      >
        {isReceita ? "+" : "-"} R$ {valor.toFixed(2)}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: cores.cartao,
    padding: espacamento.md,
    borderRadius: raio.md,
    marginBottom: espacamento.sm,
  },
  iconeBg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: cores.fundo,
    justifyContent: "center",
    alignItems: "center",
    marginRight: espacamento.md,
  },
  detalhes: { flex: 1 },
  descricao: { fontSize: 16, fontWeight: "600", color: cores.texto },
  data: { fontSize: 12, color: cores.subtexto, marginTop: 2 },
  valor: { fontSize: 16, fontWeight: "bold" },
});
