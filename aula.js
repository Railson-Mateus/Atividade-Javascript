/* Faça uma função script que leia a temperatura em graus centígrados e converta em graus
Farenheit. Continuando, imprima na tela as seguintes mensagens de acordo com a
temperatura: “muito frio” (<10); “frio” (10 até 15); “normal” (16 até 22); “quente” (23 até
30)
*/
document.getElementById("choose1").onclick = function check() {
    click();
    e.preventDefault();
}

function check() {
    document.getElementById("choose1").checked = true;
}

document.getElementById("choose2").onclick = function check1() {
    click1();
    e.preventDefault();
}

function check1() {
    document.getElementById("choose2").checked = true;
}

function conversão() {
	let num = document.getElementById("meu-input").value;
	let valor = num;
	valor = valor*1.8+32;
	document.getElementById("conv").innerHTML = ("resultado da conversão em farenheit é "+valor);
	if(num <= 10){
		document.getElementById("result").innerHTML = "O clima está muito frio";
	}
	else if(num > 10 && num <= 15){
		document.getElementById("result").innerHTML = "O clima está frio";
	}
	else if(num>=16 && num<=22){
		document.getElementById("result").innerHTML = "O clima está normal";
	}
	else if(num >= 23 && num <=30){
		document.getElementById("result").innerHTML = "O clima está quente";
	}
	else if(num > 30){
		document.getElementById("result").innerHTML = "O clima está muito quente";
	}
}

function conversãoC() {
	let valor = document.getElementById("meu-input").value;
	valor = (valor-32)/1.8;
	document.getElementById("conv").innerHTML = ("resultado da conversão em Celsios é "+valor);
	if(valor <= 10){
		document.getElementById("result").innerHTML = "O clima está muito frio";
	}
	else if(valor > 10 && valor <= 15){
		document.getElementById("result").innerHTML = "O clima está frio";
	}
	else if(valor>=16 && valor<=22){
		document.getElementById("result").innerHTML = "O clima está normal";
	}
	else if(valor >= 23 && valor <=30){
		document.getElementById("result").innerHTML = "O clima está quente";
	}
	else if(valor > 30){
		document.getElementById("result").innerHTML = "O clima está muito quente";
	}
}

function click(){
	document.getElementById("meu-submit").onclick = function(e) {
    	conversão();
    	e.preventDefault();
	}
}

function click1(){
	document.getElementById("meu-submit").onclick = function(e) {
    	conversãoC();
    	e.preventDefault();
	}
}

/*Calcule o valor da série harmônica h por meio do valor de n usando a seguinte
expressão h = 1/1 + 1/2 + ... + 1/n. */

document.getElementById("meu-submit2").onclick = function(e) {
	harmonica(document.getElementById("meu-input2").value);
	e.preventDefault();
}

function harmonica(n){
	let valor = 0
	for(let i = 1;i<=n;i++){
		valor = 1 / i + valor;

	}
	document.getElementById("result2").innerHTML = "O valor da serie harmônica é "+valor;
}

/*Construa um programa em Javascript que, tendo como dados de entrada dois pontos
quaisquer no plano, P(x1,y1) e P(x2,y2), escreva a distância entre eles. A fórmula que efetua
tal cálculo é: d= sqrt(x2-x1)^2+(y2-y1)^2 */

document.getElementById("meu-submit3").onclick = function(e) {
	let x1 = document.getElementById("x1").value;
	let x2 = document.getElementById("x2").value;
	let y1 = document.getElementById("y1").value;
	let y2 = document.getElementById("y2").value;
	distancia(x1,x2,y1,y2);
	e.preventDefault();
}

function distancia(x1,x2,y1,y2){
	let x = Math.pow((x2-x1),2);
	let y = Math.pow((y2-y1),2);
	let d = Math.sqrt(x+y);
	document.getElementById("result3").innerHTML = "A distancia entre os pontos A e B é "+d;
}