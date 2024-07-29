
// Array delle immagini
let imageArray = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
];

// Seleziona il contenitore delle immagini
let imageContainer = document.getElementById('image-container');
let thumbnailsContainer = document.getElementById('thumbnails-container');

// Usa un ciclo for per iterare sull'array e creare img dinamicamente
for (let i = 0; i < imageArray.length; i++) {
    const img = document.createElement('img');
    img.src = imageArray[i];
    img.alt = 'Image ' + (i + 1);
    if (i === 0) {
        img.classList.add('active');
    }
    imageContainer.appendChild(img);

    // Creazione delle thumbnails
    const thumb = document.createElement('img');
    thumb.src = imageArray[i];
    thumb.alt = 'Thumbnail ' + (i + 1);
    thumb.classList.add('thumbnail');
    thumb.addEventListener('click', () => {
        setActiveImage(i);
    });
    thumbnailsContainer.appendChild(thumb);
}

let currentIndex = 0;

// Funzione per impostare l'immagine attiva
function setActiveImage(index) {
    let images = document.querySelectorAll('#image-container img');
    let thumbnails = document.querySelectorAll('#thumbnails-container img');
    images[currentIndex].classList.remove('active');
    thumbnails[currentIndex].classList.remove('active-thumb');
    currentIndex = index;
    images[currentIndex].classList.add('active');
    thumbnails[currentIndex].classList.add('active-thumb');
}

// Funzione per mostrare l'immagine precedente
function backImage() {
    let newIndex = currentIndex === 0 ? imageArray.length - 1 : currentIndex - 1;
    setActiveImage(newIndex);
}

// Funzione per mostrare l'immagine successiva
function nextImage() {
    let newIndex = currentIndex === imageArray.length - 1 ? 0 : currentIndex + 1;
    setActiveImage(newIndex);
}

// Event listeners per i pulsanti
document.querySelector('.back').addEventListener('click', backImage);
document.querySelector('.next').addEventListener('click', nextImage);