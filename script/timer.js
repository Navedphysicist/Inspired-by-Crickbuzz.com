document.querySelector("#form").addEventListener("submit", optSent);

var otpArr = JSON.parse(localStorage.getItem("otpDetails")) || [];
function optSent(event){
    event.preventDefault();
    var otpObj = {
      num1 = document.querySelector("#num1").value,
      num2 = document.querySelector("#num2").value,
      num3 = document.querySelector("#num3").value,
      num4 = document.querySelector("#num4").value,
      num5 = document.querySelector("#num5").value,
      num6 = document.querySelector("#num6").value,
    };

    otpArr.push(otpObj)
    console.log(otpArr)
    localStorage.setItem("otpDetails", JSON.stringify(otpArr));

    document
       .querySelector("input[type='submit']")
       .addEventListener("click",function(){
        window.location.href="./next.html"
    });            
}