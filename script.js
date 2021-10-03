// Calculator

let screen = document.querySelector("#screen");
let key = document.querySelectorAll(".key");
key.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    e.preventDefault();
    if (elem.value === "DEL") {
      screen.value = screen.value.toString().slice(0, -1);
    } else if (elem.value === "=") {
      screen.value = eval(screen.value);
    } else if (elem.value === "RESET") {
      screen.value = "";
    } else if (elem.value === "x") {
      screen.value += "*";
    } else {
      screen.value += elem.value;
    }
  });
});

// Theme Slider

// Theme 1
let slider = document.querySelector(".slider");
let circle = document.querySelector(".circle");
slider.addEventListener("click", (e) => {
  console.log(e);
//   Theme 1
  if (e.offsetX > 4 && e.offsetY < 28) {
    circle.style.transform = "translateX(-20px)"
    document.body.style.background = "hsl(222, 26%, 31%)"
    document.querySelector("header").style.color = "#fff"
    document.querySelector(".circle").style.background = " hsl(6, 63%, 50%)"
    document.querySelector(".slider").style.background = "hsl(223, 31%, 20%)";
    document.querySelector("#screen").style.background = "hsl(224, 36%, 15%)";
    document.querySelector("#screen").style.color = "#fff";
    document.querySelector("#keys").style.background = "hsl(223, 31%, 20%)";
    document.querySelectorAll(".key").forEach((elem)=>{
        elem.style.background = " hsl(30, 25%, 89%)";
        elem.style.boxShadow = " 0 -3px 0 0  hsl(28, 16%, 65%) inset";
        elem.style.color = "hsl(221, 14%, 31%)"
        if(elem.value === "RESET" || elem.value === "DEL"){
             elem.style.background = "hsl(225, 21%, 49%)";
             elem.style.color = "#fff";
             elem.style.boxShadow = " 0 -3px 0 0 hsl(224, 28%, 35%) inset";
        }
        if(elem.value === "="){
            elem.style.background = "hsl(6, 63%, 50%)";
            elem.style.color = "#fff";
            elem.style.boxShadow = " 0 -3px 0 0  hsl(25, 99%, 27%) inset";
       }
    })
  }
//   Theme 2
  if (e.offsetX > 28 && e.offsetY < 46) {
    circle.style.transform = "translateX(0px)";
    document.body.style.background = "hsl(0, 0%, 90%)"
    document.querySelector("header").style.color = "hsl(60, 10%, 19%)"
    document.querySelector(".circle").style.background = " hsl(25, 98%, 40%)"
    document.querySelector(".slider").style.background = "hsl(0, 5%, 81%)";
    document.querySelector("#screen").style.background = " hsl(0, 0%, 93%)";
    document.querySelector("#screen").style.color = "hsl(60, 10%, 19%)";
    document.querySelector("#keys").style.background = " hsl(0, 5%, 81%)";
    document.querySelectorAll(".key").forEach((elem)=>{
        elem.style.background = "hsl(45, 7%, 89%) ";
        elem.style.boxShadow = " 0 -3px 0 0 hsl(35, 11%, 61%)  inset";
        elem.style.color = "#000"
        if(elem.value === "RESET" || elem.value === "DEL"){
             elem.style.background = "hsl(185, 42%, 37%)";
             elem.style.color = "#fff";
             elem.style.boxShadow = " 0 -3px 0 0 hsl(185, 58%, 25%) inset";
        }
        if(elem.value === "="){
            elem.style.background = "hsl(25, 98%, 40%)";
            elem.style.color = "#fff";
            elem.style.boxShadow = " 0 -3px 0 0  hsl(25, 99%, 27%) inset";
       }
    })
  }
//   Theme 3
  if (e.offsetX > 46 && e.offsetY < 64) {
    circle.style.transform = "translateX(20px)"
    document.body.style.background = "hsl(268, 75%, 9%)"
    document.querySelector("header").style.color = "hsl(52, 100%, 62%)"
    document.querySelector(".circle").style.background = " hsl(177, 92%, 70%)"
    document.querySelector(".slider").style.background = "hsl(268, 71%, 12%)";
    document.querySelector("#screen").style.background = " hsl(268, 71%, 12%)";
    document.querySelector("#screen").style.color = "hsl(52, 100%, 62%)";
    document.querySelector("#keys").style.background = " hsl(268, 71%, 12%)";
    document.querySelectorAll(".key").forEach((elem)=>{
        elem.style.background = "hsl(268, 47%, 21%)";
        elem.style.boxShadow = " 0 -3px 0 0 hsl(290, 70%, 36%) inset";
        elem.style.color = "hsl(52, 100%, 62%)"
        if(elem.value === "RESET" || elem.value === "DEL"){
             elem.style.background = "hsl(281, 89%, 26%)";
             elem.style.color = "#fff";
             elem.style.boxShadow = " 0 -3px 0 0 hsl(285, 91%, 52%) inset";
        }
        if(elem.value === "="){
            elem.style.background = "hsl(176, 100%, 44%)";
            elem.style.color = "hsl(198, 20%, 13%)";
            elem.style.boxShadow = " 0 -3px 0 0  hsl(177, 92%, 70%) inset";
       }
    })

  }
});
