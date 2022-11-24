import { renderItem } from "./renders.js";
import { validateInput } from "./validation.js";

export const createItemHandler = (event) => {
  event.preventDefault();
  const { currentTarget: form } = event;

  const isValid = [...form.elements].reduce((acc, input) => {
    if (input.tagName !== 'BUTTON') {
      const result = validateInput(input);

      return !acc ? acc : result;
    }

    return acc;
  }, true);

  if (isValid) {
    const data = JSON.parse(localStorage.data);
    const user = {
      name: form.elements.name.value,
      email: form.elements.email.value
    };

    data.push(user);

    localStorage.data = JSON.stringify(data);
    renderItem(user);
    form.reset();
  }
};
