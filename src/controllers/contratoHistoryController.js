const contratoService = require('../services/historyDocs/contratoHistoryService')
const { Mutex } = require('async-mutex');
const mutex = new Mutex();

exports.criarContratoHistory = async (req, res) => {
  await mutex.runExclusive(async () => {
    try {
      const contratoData = req.body
  
      const contrato = await contratoService.create(contratoData);
      res.status(200).json(contrato);
  
    } catch (error) {
      console.log(error)
      res.status(500).json({error: "Erro ao salvar Contrato no histórico"})
    }
  });
}

exports.listarContratos = async (req, res) => {
  try {
    const contratos = await contratoService.findMany();
    res.status(200).json({contratos})
  } catch (error) {
    res.status(500).json("Erro ao listar contratos")
  }
}

exports.removerContratoHistory = async (req, res) => {
  try {
    const { id } = req.params
    await contratoService.delete(id);
    res.status(200).json({msg: "Contrato removido do histórico com sucesso"});
  } catch (error) {
    res.status(500).json({msg: "Erro ao remover contrato do histórico"})
  }
}