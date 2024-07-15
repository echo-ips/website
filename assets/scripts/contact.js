function sendEmail() {
    var name = document.getElementById('name').value;
    var subject = document.getElementById('subject').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('comments').value;

    emailjs.send("service_8emtlij", "echo_page_template", {
        subject: subject,
        from_name: name,
        message: message,
        reply_to: email
    });

    var simpleMsg = document.getElementById('simple-msg');
    simpleMsg.textContent = "Email sent!";
    document.getElementById('contact-form').reset();
    
    setTimeout(() => {
        simpleMsg.textContent = "";
    }, 4000);
}
