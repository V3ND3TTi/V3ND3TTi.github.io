// FIXED TOP NAVBAR //
// const hamburger: HTMLElement | any = document.querySelector('.hamburger');
// hamburger.addEventListener('click', function() {
//   this.classList.toggle('is-active');
// });
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const form = document.querySelector('#contact');
menuToggle === null || menuToggle === void 0 ? void 0 : menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('is-active');
    sidebar === null || sidebar === void 0 ? void 0 : sidebar.classList.toggle('is-active');
});
form === null || form === void 0 ? void 0 : form.addEventListener('sumbit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    console.log(email);
    const name = document.querySelector('#name').value;
    console.log(name);
    const msg = document.querySelector('#comment').value;
    console.log(name);
    form.reset();
});
