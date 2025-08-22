/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */

const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
      console.log('hello!');
    });