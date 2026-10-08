// context/TransacoesContext.js
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

const CHAVE_STORAGE = "@minhasfinancas:transacoes";

const TransacoesContext = createContext(null);

export function TransacoesProvider({ children }) {
  const [transacoes, setTransacoes] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    carregarTransacoes();
  }, []);

  async function carregarTransacoes() {
    try {
      setCarregando(true);
      const json = await AsyncStorage.getItem(CHAVE_STORAGE);
      if (json !== null) {
        setTransacoes(JSON.parse(json));
      }
    } catch (erro) {
      console.error("Erro ao carregar transações:", erro);
    } finally {
      setCarregando(false);
    }
  }

  async function adicionarTransacao(novaTransacao) {
    const atualizadas = [novaTransacao, ...transacoes];
    setTransacoes(atualizadas);
    await AsyncStorage.setItem(CHAVE_STORAGE, JSON.stringify(atualizadas));
  }

  async function removerTransacao(id) {
    const atualizadas = transacoes.filter((t) => t.id !== id);
    setTransacoes(atualizadas);
    await AsyncStorage.setItem(CHAVE_STORAGE, JSON.stringify(atualizadas));
  }

  const receitas = transacoes
    .filter((t) => t.tipo === "receita")
    .reduce((soma, t) => soma + t.valor, 0);

  const despesas = transacoes
    .filter((t) => t.tipo === "despesa")
    .reduce((soma, t) => soma + t.valor, 0);

  const valor = {
    transacoes,
    carregando,
    receitas,
    despesas,
    saldo: receitas - despesas,
    adicionarTransacao,
    removerTransacao,
  };

  return (
    <TransacoesContext.Provider value={valor}>
      {children}
    </TransacoesContext.Provider>
  );
}

export function useTransacoes() {
  const contexto = useContext(TransacoesContext);
  if (!contexto) {
    throw new Error(
      "useTransacoes precisa estar dentro de <TransacoesProvider>",
    );
  }
  return contexto;
}
