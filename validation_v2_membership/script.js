"use strict";
$(document).ready( () => {
 
    // move focus to first text box
    $("#email").focus();
    
    // the handler for the change event of the radio buttons
    $(":radio").change( () => {
        const radioButton = $(":radio:checked").val();
        if (radioButton == "corporate") {
            $("#company_name").attr("disabled", false);
            $("#company_name").next().text("*");
        }
        else {
            $("#company_name").attr("disabled", true);
            $("#company_name").next().text("");
        }
    });
// the handler for the click event of the submit button
$("#member_form").submit( event => {
  let isValid = true;
  
  // validate the email entry with a regular expression
  const emailPattern = 
      /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
  const email = $("#email").val().trim();
  if (email == "") { 
      $("#email").next().text("This field is required.");
      isValid = false;
  }
  else if ( !emailPattern.test(email) ) {
      $("#email").next().text(
          "Must be a valid email address.");
      isValid = false;
  }
  else {
      $("#email").next().text("");
  }
  $("#email").val(email);
  // validate the password entry
  const password = $("#password").val().trim();
  if ( password.length < 6) {
      $("#password").next().text(
          "Must be 6 or more characters.");
      isValid = false;
  }
  else {
      $("#password").next().text("");
  }
  $("#password").val(password);
  
  // validate the verify password entry (not shown here)
  
  // validate the company name entry
  if ( !$("#company_name").attr("disabled")) {
      const companyName = $("#company_name").val().trim();
      if (companyName == "") {
          $("#company_name").next().text(
              "This field is required.");
          isValid = false;
      }
      else {
        $("#company_name").next().text("");
    }
    $("#company_name").val(companyName);
}
            
// validate other text boxes (not shown here)

// prevent the submission of the form if any entries
// are invalid 
if (isValid == false) {
    event.preventDefault();
}
});

}); // end ready() handler




/* EXERCISES FOR 4-3-25

let number = NaN; 

while (isNaN(number) || number < 1 || number > 10) {
    number = parseInt(prompt("Enter a number from 1 to 10."));
    if (isNaN(number) || number < 1 || number > 10) {
        alert("Invalid entry. Try again.");
    }
}

alert(number);

*/ 

// 4-3-25 next assignment 12-1

//INVOICE APPLICATION for the example 