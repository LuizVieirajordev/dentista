
        // Mobile Menu Toggle
        document.querySelector('.nav-toggle').addEventListener('click', function() {
            document.querySelector('nav ul').classList.toggle('active');
        });

        // Form Submission
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                message: document.getElementById('message').value
            };

            // Here you would typically send the data to your server
            // You'll need to implement the server-side logic to send emails
            console.log('Form submitted:', formData);
            
            // Reset form
            this.reset();
            alert('Obrigado! Entraremos em contato em breve.');
        });