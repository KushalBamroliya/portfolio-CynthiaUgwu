const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


function gsapforheropage(){
    gsap.from('#name',{
        y:-20,
        duration:0.5,
        delay:0.5,
        opacity:0,
    })
    gsap.from('#menu',{
        y:-20,
        duration:0.5,
        delay:0.5,
        opacity:0,
    })
    gsap.from('#first',{
        y:50,
        duration:0.5,
        delay:0.5,
        opacity:0,
    })
    gsap.from('#second',{
        y:50,
        duration:0.5,
        delay:0.8,
        opacity:0,
    })
    gsap.from('#city',{
        y:-25,
        duration:0.7,
        delay:1.1,
        opacity:0,
    })
    gsap.from('.minihanding',{
        x:30,
        duration:0.9,
        delay:1.1,
        opacity:0,
    })
    gsap.from('.herofooter',{
        duration:0.9,
        delay:1.1,
        opacity:0,
    })
}
gsapforheropage();


function secondpageanimation(){
    document.querySelectorAll('.element').forEach((elem)=>{
        elem.addEventListener('mousemove',(details)=>{
            let diff = details.clientY+"px" - elem.getBoundingClientRect().top;
            // console.log(details.clientX, details.clientY);
            gsap.to(elem.querySelector('.element img'),{
                opacity:1,
                ease: Power3,
                top:diff,
                left:details.clientX-180+"px",     
            })  
        })
        elem.addEventListener('mouseleave',(details)=>{
            gsap.to(elem.querySelector('.element img'),{
                opacity:0,   
            })  
        })
        elem.addEventListener('mouseenter',(details)=>{
            gsap.to(elem.querySelector('.element h1'),{
                x:50,
                opacity:0.5,   
                duration:0.5,
            })  
        })
        elem.addEventListener('mouseleave',(details)=>{
            gsap.to(elem.querySelector('.element h1'),{
                x:0,
                opacity:1,   
            })  
        })
        elem.addEventListener('mouseenter',(details)=>{
            gsap.to(elem.querySelector('.element h5'),{
                x:-10,
                opacity:0.5,   
                duration:0.3,
            })  
        })
        elem.addEventListener('mouseleave',(details)=>{
            gsap.to(elem.querySelector('.element h5'),{
                x:0,
                opacity:1,   
            })  
        })
    })
}
secondpageanimation();

let time = document.querySelector('.copy-time .times');
setInterval(()=>{
    const d = new Date();
time.innerText = d.toLocaleTimeString();
},1000)

