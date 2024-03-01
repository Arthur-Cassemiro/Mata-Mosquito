
var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 10;
function ajustaTamanhoPalcoJogo(){
	altura = window.innerHeight
	largura = window.innerWidth
	console.log(altura, largura)

}

var cronometro = setInterval(function(){
	tempo-=1
	if (tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		alert("Vitória")
	}
	else{
		document.getElementById('cronometro').innerHTML = tempo
	}
	},1000)

ajustaTamanhoPalcoJogo()

function posicaoRandomica(){

	if (document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()
		if (vidas>3) {
			window.location.href = 'fim_de_jogo.html'
		}
		else{
			document.getElementById('v'+vidas).src = "imagens/coracao_vazio.png"
			vidas++
		}

	}

	var posicao_x = Math.floor(Math.random()*largura) - 90
	var posicao_y = Math.floor(Math.random()*altura) - 90

	posicao_x = posicao_x < 0 ? 0 :posicao_x


	posicao_y = posicao_y < 0 ? 0 :posicao_y


	console.log(posicao_x, posicao_y)

	//criar html

	var mosquito = document.createElement('img')
	mosquito.src = "imagens/mosquito.png"
	mosquito.className = tamanhoAleatorio() +' '+ ladoAleatorio()
	mosquito.style.left = posicao_x + 'px'
	mosquito.style.top = posicao_y + 'px'
	mosquito.style.position = "absolute"
	mosquito.id = 'mosquito'
	mosquito.onclick = function(){
		this.remove()
	}

	document.body.appendChild(mosquito)

}
function tamanhoAleatorio(){

	var classe = Math.floor(Math.random()*3)
	console.log(classe)

	switch(classe){
		case 0:
			return 'mosquito1'
	
		case 1:
			return 'mosquito2'

		case 2:
		return 'mosquito3'
	}
}

function ladoAleatorio(){
	var lado = Math.floor(Math.random()*2)


	switch(lado){
		case 0:
			return 'ladoA'
	
		case 1:
			return 'ladoB'

	}
}

var criaMosquito=setInterval(function(){posicaoRandomica()},2000)