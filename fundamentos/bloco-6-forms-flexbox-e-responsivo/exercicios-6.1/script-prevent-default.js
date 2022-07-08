// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function preventDef(event) {
  event.preventDefault();
}

HREF_LINK.addEventListener('click', preventDef);
INPUT_CHECKBOX.addEventListener('click', preventDef);

INPUT_TEXT.addEventListener('keypress', (evento) => {
  const character = evento.key;
  if (character !== 'a') {
    evento.preventDefault();
  }
});
