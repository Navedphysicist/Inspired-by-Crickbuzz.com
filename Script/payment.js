var price = localStorage.getItem("price") || "";
  console.log(price);
  document.querySelector("#pricevalue").innerText = "₹" + price;
 

  function back() {
    let text = "Are you sure you want to cancel the transaction?";
    if (confirm(text)) {
      window.location.href = "./All plans.html";
    } else {
      window.location.href = "./payment.html";
    }
  }
  
  var Data = [
    {
      image_url:
        "https://api.payu.in/public/assets/images/card-icon.svg",
      name: "Cards (Credit/Debit)",
      icon:"https://api.payu.in/public/assets/images/accordian-arrw.svg"
    },
    {
      image_url:
        "https://api.payu.in/public/assets/images/net-banking-icon.svg",
      name: "Net Banking",
      icon:"https://api.payu.in/public/assets/images/accordian-arrw.svg"
    },
    {
      image_url:
        "https://api.payu.in/public/assets/images/wallet-icon.svg",
      name: "Wallet",
      icon:"https://api.payu.in/public/assets/images/accordian-arrw.svg"
    },
    {
      image_url:
        "https://api.payu.in/public/assets/images/upi-icon.svg",
      name: "UPI",
      icon:"https://api.payu.in/public/assets/images/accordian-arrw.svg"
    },
    {
      image_url:
        "https://api.payu.in/public/assets/images/bank-icons/icic.svg",
      name: "ICICI Bank PayLater",
      icon:"https://api.payu.in/public/assets/images/accordian-arrw.svg"
    },
    {
      image_url:
        "https://api.payu.in/public/assets/images/lazypay.svg",
      name: "LazyPay",
      icon:"https://api.payu.in/public/assets/images/accordian-arrw.svg"
    },
    {
      image_url:
        "https://api.payu.in/public/assets/images/wallet-logos/paytm.svg",
      name: "Paytm",
      icon:"https://api.payu.in/public/assets/images/accordian-arrw.svg"
    },
    
    {
      image_url:
        "https://api.payu.in/public/assets/images/wallet-logos/twid.svg",
      name: "Pay with Rewards",
      icon:"https://api.payu.in/public/assets/images/accordian-arrw.svg"
    }

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
    name.setAttribute("id","name");
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
      window.location.href="./paymentmethod.html"
  }

 

