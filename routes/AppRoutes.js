import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetalheTransacaoScreen from "../screens/DetalheTransacaoScreen";
import TabRoutes from "./TabRoutes";

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* O menu inferior principal */}
      <Stack.Screen name="MainTabs" component={TabRoutes} />
      {/* A tela que se sobrepõe ao clicar num item */}
      <Stack.Screen
        name="DetalheTransacao"
        component={DetalheTransacaoScreen}
      />
    </Stack.Navigator>
  );
}
