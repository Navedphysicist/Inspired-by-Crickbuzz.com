var price = localStorage.getItem("price") || "";
console.log(price);
document.querySelector("#pricevalue").innerText = "₹" + price;

function back() {
  window.location.href = "./paymentofgooglepay.html";
}

document.querySelector("#form").addEventListener("submit", generate);

function generate(event) {
  var input = document.querySelector("#googlepayid").value;
  var text = "123456";
  event.preventDefault();

  console.log("inputvalue", input);
  console.log("text", text);
  if (text == input) {
    alert("Payment Sucessful");
    window.location.href = "./paymentsuccessfulpage.html";
  } else {
    alert("Oops! You entered a wrong mpin");
  }
}

function mychange()
{
    document.querySelector("#submit").style.background="rgb(3, 107, 85)"
}