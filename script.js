const slider = document.getElementById("range");
const followers = document.getElementById("followers");
const price = document.getElementById("price");
const priceMob = document.getElementById("price-mob");
const sliderToggle = document.querySelector(".toggle-button");
const  toggle = document.querySelector(".toggle")
const toggleButton = document.querySelector(".container")
const track = document.getElementById("slider-track");

slider.addEventListener("input", function () {
 
  if(toggle.classList.contains("active") && slider.value ==="1"){
    price.innerHTML = "6.00"
    priceMob.innerHTML = "6.00"
  }else if(toggle.classList.contains("active") && slider.value ==="2"){
    price.innerHTML = "9.00"
    priceMob.innerHTML = "9.00"
  }else  if(toggle.classList.contains("active") && slider.value ==="3"){
    price.innerHTML = "12.00"
    priceMob.innerHTML = "12.00"
  }else if(toggle.classList.contains("active") && slider.value ==="4"){
    price.innerHTML = "18.00"
    priceMob.innerHTML = "18.00"
  }else if(toggle.classList.contains("active") && slider.value ==="5"){
    price.innerHTML = "27.00"
    priceMob.innerHTML = "27.00"
  } else if(toggle.classList.contains("toggle") && slider.value ==="1"){
    price.innerHTML = "8.00"
    priceMob.innerHTML = "8.00"
  } else if(toggle.classList.contains("toggle") && slider.value ==="2"){
    price.innerHTML = "12.00"
    priceMob.innerHTML = "12.00"
  } else if(toggle.classList.contains("toggle") && slider.value ==="3"){
    price.innerHTML = "16.00"
    priceMob.innerHTML = "16.00"
  } else if(toggle.classList.contains("toggle") && slider.value ==="4"){
    price.innerHTML = "24.00"
    priceMob.innerHTML = "24.00"
  } else if(toggle.classList.contains("toggle") && slider.value ==="5"){
    price.innerHTML = "36.00"
    priceMob.innerHTML= "36.00"
  }
 
});





toggleButton.addEventListener("click", function(){
  toggle.classList.toggle("active")
  if(toggle.classList.contains("active") && slider.value ==="1"){
    price.innerHTML = "6.00"
    priceMob.innerHTML = "6.00"
  }else if(toggle.classList.contains("active") && slider.value ==="2"){
    price.innerHTML = "9.00"
    priceMob.innerHTML = "9.00"
  }else  if(toggle.classList.contains("active") && slider.value ==="3"){
    price.innerHTML = "12.00"
    priceMob.innerHTML = "12.00"
  }else if(toggle.classList.contains("active") && slider.value ==="4"){
    price.innerHTML = "18.00"
    priceMob.innerHTML = "18.00"
  }else if(toggle.classList.contains("active") && slider.value ==="5"){
    price.innerHTML = "27.00"
    priceMob.innerHTML = "27.00"
  } else if(toggle.classList.contains("toggle") && slider.value ==="1"){
    price.innerHTML = "8.00"
    priceMob.innerHTML = "8.00"
  } else if(toggle.classList.contains("toggle") && slider.value ==="2"){
    price.innerHTML = "12.00"
    priceMob.innerHTML = "12.00"
  } else if(toggle.classList.contains("toggle") && slider.value ==="3"){
    price.innerHTML = "16.00"
    priceMob.innerHTML = "16.00"
  } else if(toggle.classList.contains("toggle") && slider.value ==="4"){
    price.innerHTML = "24.00"
    priceMob.innerHTML = "24.00"
  } else if(toggle.classList.contains("toggle") && slider.value ==="5"){
    price.innerHTML = "36.00"
    priceMob.innerHTML= "36.00"
  }
   }
)



slider.addEventListener("input", function () {
  
   if (slider.value === "1") {
    track.classList.add("zero-width");
    track.classList.remove("width-quarter")
    track.classList.remove("width-half");
    track.classList.remove("width-seventy-five");
    track.classList.remove("width-hundred");
  } else if (slider.value === "2") {
    track.classList.add("width-quarter");
    track.classList.remove("width-hundred")
    track.classList.remove("width-half");
    track.classList.remove("width-seventy-five");
    track.classList.remove("zero-width");
  } else if (slider.value === "3") {
    track.classList.add("width-half");
    track.classList.remove("width-quarter")
    track.classList.remove("width-seventy-five");
    track.classList.remove("zero-width");
    track.classList.remove("width-hundred");
  } else if (slider.value === "4") {
    track.classList.add("width-seventy-five");
    track.classList.remove("width-quarter")
    track.classList.remove("width-forty");
    track.classList.remove("width-sixty");
    track.classList.remove("zero-width");
    track.classList.remove("width-hundred");
  } else if (slider.value === "5") {
    track.classList.add("width-hundred");
    track.classList.remove("width-quarter")
    track.classList.remove("width-half");
    track.classList.remove("width-seventy-five");
    track.classList.remove("zero-width");
  }
});