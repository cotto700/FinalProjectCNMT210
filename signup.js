function signup() {
	var inputname = document.getElementById("name");
	var inputemail = document.getElementById("email");
	var inputpay = document.getElementById("pay");
	
	
   
	if (inputname.checkValidity() == false){
	   alert("Name Invalid");
	}
	
	if (inputemail.checkValidity() == false){
		alert("Email Invalid");
	}
	
	if(inputpay.checkValidity() == false){
		alert("Check Card Number");
	}

}
