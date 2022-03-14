// FIXED TOP NAVBAR //
// const hamburger: HTMLElement | any = document.querySelector('.hamburger');
// hamburger.addEventListener('click', function() {
//   this.classList.toggle('is-active');
// });
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
menuToggle === null || menuToggle === void 0 ? void 0 : menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('is-active');
    sidebar === null || sidebar === void 0 ? void 0 : sidebar.classList.toggle('is-active');
});
