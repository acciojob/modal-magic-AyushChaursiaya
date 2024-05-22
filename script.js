//your JS code here. If required.
const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModalBtn');

openModalBtn.addEventListener('click', function() {
    modal.style.display = 'flex';
})

closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
})