let book=document.querySelector(".book")
let heading__nav=document.querySelector(".heading__nav")
let heading__h2=document.querySelector(".heading__h2")


book.addEventListener("click",(event)=>{
    heading__nav.classList.toggle("book__opened")
    heading__nav.classList.toggle("book__closed")
    book.classList.toggle("opened")
    book.classList.toggle("closed2x")

})

heading__h2.addEventListener("click",(event)=>{
    heading__nav.classList.toggle("book__opened")
    heading__nav.classList.toggle("book__closed")
    book.classList.toggle("opened")
    book.classList.toggle("closed2x")

})

let picture1=document.querySelector(".picture1")
let picture2=document.querySelector(".picture2")
let picture3=document.querySelector(".picture3")
let buttonLeft=document.querySelector(".left")
let buttonRight=document.querySelector(".right")


buttonRight.addEventListener("click",(event)=>{
    
   if(picture1.classList.value==="picture1 On"){
    picture1.classList.toggle("On")
    picture1.classList.toggle("Off")
    picture2.classList.toggle("Off")
    picture2.classList.toggle("On")
    event.stopPropagation()
   }else if(picture2.classList.value==="picture2 On"){
    picture2.classList.toggle("Off")
    picture2.classList.toggle("On")
    picture3.classList.toggle("On")
    picture3.classList.toggle("Off")
    event.stopPropagation()
   }else{
    picture3.classList.toggle("Off")
    picture3.classList.toggle("On")
    picture1.classList.toggle("On")
    picture1.classList.toggle("Off")
    event.stopPropagation()
   }
   
})
buttonLeft.addEventListener("click",(event)=>{
    
    if(picture1.classList.value==="picture1 On"){
     picture1.classList.toggle("On")
     picture1.classList.toggle("Off")
     picture3.classList.toggle("Off")
     picture3.classList.toggle("On")
     event.stopPropagation()
    }else if(picture3.classList.value==="picture3 On"){
     picture3.classList.toggle("Off")
     picture3.classList.toggle("On")
     picture2.classList.toggle("On")
     picture2.classList.toggle("Off")
     event.stopPropagation()
    }else{
     picture2.classList.toggle("Off")
     picture2.classList.toggle("On")
     picture1.classList.toggle("On")
     picture1.classList.toggle("Off")
     event.stopPropagation()
    }
    
 })

 let picture5=document.querySelector(".picture5")
 let picture6=document.querySelector(".picture6")
 let picture7=document.querySelector(".picture7")
 let increment=0
 
 setInterval(()=>{
    increment=increment+1
    
        if(increment===1){
            picture5.classList.toggle("visible")
            picture5.classList.toggle("hidden")
            picture6.classList.toggle("visible")
            picture6.classList.toggle("hidden")
            
        }
        if(increment===2){
            picture6.classList.toggle("visible")
            picture6.classList.toggle("hidden")
            picture7.classList.toggle("visible")
            picture7.classList.toggle("hidden")
            
        }
        if(increment===3){
            picture7.classList.toggle("visible")
            picture7.classList.toggle("hidden")
            picture5.classList.toggle("visible")
            picture5.classList.toggle("hidden")
            increment=0
        }
 },2000)

 let pictures2=document.querySelector(".pictures2")
 let picture8=document.querySelector(".picture8")
 let picture9=document.querySelector(".picture9")
 let fadeDiv=document.querySelector(".fadeDiv")

 fadeDiv.addEventListener("mouseover",(event)=>{
        picture8.classList.toggle("fadeOff")
        picture8.classList.toggle("fadeOn")  
        picture9.classList.toggle("fadeOff")
        picture9.classList.toggle("fadeOn")
        event.stopPropagation()
   
})
fadeDiv.addEventListener("mouseout",(event)=>{
        picture9.classList.toggle("fadeOn")
        picture9.classList.toggle("fadeOff")
        picture8.classList.toggle("fadeOn")
        picture8.classList.toggle("fadeOff")  
        event.stopPropagation()
   
})

let Box1=document.querySelector(".Box1")
let Box2=document.querySelector(".Box2")
let Box3=document.querySelector(".Box3")
let Box4=document.querySelector(".Box4")
let Box5=document.querySelector(".Box5")
let Box6=document.querySelector(".Box6")

let img1=document.querySelector(".img1")
let img2=document.querySelector(".img2")
let img3=document.querySelector(".img3")
let img4=document.querySelector(".img4")
let img5=document.querySelector(".img5")
let img6=document.querySelector(".img6")

Box1.addEventListener("click",(event)=>{
    img1.classList.toggle("On1")
    img1.classList.toggle("Off1")
})
Box2.addEventListener("click",(event)=>{
    img2.classList.toggle("On1")
    img2.classList.toggle("Off1")
})
Box3.addEventListener("click",(event)=>{
    img3.classList.toggle("On1")
    img3.classList.toggle("Off1")
})
Box4.addEventListener("click",(event)=>{
    img4.classList.toggle("On1")
    img4.classList.toggle("Off1")
})
Box5.addEventListener("click",(event)=>{
    
    img5.classList.toggle("On1")
    img5.classList.toggle("Off1")
})
Box6.addEventListener("click",(event)=>{
    img6.classList.toggle("On1")
    img6.classList.toggle("Off1")
})

