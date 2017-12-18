function contact() {
	var inputname = document.getElementById("name");
	var inputemail = document.getElementById("email");
	var inputsubject = document.getElementById("subject");
	var inputtext = document.getElementById("subject");
	
	
   
	if (inputname.checkValidity() == false){
	   alert("Name Invalid");
	}
	
	if (inputemail.checkValidity() == false){
		alert("Email Invalid");
	}
	
	if (inputsubject.checkValidity() ==false){
		alert("Please Enter Valid Subject")
	}
	
	if(inputtext.checkValidity() == false){
		alert("must have more that 2 characters and less that 300");
	}
}