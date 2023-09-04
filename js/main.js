/*----------  Capitulo 1  ----------*/

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

/*=============================================
=                Historia Cofla Part 1      =
=============================================*/
// *Ingresar el monto y mostrar el mas caro
// *Si hay 2 o mas, mostrar ambos
// *Indicar el vuelto

// let dineroRobert = prompt("Cuanto dinero tiene Robert?");
// let dineroPedro = prompt("Cuanto dinero tiene Pedro?");
// let dineroCofla = prompt("Cuanto dinero tiene1 Cofla?");

// dineroCofla = parseInt(dineroCofla);

// if (dineroCofla >= 0.6 && dineroCofla < 1) {
//   alert("Cofla; Comprate un helado de agua");
//   alert("y te sobra " + (dineroCofla - 0.6));
// } else if (dineroCofla >= 1 && dineroCofla < 1.6) {
//   alert("Cofla; Comprate un helado de crema");
//   alert("y te sobra" + (dineroCofla - 1));
//   alert(`y te sobran ${dineroCofla - 1}`);
// } else if (dineroCofla == 1.6) {
//   alert("Cofla; Comprate un helado marca Heladix");
//   alert("y te sobra" + (dineroCofla - 1.6));
// } else if (dineroCofla == 1.7) {
//   alert("Cofla; Comprate un helado Heladovich");
//   alert("y te sobra" + (dineroCofla - 1.7));
// } else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
//   alert("Cofla; Comprate un helado Helardo");
//   alert("y te sobra" + (dineroCofla - 1.8));
// } else if (dineroCofla == 2.9) {
//   alert("Cofla; Comprate un Helado con Confites o Pote de 1/4");
//   alert("y te sobra" + (dineroCofla - 2.9));
// } else if (dineroCofla > 2.9) {
//   alert("Te sobra la plata");
// } else {
//   alert("Cofla; Sos pobre.");
// }

// if (dineroRobert >= 0.6 && dineroRobert < 1) {
//   alert("Robert; Comprate un helado de agua");
// } else if (dineroRobert >= 1 && dineroRobert < 1.6) {
//   alert("Robert; Comprate un helado de crema");
// } else if (dineroRobert == 1.6) {
//   alert("Robert; Comprate un helado marca Heladix");
// } else if (dineroRobert == 1.7) {
//   alert("Robert; Comprate un helado Heladovich");
// } else if (dineroRobert >= 1.8 && dineroRobert < 2.9) {
//   alert("Robert; Comprate un helado Helardo");
// } else if (dineroRobert == 2.9) {
//   alert("Robert; Comprate un Helado con Confites o Pote de 1/4");
// } else if (dineroRobert > 2.9) {
//   alert("Robert; Te sobra la plata Robert");
// } else {
//   alert("Robert; Sos pobre.");
// }

// if (dineroPedro >= 0.6 && dineroPedro < 1) {
//   alert("Pedro; Comprate un helado de agua");
// } else if (dineroPedro >= 1 && dineroPedro < 1.6) {
//   alert("Pedro; Comprate un helado de crema");
// } else if (dineroPedro == 1.6) {
//   alert("Pedro; Comprate un helado marca Heladix");
// } else if (dineroPedro == 1.7) {
//   alert("Pedro; Comprate un helado Heladovich");
// } else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
//   alert("Pedro; Comprate un helado Helardo");
// } else if (dineroPedro == 2.9) {
//   alert("Pedro; Comprate un Helado con Confites o Pote de 1/4");
// } else if (dineroPedro > 2.9) {
//   alert("Pedro; Te sobra la plata");
// } else {
//   alert("Pedro; Sos pobre");
// }

// Forma avanzada

// const definirCompra = (n) => {
//   if (din >= 0.6 && din < 1) return `${n}: Helado de Agua`;
//   if (din >= 1 && din < 1.6) return `${n}: Helado de Crema`;
//   if (din >= 1.6 && din < 1.7) return `${n}: Helado de Heladix`;
//   if (din >= 1.7 && din < 1.8) return `${n}: Helado de Heladovich`;
//   if (din >= 1.8 && din < 2.9) return `${n}: Helado de Helardo`;
//   if (din >= 2.9) return `${n}: Helado de confites o pote de 1/4Kg`;
//   else return `${n}: No te alcanza para ningun helado pobre de mierda`;
// };

// console.log(definirCompra("Cofla"));
// console.log(definirCompra("Pedro"));
// console.log(definirCompra("Roberto"));

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

/*----------  Capitulo 2  ----------*/

/*=============================================
=                   Arrays                   =
=============================================*/
// Definicion y usos de un array
// Formas de crear un array
// frutas = ["Banana", "Manzana", "Pera"];
// document.write(frutas);
//Para mostrar cualquier elemento debemos seleccionar el array y recorrerlo con [0] o [n]

/*=============================================
=            Arrays Asociativos              =
=============================================*/
// Definicion
// Sintaxis y usos

// let pc = {
//   nombre: "DaltoPc",
//   procesador: "Intel Core I7",
//   ram: "16GB",
//   espacio: "1TB",
// };

// let frase = `el nombre de mi pc es ${pc.nombre} <br>
// el procesador de mi pc es de ${pc.procesador} <br>
// la memoria de mi pc es de ${pc.ram} <br>
// el espacio en disco es de ${pc.espacio}`;
// document.write(frase);

/*=============================================
=            Bucles e Interaciones            =
=============================================*/

// Definicion y usos

// numeroParaSumar = 0;

// if (numeroParaSumar < 10) {
//   numeroParaSumar++;
//   document.write(numeroParaSumar);
// }

/*=============================================
=             Sentencia While                =
=============================================*/

// numeroParaSumar = 0;

// while (numeroParaSumar < 6) {
//   numeroParaSumar++;
//   document.write(numeroParaSumar);
// }

// let numero = 0;

// while (numero < 1000) {
//   numero++;
//   document.write(numero);

//   if (numero == 10) {
//     break;
//   }
// }

/*=============================================
=             Sentencia Do While                =
=============================================*/

// do {
//   numeroParaSumar++;
//   document.write(`${numeroParaSumar} <br>`);
// } while (numeroParaSumar <= 6);

/*=============================================
=             Sentencia For                   =
=============================================*/

// for (let i = 0; i < 10; i++) {
//   document.write("Todos putos" + "<br>");
// }

// for (let i = 0; i < 10; i++) {
//   if (i == 3) {
//     break;
//   }
//   console.log(i);
// }

/*=============================================
=             Sentencia For Continue          =
=============================================*/

// for (let i = 0; i < 10; i++) {
//   if (i == 6) {
//     continue;
//   }
//   console.log(i);
// }

// let animales = ["Gato", "Perro", "Dinosaurio Rex"];

/*=============================================
=             Sentencia For In          =
=============================================*/
// Devuelve el indice de las variables
// for (animal in animales) {
//   document.write(animal);
// }

/*=============================================
=             Sentencia For Of          =
=============================================*/
// Devuelve el valor de las variables
// for (animal of animales) {
//   document.write(animal);
// }

/*=============================================
=            Exemplo 1                      =
=============================================*/
// array1 = ["Maria", "Josefa", "Roberta"];
// array2 = ["Pedro", "Marcelo", array1];

// for (array in array2) {
//   if (array == 2) {
//     for (let array of array1) {
//       document.write(array);
//     }
//   } else {
//     document.write(array2[array]);
//   }
// }

/*=============================================
=                   Funciones                =
=============================================*/

// Definiciones y usos
// Formas de crear funciones (y llamarlas)

// function saludar() {
//   let respuesta = prompt("Como estuvo tu dia?");
//   if (respuesta == "Bien") {
//     alert("Me alegro.");
//   } else {
//     alert("Que pena.");
//   }
// }

// saludar();

/* Example */

// function suma(num1, num2) {
//   let res = num1 + num2;

//   document.write(res);
// }

// suma(12, 32);
// suma(12, 322);

/* Example 2 */

// function saludar(nombre) {
//   let frase = `Holo ${nombre} como estas?`;
//   document.write(frase);
// }
// saludar("Pedro");

/* Example 3 */

// const saludar = function (nombre) {
//   let frase = `Hola ${nombre} como estas`;
//   document.write(frase);
// };

/*=============================================
=            Funciones  Flecha               =
=============================================*/

// const saludar = (nombre) => document.write(`Hola como estas? ${nombre}`);
// saludar("Pedro");

/*=============================================
=            Historia de Cofla Part 2         =
=============================================*/
// *Dejar pasar solo a los +18
// *El primero que entre despues de las 2 AM no paga

// let free = false;
// const validarCliente = (time) => {
//   let edad = prompt("Cual es tu edad?");

//   if (edad >= 18) {
//     if (time >= 2 && time <= 7 && free == false) {
//       alert("Podes entrar gratis.");
//       free = true;
//     } else {
//       alert(`Podes pasar, pero tenes que pagar la entrada. Son las ${time}`);
//     }
//   } else {
//     alert("No podes pasar");
//   }
// };
// validarCliente(2);
// validarCliente(2);

/* Exercise 2 */
// *Crear Mini-Sistema para registrar presentes (P) y ausentes (A)
// *Pasado 30 dias, mostrar su situacion final del alumno
// *Maximo de 10% de ausencias

// let cantidad = prompt("Cuantos alumnos son?");
// let alumnosTotales = [];
// 1;

// for (i = 0; i < cantidad; i++) {
//   alumnosTotales[i] = [prompt("Nombre del alumno " + (i + 1)), 0];
// }

// const tomarAsistencia = (nombre, p) => {
//   let presencia = prompt(nombre);
//   if (presencia == "p" || presencia == "P") {
//     alumnosTotales[p][1]++;
//   }
// };

// for (i = 0; i < 30; i++) {
//   for (alumno in alumnosTotales) {
//     tomarAsistencia(alumnosTotales[alumno][0], alumno);
//   }
// }

// for (alumno in alumnosTotales) {
//   let resultado = `${alumnosTotales[alumno[0]]}:<br>
//   ________Asitencias: ${alumnosTotales[alumno][1]}<br>
//   ________Ausencias: ${30 - alumnosTotales[alumno][1]}
//   `;

//   if (30 - alumnosTotales[alumno][1] > 18) {
//     resultado += "<b style='color:red'>Reprobado por inasistencias</b><br><br>";
//   } else {
//     resultado += "<br></br>";
//   }
//   document.write(resultado);
// }

/* Exercise 3 */
// *Se debera crear una calculadora que nos simplifique el trabajo
// const sumar = (num1, num2) => {
//   return parseInt(num1) + parseInt(num2);
// };

// const restar = (num1, num2) => {
//   return parseInt(num1) - parseInt(num2);
// };

// const multiplicar = (num1, num2) => {
//   return parseInt(num1) * parseInt(num2);
// };

// const dividir = (num1, num2) => {
//   return parseInt(num1) / parseInt(num2);
// };

// alert("¿Que operacion deseas ejecutar?");
// let operacion = prompt("1:Suma, 2:Resta, 3:Multiplicacion, 4:Division");

// if (operacion == 1) {
//   let numero1 = prompt("Primer numero a sumar");
//   let numero2 = prompt("Segundo numero a sumar");
//   let resultado = sumar(numero1, numero2);
//   alert(`La suma da como resultado: ${resultado}`);
// } else if (operacion == 2) {
//   let numero1 = prompt("Primer numero a sumar");
//   let numero2 = prompt("Segundo numero a sumar");
//   let resultado = restar(numero1, numero2);
//   alert(`La resta da como resultado: ${resultado}`);
// } else if (operacion == 3) {
//   let numero1 = prompt("Primer numero a sumar");
//   let numero2 = prompt("Segundo numero a sumar");
//   let resultado = multiplicar(numero1, numero2);
//   alert(`La multiplicacion da como resultado: ${resultado}`);
// } else if (operacion == 4) {
//   let numero1 = prompt("Primer numero a sumar");
//   let numero2 = prompt("Segundo numero a sumar");
//   let resultado = dividir(numero1, numero2);
//   alert(`La division da como resultado: ${resultado}`);
// } else {
//   ("No hay otra operacion disponible");
// }

/*----------  Capitulo 3  ----------*/

/*=============================================
=                     POO                    =
=============================================*/
// Definicion y usos
//Ejemplos
//Instancias

// class Animal {
//   constructor(especie, edad, color) {
//     this.especie = especie;
//     this.edad = edad;
//     this.color = color;
//     this.informacion = `Soy ${this.especie}, tengo ${this.edad} y soy de color ${this.color}`;
//   }
//   verInformacion() {
//     document.write(this.informacion);
//   }
// }

// let perro = new Animal("Perro", 5, "Rojo");
// let gato = new Animal("Gato", 15, "Negro");
// let leon = new Animal("Leon", 2, "Atigrado");

// perro.verInformacion();
// gato.verInformacion();
// leon.verInformacion();

// Abstraccion
// Modularidad
// Jerarquia

// class Animal {
//   constructor(especie, edad, color) {
//     this.especie = especie;
//     this.edad = edad;
//     this.color = color;
//     this.info = `Soy un ${this.especie} y tengo ${this.edad} años y soy de color ${this.color}`;
//   }
//   verInfo() {
//     document.write(this.info);
//   }
// }

// class Perro extends Animal {
//   constructor(especie, edad, color, raza) {
//     super(especie, edad, color);
//     this.raza = raza;
//   }
//   set setRaza(newName) {
//     this.raza = newName;
//   }

//   get getRaza() {
//     return this.raza;
//   }
// }

// const perro = new Perro("Perro", 5, "Marron", "Doberman");

// perro.setRaza = "Boxer";
// console.log(perro.getRaza);

/*=============================================
=            Historia de Cofla Part 3         =
=============================================*/
/* Exercise 1 */
// *Mostrale las particularidades de los 3 celulares
// *Cada uno debe tener color,peso,resolucion de pantalla,camara y memoria RAM
// *Deben poder prender, reiniciar,tomar fotos y grabar

// class Celular {
//   constructor(color, peso, rdp, rdc, ram) {
//     this.color = color;
//     this.peso = peso;
//     this.rdp = rdp;
//     this.rdc = rdc;
//     this.ram = ram;
//     this.encendido = false;
//   }

//   presionarBotonEncendido() {
//     if (this.encendido == false) {
//       alert("Celular prendido");
//       this.encendido = true;
//     } else {
//       alert("Celular apagado");
//       this.encendido == false;
//     }
//   }

//   reiniciar() {
//     if (this.encendido == true) {
//       alert("Reiniciando celular");
//     } else {
//       alert("El celular esta apagado");
//     }
//   }

//   tomarFotos() {
//     alert(`Foto tomada en una resolucion de: ${this.rdc}`);
//   }

//   grabarVideo() {
//     alert(`grabando video en ${this.rdc}`);
//   }
//   mostrarInformacion() {
//     return `
//     Color: <b>${this.color}</b></br>
//     Peso: <b>${this.peso}</b></br>
//     Tamaño: <b>${this.rdp}</b></br>
//     Resolucion de Video: <b>${this.rdc}</b></br>
//     Memoria Ram: <b>${this.ram}</b></br>
//     `;
//   }
// }

// const celular1 = new Celular("Gris", "150g", "5", "Full hd", "2GB");
// const celular2 = new Celular("Negro", "100g", "6", "Full hd", "2GB");
// const celular3 = new Celular("Azul", "250g", "7", "4K", "8GB");

// document.write(`
// ${celular1.mostrarInformacion()}<br>
// ${celular2.mostrarInformacion()}<br>
// ${celular3.mostrarInformacion()}<br>`);

/* Exercise 2 */
// *Implementar todas estas cualidades pero ahora en los celulares de gama alta

// class CelularesGamaAlta extends Celular {
//   constructor(color, peso, rdp, rdc, ram, rdce) {
//     super(color, peso, rdp, rdc, ram);
//     this.ResolucionDeCamaraExtra = rdce;
//   }
//   grabarVideoLento() {
//     alert("Estas grabando en camara lenta.");
//   }
//   reconomientoFacial() {
//     alert("vamor a iniciar un reconomiento facial.");
//   }

//   infoAltaGama() {
//     return (
//       this.mostrarInformacion() +
//       `Resolucion de Camara Trasera: ${this.ResolucionDeCamaraExtra}`
//     );
//   }
// }

// const celular1 = new CelularesGamaAlta(
//   "Rojo",
//   "130g",
//   "5.2",
//   "4k",
//   "8GB",
//   "Full HD"
// );
// const celular2 = new CelularesGamaAlta(
//   "Blanco",
//   "150g",
//   "6",
//   "8k",
//   "16GB",
//   "Full HD"
// );

// document.write(`
// ${celular1.infoAltaGama()}</br>
// ${celular2.infoAltaGama()}</br>
// `);

/* Exercise 3 */
// *Crear un sistema para decidir que app descargar
// *Debe contener la cantidad de descargas puntuacion y peso
// *Se deben poder instalar,abrir, cerrar y desinstalar

// class App {
//   constructor(descargas, puntuacion, peso) {
//     this.descargas = descargas;
//     this.puntuacion = puntuacion;
//     this.peso = peso;
//     this.iniciada = false;
//     this.instalada = false;
//   }

//   abrir() {
//     if (this.iniciada == false && this.instalada == true) {
//       this.iniciada = true;
//       alert("App encendida");
//     }
//   }
//   cerrar() {
//     if (this.iniciada == true) {
//       this.iniciada = false;
//       alert("App apagada");
//     }
//   }

//   instalar() {
//     if (this.instalada == false) {
//       this.instalada = true;
//       if (this.instalada == true) {
//         alert("App instalada correctamente");
//       } else {
//         alert("Ocurrio un problema con la instalacion");
//       }
//     }
//   }

//   desinstalada() {
//     if (this.instalada == true) {
//       this.instalada = false;
//       if (this.instalada == false) {
//         alert("App desinstalada correctamente");
//       } else {
//         alert("Ocurrio un problema.");
//       }
//     }
//   }

//   appInfo() {
//     return document.write(`
//     Descargas: <b>${this.descargas}</b><br>
//     Puntuacion: <b>${this.puntuacion}</b><br>
//     Peso: <b>${this.peso}</b><br>
//     `);
//   }
// }

// const Application1 = new App("15 Descargas", "5 Estrellas", "230mb");
// const Application2 = new App("46 Descargas", "1 Estrellas", "220mb");
// const Application3 = new App("3 Descargas", "3 Estrellas", "250mb");
// const Application4 = new App("533 Descargas", "2 Estrellas", "210mb");
// const Application5 = new App("23 Descargas", "5 Estrellas", "220mb");
// const Application6 = new App("12 Descargas", "3 Estrellas", "2540mb");
// const Application7 = new App("3131 Descargas", "4 Estrellas", "260mb");

// Application1.instalar();
// Application1.abrir();
// Application1.cerrar();
// Application1.desinstalada();

// Application1.appInfo();
// Application2.appInfo();
// Application3.appInfo();
// Application4.appInfo();
// Application5.appInfo();
// Application6.appInfo();
// Application7.appInfo();

/*----------  Capitulo 4  ----------*/

/*=============================================
=              Metodos de Cadenas          =
=============================================*/
// * concat() - junta dos o mas cadenas y retorna una nueva
// let cadena = "Cadena de prueba";
// let cadena2 = "Cadena 2";
// let resultado = cadena.concat(cadena2);
// console.log(resultado);

// * startsWith() - Si una cadena comienza con los caracteres de otra cadena, devuelve true, sino devuelve false.
// let cadena = "Prueba 1";
// let cadena2 = " Prueba 2";
// let resultado = cadena.startsWith(cadena2);
// console.log(resultado);

// * endsWith() - Si una cadena termina con los caracteres de otra cadena, devuelve true, sino devuelve false
// let cadena = "Prueba Junior";
// let cadena2 = "Junior";
// let resultado = cadena.endsWith(cadena2);
// console.log(resultado);

// * includes() - Si una cadena puede encontrarse dentro de otra cadena, devuelve true, sino devuelve false
// let cadena = "Detectar palabras ns";
// let cadena2 = "ns Buscar palabras";
// resultado = cadena.includes("ns");
// document.write(resultado);

// * indexOf() - devuelve el indice del primer caracter de la cadena, si no existe, devuelve -1
// let cadena = "Pedro es un tarado inmaduro";
// resultado = cadena.indexOf("inmaduro");
// document.write(resultado);

// * lastIndexOf() - devuelve el ultimo indice del primer caracter de la cadena, si no existe, devuelve -1
// let cadena = "Pedro es un inmaduro inmaduro";
// resultado = cadena.lastIndexOf("inmaduro");
// document.write(resultado);

// * padStart() [Propuesta de Estandar] - Rellenar cadena al principio con los caracteres deseados.
// let cadena = "ABC";
// let resultado = cadena.padStart(12, "Lola");
// console.log(resultado);

// * padEnd() [propuesta de ECMA] - Rellenar cadena al final con los caracteres deseados.
// let cadena = "ABC";
// let resultado = cadena.padEnd(6, "DEF");
// console.log(resultado);

// * repeat() - Devuelve la misma cadena pero repetida la cantidad que le indiquemos
// let cadena = " Cadena Repetir ";
// let resultado = cadena.repeat(2);
// console.log(resultado);

// * split() - Divide la cadena como lo pedimos
// let cadena = "Hola como estas?";
// let resultado = cadena.split("como");
// console.log(resultado[1]);

// * substring() - Nos retorna un pedazo de la cena que seleccionamos
// let cadena = "ABCDEFGH";
// let resultado = cadena.substring(0, 8);
// document.write(resultado);

// * toLowerCase() - Convierte una cadena a minuscula
// let cadena = "ABCDFGH";
// let resultado = cadena.toLowerCase();
// console.log(resultado);

// * toUpperCase() - Convierte una cadena a mayuscula
// let cadena = "abcdfgh";
// let resultado = cadena.toUpperCase();
// console.log(resultado);

// * toString() - metodo que devuelve una cadena que representa al objeto especificado
// let cadena = 2;
// let resultado = cadena.toString();
// console.log(2 + resultado);

// * trim() - elimina los espacios en blanco al principio y al final de una cadena

// let cadena = "Esta es una prueba de Trim    ";
// let resultado = cadena.trim();
// console.log(resultado);

/*=============================================
=              Metodos de Arrays              =
=============================================*/

/*=====  Transformadores  ======*/

// * pop() - Elimina el ultimo elemento de un array y lo devuelve
// let nombres = ["Nicolas", "Franco", "Mario"];
// let resultado = nombres.pop();
// console.log(resultado);

// * shift() - elimina el primer elemento de un array y lo devuelve
// let nombres = ["Nicolas", "Franco", "Mario"];
// let resultado = nombres.shift();
// console.log(resultado);

// * push() - agrega un elemento al array al final de la lista
// let nombres = ["Nicolas", "Mario"];
// let resultado = nombres.push("Franco","Robert");
// console.log(resultado);
// console.log(nombres);

// * reverse() - invierte el orden de los elementos en un array
// let nombres = ["Tomas", "Joel"];
// let resultado = nombres.reverse();
// console.log(resultado);

// * unshift() - agrega uno o mas elementos al inicio del array, y luego devuelve la nueva longitud del array
// let nombres = ["Nico", "Tomas"];
// nombres.unshift("Agrega al principio");
// console.log(nombres);

// * sort() - ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado
// let nombres = ["Facundo", "Fabricio", "Axel", "Lucas", "Nico"];
// let resultado = nombres.sort();
// console.log(resultado);

// * splice() - cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
// let nombres = ["Nicolas", "Facundo", "Fabricio"];
// nombres.splice(1, 2, "Matias", "Lautaro");
// console.log(nombres);
// * el primero indica la posicion en la que arrranca el segundo la cantidad que se desea eliminar y el tercero los que se quiere agregar

/*=====  Accesores  ======*/

// * join() - une todos los elementos de una matriz (u objeto similar) en una cadena y la devuelve
// let objetos = ["Abecedario", "Manzana", "Pedro", "Dedo", "Bobo"];
// document.write(`${objetos} <br>`);
// let resultado = objetos.join("<br>Elementos:");
// document.write(resultado);
// * join es lo mismo que ToString() nada mas que al join le podes asignar caracteres

// * slice() - devuelve una parte del array dentro de un nuevo array empezando
// let objetos = ["Abecedario", "Manzana", "Pedro", "Dedo", "Bobo"];
// let resultado = objetos.slice(0, 1);
// console.log(resultado);
// * Si quieres sacar los del final se utiliza el -1

/*=====  De Repeticion  ======*/

// * filter() - crea un nuevo array con todos los elementos que cumplan la condicion
// let objetos = ["Abecedario", "Manzana", "Pedro", "Dedo", "Bobo"];
// objetos.filter((objeto) => document.write(objeto + "<br>"));

// * forEach() - ejecuta la funcion indicada una vez por cada elemento del array
// let objetos = ["Auto", "Manzana", "Pedro", "Dedo", "Bobo"];
// objetos.forEach((objeto) => document.write(objeto + "<br>"));

// * Diferencias entre filter y foreach
// let numeros = ["Abecedario", "Manzana", "Pedro", "Dedo"];
// const resultado = numeros.filter((numero) => numero.length > 4);
// document.write(resultado);

/*=============================================
=            Objeto Math - Basico            =
=============================================*/

/*=====  Metodos  ======*/

// * sqrt() - Devuelve la raiz cuadrada positiva de un numero
// let numero = Math.sqrt(25);
// console.log(numero);

// * cbrt() - Devuelve la raiz cubica de un numero
// let numero = Math.cbrt(27)
// console.log(numero);

// * max() - Devuelve el mayor de cero o mas numeros
// let numero = Math.max(1, 2, 3, 4, 5, 6, 7, 8);
// console.log(numero);

// * min() - devuelve el mas pequeño de cero o mas numeros
// let numero = Math.min(1, 2, 3, 4, 5, 6, 7, 8);
// console.log(numero);

// * random() - devuelve un numero pseudo-aleatorio entre 0 y 1
// for (var i = 0; i < 100; i++) {
//   let numero = Math.random() * 99;
//   numero = Math.floor(numero + 1);
//   console.log(numero + "<br>");
// }

// * round() - devuelve el valor de un numero redondeado al numero entero mas cercano
// let numero = Math.round(9.9);
// console.log(numero);

// * fround() - devuelve la representacion flotante de precision simple mas cercana de un numero
// let numero = Math.fround(9.9);
// console.log(numero);

// * floor() - devuelve el mayor entero menor que o igual a un numero
// let numero = Math.floor(1, 4, 301, 211, 1);
// console.log(numero);

// * trunc() - devuelve la parte entera del numero x, la eliminacion de los digitos fraccionarios
// let numero = Math.trunc(11.210021);
// console.log(numero);

/*=====  Propiedades  ======*/
// * PI - Ratio de la circunferencia de un circulo respecto a su diametro, aproximadamente 3.14159
// let numeroPI = Math.PI();
// console.log(numeroPI);

// * SQRT1_2  - Raiz cuadrada de 1/2; Equivalente, 1 sobre la raiz cuadrada de 2, aproximadamente 0.707
// let SQRT1 = Math.SQRT1_2(25);
// console.log(SQRT1);

// * SQRT2 - Raiz cuadrada de 2, aproximadamente 1.414
// let SQRT2 = Math.SQRT2();
// console.log(SQRT2);

// *E - Constante de Euler, la base de los logaritmos naturales, aproximada
// let numero = Math.E;
// console.log(numero);

// *LN2 - Logaritmo natural de 2, Aproximadamente 0.693
// let ln2 = Math.LN2;
// console.log(ln2);

// *LN10 - Logaritmo natural de 10, aproximadamente 2.303
// let ln10 = Math.ln10;
// console.log(ln10);

// *LOG2E - Logaritmo de E con base 2, aproximadamente 1.443
// let log2e = Math.LOG2E;
// console.log(log2e);

// *LOG10E - Logaritmo de E con base 10, aproximadamente
// let log10e = Math.LOG10E;
// console.log(log10e);

/*=============================================
=            Historia de Cofla Part 4         =
=============================================*/

/* Exercise 1 */
// *Implementar nuevas funciones
// class Calculadora {
//   constructor() {}

//   sumar(num1, num2) {
//     return parseInt(num1) + parseInt(num2);
//   }

//   restar(num1, num2) {
//     return parseInt(num1) - parseInt(num2);
//   }

//   multiplicar(num1, num2) {
//     return parseInt(num1) * parseInt(num2);
//   }

//   dividir(num1, num2) {
//     return parseInt(num1) / parseInt(num2);
//   }

//   potenciar(num1, exp) {
//     return num1 ** exp;
//   }

//   raizCuadrada(num) {
//     return Math.sqrt(num);
//   }

//   raizCubica(num) {
//     return Math.cbrt(num);
//   }
// }

// const CALCULADORA = new Calculadora();

// alert("¿Que operacion deseas ejecutar?");
// let operacion = prompt(
//   "1:Suma, 2:Resta, 3:Multiplicacion, 4:Division, 5:Potenciacion, 6:Raiz Cuadrada, 7:Raiz Cubica"
// );

// if (operacion == 1) {
//   let num1 = prompt("Primer numero a sumar");
//   let num2 = prompt("Segundo numero a sumar");
//   let resultado = CALCULADORA.sumar(num1, num2);
//   alert(`La suma da como resultado: ${resultado}`);
// } else if (operacion == 2) {
//   let num1 = prompt("Primer numero a sumar");
//   let num2 = prompt("Segundo numero a sumar");
//   let resultado = CALCULADORA.restar(num1, num2);
//   alert(`La resta da como resultado: ${resultado}`);
// } else if (operacion == 3) {
//   let num1 = prompt("Primer numero a sumar");
//   let num2 = prompt("Segundo numero a sumar");
//   let resultado = CALCULADORA.multiplicar(num1, num2);
//   alert(`La multiplicacion da como resultado: ${resultado}`);
// } else if (operacion == 4) {
//   let num1 = prompt("Primer numero a sumar");
//   let num2 = prompt("Segundo numero a sumar");
//   let resultado = CALCULADORAdividir(num1, num2);
//   alert(`La division da como resultado: ${resultado}`);
// } else if (operacion == 5) {
//   let num1 = prompt("Numero a potenciar");
//   let exp = prompt("Exponente");
//   let resultado = CALCULADORA.potenciar(num1, exp);
//   alert(`La potenciacion da como resultado: ${resultado}`);
// } else if (operacion == 6) {
//   alert(`La raiz cuadrada da como resultado: ${resultado}`);
// } else if (operacion == 7) {
//   let num = prompt("Ingrese numero");
//   let resultado = Math.cbrt(num);
//   alert(`La raiz cubica da como resultado: ${resultado}`);
// } else {
//   ("No hay otra operacion disponible");
// }

/* Exercise 2 */
// *Crear la funcion nos devuelva: Profesor asignado, Nombre de los alumnos
// const obtenerInformacion = (materia) => {
//   materias = {
//     fisica: ["Perez", "pedro", "pepito", "cofla", "maria"],
//     programacion: ["Rodriguez", "pedro", "pepito", "cofla"],
//     logica: ["Hernandez", "pedro", "pepito", "cofla", "maria"],
//     quimica: ["Rodriguez", "pedro", "pepito", "cofla", "maria"],
//   };
//   if (materias[materia] !== "undefined") {
//     return materias[materia], materias;
//   } else {
//     return false;
//   }
// };

// const mostrarInformacion = (materia) => {
//   let informacion = obtenerInformacion(materia);

//   if (informacion !== false) {
//     let profesor = obtenerInformacion("fisica")[0][0];
//     let alumnos = obtenerInformacion("fisica")[0];
//     alumnos.shift();
//     console.log(
//       `El profesor de <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b><br>
//       Los alumnos son: <b style="color:blue">${alumnos}</b><br>
//       `
//     );
//   }
// };

// const cantidadDeClases = (alumno) => {
//   let cantidadTotal = 0;
//   for (info in informacion[2]) {
//     if (informacion[2][info].includes(alumno)) {
//       cantidadTotal++;
//     }
//   }
//   return cantidadTotal;
// };
// mostrarInformacion("fisica");
// mostrarInformacion("programacion");
// mostrarInformacion("logica");
// mostrarInformacion("quimica");

// *Funcion que nos indique en cuantas clases esta Cofla
// *Nombre de esas clases y sus profesores

/* Exercise 3 */
// *Preguntarle en que materia se quiere inscribir
// *Si ya hay 20 inscriptos, negarle la inscripcion
// *Si hay menos de 20, Inscribirlo y añadirlo a la lista de alumnos

/*----------  Capitulo 5  ----------*/

/*=============================================
=                 Console                    =
=============================================*/

/* Funciones de registro*/

// !No se recomienda utilizar assert
// *assert() - Aparece un mensaje de error en la consola si la afirmacion es falsa. Si la afirmacion es verdadera, no aparecera nada. (NO ESTANDAR)
console.assert(5 < 3);
// *clear() - Limpia la consola
// console.clear();

// *error() - Muestra un mensaje de error en la consola Web
// console.error("Cuidado");

// *info() - Emite un mensaje informativo a la Consola Web. En Firefox y Chrome, se muestra un pequeño icono "i" junto a estos elementos en el registro de la Consola Web
// console.info("Guarda");

// *log() - Muestra un mensaje en la consola Web (o del interprete JS)
// console.log("Muestra un mensaje por consola");

// *table() - Esta funcion toma un argumento obligatorio: data, que debe ser un array o un objeto, y un parametro adicional: columns y nos muestra una tabla en consola
// console.table([5, 2, 4, , 6, 6, 3]);

// *warn() - Imprime un mensaje de advertencia en la Consola Web
// console.warn("Che capo venis bien, pero cuidado por que..");

// *dir() - Despliega una lista interactiva de las propiedades del objeto JavaScript especificado. [NO ESTANDAR]
// console.dir([5, 2, 4, , 5, 6]);

/* Funciones de conteo*/
// *count() - Registra el numero de veces que se llama a count(). Esta funcion toma como argumento opcional una etiqueta
// function sumar(num1, num2) {
//   document.write(num1, num2);
//   console.count();
// }

// sumar(2, 4);
// sumar(2, 4);
// sumar(2, 4);
// sumar(2, 4);
// sumar(2, 4);
// sumar(2, 4);
// sumar(2, 4);
// sumar(2, 4);
// sumar(2, 4);

// *countReset() - Resetea el contador console.count()
// console.countReset();

/* Funciones de agrupacion*/
// *group() - Crea un nuevo grupo en linea en el registro de la consola web
console.log("pedro");

// *groupEnd() - Remueve un grupo en linea en el registro de la consola web

// *groupCollapsed() - Crea un grupo en linea pero contraido, el usuario debe expandirlo para verlo

/* Funciones de temporizacion */
// *time() - Inicia un temporizador

// *timeEnd() - Registra el valor actual de un temporizado

// *timeLog() - Detiene un temporizador
