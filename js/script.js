// # Descrizione
// Ricreiamo un feed social aggiungendo al layout di base fornito,
// il nostro script JS in cui:
// # Milestone 1
// Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la 
// relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.
// *Non è necessario creare date casuali, inventatele*
// *Per le immagini va bene utilizzare qualsiasi servizio di placeholder 
// ad es. Unsplash (https://unsplash.it/300/300?image=3)*
// #Milestone 2
// Prendendo come riferimento il layout di esempio presente nell'html,
// stampiamo i post del nostro feed.
// #Milestone 3
// Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al test
// del bottone e incrementiamo il counter dei likes relativo.

//#MILESTONE 1

const card = document.getElementById('container');

// Creo un array di oggetti che rappresentanto ciascun post

const post = [
    {
    id: '1',
    userName: 'Manuel Tristano',
    userPic: 'https://unsplash.it/300/300?image=69',
    date: '07-06-2022',
    text: 'Il ritorno di Pogba è qualcosa di stupendo',
    image: 'https://unsplash.it/300/300?image=14',
    like: '69'
    },
    {
    id: '2',
    userName: 'Marco Lanci',
    userPic: 'https://unsplash.it/300/300?image=74',
    date: '07-06-2022',
    text: 'Il ritorno di Di Maria è qualcosa di stupendo',
    image: 'https://unsplash.it/300/300?image=325',
    like: '150'
    },
    {
    id: '3',
    userName: 'Fabrizio Mastrobattista',
    userPic: 'https://unsplash.it/300/300?image=4',
    date: '07-06-2022',
    text: 'La Juve si sta rinforzando e non poco',
    image: 'https://unsplash.it/300/300?image=363',
    like: '150'
    },
    {
    id: '4',
    userName: 'Enrico Campani',
    userPic: 'https://unsplash.it/300/300?image=4',
    date: '07-06-2022',
    text: 'Forza Milan!',
    image: 'https://unsplash.it/300/300?image=363',
    like: '150'
    },
]

console.table(post);