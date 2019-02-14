// on click function for signup form
$(document).ready(function() {
    var signupForm = $("#signupForm");
    var userName = $("#username");
    var email = $("#email");
    var password = $("#password");
    
    $(signupForm).on("submit", handleFormSubmit);

    function handleFormSubmit(event) {
        event.preventDefault();
        // query User table to check if username already exists

        
        if (!userName.val().trim() || !email.val().trim() || !password.val().trim())
    }
})

// validate data (meaning if user didn't try to create a username that doesn't already exist)

    // if not valid, alert user.

// if data is valid, save to user's table 

// 