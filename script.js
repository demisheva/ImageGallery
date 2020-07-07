

const images = document.querySelectorAll('.small-image');

const nextSliderImg = document.querySelector('.navigation-big .next');
const prevSliderImg = document.querySelector('.navigation-big .prev');
const sliderImg = document.querySelector('.big-img img');

const resetGalleryImgs = document.querySelector('.navigation-small .reset');
let galleryWrapper = document.querySelector('.gallery-wrapper')


nextSliderImg.addEventListener("click", nextSliderFunction);
document.querySelector('body').addEventListener("keyup", event => { if (event.keyCode === 39) { nextSliderFunction() } });
prevSliderImg.addEventListener("click", prevSliderFunction);
document.querySelector('body').addEventListener("keyup", event => { if (event.keyCode === 37) { prevSliderFunction() } });


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
        nextPrevGalleryFunction();
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
                nextPrevGalleryFunction();
                break
            } else {
                images[i + 1].classList.add('active-img');
                sliderImg.src = images[i + 1].src;
                nextPrevGalleryFunction();
                break;
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
                nextPrevGalleryFunction();
                break
            } else {
                images[i - 1].classList.add('active-img');
                sliderImg.src = images[i - 1].src;
                nextPrevGalleryFunction();
                break
            }
        }
    }
    slider = setInterval(nextSliderFunction, 3000);
}


const widthGallery = document.querySelector('.gallery-wrapper').offsetWidth;
let widthAllImg = 0;
images.forEach((element) => { widthAllImg += element.offsetWidth })

let left = 0;
function findLeft() {
    left = 0;
    for (let i = 0; i < images.length; i++) {
        if (images[0].classList.contains('active-img')) {
            left = 0;
            break;
        } else if (images[i].classList.contains('active-img')) {
            break;
        } else {
            left += images[i].offsetWidth;
        }
    }
    console.log(left)
}

function nextPrevGalleryFunction() {
    findLeft()
    if (widthGallery <= widthAllImg - left) {
        images[0].style.marginLeft = ` -${left}px`
    } else if (images[0].classList.contains('active-img')) {
        images[0].style.marginLeft = `0px`
    }else {
        images[0].style.marginLeft = ` -${widthAllImg - widthGallery}px`
    }
}

function resetGalleryFunction() {
    left = 0;
    images[0].style.marginLeft = left
    for (let i = 0; i < images.length; i++) {
        if (images[i].classList.contains('active-img')) {
            images[i].classList.remove('active-img');
            images[0].classList.add('active-img');
            sliderImg.src = images[0].src;
        }
    }
}

