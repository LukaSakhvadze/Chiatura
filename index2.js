
let Form=document.querySelector("#Form")
let body=document.querySelector("body")


Form.addEventListener("submit",(event)=>{
    event.preventDefault()
    body.classList.toggle("SecondBody")
    body.innerHTML=""
    body.innerHTML="<header><h2 class=Page2H2>გმადლობთ🙏🙏🙏</h2> <br><h2 class=Page2H2>🚀🚀🚀თქვენი განცხადება მიღებულია✅✅✅</h2> </header> <br> <main class=SecondClass><h4 class=page2h4><a class=Page2a1 >უკან გადასვლა</a></h4><h4 class=page2h4><a class=Page2a2 href=index.html>მთავარ გვერდზე დაბრუნება</a></h4></main>"
    let returnBack=document.querySelector(".Page2a1")
    returnBack.addEventListener("click",(event)=>{
        returnBack.classList.toggle("SecondBody")
        location.reload()
    })
    
})
   
