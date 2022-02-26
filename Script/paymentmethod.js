var price = localStorage.getItem("price") || "";
console.log(price);
document.querySelector("#pricevalue").innerText = "₹" + price;


function back() {
 
    window.location.href = "./payment.html";
  
}

var Data = [
  {
    image_url:
      "https://api.payu.in/public/assets/images/upi-logos/upi2/Gpay.svg",
    name: "Google Pay",
    icon:"https://api.payu.in/public/assets/images/accordian-arrw.svg"
  },
  {
    image_url:
      "https://api.payu.in/public/assets/images/upi-logos/upi2/PhonePe.svg",
    name: "PhonePe",
    icon:"https://api.payu.in/public/assets/images/accordian-arrw.svg"
  },
  {
    image_url:
      "https://api.payu.in/public/assets/images/upi-logos/upi2/Bhim.svg",
    name: "BHIM",
    icon:"https://api.payu.in/public/assets/images/accordian-arrw.svg"
  },
  {
    image_url:
      "https://api.payu.in/public/assets/images/upi-logos/upi2/Paytm.svg",
    name: "Paytm",
    icon:"https://api.payu.in/public/assets/images/accordian-arrw.svg"
  },
  {
    image_url:
      "https://api.payu.in/public/assets/images/upi-logos/upi2/amazonpay.svg",
    name: "Amazon Pay",
    icon:"https://api.payu.in/public/assets/images/accordian-arrw.svg"
  },
  {
    image_url:
      "https://api.payu.in/public/assets/images/upi-logos/upi2/try.svg",
    name: "Any UPI ID",
    icon:"https://api.payu.in/public/assets/images/accordian-arrw.svg"
  },
    ]

displayData(Data);

function displayData(Data)
{  
    Data.map( function(ele){

  var maindiv=document.createElement("div")
  maindiv.setAttribute("id","maindiv")
  maindiv.addEventListener("click",function(){
     paymentmethod();
    
    })
  var middlediv=document.createElement("div")
 
  middlediv.setAttribute("id","middlediv")
 
  var image=document.createElement("img")
  image.setAttribute("src",ele.image_url)
  var name=document.createElement("span")
  name.innerText=ele.name
  var icon=document.createElement("img")
  icon.setAttribute("id","icon");
  icon.setAttribute("src",ele.icon)
  middlediv.append(image,name)
  maindiv.append(middlediv,icon)
  document.querySelector("#payoptions").append(maindiv);
  
    })
  
}

function paymentmethod()
{
    window.location.href="./paymentofgooglepay.html"
}



