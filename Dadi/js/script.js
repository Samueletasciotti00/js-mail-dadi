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

            //Log
            console.log('Hai vinto!');

            //Print to table
            document.getElementById('user').style.backgroundColor = 'lightgreen';
            document.getElementById('computer').style.backgroundColor = 'tomato';
            document.querySelector('span').innerHTML = 'Hai vinto! <i class="fa-solid fa-trophy" style="color: #FFD43B;"></i>';
        } else if(userD == computerD) {
            console.log('Pari!!');
            document.getElementById('user').style.backgroundColor = 'yellow';
            document.getElementById('computer').style.backgroundColor = 'yellow';
            document.querySelector('span').innerHTML = 'Pareggio! <i class="fa-regular fa-handshake" style="color: #ffffff;"></i>';
        } else {
            console.log('Hai perso..');
            document.getElementById('user').style.backgroundColor = 'tomato';
            document.getElementById('computer').style.backgroundColor = 'lightgreen';
            document.querySelector('span').innerHTML = 'Hai perso ... <i class="fa-solid fa-circle-xmark" style="color: #ff0000;"></i>';

        }   

        //debug
        console.log(userD, computerD);

        //Print on html
        document.getElementById('user').innerHTML = userD;
        document.getElementById('computer').innerHTML = computerD;
    }
)




