document.querySelector("#form").addEventListener("submit", myLogin);

var signupArr = JSON.parse(localStorage.getItem("signUpDetails")) || [];
function myLogin(event){
    event.preventDefault();
    var signupObj = {
       email : document.querySelector("#email").value,
    };

    signupArr.push(signupObj)
    console.log(signupArr)
    localStorage.setItem("signUpDetails", JSON.stringify(signupArr));

    document
       .querySelector("input[type='submit']")
       .addEventListener("click",function(){
        window.location.href="./timer.html"
    });            
}

function change()
{
    document.querySelector("#submit").style.background="#097"
}