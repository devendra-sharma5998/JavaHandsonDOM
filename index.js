// question 1
let c=document.getElementById("text");
console.log(c.innerText);

// question 2
let a=document.getElementsByTagName("h1");
  console.log(a[0].innerText)


// question 3
let b=document.getElementsByClassName("box")
console.log(b[0].innerText)

//question 4

let d=document.getElementById("h2");
d.innerText="Hello World !!!"


//  Question 5


let flexcontainer=document.getElementById("container");
let flexdirectionbtn=document.getElementById("ChangeFlexDirection");

flexdirectionbtn.addEventListener("click",function(){
  flexcontainer.style.flexDirection="column";
})




//   Question 6

let changecolor=document.getElementById("Heading");
changecolor.style.color="red"


// Question  7
let changeText=document.getElementById("changetext");
let replaceBtn=document.getElementById("replace");
replaceBtn.addEventListener("click",function(){
  changeText.innerText="Welcome to Elevation Academy";
  changeText.style.color="blue";
  
})


    let timers = document.getElementById("clock");


function timer(){
    let times=new Date();
    let hours =times.getHours();
    let minutes=times.getMinutes();
    let Second=times.getSeconds();
    console.log(hours, minutes, Second);
    timers.innerText=`${hours}: ${minutes}: ${Second}`;

}
setInterval(timer, 1000);