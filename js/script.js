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
// Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo
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
        like: 69
    },
    {
        id: '2',
        userName: 'Marco Lanci',
        userPic: 'https://unsplash.it/300/300?image=74',
        date: '07-02-2022',
        text: 'Il ritorno di Di Maria è qualcosa di stupendo',
        image: 'https://unsplash.it/300/300?image=325',
        like: 150
    },
    {
        id: '3',
        userName: 'Fabrizio Mastrobattista',
        userPic: 'https://unsplash.it/300/300?image=4',
        date: '07-04-2022',
        text: 'La Juve si sta rinforzando e non poco',
        image: 'https://unsplash.it/300/300?image=363',
        like: 150
    },
    {
        id: '4',
        userName: 'Enrico Campani',
        userPic: 'https://unsplash.it/300/300?image=4',
        date: '07-05-2022',
        text: 'Forza Milan!',
        image: 'https://unsplash.it/300/300?image=363',
        like: 150
    },
]

console.table(post);

for (let i = 0; i < post.length; i++) {
    let currentElement = post[i];
    card.innerHTML += ` <div class="post">
    <div class="post__header">
      <div class="post-meta">
        <div class="post-meta__icon">
          <img class="profile-pic" src="${currentElement.userPic}" alt="${currentElement.userName}" />
        </div>
        <div class="post-meta__data">
          <div class="post-meta__author">${currentElement.userName}</div>
          <div class="post-meta__time">${currentElement.date}</div>
        </div>
      </div>
    </div>
    <div class="post__text">
    ${currentElement.text}
    </div>
    <div class="post__image">
      <img src="${currentElement.image}" alt="${currentElement.userName}" />
    </div>
    <div class="post__footer">
      <div class="likes js-likes">
        <div class="likes__cta">
          <a class="like-button js-like-button" href="#" data-postid="1">
            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
            <span class="like-button__label">Mi Piace</span>
          </a>
        </div>
        <div class="likes__counter">Piace a <b id="like-counter-1" class="js-likes-counter">${currentElement.like}</b> persone</div>
      </div>
    </div>
  </div>`

}

const button = document.querySelectorAll('.js-like-button')
const contatore = document.querySelectorAll('.js-likes-counter')

for (let i = 0; i < button.length; i++) {
    const currentButton = button[i];
    currentButton.addEventListener("click", () => {
        currentButton.classList.add("like-button--liked");
        const currentContatore = contatore[i];
        let numberlike = parseInt(post[i].like);
        currentContatore.innerText = ++numberlike;
    })
}

