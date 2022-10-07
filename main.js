//Declaracion de variables.
let operatorA;
let operatorB;
let operationProgress;
let resultScreen = document.getElementById("result-screen");
let history = document.getElementById('history');
let existResult = false; 

//Funcion numero, encargada de recibir los numeros a los que el usuario les de click / adicionalmente los muestra en la pantalla de la calculadora.
function numero(num) {
	if (num == '.' && resultScreen.textContent.includes(".")) {
		alert('No se puede ingresar mas de un .');
	}else{
		if (existResult) {
			
			resultScreen.textContent += num;
		}else{
			resultScreen.textContent += num;
		}
	}
}

//Funcion operacion, recopila la operacion que selecione el usuario
function operacion(op) {
	operatorA = resultScreen.textContent;
	operationProgress = op;
	borrarResultado();
}

//Funcion igual, dentro de esta funcion se encuentra el desarrollo de las operaciones, dadas para cada caso(operacion) elegida ppor el usuario.
function igual() {
	let result = 0;
	operatorB = resultScreen.textContent;
	if (operatorA == 0) {
		alert('Ingrese la operacion completa');
		cleanAllOp();
	}else{
		switch(operationProgress){
    case "+":
      result = parseFloat(operatorA) + parseFloat(operatorB);
      break;

    case "-":
        result = parseFloat(operatorA) - parseFloat(operatorB);
        break;

    case "*":
      result = parseFloat(operatorA) * parseFloat(operatorB);
      break;

    case "/":
      result = parseFloat(operatorA) / parseFloat(operatorB);
      break;
  }
  
  existResult = true;
  //Captura la operacion, ingresada para mostrarla en el historial
  aggOperacion(operatorA, operationProgress, operatorB, result);
  cleanAllOp();
  //Envia el resultado a la pantalla
  resultScreen.textContent = result;
	}
}
 //Captura la operacion, ingresada para mostrarla en el historial
function aggOperacion(opA, opProgress, opB, res) {
	let stringOperation =  `<li>${opA} ${opProgress} ${opB} = ${res} </li>`

//Envia la operacion capturada a la lista identificada con el id=history	
  history.innerHTML += stringOperation; 
}

//Funcion de eliminar el resultado de la calculadora
function borrarResultado() {
	resultScreen.textContent = '';
}

//Funcion que devuelve las variables con valores en cero
function cleanAllOp() {
	resultScreen.textContent = '';
	operatorA = 0;
	operatorB = 0;
	operationProgress = '';
}

//Funcion de eliminar el historial de la calculadora
function borrarHistorial() {
  history.innerHTML = ""; 
}

//Funcion de eliminar el resultado de la calculadora/ invoca a la funcion cleanAllop
function eliminar() {
	cleanAllOp();
	
}