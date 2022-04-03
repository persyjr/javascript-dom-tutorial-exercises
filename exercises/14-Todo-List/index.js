// Your code here
//CREATE 


//CREATE ON CLICK
let entrada = document.querySelector("#addToDo");
let contententrada=entrada.value;

entrada.addEventListener('keypress', function(e) {
	//your code here

    if (e.key === 'Enter') {
        // code for enter
        let lielem = document.createElement("li");
        //lielem.textContent=e.srcElement.value;
        //lielem.innerHTML= `New item ${contententrada}`;
        lielem.textContent= `New item ${contententrada}`;
        let ul = document.querySelector("ul");
        ul.appendChild(lielem);
    
      }

});