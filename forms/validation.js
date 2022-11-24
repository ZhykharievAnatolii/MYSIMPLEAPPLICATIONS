export function validateInput(input) {
  const { value, dataset: { min, max } } = input;
  const validationMessage = input.nextElementSibling;

  if (value === '') {
    validationMessage.innerText = 'This field is required';
    return false;
  }

  if (value.length < +min) {
    validationMessage.innerText = `This field should have minimum ${min} symbols`;
    return false;
  }

  if (value.length > +max) {
    validationMessage.innerText = `This field should have maximum ${max} symbols`;
    return false;
  }

  validationMessage.innerText = '';
  return true;
}
