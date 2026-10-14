// database/db.js
import * as SQLite from "expo-sqlite";

// Inicializa a base de dados
const db = SQLite.openDatabaseSync("financas.db");

export function inicializarBanco() {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS transacoes (
      id TEXT PRIMARY KEY,
      descricao TEXT NOT NULL,
      valor REAL NOT NULL,
      tipo TEXT NOT NULL,
      categoria TEXT NOT NULL,
      data TEXT NOT NULL
    );
  `);
}

export function inserirTransacao(transacao) {
  const result = db.runSync(
    "INSERT INTO transacoes (id, descricao, valor, tipo, categoria, data) VALUES (?, ?, ?, ?, ?, ?)",
    transacao.id,
    transacao.descricao,
    transacao.valor,
    transacao.tipo,
    transacao.categoria,
    transacao.data,
  );
  return result;
}

export function removerTransacaoBD(id) {
  const result = db.runSync("DELETE FROM transacoes WHERE id = ?", id);
  return result;
}

export function buscarTodasTransacoes() {
  const todasRows = db.getAllSync(
    "SELECT * FROM transacoes ORDER BY rowid DESC",
  );
  return todasRows;
}
