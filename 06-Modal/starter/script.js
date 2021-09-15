'use strict';

const btnModel = document.querySelectorAll('.show-modal');
const closeModel = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const boxModel = document.querySelector('.modal');

function openBox() {
    boxModel.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function closeBox() {
    boxModel.classList.add('hidden');
    overlay.classList.add('hidden');
}
btnModel.forEach(function (model) {
    model.addEventListener('click', openBox);
});

closeModel.addEventListener('click', closeBox);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !boxModel.classList.contains('hidden')) {
        //console.log(e.key);
        closeBox();
    }
})

