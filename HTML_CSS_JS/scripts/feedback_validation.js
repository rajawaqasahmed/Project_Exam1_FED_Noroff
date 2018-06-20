

function feedback_validation() {
    var x, text;

    // Get the value of the input field with id="fname"
    feedName = document.getElementById("feedback_name").value;
    feedEmail = document.getElementById("feedback_email").value;
    feedComment = document.getElementById("feedback_comments").value;

    
    // patterns validation
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    // If first name is empty
    if (isNaN(feedName)) {
        text = "Input OK";
        
    } else {
        text = "Input not valid";
    }
    document.getElementById("feedNameText").innerHTML = text;

    // If email is empty
    if (isNaN(feedEmail) && emailPattern.test(feedEmail)) {
        text = "Input OK";
        
    } else {
        text = "Input not valid, example: [email ID]@[abc].[abc]";
    }
    document.getElementById("feedEmailText").innerHTML = text;

// If Comment is empty
    if (isNaN(feedComment) && fonePattern.test(feedComment)) {
        text = "Input OK";
        
    } else {
        text = "Must Input some text";
    }
    document.getElementById("feedCommentText").innerHTML = text;


}