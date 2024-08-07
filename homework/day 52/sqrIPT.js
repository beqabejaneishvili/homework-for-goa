const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg'
];

let currentIndex = 0;

const sliderImage = document.getElementById('slider-image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

function updateImage() {
    sliderImage.src = images[currentIndex];
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});
