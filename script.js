'use strict';


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

//const btnOpenModal = document.querySelector('.show-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// // if we use querySelector here then it will choose only one. That is why we have appled  querySelectorAll


for(let i=0; i<btnsOpenModal.length; i++)
{
  btnsOpenModal[i].addEventListener("click", function(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  })
}
btnCloseModal.addEventListener("click", function(){
      modal.classList.add("hidden");
      overlay.classList.add("hidden");
  })
// closing the window by clicking on the 'Esc' button.

document.addEventListener("keydown", function(e){
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    modal.classList.add("hidden");
      overlay.classList.add("hidden");
  }
})

// assignment 

//closing the button by  clicking outside the window.
// You have to make a saprate window for each button.







/*
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

*/