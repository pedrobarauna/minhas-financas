import { StyleSheet, Text, View } from "react-native";
import { cores, espacamento, raio } from "../theme";

export function CartaoSaldo({ saldo, mes }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textoMes}>Saldo de {mes}</Text>
      <Text style={styles.textoSaldo}>R$ {saldo.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: cores.cartao,
    padding: espacamento.lg,
    borderRadius: raio.lg,
    alignItems: "center",
    margin: espacamento.md,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  textoMes: { fontSize: 16, color: cores.subtexto, marginBottom: 8 },
  textoSaldo: { fontSize: 32, fontWeight: "bold", color: cores.texto },
});
