const output =document.querySelector("input");
const buttons =document.querySelectorAll(".button");
let string = "";

buttons.forEach(function(button) {
    button.addEventListener("click",function calculate(){
        button.classList.add("click");
        setTimeout(function(){
            button.classList.remove("click");
        },200)

        if(button.id=="reset" ){
            string =" ";
            output.value=string;
        }
        else if(button.id=="="){
            try{
                string=eval(string);
                output.value=string;
            }catch{
                string="Error!!!"
                output.value=string;
            }
           
        }
        else if(button.id=="del"){
            if(string=='Error!!!'){
                string='';
                output.value=string;
            }else{
            string = string.slice(0,-1)
            output.value=string;
        }
        }
        else{
        string  =string+ button.id;
        output.value=string;
        }
    })
});

