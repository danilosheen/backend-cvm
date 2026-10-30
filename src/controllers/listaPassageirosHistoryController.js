// const listaPassageirosService = require('../services/historyDocs/listaPassageirosHistoryService');
import { listaPassageirosService } from "../services/historyDocs/listaPassageirosHistoryService.js";
// const { Mutex } = require('async-mutex');
import { Mutex } from "async-mutex";
const mutex = new Mutex();

export const criarListaPassageirosHistory = async (req, res) => {

  await mutex.runExclusive(async () => {
    try {
      const orcamentoData = req.body
  
      const orcamento = await listaPassageirosService.create(orcamentoData);
      res.status(200).json(orcamento);
  
    } catch (error) {
      console.log(error)
      res.status(500).json({error: "Erro ao salvar Lista de passageiros no histórico"});
    }
  });

}

export const listarListaPassageiros = async (req, res) => {
  try {
    const listasPassageiros = await listaPassageirosService.findMany();
    res.status(200).json({listasPassageiros})
  } catch (error) {
    res.status(500).json("Erro ao listar passageiros")
  }
}

export const removerListaPassageirosHistory = async (req, res) => {
  try {
    const { id } = req.params
    await listaPassageirosService.delete(id);
    res.status(200).json({msg: "Lista de passageiros removida do histórico com sucesso"});
  } catch (error) {
    res.status(500).json({msg: "Erro ao remover Lista de passageiros do histórico"})
  }
}

export const listaPassageirosHistoryController = {
  criarListaPassageirosHistory,
  listarListaPassageiros,
  removerListaPassageirosHistory
}