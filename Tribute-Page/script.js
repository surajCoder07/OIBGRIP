const button =document.getElementById("icon");
const options =document.getElementById("options");

button.addEventListener("click",function(){
    options.classList.toggle("active");
    button.setAttribute("class","fa-solid fa-person-military-pointing icon");
    setTimeout(() => {
    button.setAttribute("class","fa-solid fa-person-military-rifle icon")
}, 100);
})