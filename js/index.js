// Your code goes here
// initial commit

//Once site is loaded, it'll trigger the alert to let you know to find out all of the fun features :) It's very troll, I know.
window.addEventListener('load', (event) => {
    alert('Welcome to this dank site. Time for you to figure out all of the fun features!');
});

//When mousing over the main bus logo, you'll get a Mona Lisa picture dabbing with illuminati
let images = document.querySelectorAll('img');
images[0].addEventListener('mouseenter', (event) => {
event.target.setAttribute('src', 'https://i.ytimg.com/vi/xp02jUxxCOw/maxresdefault.jpg');
});

//when leaving the logo area, the image will return to normal
images[0].addEventListener('mouseleave', (event) => {
    event.target.setAttribute('src', 'img/fun-bus.jpg');
});

//When double clicking the image to the right of the "Let's go!" paragraph, it'll show an illuminati image
images[1].addEventListener('dblclick', (event) => {
    event.target.setAttribute('src', 'https://pbs.twimg.com/profile_images/479767201793073152/NLdq9plS_400x400.jpeg');
});

//when holding down the key in the window, one of the images will show the troll face
window.addEventListener('keydown', () => {
    images[2].setAttribute('src', 'https://www.getdigital.eu/web/getdigital/gfx/products/__generated__resized/380x380/Aufkleber_Trollface.jpg');
});

//when letting go of the key in the window, it'll go to the original image
window.addEventListener('keyup', () => {
    images[2].setAttribute('src', 'img/fun.jpg');
});

//When clicking on any of the navigation anchors, it'll inform you that the illuminati is real
let anchors = document.querySelectorAll('a');
for (let i = 0; i <anchors.length; i++){
anchors[i].addEventListener('click', (event) => {
    alert('The illuminati is real');
})};


//When using the scroll wheel on your mouse, it'll change the background of the body to a random colors of the rainbow
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let body = document.querySelector('body');
body.addEventListener('wheel', (event) => {
    body.style.backgroundColor = colors[Math.floor(Math.random()*(colors.length-1))];
});

//When trying to access the contextmenu via right clicking on the page, it'll alert you to stop trying to inspect ^_^
window.addEventListener('contextmenu', (event) => {
    alert('Stop trying to inspect my stuff');
});

//When using the scroll bar (without using your mouse wheel), it'll change all the anchor names to "illuminati"
window.addEventListener('scroll', () => {
    const phrase = ['The', 'Illuminati', 'Is', 'Real'];
    for (let i = 0; i < anchors.length; i++){
        anchors[i].textContent = phrase[i];
    }
});