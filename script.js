
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

// Usa un ciclo for per iterare sull'array e creare img dinamicamente
for (let i = 0; i < imageArray.length; i++) {
    const img = document.createElement('img');
    img.src = imageArray[i];
    img.alt = 'Image' + (i + 1);
    if (i == 0) {
        img.classList.add('active');
    }
    imageContainer.append(img);
}

let currentIndex = 0;

// Funzione per mostrare l'immagine precedente
function backImage() {
    let images = document.querySelectorAll('#image-container img');
    images[currentIndex].classList.remove('active');
    if (currentIndex == 0) {
        currentIndex = imageArray.length - 1;
    } else {
        currentIndex--;
    }
    images[currentIndex].classList.add('active');
}

// Funzione per mostrare l'immagine successiva
function nextImage() {
    let images = document.querySelectorAll('#image-container img');
    images[currentIndex].classList.remove('active');
    if (currentIndex == imageArray.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    images[currentIndex].classList.add('active');
}