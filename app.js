const walter = document.getElementById("heisenberg");
const right = document.querySelector(".img2");
const goddamn = document.getElementById("goddamn")

function handleInputChange() {
    walter.value = walter.value.toUpperCase();
  }
  
  walter.addEventListener("input", handleInputChange);
  

function myFunction() {

const heisenberg = walter.value.trim(); 

if (heisenberg ==="HEISENBERG"){
    right.style.display = "block"
    goddamn.style.display = "block"

} else{
    right.style.display= "none"
    goddamn.style.display = "none"
}

}