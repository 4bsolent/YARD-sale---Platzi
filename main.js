const desktopMenu = document.querySelector('.desktop-menu')
const downArrowMenu = document.querySelector('.down-arrow-menu'); 

downArrowMenu.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {

    // Mi versión

    /* if (desktopMenu.classList.contains('inactive')) {
         desktopMenu.classList.remove('inactive')
    } else {  
         desktopMenu.classList.add('inactive')
    } */

    // Versión de clase

    desktopMenu.classList.toggle('inactive')

}