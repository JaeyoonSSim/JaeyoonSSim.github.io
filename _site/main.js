const toggleBtn = document.querySelector('.navbar_header_toggleBtn');
const menu = document.querySelector('.navbar_header_menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});
