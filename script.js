const slider = document.getElementById("range");
const followers = document.getElementById("followers");
const price = document.getElementById("price");
const priceMob = document.getElementById("price-mob");
const sliderToggle = document.querySelector(".toggle-button");
const  toggle = document.querySelector(".toggle")
const track = document.getElementById("slider-track");

slider.addEventListener("input", function () {
 
  if (slider.value === "1") {
    followers.innerHTML = "10K PAGEVIEWS";
    price.innerHTML = " 8.00";
    priceMob.innerHTML = " 8.00";
  } else if (slider.value === "2") {
    followers.innerHTML = "50K PAGEVIEWS";
    price.innerHTML = " 12.00";
    priceMob.innerHTML = "12.00";
  } else if (slider.value === "3") {
    followers.innerHTML = "100K PAGEVIEWS";
    price.innerHTML = " 16.00";
    priceMob.innerHTML = " 16.00";
  } else if (slider.value === "4") {
    followers.innerHTML = "500K PAGEVIEWS";
    price.innerHTML = " 24.00";
    priceMob.innerHTML = " 24.00";
  } else if (slider.value === "5") {
    followers.innerHTML = "1M PAGEVIEWS";
    price.innerHTML = " 36.00";
    priceMob.innerHTML = "36.00";
  }
 
});


let finalPrice = 0;


sliderToggle.addEventListener("click", function(){
  toggle.classList.toggle("active")
  if(toggle.classList.contains("active")){
   finalPrice = parseInt(price.innerHTML);
  price.innerHTML = (finalPrice / 100) * 75;
  priceMob.innerHTML =(finalPrice / 100) * 75;}
  else{
  finalPrice = parseInt(price.innerHTML);
  price.innerHTML = (finalPrice / 75) * 100;
  priceMob.innerHTML =(finalPrice / 75) * 100;}
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