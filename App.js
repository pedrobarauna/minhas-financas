// App.js
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TransacoesProvider } from "./context/TransacoesContext";
import { TabRoutes } from "./routes/TabRoutes";
import { BoasVindasScreen } from "./screens/BoasVindasScreen";

export default function App() {
  const [primeiroAcesso, setPrimeiroAcesso] = useState(true);

  if (primeiroAcesso) {
    return (
      <SafeAreaProvider>
        <BoasVindasScreen onConcluir={() => setPrimeiroAcesso(false)} />
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <TransacoesProvider>
        <NavigationContainer>
          <TabRoutes />
        </NavigationContainer>
      </TransacoesProvider>
    </SafeAreaProvider>
  );
}
