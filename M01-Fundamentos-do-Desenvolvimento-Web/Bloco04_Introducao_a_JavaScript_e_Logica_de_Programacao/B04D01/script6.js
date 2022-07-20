let peca = "REI";
let result = peca.toLowerCase();
switch (result) {
  case 'peão': console.log("Mova-se para a frente");
    break;
  case 'bispo': console.log("Mova-se na diagonal");
    break;
  case 'torre': console.log("Mova-se em linha reta na vertical ou na horizontal");
    break;
  case 'cavalo': console.log("Mova-se em L");
    break;
  case 'rainha': console.log("Mova-se vertical, diagonal ou horizontalmente em lina reta");
    break;
  case 'rei': console.log("Mova-se para a casa adjacente");
    break;
  default: console.log("Erro! Peça invalida");
}