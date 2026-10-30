// const orcamentoService = require('../services/historyDocs/orcamentoHistoryService');
import { orcamentoService } from "../services/historyDocs/orcamentoHistoryService.js";
// const { Mutex } = require('async-mutex');
import { Mutex } from "async-mutex";
const mutex = new Mutex();

export const criarOrcamentoHistory = async (req, res) => {

  await mutex.runExclusive(async () => {
    try {
      const orcamentoData = req.body
  
      const orcamento = await orcamentoService.create(orcamentoData);
      res.status(200).json(orcamento);
  
    } catch (error) {
      console.log(error)
      res.status(500).json({error: "Erro ao salvar Orçamento no histórico"})
    }
  });

}

export const listarOrcamentos = async (req, res) => {
  try {
    const orcamentos = await orcamentoService.findMany();
    res.status(200).json({orcamentos})
  } catch (error) {
    res.status(500).json("Erro ao listar orçamentos")
  }
}

export const removerOrcamentoHistory = async (req, res) => {
  try {
    const { id } = req.params
    await orcamentoService.delete(id);
    res.status(200).json({msg: "Orçamento removido do histórico com sucesso"});
  } catch (error) {
    res.status(500).json({msg: "Erro ao remover orçamento do histórico"})
  }
}

export const orcamentoHistoryController = {
  criarOrcamentoHistory,
  listarOrcamentos,
  removerOrcamentoHistory

}