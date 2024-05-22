//your JS code here. If required.
const openModal = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModalBtn');

openModal.addEventListener('click', function() {
    modal.style.display = 'flex';
})

closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
})


window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});