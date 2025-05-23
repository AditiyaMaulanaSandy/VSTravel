window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    if (window.scrollY > 50) { 
        header.classList.add("header-scrolled"); 
    } else { 
        header.classList.remove("header-scrolled");
    }
});

const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
const question = item.querySelector('.faq-question');
question.addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) { 
            otherItem.classList.remove('active');
        }
    });
    
    item.classList.toggle('active'); 
});

});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
contactForm.addEventListener('submit', function(e) {
e.preventDefault(); 
const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const subjectField = document.getElementById('subject');
    const messageField = document.getElementById('message');
    const phoneField = document.getElementById('phone');


    let isValid = true;

    function validateSingleField(field, fieldName, isRequired = true) {
        const errorClass = 'error-input'; 
        field.classList.remove(errorClass); 

        if (isRequired && field.value.trim() === '') {
            alert(`Please enter your ${fieldName}.`);
            field.classList.add(errorClass);
            field.focus();
            return false;
        }
        if (field.type === 'email') {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(field.value.trim())) {
                alert('Please enter a valid Email Address.');
                field.classList.add(errorClass);
                field.focus();
                return false;
            }
        }
        if (field.type === 'tel' && field.value.trim() !== '') {
            const phonePattern = /^\+?[0-9\s-]{7,15}$/;
            if (!phonePattern.test(field.value.trim())) {
                alert('Please enter a valid Phone Number (e.g., +1 123-456-7890).');
                field.classList.add(errorClass);
                field.focus();
                return false;
            }
        }
        return true;
    }

    if (!validateSingleField(nameField, 'Full Name')) isValid = false;
    if (isValid && !validateSingleField(emailField, 'Email Address')) isValid = false;
    if (isValid && !validateSingleField(phoneField, 'Phone Number', false)) isValid = false; 
    if (isValid && !validateSingleField(subjectField, 'Subject')) isValid = false;
    if (isValid && !validateSingleField(messageField, 'Message')) isValid = false;


    if (isValid) {
        alert(`Thank you, ${nameField.value.trim()}! Your message regarding "${subjectField.value.trim()}" has been "sent" (simulated).\nWe will contact you at ${emailField.value.trim()} if needed.`);
        contactForm.reset(); 
        [nameField, emailField, subjectField, messageField, phoneField].forEach(f => f.classList.remove('error-input'));
    }
});
}