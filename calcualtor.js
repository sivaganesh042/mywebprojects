let user_input=document.getElementById("user-input");
let button1=document.querySelectorAll("button");
let s=' '
button1.forEach(element=>{
    element.addEventListener("click",(e)=>{
        console.log(e.target.innerText)
        if(e.target.innerText=='='){
            s=String(eval(s))
            user_input.value=s;
        }
        else if(e.target.innerText=='AC'){
            s=''
            user_input.value=s;

        }
        else if(e.target.innerText=='DEL'){
            s=s.substring(0,s.length-1)
            user_input.value=s;

        }
        else{
           s+=e.target.innerText
           user_input.value=s
        }
    })
})
