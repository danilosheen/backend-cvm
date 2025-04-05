function converteStringToFloat(string){
  const stringLimpa = string.replace(/\./g, '');
  const number = parseFloat(stringLimpa.replace(",", "."));
  return number;
}

function converteFloatToString(number){
  return number.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

module.exports = {
  converteFloatToString,
  converteStringToFloat
}