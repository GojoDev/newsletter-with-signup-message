// script.js

// Function to navigate to the second page
function navigateToPage2() {
    // Get the value of the input field
    const input = document.getElementById('email').value;
    //Ensure the email has the correct syntax
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
     if (input.trim() == '') {
    // If the input is empty, show an alert
        const error = document.getElementById('error');
        error.style.display = 'block';
    }
    else if (!emailRegex.test(input)) {
        const error = document.getElementById('error');
        error.style.display = 'block';
    } else {
    //store the error message in session storage
     sessionStorage.setItem('emailValue', input);
    // Input is valid, proceed to the success page
    window.location.href = 'success.html';
    }

    
}


// script.js (success.html)
document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the email value from sessionStorage
    const emailValue = sessionStorage.getItem('emailValue');

    // Display the email value on the page
    
    outputElement = document.getElementById('email-input');
    
    if (outputElement && emailValue) { // Check if the element exists and emailValue is not null
        outputElement.textContent = emailValue;
    } 
    
});



// Function to go back to the previous page
function goBack() {

    window.location.href = 'index.html';
}

// Check the current page and adjust functionality
if (window.location.pathname === '/index.html') {
    // This is page1.html
    document.addEventListener('DOMContentLoaded', function () {
        // Add event listener to the button on page 1
        const button = document.getElementById('sub-btn');
        if (button) {
            button.addEventListener('click', navigateToPage2);
        }
    });
} else if (window.location.pathname === '/success.html') {
    // This is page2.html
    document.addEventListener('DOMContentLoaded', function () {
        // Add event listener to the button on page 2
        const button = document.getElementById('dismiss');
        if (button) {
            button.addEventListener('click', goBack);
        }
    });
}

