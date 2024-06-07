//Creare un Array di oggetti che presenti le email nella lista degli invitati.
//Verifivacare il contenuto dell'input in maniera tale che il programma verificbi l'invitato.

//Lista invitati
const invitati = ['cr7@mgail.com', 'immobilie@lazio.it', 'sefano@lavori.com'];





//Verifica invitato
document.querySelector('button').addEventListener('click',
    function(){
        //Analisi dell'imput utente
        let user = document.querySelector('input').value;

        console.log(user);

        if(user == invitati[0]){
            console.log('Sei stato invitato');
        } else if (user == invitati[1]) {
            console.log('Sei stato invitato');
        } else if (user == invitati[2]) {
            console.log('Sei stato invitato');
        } else {
            console.log('Non sei stato invitato');
        } 
    } 
  );
