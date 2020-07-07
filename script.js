

const images = document.querySelectorAll('.small-image');

const nextSliderImg = document.querySelector('.navigation-big .next');
const prevSliderImg = document.querySelector('.navigation-big .prev');
const sliderImg = document.querySelector('.big-img img');

const nextGalleryImgs = document.querySelector('.navigation-small .next');
const prevGalleryImgs = document.querySelector('.navigation-small .prev');
const resetGalleryImgs = document.querySelector('.navigation-small .reset');
let galleryWrapper = document.querySelector('.gallery-wrapper')


nextSliderImg.addEventListener("click", nextSliderFunction);
document.querySelector('body').addEventListener("keyup", event=>{if (event.keyCode===39) {nextSliderFunction()}});
prevSliderImg.addEventListener("click", prevSliderFunction);
document.querySelector('body').addEventListener("keyup", event=>{if (event.keyCode===37) {prevSliderFunction()}});


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
                nextGalleryFunction();
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
                break
            } else {
                images[i - 1].classList.add('active-img');
                sliderImg.src = images[i - 1].src;
                prevGalleryFunction();
                break
            }
        }
    }
    slider = setInterval(nextSliderFunction, 3000);
}


let marginLeft = 0;
const widthGallery = document.querySelector('.gallery-wrapper').offsetWidth;
let widthAllImg = 0;
images.forEach((element) => { widthAllImg += element.offsetWidth })



function nextGalleryFunction() {
    console.log(marginLeft)
    clearInterval(slider);
    images.forEach((element) => {
        if (element.classList.contains('active-img')) {
            if (element == images[images.length - 1]) {
                resetGalleryFunction()
            } else {
                marginLeft += element.offsetWidth;
                if (widthGallery <= widthAllImg - marginLeft) {
                    images[0].style.marginLeft = '-' + marginLeft + 'px'
                } else {
                    images[0].style.marginLeft = ` -${widthAllImg - widthGallery}px`;
                    marginLeft=widthAllImg - widthGallery
                }
            }
        }
    })

}

function prevGalleryFunction() {
    console.log(marginLeft);
    clearInterval(slider);
    images.forEach((element) => {
        if (element.classList.contains('active-img')) {
            if (element == undefined ) {
                images[0].style.marginLeft = ` -${widthAllImg - widthGallery}px`
            } else {
                marginLeft -= element.offsetWidth;
                
            }
        }
    })

}

function resetGalleryFunction() {
    marginLeft = 0;
    images[0].style.marginLeft = marginLeft
    for (let i = 0; i < images.length; i++) {
        if (images[i].classList.contains('active-img')) {
            images[i].classList.remove('active-img');
            images[0].classList.add('active-img');
            sliderImg.src = images[0].src;
        }
    }
}

