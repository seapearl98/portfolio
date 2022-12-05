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