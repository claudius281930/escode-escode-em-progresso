//apontando para o quadrado no centro da tela.
let mudando = document.getElementById("mudar");
//Codigo Fonte para mudar a cor do BG da DIV
function mudarCor() {
  if (!mudando.style.background) {
    mudando.style.background = "#ff0770";
  } else {
    mudando.style.background = "";
  }
}
//apontando para o botão.
let btn = document.getElementById("btn");
function corDoBotao() {
  if (!btn.style.background) {
    btn.style.background = "#002554";
  } else {
    btn.style.background = "";
  }
}
//apontando para o conteúdo do botão "Mudar".
let frase = document.getElementById("frase");
//Codigo Fonte para mudar a cor da Font do button
function corFrase() {
  if (!frase.style.color) {
    frase.style.color = "#ff0770";
    frase.style.fontSize = "3em";
  } else {
    frase.style.color = "";
    frase.style.fontSize = "";
  }
}
//apontando para o "clique aqui".
let descricao = document.getElementById("descricao");
function exibirDescricao() {
  if (!descricao.style.color) {
    descricao.style.color = "#002554";
  } else {
    descricao.style.color = "";
  }
}
//apontando para paragrafo dentro do "clique aqui".
let informacao = document.getElementById("informacao");
function paragrafo() {
  if (!informacao.style.color) {
    informacao.style.color = "#fff";
  } else {
    informacao.style.color = "";
  }
}
//apontando para o retangulo da esquerda dentro do botão
let efeito = document.getElementById("efeito");
function mudarEfeito() {
  if (!efeito.style.background) {
    efeito.style.background = "#7dc623";
    efeito.style.marginTop = "2em";
  } else {
    efeito.style.background = "";
    efeito.style.marginTop = "";
  }
}
//apontando para retangulo da direita dentro do botão
let effect = document.getElementById("effect");
function mudarEffect() {
  if (!effect.style.background) {
    effect.style.background = "#00aaee";
    effect.style.marginBottom = "";
  } else {
    effect.style.background = "";
    effect.style.marginBottom = "-2em";
  }
}
// Boneco -> Movimento
let corpoDoBoneco = document.getElementById("main_container_boneco");

function moverBoneco() {
  const rect = corpoDoBoneco.getBoundingClientRect();
  const currentPosition = parseInt(
    window.getComputedStyle(corpoDoBoneco).getPropertyValue("left")
  );
    //posição-0
  if (currentPosition === rect.y) {
    corpoDoBoneco.style.left = 25 + "%";
    corpoDoBoneco.style.top = 80 + "%";
  }
  //posição-1
  else if (currentPosition > 0
     && rect.y === 775.1875) {
    corpoDoBoneco.style.left = -25 + "%";
  }
  //posição-2
  else if (currentPosition < 0
     && rect.y === 775.1875) {
    corpoDoBoneco.style.top = 0 + "%";
    corpoDoBoneco.style.left = -1.5 + "%";
  }
  //posição-3
  else if (currentPosition < 0 &&
     rect.y === 0) {
    corpoDoBoneco.style.left = 0 + "%";
    corpoDoBoneco.style.top = 80 + "%";
  }
  //posição-4
  else if (currentPosition === 0 &&
     rect.y === 775.1875) {
    corpoDoBoneco.style.top = 0 + "%";
    corpoDoBoneco.style.left = 25 + "%";
  }
  //posição-5
  else if (currentPosition > -255 &&
    rect.y === 0) {
    corpoDoBoneco.style.left = -25 + "%";
  }
  //posição-6 ainda sem funcionar
  /*else if (currentPosition > -255 &&
    rect.x > 150) {
      corpoDoBoneco.style.left = 25 + "%";
      corpoDoBoneco.style.top = 40 + "%";
  }*/
 }
//registrando o evento atrelado ao btn
btn.addEventListener("click", mudarCor);
btn.addEventListener("click", corDoBotao);
btn.addEventListener("click", corFrase);
btn.addEventListener("click", exibirDescricao);
btn.addEventListener("click", paragrafo);
btn.addEventListener("click", mudarEfeito);
btn.addEventListener("click", mudarEffect);
btn.addEventListener("click", moverBoneco);
