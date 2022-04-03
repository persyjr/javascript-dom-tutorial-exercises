let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let lielem = document.createElement("li");
	lielem.innerHTML="Fourth element"
	let ul = document.querySelector("#myList");
	ul.appendChild(lielem);

});
