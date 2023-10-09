/* Iteration 4: Make the Canvas App Functional */
// <!-- Ironman - background, helmet, eyes, face-plate  -->
const imagebackground = document.getElementById('background');
const buttonbackground = document.getElementById('btn-background');

buttonbackground.oninput = () => {
  imagebackground.style.fill = buttonbackground.value;
};

const imagehelmet = document.getElementById('helmet');
const buttonhelmet = document.getElementById('btn-helmet');

buttonhelmet.oninput = () => {
  imagehelmet.style.fill = buttonhelmet.value;
};

const imageeyes = document.getElementById('eyes');
const buttoneyes = document.getElementById('btn-eyes');

buttoneyes.oninput = () => {
  imageeyes.style.fill = buttoneyes.value;
};

const imagefaceplate = document.getElementById('face-plate');
const buttonfaceplate = document.getElementById('btn-face-plate');

buttonfaceplate.oninput = () => {
  imagefaceplate.style.fill = buttonfaceplate.value;
};