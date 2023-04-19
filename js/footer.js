const btn = document.querySelector(".footer_sign")
const alert1 = document.querySelector(".alert")
const alert_text = document.querySelector(".alert--error")
const input = document.querySelector(".footer_input--box")
const check = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

btn.addEventListener("click",()=>{
    alert_text.classList.add("show")
    
    if(input.value.match(check)){

     alert_text.innerHTML="Thank you for your message. It has been sent."   
     alert1.classList.remove("show")
    }

    

    else{
        alert1.classList.add("show")
        alert_text.innerHTML="One or more fields have an error. Please check and try again."   
    }

        
})

