import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TabRoutes from "./routes/TabRoutes";

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <TabRoutes />
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
