function validate() {
    var x, text;

    // Get the value of the input field with id="fname"
    firstName = document.getElementById("fname").value;
    lastName = document.getElementById("lname").value;
    emailText = document.getElementById("email").value;
    phoneText = document.getElementById("phone").value;
    commentText = document.getElementById("comments").value;

    
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

// If comments is empty
    if (isNaN(commentText)) {
        text = "Input OK";
        
    } else {
        text = "Please write your comments/query here";
    }
    document.getElementById("commentText").innerHTML = text;


}