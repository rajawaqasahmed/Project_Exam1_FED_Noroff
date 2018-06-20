/*
function validate(){
	var x=document.getElementById('fname').value;
	var y=document.getElementById('lastName').value;
	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	var email=document.getElementById('email').value;
	var tele=document.getElementById('phone').value;
	var fonePattern = /^[0-9]{3}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    
    
	if(x==""){
        alert("CANNOT BE EMPTY");
        document.getElementById('fnError').innerHTML = "This field cannot be empty";
		document.getElementById('firstNameError').style.display = 'block';
		
        
        
	}
	else{
		alert("you entered a valid name");
	}
	if(y==""){
		document.getElementById('lastNameError').style.display = 'block';
	}
	else{
		alert("you entered a valid name");
	}
	
	if(emailPattern.test(email)){
		alert("valid email ID");
	}
	else{
		document.getElementById('emailError').style.display = 'block';
	}
	if(fonePattern.test(tele)){
		
		alert("correct fone no");
	}
	else{
		document.getElementById('phoneError').style.display = 'block';
	}
}
*/

function validate() {
    var x, text;

    // Get the value of the input field with id="fname"
    firstName = document.getElementById("fname").value;
    lastName = document.getElementById("lname").value;
    emailText = document.getElementById("email").value;
    phoneText = document.getElementById("phone").value;

    
    // patterns validation
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var fonePattern = /^[0-9]{3}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    
    
    
    // If first name is empty
    if (isNaN(firstName)) {
        text = "Input OK";
        
    } else {
        text = "Input not valid";
    }
    document.getElementById("fNameText").innerHTML = text;

    // If last name is  empty
    if (isNaN(lastName)) {
        text = "Input OK";
        
    } else {
        text = "Input not valid";
    }
    document.getElementById("lNameText").innerHTML = text;

    // If email is empty
    if (isNaN(emailText) && emailPattern.test(emailText)) {
        text = "Input OK";
        
    } else {
        text = "Input not valid, example: [email ID]@[abc].[abc]";
    }
    document.getElementById("emText").innerHTML = text;

// If phone is empty
    if (isNaN(phoneText) && fonePattern.test(phoneText)) {
        text = "Input OK";
        
    } else {
        text = "Example: XXX-XXX-XXXX or XXX.XXX.XXXX";
    }
    document.getElementById("phText").innerHTML = text;


}