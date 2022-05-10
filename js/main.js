const valorA = document.querySelector("#valueA");
const valorB = document.querySelector("#valueB");
const button = document.querySelector("#button");
const ponto1 = document.querySelector("#ponto1");
const ponto2 = document.querySelector("#ponto2");

const pontos = [
  {
    valorX: 0,
    valorY: 0,
  },
  {
    valorX: 0,
    valorY: 0,
  },];

const GerarGrafico = () => {


  pontos[1].valorY = valorB.value
  pontos[0].valorX = CalcularX()


  let numeroMaior = Math.abs(pontos[1].valorY) > Math.abs(pontos[0].valorX) ? Math.abs(pontos[1].valorY) : Math.abs(pontos[0].valorX)

  let distanciaPonto = numeroMaior / 5

  if (pontos[1].valorY % 1 == 0 && pontos[0].valorX % 1 == 0 && pontos[1].valorY > 1 && pontos[0].valorX > 1) {

    distanciaPonto = CalcularDistanciaDosPontos(pontos[0].valorX, pontos[1].valorY)

  }

  console.log((distanciaPonto * 5) > pontos[1].valorY)
  console.log( 25 > pontos[1].valorY)
  
  if ( (distanciaPonto * 5) < pontos[1].valorY ) {
    distanciaPonto = numeroMaior / 5
  }



  console.log(`Ponto 1 : (${pontos[0].valorX}, ${pontos[0].valorY}) `)
  console.log(`Ponto 2 : (${pontos[1].valorX}, ${pontos[1].valorY}) `)

  console.log("escala: " + distanciaPonto)


  xa = pontos[0].valorX
  ya = pontos[0].valorY
  xb = pontos[1].valorX
  yb = pontos[1].valorY
  escala = distanciaPonto

  ponto1.innerText = `Ponto 1 : (${pontos[0].valorX}, ${pontos[0].valorY}) `
  ponto2.innerText = `Ponto 2 : (${pontos[1].valorX}, ${pontos[1].valorY}) `

  ponto1.removeAttribute("hidden")
  ponto2.removeAttribute("hidden")

  

  desenhar()


};

const CalcularX = () => {
  let valorA_Invertido = -valorA.value;
  let valorFuncaoB = valorB.value;

  if (valorA_Invertido < 0) {
    valorA_Invertido = -valorA_Invertido;
    valorFuncaoB = -valorB.value;
  }

  const valorX = valorFuncaoB / valorA_Invertido;

  return valorX;
};

const CalcularDistanciaDosPontos = (valorX, valorY) => {

  let d = CalcularMDC(valorX, valorY)

  return d
}

const CalcularMDC = (num1, num2) => {

  num1 = Math.abs(num1)
  num2 = Math.abs(num2)

  do {
    resto = num1 % num2;

    num1 = num2;
    num2 = resto;

  } while (resto != 0);

  return num1

}


console.log(cor)





button.addEventListener("click", GerarGrafico);

