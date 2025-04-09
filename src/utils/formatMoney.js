function formatServices(itens){
  if (itens.length === 1) return (itens[0] + ".").toUpperCase();
  const ultimaPalavra = itens.pop();  
    return (itens.join(", ") + " e " + ultimaPalavra + ".").toUpperCase();
}

function upperCase(string){
  return string.toUpperCase();
}

module.exports = {
  formatServices,
  upperCase
}