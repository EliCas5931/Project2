// on click function for signup form
$(document).ready(function() {
    var signupForm = $("#signupForm");
    var userName = $("#username");
    var email = $("#email");
    var password = $("#newPass");

    $("#signSubmit").on("click", handleFormSubmit);

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("submit button was pressed");
        // query User table to check if username already exists
    // Wont submit the post if we are missing a body, title, or author
    //  if (!userName.val().trim() || !email.val().trim() || !password.val().trim()) {
    //      return;
    // }
    var newUser = {
        name: userName
          .val()
          .trim(),
        password: password
          .val()
          .trim()
      };
      console.log(newUser);
      submitUser(newUser);
}

// validate data (meaning if user didn't try to create a username that doesn't already exist)

    // if not valid, alert user.

// if data is valid, save to user's table 
  // Submits a new user/password and brings user to home page upon completion
  function submitUser(user) {
    $.post("/api/users", user, function() {
      window.location.href = "/";
    });
  }
}); 
