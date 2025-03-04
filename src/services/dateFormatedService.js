function getDateFormated(){
  const data = new Date();
  const dia = `${data.getDate()}`.padStart(2, "0");
  const mes = data.getMonth()
  const ano = data.getFullYear();
  const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho','agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
  const dataGeracao = `${dia} de ${months[mes]} de ${ano}`
  return dataGeracao
}

module.exports = {
  getDateFormated
}