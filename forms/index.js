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

// const xhr= new XMLHttpRequest();
// const list=document.querySelector('ul');
// xhr.open('GET',url)
// xhr.send();
// xhr.response
// const data=JSON.parse(xhr.response);
// xhr.onload=()=>{
//   const data=JSON.parse(xhr.response);
//   Object.values(data).forEach((transactions)=>{
//     const item=document.querySelector('li')  ;
//     item.innerText=transactions.description
//     list.append(item)
//   })
//   // console.log(xhr.response)
// };
// console.log(xhr.response);
// xhr.onerror
// const url=new URL('http:localhost:3000/users');
// url.searchParams.append('name','Anatolii');
// url.href
// 'http://localhost:3000/users?name=Anatolii'
// url.searchParams.append('lastname','Anatolii');
// url.href
// 'http://localhost:3000/users?name=Anatolii&lastname=Anatolii'