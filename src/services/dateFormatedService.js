function getDateFormated() {
  const dataStr = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  const [dia, mes, ano] = dataStr.split(' ')[0].split('/'); // Obtém data formatada
  const months = [
    'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 
    'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
  ];
  
  return (`${dia} de ${months[parseInt(mes) - 1]} de ${ano}`).replace(",", "");
}

console.log(getDateFormated())

module.exports = {
  getDateFormated
}