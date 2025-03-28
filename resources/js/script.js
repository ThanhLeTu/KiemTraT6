document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nameInput = contactForm.querySelector('input[type="text"]');
        const emailInput = contactForm.querySelector('input[type="email"]');
        const messageInput = contactForm.querySelector('textarea');

        if (nameInput.value && emailInput.value && messageInput.value) {
            alert('Cảm ơn bạn đã gửi tin nhắn!');
            contactForm.reset();
        } else {
            alert('Vui lòng điền đầy đủ thông tin');
        }
    });

    // Cuộn mượt giữa các phần
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
    document.addEventListener('DOMContentLoaded', function() {
        const contactForm = document.getElementById('contactForm');
    
        contactForm.addEventListener('submit', function(event) {
            // Prevent the form from actually submitting
            event.preventDefault();
    
            // Get form input values
            const nameInput = contactForm.querySelector('input[type="text"]');
            const emailInput = contactForm.querySelector('input[type="email"]');
            const messageInput = contactForm.querySelector('textarea');
    
            // Log form data to console
            console.log('Thông tin liên hệ:');
            console.log('Tên: ' + nameInput.value);
            console.log('Email: ' + emailInput.value);
            console.log('Tin nhắn: ' + messageInput.value);
    
            // Optional: Clear the form after logging
            contactForm.reset();
    
            // Optional: Show a console message
            console.log('Đã gửi thông tin liên hệ!');
        });
    });
});