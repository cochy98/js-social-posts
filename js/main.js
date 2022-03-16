// Array contenente le info di tutti i post
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    },
    {
        "id": 6,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=538",
        "author": {
            "name": "Paolo Sainato",
            "image": "https://unsplash.it/300/300?image=39"
        },
        "likes": 91,
        "created": "2021-06-05"
    },
    {
        "id": 7,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=539",
        "author": {
            "name": "Giovanni Ferraioli",
            "image": "https://unsplash.it/300/300?image=33"
        },
        "likes": 26,
        "created": "2021-03-05"
    },
    {
        "id": 8,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=541",
        "author": {
            "name": "Cristian De Sio",
            "image": "https://unsplash.it/300/300?image=40"
        },
        "likes": 77,
        "created": "2021-05-01"
    },
    {
        "id": 9,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=560",
        "author": {
            "name": "Cosmo Ferrigno",
            "image": null
        },
        "likes": 95,
        "created": "2021-07-05"
    }
];

// Array dove vado a memorizzare gli ID dei post ai quali l'utente mette like
const likedId = [];

// Vado a prendermi tramite ID il container di tutti i post
const wrapper = document.getElementById('container');

// Richiamo la funzione che visualizza i post
showPosts(posts, wrapper);





/************************************FUNCTIONS*******************************************/
/**
 *  Questa funzione mostra tutti i post nella pagina principale.
 * @param {*} listPosts E' l'array che contiene le informazioni riguado tutti i post
 * @param {*} wrapper   E' il container dove voglio visualizzare i post
 */
function showPosts(listPosts, wrapper){
    listPosts.forEach(element => {
        const {id, content, media, author, likes, created} = element;
        const post =
        `<div class="post" id="post-${id}">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${author["image"]}" alt="${author["name"]}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${author["name"]}</div>
                        <div class="post-meta__time">${created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${content}</div>
            <div class="post__image">
                <img src="${media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a id="like-button-${id}" class="like-button  js-like-button" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${id}" class="js-likes-counter">${likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>`;

        // Aggiungo in coda il post appena creato
        wrapper.innerHTML += post;

        // Richiamo con un timeout la funzione per aggiungere o rimuovere i like
        setTimeout(() => {
            addLike(element["id"], element["likes"], likedId);
            viewTemporaryProfilePicture (element["id"], element["author"]["image"], element["author"]["name"]);
        }, 250);
    });
}


/**
 *  Questa funzione permette l'aggiunta o la rimozione dei like ai post. In sostanza, aggiunge o rimuove una classe css 'liked' e incrementa o decrementa il contatore dei like.
 * @param {*} postId        ID del post al quale vogliamo mettere o togliere il like
 * @param {*} numberOfLikes Numero di like già presenti per quel determinato post
 */
function addLike(postId, numberOfLikes, likedArray){
    // Richiamo tramite ID il button 'mi-piace' del post corrente
    const likeBTN = document.getElementById(`like-button-${postId}`);

    // Al click di tale button, esegui la seguente funzione
    likeBTN.addEventListener('click', () => {
        // Innanzitutto verifico quanti like sono già presenti per il post
        const outputLikes = document.getElementById(`like-counter-${postId}`);

        // Se la classe 'liked' non è presente, la aggiungo e incremento il contatore dei like
        if (likeBTN.classList.toggle('like-button--liked')){
            outputLikes.innerHTML = ++numberOfLikes;
            // Inserisco l'ID del post dentro ad un'array
            likedArray.push(postId);
        } else{
            outputLikes.innerHTML = --numberOfLikes;
            // Rimuovo l'ID del post dall'array, conoscendo la sua posizione tramite 'indexOf'
            likedArray.splice(likedArray.indexOf(postId), 1);
        }

        console.log(`id post: ${postId}, numero di like: ${numberOfLikes}`);
        console.log(likedArray);
    });
}

/**
 *  Questa funzione controlla se per l'utente del post corrente è presente un'immagine profilo, in caso contrario ne crea una di default.
 * @param {*} postId            ID del post corrente
 * @param {*} profilePicture    Indirizzo dell'immagine profilo, se non presente avrà valore null
 * @param {*} userName          Nome utente del post corrente
 */
function viewTemporaryProfilePicture (postId, profilePicture, userName){
    // Se non trovo un'immagine profilo
    if (profilePicture == null){
        // Spezzo la stringa rappresentante il nome completo
        userName = userName.split(' ');
        //console.log(userName);
        // Mi richiamo tramite una query il tag dell'immagine profilo
        const imgProfile = document.querySelector(`div#post-${postId} img.profile-pic`);
        // E gli aggiungo la classe 'd-none'
        imgProfile.classList.add('d-none');
        // Mi richiamo tramite una query il container dell'immagine profilo
        const imgProfileContainer = document.querySelector(`div#post-${postId} div.post-meta__icon`);
        // E creo al suo interno un'immagine profilo di default
        imgProfileContainer.innerHTML =
        `<div class="profile-pic-default">
            <span>${userName[0].charAt(0)}${userName[1].charAt(0)}</span>
        </div>`;
    }
}
