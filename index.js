const btnEl=document.querySelector(".btn")
const secondBut=document.getElementById('sec')
const spanEl=document.getElementById('score')


btnEl.onclick=()=>{

    spanEl.innerText++        //spanEl.innerText=spanEl.innerText + 1
}


secondBut.onclick=()=>{
    spanEl.innerText-- 
    
    if (spanEl.innerText <= 0){
        spanEl.innerText=0
    }                                 
}

