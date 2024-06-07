//Generare un numero random da 1 a 6
    // 1 Per il giocatore
    // 1 Per il Computer

//Stabilire il vincitore




// Stampa il numero casuale in console


document.querySelector('button').addEventListener('click',
    function(){
        // Genera un numero casuale tra 1 e 6
        let userD = Math.floor(Math.random() * 6) + 1; //Utente

        let computerD = Math.floor(Math.random() * 6) + 1; //PC

        if(userD > computerD){
            
            console.log('Hai vinto!');
        } else if(userD == computerD) {
            console.log('Pari!!');
        } else {
            console.log('Hai perso..');
        }

        console.log(userD, computerD);
    }
)




