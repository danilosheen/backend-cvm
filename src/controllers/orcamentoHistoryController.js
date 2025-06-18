const orcamentoService = require('../services/historyDocs/orcamentoHistoryService')

exports.criarOrcamentoHistory = async (req, res) => {
  try {
    const orcamentoData = req.body

    const orcamento = await orcamentoService.create(orcamentoData);
    res.status(200).json(orcamento);

  } catch (error) {
    console.log(error)
    res.status(500).json({error: "Erro ao salvar Orçamento no histórico"})
  }
}

exports.listarOrcamentos = async (req, res) => {
  try {
    const orcamentos = await orcamentoService.findMany();
    res.status(200).json({orcamentos})
  } catch (error) {
    res.status(500).json("Erro ao listar orçamentos")
  }
}

exports.removerOrcamentoHistory = async (req, res) => {
  try {
    const { id } = req.params
    await orcamentoService.delete(id);
    res.status(200).json({msg: "Orçamento removido do histórico com sucesso"});
  } catch (error) {
    res.status(500).json({msg: "Erro ao remover orçamento do histórico"})
  }
}