import { buildQueries } from '@testing-library/dom';
import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!
document.querySelectorAll("img").forEach(resim => {
    resim.addEventListener("mouseover",(event) =>{
        event.target.style.filter="grayscale(100%)"
    })
    resim.addEventListener("mouseout",(event) =>{
        event.target.style.filter="grayscale(0%)"
    })
})

window.addEventListener("load",(event)=>{
    setTimeout(()=>{
        document.querySelector("body").style.background = "purple"
    }, "2000")
})

document.querySelectorAll("h2").forEach(baslik=>{
    baslik.addEventListener("click",(event) =>{
        event.target.style.color = "blue";
    })
    baslik.addEventListener("dblclick",(event) =>{
        event.target.style.color = "black"
    })
})

