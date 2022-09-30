// document.addEventListener('keydown', e=>(console.log(e.key)));
// failed to receive an email...
function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "youremail",
        Password : "yourpassword",
        To : '18048462d@gmail.com',
        From : document.getElementById('email').value,
        Subject : "Message from my website",
        Body : document.getElementById('message').value
    }).then(
      message => alert('message sent successfully!')
    );
}