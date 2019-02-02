// Your code goes here
// initial commit

//When mousing over the main bus logo, you'll get a Mona Lisa picture dabbing with illuminati
let images = document.querySelectorAll('img');
images[0].addEventListener('mouseover', (event) => {
event.target.setAttribute('src', 'https://i.ytimg.com/vi/xp02jUxxCOw/maxresdefault.jpg');
});


//When clicking on any of the navigation anchors, it'll inform you that the illuminati is real
let anchors = document.querySelectorAll('a');
for (let i = 0; i <anchors.length; i++){
anchors[i].addEventListener('click', (event) => {
    alert('The illuminati is real');
})};


//When pressing down any keys, it'll change the background of the body to a random colors of the rainbow
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let body = document.querySelector('body');
body.addEventListener('keydown', (event) => {
    body.style.backgroundColor = colors[Math.floor(Math.random()*(colors.length-1))];
});