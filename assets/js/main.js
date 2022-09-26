// ----------------- MENU SHOW Y HIDDEN ----------------
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close') 

// ----------- MENU SHOW ------------
/* Validar se a constante existe */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// ------------- MENU HIDDEN ------------
/*Validar se a constatnet existir */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// -----------------REMOVE MENU MOBILE -------------
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    //quando clicamos em cada um nav_link, removemos a classe show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// ---------------ACCORDION SKILLS---------------


// ---------- QUALIFICATION TABS --------------


// ------------------ SERVICES MODAL -------------