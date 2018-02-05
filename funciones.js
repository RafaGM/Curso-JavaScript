/*****
Crea una función para resolver cada uno de los problemas que se muestran a continuación:
-- Crear una función que calcule el cuadrado de un número dado.
-- Verificar si un número es para o impar.
-- Calcular si los lados dados pertenecen a un rectángulo o a un cuadrado.
-- Calcular el factorial de un número dado.
-- Crear una función que calcule la velocidad de una bala (en metros).
-- Crear una función que evalúe cuál de 4 números es el mayor.
-- Calcular el MCM y MCD de un número.
-- Crear una función que ejecute otra función.

**/

function cuadrado(x) {
	return x*x;
}


function esPar(x) {
	if(x%2 == 0) return true ;
	else return false;
}

function lados(x, y) {
	if(x == y)return "cuadrado";
	else return "rectángulo";
}

function factorial(x) {
	var result = 1;
	for(var i = x; i > 1; i--) {
		result *= i; 
	}
	return result; 
}

function velocidad(e, t){
	return e/t; 
}

function max2(x, y){
	if(x > y) return x;
	else return y;
}

function max(x, y, z, t){
	var a = max2(x, y);
	var b = max2(z, t);
	return max2(a, b); 
}



function mcd(a, b) {
    if (a == 0)
        return b;

    while (b != 0) {
        if (a > b)
            a = a - b;
        else
            b = b - a;
    }

    return a;
}

function mcm(a, b) {
        return (a * b) / mcd(a, b);   
   }


