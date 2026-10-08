// routes/TabRoutes.js
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NovaTransacaoScreen } from "../screens/NovaTransacaoScreen";
import { RelatorioScreen } from "../screens/RelatorioScreen";
import { SobreScreen } from "../screens/SobreScreen";
import { DashboardStack } from "./DashboardStack";

const Tab = createBottomTabNavigator();

const ICONES_TAB = {
  Dashboard: { ativa: "home", inativa: "home-outline" },
  "Nova Transação": { ativa: "add-circle", inativa: "add-circle-outline" },
  Relatório: { ativa: "bar-chart", inativa: "bar-chart-outline" },
  Sobre: { ativa: "information-circle", inativa: "information-circle-outline" },
};

export function TabRoutes() {
  const insets = useSafeAreaInsets(); // ← Obtém as margens de segurança do sistema

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#2c3e50",
        tabBarInactiveTintColor: "#95a5a6",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopColor: "#eee",
          // O paddingBottom agora soma o valor da barra do Android + 8 de margem
          paddingBottom: insets.bottom + 8,
          paddingTop: 8,
          // A altura acompanha o padding inferior dinâmico
          height: 60 + insets.bottom,
        },
        tabBarIcon: ({ focused, color, size }) => {
          const { ativa, inativa } = ICONES_TAB[route.name];
          return (
            <Ionicons
              name={focused ? ativa : inativa}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardStack} />
      <Tab.Screen name="Nova Transação" component={NovaTransacaoScreen} />
      <Tab.Screen name="Relatório" component={RelatorioScreen} />
      <Tab.Screen name="Sobre" component={SobreScreen} />
    </Tab.Navigator>
  );
}
