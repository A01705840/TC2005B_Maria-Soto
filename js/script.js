alert('hola mundo');
// console.info('Clahs of Clans');
// console.error('Error');
// console.warn('Advertencia');
// console.assert(1 === 2, 'No son iguales');

var precio = 100;
console.log(precio);

let nombre = prompt('Cual es tu nombre?');
console.log("Hola "+ nombre);

if(confirm('Deseas continuar?')){
    console.log('Continuamos')
    }else{
        console.log('Cancelamos')
    }

function atacar(){
    console.log('Atacar a los goblins');
}

atacar();

//funciones modernas
let accion = () => {
    console.log('Construir');
}

console.log(accion);
accion();

// arreglos
const arreglo = ['Elemento'];
const arreglo2 = new Array('Elemento');

arreglo.push("Otro elemento");
arreglo[10] = 'uno mas';

arreglo['dos'] = 2;
console.log(arreglo);

// recorrer el arreglo de valores
for (let posicion of arreglo){
    console.log(posicion);
}

// recorrer el arreglo de indices
for (let posicion in arreglo){
    console.log(posicion);
}

// objetos
const objeto = {
    nombre: 'Goblin',
    vida: 100,
    atacar: function(){
        console.log('Atacar');
    }
};

console.log(objeto);

// modificar html
//document.write('Hola mundo');


// 1:
//Ingresar numero de filas y columnas
let fila  = prompt('Ingrese un número');
let columna = prompt('Ingrese un número');
//Hacer multiplicació de flas y columnas
let mult= fila * columna;
//Imprimir tabla
document.write("<table border>");
//Imprimir las filas de la tabla
for (let i = 0; i < fila; i++){
    //Se imprime con <tr> para que se vea como una tabla
    document.write("<tr>");
    //Imprimir las columnas de la tabla
    for(let j = 0; j < columna; j++){
        //Se imprime con <td> para que se vea como una tabla
        document.write("<td>");
        //Imprimir el número de la fila y columna
        document.write(mult);
        //Ir disminuyendo mult
        mult--;
        //Se cierra la columna
        document.write("</td>");
    }
    document.write("</tr>");
}
document.write("</table>");

//2:
// Numeros aleatorios
let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);
//Empieza el tiempo
console.time('Execution Time');
// comienza la tarea
let guess = prompt("¿Cuánto es " + num1 + " + " + num2 + "?");
// la tarea termina
console.timeEnd('Execution Time')
//Se imprime si el resultado es correcto o incorrecto
if (guess == num1 + num2) {
    console.log('Correcto');
    document.write('Correcto' + "<br>");
} else {
    console.log('Incorrecto');
    document.write('Incorrecto' + "<br>");
}

//3:
//Meter los números separados por comas
let input = prompt("Enter a list of numbers separated by commas:");
//Separar los números
let pre_array = (input.split(','));
//Definir variables
let negativos = 0;
let ceros = 0;
let positivos = 0;
let array = [];
//Convertir los string a numeros
for(let i = 0; i < pre_array.length; i++){
    array[i] = Number(pre_array[i]);
    //Clasificar
    if(array[i] < 0) {
        negativos++;
    }
    if(array[i] == 0) {
        ceros++;
    }
    if(array[i] > 0) {
        positivos++;
    }
}
//Imprimir
document.write("Negativos: " + negativos + "<br>");
document.write("Ceros: " + ceros + "<br>");
document.write("Positivos: " + positivos + "<br>");
console.log(array);

// 4:
//Meter los números separados por comas

let fila_4 = prompt("Ingrese un número de filas: ");
let columna_4 = prompt("Ingrese un número de columnas: ");
let array_4 = [];
for (let i = 0; i < fila_4; i++) {
    array_4[i] = [];
    for (let j = 0; j < columna_4; j++) {
      array_4[i][j] = prompt("4. Ingrese un número: ");
    }
}
document.write("<br>");
document.write("El arreglo es: " + array_4 + "<br>");

//Promedios
console.log(array_4);
let promediosArray = [];

for (let i = 0; i < array_4.length; i++) {
    let suma = 0;
    for (let j = 0; j < array_4[i].length; j++) {
      suma += Number(array_4[i][j]);
      console.log(suma);
    }
    let promedio = suma / array_4[i].length;
    promediosArray.push(promedio);
}

console.log(promediosArray);
document.write("Los promedios son: " + promediosArray + "<br>");

//5:
//Ingresar el número
let numero = prompt("5. Ingrese un número");
//Convertir el número a string
let numero_string = numero.toString();
//Invertir el string
let numero_inverso = numero_string.split("").reverse().join("");
//Imprimir el número invertido
document.write("El número invertido es: " + numero_inverso + "<br>");

//6:
//Problema: Organizar los equipo de un torneo de futbol
//Solución: Crear un objeto con los equipos y los juegos
//Creamos el objeto de team, que tendrá los jugadores y los juegos
const team = {
    _players: [],
    _games: [],
    get players (){
      return this._players
    },
    get games () {
      return this._games
    },
    addPlayer(newFirstName,newLastName,newAge) {
      let player = {
        firstName: newFirstName,
        lastName:newLastName,
        age: newAge
      };
      this._players.push(player)
    },
    addGame(opponent,teamPoints,opponentPoints) {
      let game = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      };
      this._games.push(game)
    },
    did_we_won_season(_games) {
        let wins = 0;
        let losses = 0;
        for(let i=0; i > _games.length; i++){
            if(_games[i].teamPoints > _games[i].opponentPoints){
                wins++;
            }else{
                losses++;
            }
            return wins, losses;
        }
        if(wins > losses){
            document.write('<img src="img/we_won_the_season.jpg" alt="">');
        }
    }
  };
  
let player1 = {
    firstName: 'Jerry',
    lastName: 'Smith',
    age: 30
}
let player2 = {
    firstName: 'Tom',
    lastName: 'Sanchez',
    age: 30
}
let player3 = {
    firstname: 'Jessica',
    lastName: 'Johnass',
    age: 30
}

let game1 = {
opponent: 'Team 4',
teamPoints: 3,
opponentPoints: 1
}
let game2 = {
opponent: 'Team 5',
teamPoints: 100,
opponentPoints: 0
}
let game3 = {
opponent: 'Team 6',
teamPoints: 2,
opponentPoints: 100
}
const p_1 =  player1
const p_2 = player2
const p_3 = player3
const g_1 = game1
const g_2 = game2
const g_3 = game3
team._players.push(p_1,p_2,p_3)
team._games.push(g_1,g_2,g_3)
console.log(team._players)
console.log(team._games)
team.addPlayer('John','Carlson',33)
team.addGame('Los Diablos',100,98)
team.did_we_won_season(team._games);


//Preguntas
document.write("<br> <br> <br> <br> <br>");
document.write("Preguntas: <br>");
document.write("¿Qué diferencias y semejanzas hay entre Java y JavaScript? <br>");
document.write("JavaScript es un lenguaje de programación de alto nivel, interpretado y orientado a objetos. Java es un lenguaje de programación de alto nivel, interpretado y orientado a objetos. <br>");
document.write("¿Qué métodos tiene el objeto Date? (Menciona al menos 5*) <br>");
document.write("getDate(), getDay(), getFullYear(), getHours(), getMilliseconds() <br>");
document.write("¿Qué métodos tienen los arreglos? (Menciona al menos 5*) <br>");
document.write("push(), pop(), shift(), unshift(), indexOf() <br>");
document.write("¿Cómo se declara una variable con alcance local dentro de una función? <br>");
document.write("let variable = valor; <br>");
document.write("¿Qué implicaciones tiene utilizar variables globales dentro de funciones? <br>");
document.write("Las variables globales pueden ser modificadas por cualquier función, lo que puede causar errores en el programa. <br>");