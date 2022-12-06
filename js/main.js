// jquery

var str = 'L O A D I N G . . .';
var typing = ' ';
var i = 0;
(function type() {
  if(i < str.length){
    typing = typing+str.charAt(i);
    $('#type').text(typing+'|');
  }else{
    $('#type').text(typing);
    return false;
  }
  var ran = Math.floor(Math.random() * 200) + 50;//this gives a random delay between each character so it feels more realistic
  //set ran to a fixed number if you want consistent speed.
  setTimeout(function(){
    type();
  }, ran)
  i++;
}());


// js
// 로딩이 완료되면 .on이 붙어서 폰트컬러 바꾸기
const blink = document.querySelectorAll(".yellow")
const loadingPage = document.querySelector(".load")
const sparkle = document.querySelectorAll(".sparkle")
const section = document.querySelectorAll("section")
console.log(section)

function colorChange(){
    blink.forEach(element => {
        element.classList.add("colorChange")
    });
    sparkle.forEach(element => {
        element.classList.add("colorChange")
    });


}
self.setTimeout("colorChange()",4600);

function toTop(){
  loadingPage.classList.add("totop")
  section.forEach(element => {
    element.style.display = "block";
  });
}
self.setTimeout("toTop()",9500);


const projects = document.querySelectorAll('section');
  console.log(projects);

  const projectNav = document.querySelectorAll(".navi");
  console.log(projectNav,"네비게이션")


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
  })
} 

//스크롤
let devHeight;
devHeight = window.innerHeight;
console.log(devHeight,"현재높이값")
window.addEventListener('resize',()=>{
    devHeight = window.innerHeight;
    console.log(devHeight) //현재높이값
})
const sections = document.querySelectorAll("section");
console.log(sections,"페이지 수")
for(let i=0;i<sections.length;i++){
    sections[i].style.height = devHeight + 'px';
}


window.addEventListener("scroll",e=>{
    let scroll = document.querySelector("html").scrollTop;
    console.log(scroll,"스크롤값")
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
        });
    };
})

//navigation버튼 클릭시 해당페이지로 이동

for(let k=0;k<projectNav.length;k++){
    projectNav[k].addEventListener("click",e=>{
        e.preventDefault();
        window.scroll({
            top:(k+2)*devHeight,
            left:0,
            behavior:'smooth'
        })
    })
}