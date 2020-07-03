

const images = document.querySelectorAll('.small-image');

const nextSliderImg = document.querySelector('.navigation-big .next');
const prevSliderImg = document.querySelector('.navigation-big .prev');
const sliderImg = document.querySelector('.big-img img');

const nextGalleryImgs = document.querySelector('.navigation-small .next');
const prevGalleryImgs = document.querySelector('.navigation-small .prev');
const resetGalleryImgs = document.querySelector('.navigation-small .reset');
let galleryWrapper = document.querySelector('.gallery-wrapper')


nextSliderImg.addEventListener("click", nextSliderFunction);
prevSliderImg.addEventListener("click", prevSliderFunction);

nextGalleryImgs.addEventListener("click", nextGalleryFunction);
prevGalleryImgs.addEventListener("click", prevGalleryFunction);
resetGalleryImgs.addEventListener("click", resetGalleryFunction);


images.forEach((element) => {
    if (element.classList.contains('active-img')) {
        sliderImg.src = element.src;
    }

})

let slider = setInterval(nextSliderFunction, 3000)

images.forEach((element) => {
    element.addEventListener('click', function () {
        clearInterval(slider)
        images.forEach((elem) => { elem.classList.remove('active-img') })
        element.classList.add('active-img');
        sliderImg.src = element.src;
        slider = setInterval(nextSliderFunction, 3000)
    })
})

function nextSliderFunction() {
    clearInterval(slider)
    for (let i = 0; i < images.length; i++) {
        if (images[i].classList.contains('active-img')) {
            images[i].classList.remove('active-img');
            if (images[images.length] == images[i + 1]) {
                images[0].classList.add('active-img');
                sliderImg.src = images[0].src;
                break
            } else {
                images[i + 1].classList.add('active-img');
                sliderImg.src = images[i + 1].src;
                break
            }
        }
    }
    slider = setInterval(nextSliderFunction, 3000)
}

function prevSliderFunction() {
    clearInterval(slider)
    for (let i = 0; i < images.length; i++) {
        if (images[i].classList.contains('active-img')) {
            images[i].classList.remove('active-img');

            if (images[images.length] == images[i - 1]) {
                images[images.length - 1].classList.add('active-img');
                sliderImg.src = images[images.length - 1].src;
                break
            } else {
                images[i - 1].classList.add('active-img');
                sliderImg.src = images[i - 1].src;
                break
            }
        }
    }
    slider = setInterval(nextSliderFunction, 3000)
}




function nextGalleryFunction() {
    console.log('nextClick');

}

function prevGalleryFunction() {
    console.log('prevClick')
}

function resetGalleryFunction() {
    console.log('resetClick')
    for (let i = 0; i < images.length; i++) {
        if (images[i].classList.contains('active-img')) {
            images[i].classList.remove('active-img');
            images[0].classList.add('active-img');
            sliderImg.src = images[0].src;
        }
    }
}

