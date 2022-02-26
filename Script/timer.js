

document.querySelector("#form").addEventListener("submit",optSent);

// var otpArr = JSON.parse(localStorage.getItem("otpDetails")) || [];
// function optSent(event){
//     event.preventDefault();
//     var otpObj = {
//       num1 = document.querySelector("#num1").value,
//       num2 = document.querySelector("#num2").value,
//       num3 = document.querySelector("#num3").value,
//       num4 = document.querySelector("#num4").value,
//       num5 = document.querySelector("#num5").value,
//       num6 = document.querySelector("#num6").value,
//     };

//     otpArr.push(otpObj)
//     console.log(otpArr)
//     localStorage.setItem("otpDetails", JSON.stringify(otpArr));
  

// (".inputs").keyup(function () {
//    if (this.value.length == this.maxLength) {
//      $(this).next(".inputs").focus();
//    }
// });

function movetoNext(current, nextFieldID) {  
   if (current.value.length >= current.maxLength) {  
   document.getElementById(nextFieldID).focus();  
   }
}

function optSent(event)
{
   event.preventDefault()
   window.location.href="./All plans.html"
}

function change()
{
    document.querySelector("#submit").style.background="#097"
}









// Set the date we're counting down to
var countDownDate = new Date("Feb 25, 2022 17:20:60").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = minutes + ": " + seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "RESEND OTP";
  }
}, 1000);

