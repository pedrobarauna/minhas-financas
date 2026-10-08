import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { cores, espacamento } from "../theme";

export default function RelatorioScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Relatórios</Text>
        <Text style={styles.subtitulo}>Desempenho Financeiro</Text>
      </View>

      <View style={styles.centro}>
        <Ionicons name="pie-chart" size={80} color={cores.subtexto} />
        <Text style={styles.textoBreve}>Gráficos em breve!</Text>
        <Text style={styles.subtextoBreve}>
          A análise visual interativa das suas contas será ativada na próxima
          fase do projeto.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: cores.fundo },
  cabecalho: {
    backgroundColor: cores.primaria,
    paddingHorizontal: espacamento.md,
    paddingVertical: espacamento.lg,
  },
  titulo: { color: "#fff", fontSize: 22, fontWeight: "bold" },
  subtitulo: { color: "#bdc3c7", fontSize: 14, marginTop: 2 },
  centro: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: espacamento.lg,
  },
  textoBreve: {
    fontSize: 20,
    fontWeight: "bold",
    color: cores.texto,
    marginTop: espacamento.md,
  },
  subtextoBreve: {
    fontSize: 14,
    color: cores.subtexto,
    textAlign: "center",
    marginTop: 8,
  },
});
