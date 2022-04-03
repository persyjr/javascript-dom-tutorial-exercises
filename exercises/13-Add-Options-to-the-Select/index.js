let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here
let select = document.querySelector("#mySelect");
for (i=0; i<countries.length;i++){
let options = document.createElement("option");
options.innerHTML=countries[i];
select.appendChild(options);
}



select.addEventListener('change', (event) => {
    
    alert(`EL PAIS ELEGIDO ES: ${event.target.value}`);
});