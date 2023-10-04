const walter = document.getElementById("heisenberg");
const imgElement = document.querySelector(".img");
const text = document.getElementById("text")

function handleInputChange() {
    walter.value = walter.value.toUpperCase();
  }
  
  walter.addEventListener("input", handleInputChange);
  

function myFunction() {

const heisenberg = walter.value.trim(); 

if (heisenberg ==="HEISENBERG"){
    imgElement.src = "images/you-are-goddamn-right.jpg";
    text.textContent = " You're Goddamn Right";
    text.style.fontSize = "28px"
    
}else{
    imgElement.src = "images/are-you-sure.jpg"
    text.textContent = "Are You Sure?"
    // imgElement.style.height ="300px"
    
}
 

}