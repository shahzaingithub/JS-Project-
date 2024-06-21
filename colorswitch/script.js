const buttons=document.querySelectorAll(".button");
const body=document.querySelector("body");

buttons.forEach((button)=>{
    button.addEventListener("click",function (e) {
        console.log(e);
        if(e.target.id==="grey" || e.target.id==="pink" || e.target.id==="black" || e.target.id==="orange" || e.target.id==="whitesmoke"){
            body.style.backgroundColor=e.target.id;
        }
    })
})