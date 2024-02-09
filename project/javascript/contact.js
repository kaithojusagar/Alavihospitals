 function sendEmail() {
                    var name = document.getElementById('username').value;
                    var email = document.getElementById('email').value;
                    var phone = document.getElementById('phone').value;
                    var message = document.getElementById('message').value;

                    Email.send({
                        SecureToken : "4b017d86-1655-4cfd-b8bb-485a73a649d4",
                        To: 'kaithojusagar@gmail.com',
                        From: email,
                        Subject: "New Contact Form Submission",
                        Body: "Name: " + name + "<br>Email: " + email + "<br>Phone: " + phone + "<br>Message: " + message
                    }).then(
                        function (message) {
                            alert("Email sent successfully");
                        },
                        function (error) {
                            console.error(error);
                            alert("Failed to send email. Please try again later.");
                        }
                    );
                }