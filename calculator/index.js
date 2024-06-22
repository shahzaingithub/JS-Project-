const buttons = document.querySelectorAll(".button");
let string = '';
const inputField = document.querySelector(".input");


buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        buttontext = e.target.innerHTML
        if(buttontext === "AC"){
            string = ''
        }else if(buttontext === "+/-"){
            if(string !== '' && !isNaN(string)){
                string=(parseFloat(string)*-1).toString();
            }
        }else if(buttontext === '='){
            try{
            string =eval(string).toString();
        }catch{
            string = "Error";
        }
        }else{
            string +=buttontext;
        }
        inputField.value =string;
    });
})