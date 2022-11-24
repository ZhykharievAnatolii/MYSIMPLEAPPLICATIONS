const list = document.querySelector('ul');

export const PI = 3.14;
export const obj = { name: 'Bohdan' };

export function renderItem({ name, email }) {
  const item = document.createElement('li');

  item.innerHTML = `
    <span>${name}</span>
    <span>${email}</span>
  `;
  list.append(item);
}

export const calcAverageGrade = (arr) => {
  return arr.reduce((acc, grade) => {
    return acc + grade;
  }, 0) / arr.length;
}

