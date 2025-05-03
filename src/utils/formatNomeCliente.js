exports.formatarNome = (nome) =>{
  const primeiroNome = `${nome.split(" ")[0]}`;
  const index = nome.split(" ")[1].toLowerCase() == 'da' || nome.split(" ")[1].toLowerCase() == 'de' ? 2 : 1;
  const segundoNome = `${nome.split(" ")[index]}`
  const nomeFormatado = `${primeiroNome} ${segundoNome}`
  return nomeFormatado;
}