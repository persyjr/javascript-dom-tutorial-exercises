let elementul = document.querySelector("#parentLi");
let listli =elementul.childNodes; 
elementul.removeChild(listli[3])
console.log(listli)