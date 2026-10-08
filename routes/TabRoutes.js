import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import DashboardScreen from "../screens/DashboardScreen";
import NovaTransacaoScreen from "../screens/NovaTransacaoScreen";
import RelatorioScreen from "../screens/RelatorioScreen";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#2ecc71",
        tabBarInactiveTintColor: "#95a5a6",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopColor: "#eee",
          paddingBottom: insets.bottom > 0 ? insets.bottom : 10,
          height: insets.bottom > 0 ? 60 + insets.bottom : 70,
          paddingTop: 8,
        },
        tabBarIcon: ({ color, size }) => {
          const icones = {
            Dashboard: "home",
            "Nova Transação": "add-circle",
            Relatório: "bar-chart",
          };
          return (
            <Ionicons name={icones[route.name]} size={size} color={color} />
          );
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Nova Transação" component={NovaTransacaoScreen} />
      <Tab.Screen name="Relatório" component={RelatorioScreen} />
    </Tab.Navigator>
  );
}
