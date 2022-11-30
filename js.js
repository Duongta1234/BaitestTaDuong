let firtbutton = document.getElementById("firtbutton");
let lastbutton = document.getElementById("lastbutton");

lastbutton.addEventListener("mouseover", function (e) {
  e.preventDefault();
  if ((lastbutton.style.backgroundColor = "#3C64B1")) {
    lastbutton.style.backgroundColor = "white";
    firtbutton.style.color = "white";
    lastbutton.style.color = "#3C64B1";
    firtbutton.style.backgroundColor = "#3C64B1";
  } else {
    lastbutton.style.backgroundColor = "#3C64B1";
    lastbutton.style.color = "white";
    firtbutton.style.backgroundColor = "white";
  }
});
firtbutton.addEventListener("mouseover", function (e) {
  e.preventDefault();
  if ((firtbutton.style.backgroundColor = "#3C64B1")) {
    firtbutton.style.backgroundColor = "white";
    firtbutton.style.color = "#3C64B1";
    lastbutton.style.color = "white";
    lastbutton.style.backgroundColor = "#3C64B1";
  } else {
    
  }
});
