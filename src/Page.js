import React, { useEffect } from 'react'
import About from './pages/About'
import Contact from './pages/Contact'
import Project01 from './pages/Project01'
import Project02 from './pages/Project02'
import Project03 from './pages/Project03'
import Project04 from './pages/Project04'
import Title from './pages/Title'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from 'locomotive-scroll';
import './styles/Page.scss'
import ProjectNav from './pages/ProjectNav'


export default function Page() {
  

// useEffect(()=>{

// //   gsap.registerPlugin(ScrollTrigger);

// //   const pageContainer = document.querySelector(".Page");
// //   /* SMOOTH SCROLL */
// // const scroller = new LocomotiveScroll({
// //   el: pageContainer,
// //   smooth: true
// // });

// // scroller.on("scroll", ScrollTrigger.update);

// // ScrollTrigger.scrollerProxy(pageContainer, {
// //   scrollTop(value) {
// //     return arguments.length
// //       ? scroller.scrollTo(value, 0, 0)
// //       : scroller.scroll.instance.scroll.y;
// //   },
// //   getBoundingClientRect() {
// //     return {
// //       left: 0,
// //       top: 0,
// //       width: window.innerWidth,
// //       height: window.innerHeight
// //     };
// //   },
// //   pinType: pageContainer.style.transform ? "transform" : "fixed"
// // });

// // ////////////////////////////////////
// // window.addEventListener("load", function () {
// //   let pinBoxes = document.querySelectorAll(".pin-wrap > *");
// //   let pinWrap = document.querySelector(".pin-wrap");
// //   let pinWrapWidth = pinWrap.offsetWidth;
// //   let horizontalScrollLength = pinWrapWidth - window.innerWidth;

// //   // Pinning and horizontal scrolling

// //   gsap.to(".pin-wrap", {
// //     scrollTrigger: {
// //       scroller: pageContainer, //locomotive-scroll
// //       scrub: true,
// //       trigger: "#sectionPin",
// //       pin: true,
// //       // anticipatePin: 1,
// //       start: "top top",
// //       end: pinWrapWidth
// //     },
// //     x: -horizontalScrollLength,
// //     ease: "none"
// //   });

// //   ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll

// //   ScrollTrigger.refresh();
// // }); ?????? ??????


// })
useEffect (()=>{
  const projects = document.querySelectorAll('.Page>section');
  console.log(projects);

  const projectNav = document.querySelectorAll(".navi");
  console.log(projectNav,"???????????????")


for(let i=0;i<projectNav.length; i++){
  projectNav[i].addEventListener("click",e=>{
    e.preventDefault();
  for(let el of projectNav){
    el.classList.remove('on')
  };
  for(let el of projects){
    el.classList.remove('on')
  };
    projectNav[i].classList.add('on');
    projects[i].classList.add('on');
    console.log(i)
  })
} 

//?????????
let devHeight;
devHeight = window.innerHeight;
console.log(devHeight,"???????????????")
window.addEventListener('resize',()=>{
    devHeight = window.innerHeight;
    console.log(devHeight) //???????????????
})
const sections = document.querySelectorAll(".Page>section");
console.log(sections,"????????? ???")
for(let i=0;i<sections.length;i++){
    sections[i].style.height = devHeight + 'px';
}


window.addEventListener("scroll",e=>{
    let scroll = document.querySelector("html").scrollTop;
    console.log(scroll,"????????????")
    for(let i=0;i<sections.length;i++){
        if(scroll>=(i*devHeight) && scroll<(i+1)*devHeight){
            activation(i,sections)
        }   
    }
})
let activation =(index,sections)=>{
    for(let el of sections){
        el.classList.remove("on")
    }
    sections[index].classList.add("on")
}




window.addEventListener("scroll", ()=>{

    let scroll = document.querySelector("html").scrollTop;
    
    for(let i=0; i<sections.length; i++){
        if(scroll >= i*devHeight && scroll < (i+1)*devHeight){
            activation(i,sections);
        }
    }


    let contents = document.querySelectorAll(".Page>section")
    for(let i=0; i<contents.length; i++){
        contents[i].addEventListener("wheel", e=>{
            if(e.wheelDelta >= 0){
                let prev = e.currentTarget.previousElementSibling.offsetTop;
                window.scroll({
                    top: prev,
                    left: 0,
                    behavior: "smooth"
                    
                });
            }else if(e.wheelDelta <= 0){
                let next = e.currentTarget.nextElementSibling.offsetTop;
                window.scroll({
                    top: next,
                    left: 0,
                    behavior: "smooth"
                });
            }
            // else if(e.devHeight >= 3240){
            //   let prev = e.currentTarget.previousElementSibling.offsetTop;
            //   window.scroll({
            //       top: 0,
            //       left: prev,
            //       behavior: "smooth"
            //     });
            // }
        });
    };
})

//navigation?????? ????????? ?????????????????? ??????

for(let k=0;k<projectNav.length;k++){
    projectNav[k].addEventListener("click",e=>{
        e.preventDefault();
        window.scroll({
            top:(k)*devHeight,
            left:0,
            behavior:'smooth'
        })
    })
}
// window.addEventListener('scroll',()=>{ // ??????????????? ???????????? ????????????
//     let scroll = document.querySelector('html').scrollTop; // ????????? ????????????

//     for(i=0;i<projectNav.length;i++){//????????? ?????? ????????? ????????? ????????????.
//         if(scroll>=(i*devHeight) && scroll< [(i+1)*devHeight]){
//             act(i,projectNav); 
//         }

//     }
// })
// let act = (idx,projectNav) => {//??????????????? ????????? .on????????? ????????? ??????
//     for(let el of projectNav){
//         el.classList.remove("on");
//     }
//     projectNav[idx].classList.add("on");
//   }


})


  return (
    <div className='Page'>
        <Title/>
        <About/>
        <Project01/>
        <Project02/>
        <Project03/>
        <Project04/>
        <Contact/>
    </div>
  )
}
