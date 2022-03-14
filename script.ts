// FIXED TOP NAVBAR //
// const hamburger: HTMLElement | any = document.querySelector('.hamburger');

// hamburger.addEventListener('click', function() {
//   this.classList.toggle('is-active');
// });

const menuToggle: Element | null = document.querySelector('.menu-toggle');
const sidebar: Element | null = document.querySelector('.sidebar');

menuToggle?.addEventListener('click', () => {
  menuToggle.classList.toggle('is-active');
  sidebar?.classList.toggle('is-active');
});