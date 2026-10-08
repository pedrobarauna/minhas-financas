import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppRoutes from "./routes/AppRoutes"; // <-- Mudança aqui

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <AppRoutes /> {/* <-- Mudança aqui */}
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
