import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { cores, espacamento, raio } from "../theme";

export function ItemTransacao({
  descricao,
  valor,
  tipo,
  data,
  onPress,
  index = 0,
}) {
  const isReceita = tipo === "receita";

  // Valores iniciais da animação: opacidade 0 e 20px abaixo da posição final
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        delay: index * 100, // Multiplicador para o efeito cascata
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 400,
        delay: index * 100,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}
    >
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        activeOpacity={0.7}
      >
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
    </Animated.View>
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
