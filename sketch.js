let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("black");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(790, 52, 25));
  textAlign(CENTER, CENTER);
  textSize(50);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 10) {
      return "star wars";
    } else {
      if (idade >= 15) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "jurassic park";          
        } else{
         return "uma aventura lego";
        }
      } else {
        if (gostaDeFantasia) {
          return "capitao america";
        } else {
          return "homem de ferro 3";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "thor";
    } else {
      return "Pele";
    }
  }
}
