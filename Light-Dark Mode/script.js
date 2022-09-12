const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.querySelector('#main-nav');
const toggleIcon = document.querySelector('#toggle-icon');
const image1 = document.querySelector('#img1');
const image2 = document.querySelector('#img2');
const image3 = document.querySelector('#img3');
const textBox = document.querySelector('#text-box');


function imgSrc(color){
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
};

function darkMode(){
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imgSrc('dark');
};

function lightMode(){
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imgSrc('light');
};

function swicthTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    }
    else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    };
};


// Event
toggleSwitch.addEventListener('change',swicthTheme);

// localStorage
const currtheme = localStorage.getItem('theme'); 

if(currtheme){
    document.documentElement.setAttribute('data-theme', currtheme);

    if(currtheme === 'dark'){
        toggleSwitch.checked = true
        darkMode();
    };
};