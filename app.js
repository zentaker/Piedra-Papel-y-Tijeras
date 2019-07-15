const imgPlayerChoice = document.getElementById('playerChoice');
const imgComputerChoice = document.getElementById('computerChoice');

const pResult = document.getElementById('result'); 
const pScore = document.getElementById('score');

const buttons = document.querySelectorAll('button'); // devido a que no esta mediante una etiqueta id por lo tanto se utiliza 
const choices = ['piedra', 'papel', 'tijeras'];
const fileNames = {
    'piedra': 'img/rock.png',
    'papel': 'img/paper.png',
    'tijeras': 'img/scissors.png',

};

/* buttons.forEach(function( button ) { // para cada uno de los botones se le va a signar un event listener
    button.addEventListener('click', startGame); // se le asigna un evento de click que se va a resolver con la funcion startgame
});  */

//tambien se puede utizar mediante la conotacion de funcion flecha

let positiveScore = 0;
let negativeScore = 0;


buttons.forEach(
    button => button.addEventListener('click', startGame)
);

function startGame(event) { // le pasamos el argumento event para recibir la informacion 
    
    //determinar la elecion del jugador 
    const button = event.currentTarget; // mediante current target se va a segurar de darnos un elemento que coincida con la referencia original en cual se asociio el evento click
    const playerChoice = button.dataset.choice; // obtener lo que el usuario esta selecionando 
    console.log(playerChoice);

    // determinar la elecion de la computadora 
    const computerChoice = getComputerChoice(); // va a recibir la informacion que en la funcion posterior se genero la elecion de la computadora 
    console.log(computerChoice);
    

    // determinar quien gana 
    const winner = getWinner(playerChoice, computerChoice);

    console.log(winner);

    //mostrar resultado
    //actualizar la imagenes 
    imgPlayerChoice.setAttribute('src', fileNames[playerChoice]);
    imgComputerChoice.setAttribute('src', fileNames[computerChoice]);

    let result;
    
    if(winner === 'player') {
        result = 'ganas';
        ++positiveScore; // operador de preincremento 
    } else if (winner === 'computer') {
        result = 'pierdes';
        ++negativeScore; // es lo mismo que negativeScore = negativeScore +1;
    } else { // se trata de un empate 
        result = 'empatas';

    }

    pResult.innerHTML = `Tu ${result} escogiendo <strong>${playerChoice}</strong>
                             en contra de <strong>${computerChoice}</strong>.`;

    pScore.innerHTML = ` Has ganado ${positiveScore} veces. Has perdido ${negativeScore} veces.`;


};

function getComputerChoice() {
    // obtener un valor aleatorio i (0, 1 , 2)
    const i =  parseInt(Math.random() * 3); // generar un valor aleatorio mediante el metdo

    // vams a devolver la elecion de la computadora
    return choices[i]; // aca obtendremos lo que el computador aleatoriamente eligio 
};

function getWinner(playerChoice, computerChoice) {
    // determianr quien es el ganador 

    if(playerChoice === computerChoice) {
        return null;

    }

    if(playerChoice === 'piedra') { // si el usuario eligue piedra evalua la siguiente condicion 
        if (computerChoice  === 'papel') { // si la computadora eligio papel entonces 
            return 'computer'; // el jugadro pierde por que el papael envuelve a la piedra
        } else { // de caso contrario si el usuario eligio las tijeras
            return 'player'; // por que la piedra que eligio rompe a las tijeras

        };
    } else if (playerChoice === 'papel') {
        if (computerChoice  === 'piedra') { // si la computadora eligio piedra entonces 
            return 'player'; // el jugadro ganpor que el papael envuelve a la piedra
        } else { // de caso contrario si el usuario eligio las tijeras
            return 'computer'; // por que la piedra que eligio rompe a las tijeras
        }
    } else { // si no hay ni piedra o papael la unica iocion que queda es tijeras
        if (computerChoice  === 'papel') { // si la computadora eligio papel entonces 
            return 'player'; // el jugadro pierde por que el papael envuelve a la piedra
        } else { // de caso contrario si el usuario eligio piedra
            return 'computer'; // por que la piedra que eligio rompe a las tijeras
        }
    
    }

}