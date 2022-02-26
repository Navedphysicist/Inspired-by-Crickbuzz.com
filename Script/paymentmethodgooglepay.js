var price = localStorage.getItem("price") || "";
  console.log(price);
  document.querySelector("#pricevalue").innerText = "₹" + price;
 

  function back() {  
       window.location.href = "./paymentmethod.html";

  }

  document.querySelector("#form").addEventListener("submit",generate)
 
  function generate(event)
  {  
    var input =document.querySelector("#googlepayid").value;
       var text="navedphysicist@oksbi"
      event.preventDefault();

       console.log("inputvalue",input);
       console.log( "text",text);
      if(text==input)
      {
          alert("VERIFIED")
          window.location.href="./proceed.html"
      }
      else
      {
        alert("NOT-VERIFIED UPI ID")
      }
      

     
  }

  function mychange()
{
    document.querySelector("#submit").style.background="darkgreen"
}