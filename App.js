// App.js
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  PrimeiroAcessoProvider,
  usePrimeiroAcesso,
} from "./context/PrimeiroAcessoContext";
import { TransacoesProvider } from "./context/TransacoesContext";
import { TabRoutes } from "./routes/TabRoutes";
import { BoasVindasScreen } from "./screens/BoasVindasScreen";

function ConteudoApp() {
  const { primeiroAcesso, carregando, concluir } = usePrimeiroAcesso();

  // Enquanto lê o AsyncStorage, evita o flash da tela de boas-vindas
  if (carregando) return null;

  if (primeiroAcesso) {
    return <BoasVindasScreen onConcluir={concluir} />;
  }

  return (
    <TransacoesProvider>
      <NavigationContainer>
        <TabRoutes />
      </NavigationContainer>
    </TransacoesProvider>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <PrimeiroAcessoProvider>
        <ConteudoApp />
      </PrimeiroAcessoProvider>
    </SafeAreaProvider>
  );
}
