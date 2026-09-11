exports.buscarSaldoRestante = async (req, res) => {
  try {
    const mesAno = req.body

    const saldoResante = await saldoRestanteService.create(mesAno);
    res.status(200).json(saldoResante);

  } catch (error) {
    console.log(error)
    res.status(500).json({error: "Erro ao salvar Contrato no histórico"})
  }
  
}