import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import { cores, espacamento, raio } from "../theme";

export default function NovaTransacaoScreen({ navigation }) {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("despesa"); // O padrão será despesa

  const handleSalvar = () => {
    // 1. Validação simples
    if (!descricao || !valor) {
      Alert.alert("Atenção", "Por favor, preencha todos os campos.");
      return;
    }

    // 2. Criação do objeto da nova transação
    const novaTransacao = {
      id: Math.random().toString(), // Gera um ID único provisório
      descricao: descricao,
      valor: parseFloat(valor.replace(",", ".")), // Garante que o valor é lido como número
      tipo: tipo,
      data: new Date().toLocaleDateString("pt-BR"), // Pega a data de hoje
    };

    // 3. Navegação de volta enviando o objeto para o Dashboard
    navigation.navigate("Dashboard", { novaTransacao: novaTransacao });

    // 4. Limpeza do formulário para o próximo uso
    setDescricao("");
    setValor("");
    setTipo("despesa");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Nova Transação</Text>
      </View>

      <View style={styles.formulario}>
        <TextInput
          label="Descrição (ex: Supermercado)"
          value={descricao}
          onChangeText={setDescricao}
          mode="outlined"
          outlineColor={cores.subtexto}
          activeOutlineColor={cores.primaria}
          style={styles.input}
        />

        <TextInput
          label="Valor (R$)"
          value={valor}
          onChangeText={setValor}
          keyboardType="decimal-pad"
          mode="outlined"
          outlineColor={cores.subtexto}
          activeOutlineColor={cores.primaria}
          style={styles.input}
        />

        <Text style={styles.labelTipo}>Tipo de Transação</Text>
        <View style={styles.seletorTipo}>
          <TouchableOpacity
            style={[
              styles.botaoTipo,
              tipo === "receita" && styles.botaoReceitaAtivo,
            ]}
            onPress={() => setTipo("receita")}
          >
            <Text
              style={[
                styles.textoTipo,
                tipo === "receita" && styles.textoTipoAtivo,
              ]}
            >
              Receita
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.botaoTipo,
              tipo === "despesa" && styles.botaoDespesaAtivo,
            ]}
            onPress={() => setTipo("despesa")}
          >
            <Text
              style={[
                styles.textoTipo,
                tipo === "despesa" && styles.textoTipoAtivo,
              ]}
            >
              Despesa
            </Text>
          </TouchableOpacity>
        </View>

        <Button
          mode="contained"
          onPress={handleSalvar}
          style={styles.botaoSalvar}
          buttonColor={cores.primaria}
        >
          Guardar Transação
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: cores.fundo },
  cabecalho: {
    backgroundColor: cores.primaria,
    paddingHorizontal: espacamento.md,
    paddingTop: espacamento.xl,
    paddingBottom: espacamento.lg,
  },
  titulo: { color: "#fff", fontSize: 22, fontWeight: "bold" },
  formulario: { padding: espacamento.md },
  input: { backgroundColor: "#fff", marginBottom: espacamento.md },
  labelTipo: {
    fontSize: 16,
    fontWeight: "600",
    color: cores.texto,
    marginBottom: espacamento.sm,
    marginTop: espacamento.sm,
  },
  seletorTipo: {
    flexDirection: "row",
    gap: espacamento.md,
    marginBottom: espacamento.xl,
  },
  botaoTipo: {
    flex: 1,
    paddingVertical: espacamento.md,
    borderRadius: raio.md,
    borderWidth: 1,
    borderColor: cores.subtexto,
    alignItems: "center",
  },
  botaoReceitaAtivo: {
    backgroundColor: cores.receita,
    borderColor: cores.receita,
  },
  botaoDespesaAtivo: {
    backgroundColor: cores.despesa,
    borderColor: cores.despesa,
  },
  textoTipo: { fontSize: 16, fontWeight: "bold", color: cores.subtexto },
  textoTipoAtivo: { color: "#fff" },
  botaoSalvar: { paddingVertical: 6, borderRadius: raio.md },
});
