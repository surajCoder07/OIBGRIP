const box =document.getElementById("box");
const btn =document.getElementById("btn");
let item=document.getElementById("item");

btn.addEventListener("click",function(){
    if(box.value==""){
        alert("write Something")
    }
    else{
    todo(box.value);
    box.value=''
    }
   
})
function todo(task){
    let li = document.createElement("li");

    li.innerHTML=`${task}
    <i class="fa-sharp fa-solid fa-xmark"></i>`
    item.insertAdjacentElement("afterbegin",li);
     
    li.addEventListener("click",function(){
        this.classList.toggle("complete")
    })
    li.querySelector("i").addEventListener("click",function(){
        li.remove();
    })

}