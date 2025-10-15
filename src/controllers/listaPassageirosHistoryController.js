const listaPassageirosService = require('../services/historyDocs/listaPassageirosHistoryService');
const { Mutex } = require('async-mutex');
const mutex = new Mutex();

exports.criarListaPassageirosHistory = async (req, res) => {

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

exports.listarListaPassageiros = async (req, res) => {
  try {
    const listasPassageiros = await listaPassageirosService.findMany();
    res.status(200).json({listasPassageiros})
  } catch (error) {
    res.status(500).json("Erro ao listar passageiros")
  }
}

exports.removerListaPassageirosHistory = async (req, res) => {
  try {
    const { id } = req.params
    await listaPassageirosService.delete(id);
    res.status(200).json({msg: "Lista de passageiros removida do histórico com sucesso"});
  } catch (error) {
    res.status(500).json({msg: "Erro ao remover Lista de passageiros do histórico"})
  }
}