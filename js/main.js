/*=============================================
=           Tipos de variables                =
=============================================*/

// string = "Cadena de texto";
// number = 19;
// boolean = false;

// let nombre = prompt("Ingrese su nombre");
// alert(`Hola ${nombre}`);

// let numero = 10;
// numero += 5;
// document.write(numero);

// let saludo = "Hola Pedro";
// let pregunta = "¿Como estas?";

// let frase = saludo + pregunta;
// document.write(frase);

// numero1 = 5;
// numero2 = 8;

// frase = "" + numero1 + numero2;
// document.write(frase);

// const SALUDO = "Bienvenido";
// let name = prompt("Ingrese su nombre");

// alert(`${SALUDO} ${name}`);

/*=============================================
=            Operadores Logicos            =
=============================================*/
// let numero = 13;
// let numero2 = 13;

// let resultado = numero < numero2;
// console.log(resultado);

// document.write(numero == numero2);
// document.write(numero === numero2);
// document.write(numero != numero2);

// Los operadores logicos nos devuelven un resultado a partir de que se cumpla o no una condicion, su resultado es booleano, y sus operandos son valores logicos o asmiliables a ellos

// example 2
// let num1 = 12;
// let num2 = 24;

// let afirmacion1 = num1 < num2;
// let afirmacion2 = num1 != num2;

// document.write(afirmacion1 && afirmacion2)

// example 3

// let num1 = 12;
// let num2 = 24;
// let num3 = 25;
// let num4 = 92;
// let num5 = 91;

// let op = (num1 < num2 || num2 < num3) && !num1 && num5 != num3;
// op = (num5 > num2 && num4 < num3) || !(num1 === num2) || num3 != num3;
// op = true || true || false;
// op = true;
// document.write(op);

/*=============================================
=                  camelCase                  =
=============================================*/
// Todo se escribe con la segunda palabra en mayuscula;

/*=============================================
=            Condicionales                   =
=============================================*/

// nombre = "Lucas";

// if (nombre == "Lucas") {
//   alert("Tu nombre es malardo");
// } else if (nombre == "Dalto") {
//   alert("Tu nombre es buenardo");
// } else {
//   ("Tu nombre es otro");
// }

/*----------  Capitulo 1  ----------*/

/*=============================================
=                Exercise 1                   =
=============================================*/
// *Ingresar el monto y mostrar el mas caro
// *Si hay 2 o mas, mostrar ambos
// *Indicar el vuelto

dineroRobert = prompt("Cuanto dinero tiene Robert?");
dineroPedro = prompt("Cuanto dinero tiene Pedro?");
dineroCofla = prompt("Cuanto dinero tiene Cofla?");

if (dineroCofla >= 0.6 && dineroCofla < 1) {
  alert("Cofla; Comprate un helado de agua");
} else if (dineroCofla >= 1 && dineroCofla < 1.6) {
  alert("Cofla; Comprate un helado de crema");
} else if (dineroCofla == 1.6) {
  alert("Cofla; Comprate un helado marca Heladix");
} else if (dineroCofla == 1.7) {
  alert("Cofla; Comprate un helado Heladovich");
} else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
  alert("Cofla; Comprate un helado Helardo");
} else if (dineroCofla == 2.9) {
  alert("Cofla; Comprate un Helado con Confites o Pote de 1/4");
} else if (dineroCofla > 2.9) {
  alert("Te sobra la plata");
} else {
  alert("Cofla; Sos pobre.");
}

if (dineroRobert >= 0.6 && dineroRobert < 1) {
  alert("Robert; Comprate un helado de agua");
} else if (dineroRobert >= 1 && dineroRobert < 1.6) {
  alert("Robert; Comprate un helado de crema");
} else if (dineroRobert == 1.6) {
  alert("Robert; Comprate un helado marca Heladix");
} else if (dineroRobert == 1.7) {
  alert("Robert; Comprate un helado Heladovich");
} else if (dineroRobert >= 1.8 && dineroRobert < 2.9) {
  alert("Robert; Comprate un helado Helardo");
} else if (dineroRobert == 2.9) {
  alert("Robert; Comprate un Helado con Confites o Pote de 1/4");
} else if (dineroRobert > 2.9) {
  alert("Robert; Te sobra la plata Robert");
} else {
  alert("Robert; Sos pobre.");
}

if (dineroPedro >= 0.6 && dineroPedro < 1) {
  alert("Pedro; Comprate un helado de agua");
} else if (dineroPedro >= 1 && dineroPedro < 1.6) {
  alert("Pedro; Comprate un helado de crema");
} else if (dineroPedro == 1.6) {
  alert("Pedro; Comprate un helado marca Heladix");
} else if (dineroPedro == 1.7) {
  alert("Pedro; Comprate un helado Heladovich");
} else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
  alert("Pedro; Comprate un helado Helardo");
} else if (dineroPedro == 2.9) {
  alert("Pedro; Comprate un Helado con Confites o Pote de 1/4");
} else if (dineroPedro > 2.9) {
  alert("Pedro; Te sobra la plata");
} else {
  alert("Pedro; Sos pobre");
}

// Forma avanzada

const definirCompra = (n) => {
  if (din >= 0.6 && din < 1) return `${n}: Helado de Agua`;
  if (din >= 1 && din < 1.6) return `${n}: Helado de Crema`;
  if (din >= 1.6 && din < 1.7) return `${n}: Helado de Heladix`;
  if (din >= 1.7 && din < 1.8) return `${n}: Helado de Heladovich`;
  if (din >= 1.8 && din < 2.9) return `${n}: Helado de Helardo`;
  if (din >= 2.9) return `${n}: Helado de confites o pote de 1/4Kg`;
  else return `${n}: No te alcanza para ningun helado pobre de mierda`;
};

console.log(definirCompra("Cofla"));
console.log(definirCompra("Pedro"));
console.log(definirCompra("Roberto"));

/*=============================================
=               Exercise 2                    =
=============================================*/
// *Si le alcanza uno, lo compra
// *Si le alcanza dos, compra dos
// *Si le alcanza tres y sobra regala el vuelto
// *Debe mostrar que compro y el vuelto

/*=============================================
=                  Exercise 3                =
=============================================*/
// *Si miente, le da una descarga
// *Si no miente, no hacer nada
// *Si el aparato no se decide, aclarar que la pregunta debe ser mas clara
