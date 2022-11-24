import { renderItem } from "./renders.js";
import { createItemHandler } from "./listenters.js";
import { validateInput } from "./validation.js";

const form = document.querySelector('form');
localStorage.data = localStorage.data ? localStorage.data : '[]';
const data = JSON.parse(localStorage.data);

data.forEach((user) => {
  renderItem(user);
});

form.addEventListener('submit', createItemHandler);

form.addEventListener('change', ({ target: input }) => {
  validateInput(input);
});

