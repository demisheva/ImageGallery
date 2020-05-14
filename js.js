
const images = document.querySelectorAll('.img-12-min');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const reset = document.querySelector('.reset');
const maxImg = document.querySelector('.img-12-max')

// let count = 0; переменная, которая указывает на номер активного изображения в images


next.addEventListener("click", nextFunction);
prev.addEventListener("click", prevFunction);
reset.addEventListener("click", resetFunction);
next.addEventListener("touchstart", nextFunction);
prev.addEventListener("touchstart", prevFunction);
reset.addEventListener("touchstart", resetFunction);

images.forEach((element) => {
    element.addEventListener('click', function () {
        images.forEach((elem) => { elem.classList.remove('active-img') })
        element.classList.add('active-img');
        maxImg.src = element.src;
    })

})


function nextFunction() {
    for (let i = 0; i < images.length; i++) {
        if (images[i].classList.contains('active-img')) {
            images[i].classList.remove('active-img');
            if (images[images.length] == images[i + 1]) {
                images[0].classList.add('active-img');
                maxImg.src = images[0].src;
                break
            } else {
                images[i + 1].classList.add('active-img');
                maxImg.src = images[i + 1].src;
                break
            }
        }
    }
}

function prevFunction() {
    for (let i = 0; i < images.length; i++) {
        if (images[i].classList.contains('active-img')) {
            images[i].classList.remove('active-img');

            if (images[images.length] == images[i - 1]) {
                images[images.length - 1].classList.add('active-img');
                maxImg.src = images[images.length - 1].src;
                break
            } else {
                images[i - 1].classList.add('active-img');
                maxImg.src = images[i - 1].src;
                break
            }
        }
    }
}

function resetFunction() {
    for (let i = 0; i < images.length; i++) {
        if (images[i].classList.contains('active-img')) {
            images[i].classList.remove('active-img');
            images[0].classList.add('active-img');
            maxImg.src = images[0].src;
        }
    }
}
