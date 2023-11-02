$(document).ready(function() {
    $('#email, #username, #password, #confirm-password').on('input', function() {
        validateFields();
    });

    $('#login-button').click(function() {
        if (validateFields()) {
            // Redirect to the second page
            window.location.href = 'calculator.html';
        }
    });

    function validateFields() {
        const email = $('#email').val();
        const username = $('#username').val();
        const password = $('#password').val();
        const confirmPassword = $('#confirm-password').val();
        let isValid = true;

        // Null checks
        if(email === ''||username===''||password===''||confirmPassword===''){
        if (email === '') {
            showError('#email-error', "Email is required.");
        }
        else{
            hideError('#email-error');
        }
        if(username === ''){
            showError('#username-error', "Username is required.");
        }
        else{
            hideError('#username-error');
        }
        if( password===''){
            showError('#password-error', "Password is required.");
        }
        else{
            hideError('#password-error');
        }
        if(confirmPassword===''){
            showError('#confirm-password-error', "Conform Password is required.");
            
        }
        else{
            hideError('#confirm-password-error');
        }
        isValid = false;
        } else {
            hideError('#email-error');
            hideError('#username-error');
            hideError('#password-error');
            hideError('#confirm-password-error');
        }

        // Add similar checks for other fields...

        // Special character check
        const specialCharPattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        if (specialCharPattern.test(username)) {
            showError('#username-error', "User Name cannot contain special characters.");
            isValid = false;
        }

        // Add similar checks for other fields...

        // Email validation
        const emailPattern = /^[a-zA-Z0-9._%+-]+@northeastern\.edu$/;
        if (!emailPattern.test(email)) {
            showError('#email-error', "Email should be a northeastern.edu email.");
            isValid = false;
        }

        // Add similar checks for other fields...

        // Enable or disable the login button
        if (isValid) {
            $('#login-button').prop('disabled', false);
        } else {
            $('#login-button').prop('disabled', true);
        }

        return isValid;
    }

    function showError(elementId, message) {
        $(elementId).text(message).show();
    }

    function hideError(elementId) {
        $(elementId).hide();
    }
});
