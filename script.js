"use strict";
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
// Toggling modal
const toggleModal = () => {
        //   Show Modal 
        modal.classList.toggle('hidden');
        // Remove Overlay
        overlay.classList.toggle('hidden');
    }
    // Looping over button and applying event listener
for (let i = 0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener('click', function() {
        toggleModal();
    })
}
// Close Modal
btnCloseModal.addEventListener('click', function() {
    toggleModal();
})
document.addEventListener('keydown', function(event) {
    if (event.key === 'q' && !modal.classList.contains('hidden')) {
        toggleModal();
    }
})