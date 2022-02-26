var price=localStorage.getItem("price") || "" ;
 
 
 function plan(num)
 {   
     document.querySelector("#thirdlastplan").style.background="#fff"
     document.querySelector("#thirdlastplan").style.color="black"
     document.querySelector("#secondplan").style.background="#fff"
     document.querySelector("#secondplan").style.color="black"
     document.querySelector("#firstplan").style.background="#fff"
     document.querySelector("#firstplan").style.color="black"
     

   if(num==1)
   {
     console.log("hello 1");
     document.querySelector("#firstplan").style.background="#097"
     document.querySelector("#firstplan").style.color="#fff"
      price=999;

  


   }
   else if(num==2)
   {
     console.log("hello 2");
     document.querySelector("#secondplan").style.background="#097"
     document.querySelector("#secondplan").style.color="#fff"
     price=500;
    
   }
   else 
   {
     console.log("hello 3");
     document.querySelector("#thirdlastplan").style.background="#097"
     document.querySelector("#thirdlastplan").style.color="#fff"
     price=250;

     
   }
 }

document.querySelector("#form").addEventListener("submit",generate)

function generate(event)
{
    event.preventDefault();
    console.log("hello");
    localStorage.setItem("price",price)
    window.location.href="./payment.html"
   
}

function mychange()
{
    document.querySelector("#submit").style.background="rgb(3, 107, 85)"
}