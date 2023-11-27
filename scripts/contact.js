// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
document.getElementById('submit-button').addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById('contact-page').innerHTML = "<p>Thank you for your message!</p>";
    document.getElementById('contact-page').style.fontSize = '24px';
    document.getElementById('contact-page').style.textAlign = 'center';
});

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

