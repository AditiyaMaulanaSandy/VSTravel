window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    if (window.scrollY > 50) { 
        header.classList.add("header-scrolled"); 
    } else { 
        header.classList.remove("header-scrolled");
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const destinations = [
        "Flores, Indonesia",
        "Rome, Italy",
        "London, United Kingdom",
        "Full Europe, Europe",
        "Santorini, Greece",
        "Bali, Indonesia",
        "Male, Maldives",
        "Singapore, Singapore",
        "Kuala Lumpur, Malaysia",
        "Bangkok, Thailand",
        "Bandar Seri Begawan, Brunei",
        "Shanghai, China",
        "Seoul, South Korea",
        "Buenos Aires, Argentina",
        "Washington D.C., USA",
        "Mount Fuji, Japan",
        "Tokyo Skytree, Japan",
        "New York City, USA"
    ];

    const destinationInput = document.getElementById('destination');
    const destinationDropdown = document.getElementById('destination-dropdown');
    const bookingForm = document.getElementById('bookingForm'); 
    const departureInput = document.getElementById('departure');
    const returnInput = document.getElementById('return');

    function showDropdown() {
        destinationDropdown.innerHTML = '';
        const currentVal = destinationInput.value.toLowerCase();
        
        const filtered = destinations.filter(dest => dest.toLowerCase().includes(currentVal));

        filtered.forEach(dest => {
            const item = document.createElement('div');
            item.className = 'destination-item';
            item.textContent = dest;
            
            item.addEventListener('click', function() {
                destinationInput.value = dest;
                hideDropdown();
            });
            destinationDropdown.appendChild(item);
        });
        
        destinationDropdown.classList.add('active');
    }

    function filterDestinations() {
        showDropdown(); 
    }

    function hideDropdown() {
        destinationDropdown.classList.remove('active');
    }

    if (destinationInput) {
        destinationInput.addEventListener('focus', showDropdown); 
        destinationInput.addEventListener('click', showDropdown); 
        destinationInput.addEventListener('input', filterDestinations);
    }
    
    document.addEventListener('click', function(e) {
        if (destinationInput && !destinationInput.contains(e.target) && destinationDropdown && !destinationDropdown.contains(e.target)) {
            hideDropdown();
        }
    });

    const selectedTitle = localStorage.getItem('selectedDestinationTitle');
    const selectedCountry = localStorage.getItem('selectedDestinationCountry');
    const selectedDaysString = localStorage.getItem('selectedDestinationDays');

    if (selectedTitle && selectedCountry && selectedDaysString && destinationInput) {
        destinationInput.value = `${selectedTitle}, ${selectedCountry}`;

        function parseDuration(durationString) { 
            const parts = durationString.split(' '); 
        }

        function formatDate(date) {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        }

        const durationDays = parseDuration(selectedDaysString);
        if (!isNaN(durationDays) && departureInput && returnInput) {
            const today = new Date();
            const departureDateObj = new Date(today);
            
            const returnDateObj = new Date(departureDateObj);
            returnDateObj.setDate(departureDateObj.getDate() + durationDays);

            departureInput.value = formatDate(departureDateObj);
            returnInput.value = formatDate(returnDateObj);
        }

        localStorage.removeItem('selectedDestinationTitle');
        localStorage.removeItem('selectedDestinationCountry');
        localStorage.removeItem('selectedDestinationDays');
    }

    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const fullNameField = document.getElementById('fullName');
            const phoneNumberField = document.getElementById('phoneNumber');
            const participantsField = document.getElementById('participants');
            const emailField = document.getElementById('email');

            document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
            function displayError(fieldId, message) {
                const errorEl = document.getElementById(fieldId + "Error");
                if (errorEl) errorEl.textContent = message;
            }

            if (!destinationInput.value.trim()) {
                displayError('destination', 'Destination is required.');
                isValid = false;
            }
            if (!fullNameField.value.trim()) {
                displayError('fullName', 'Full Name is required.');
                isValid = false;
            }
            if (!phoneNumberField.value.trim()) {
                displayError('phoneNumber', 'Phone Number is required.');
                isValid = false;
            } else if (!/^\+?[0-9\s-]{7,15}$/.test(phoneNumberField.value.trim())) {
                displayError('phoneNumber', 'Invalid Phone Number format.');
                isValid = false;
            }
            if (!participantsField.value || parseInt(participantsField.value) < 1) {
                displayError('participants', 'At least 1 participant is required.');
                isValid = false;
            }
            if (!emailField.value.trim()) {
                displayError('email', 'Email is required.');
                isValid = false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value.trim())) {
                displayError('email', 'Invalid Email format.');
                isValid = false;
            }
            if (!departureInput.value) {
                displayError('departureDate', 'Departure Date is required.');
                isValid = false;
            }
            if (!returnInput.value) {
                displayError('returnDate', 'Return Date is required.');
                isValid = false;
            }

            if (departureInput.value && returnInput.value && new Date(returnInput.value) < new Date(departureInput.value)) {
                displayError('returnDate', 'Return Date cannot be before Departure Date.');
                isValid = false;
            }

            if (isValid) {
                const travelFormDiv = document.querySelector('.travel-form');
                const bookingConfirmationDiv = document.getElementById('bookingConfirmation');
                
                if (travelFormDiv) travelFormDiv.classList.add('hidden');
                if (bookingConfirmationDiv) {
                    bookingConfirmationDiv.classList.remove('hidden');

                    document.getElementById('confirmedName').textContent = `Name: ${fullNameField.value}`;
                    document.getElementById('confirmedDates').textContent = `Dates: ${departureInput.value} to ${returnInput.value}`;
                    document.getElementById('confirmedParticipants').textContent = `Participants: ${participantsField.value}`;
                    
                    const bookingConfirmationMessage = bookingConfirmationDiv.querySelector('p:nth-of-type(1)');
                    if (destinationInput.value) {
                        bookingConfirmationMessage.textContent = `Thank you for booking your ${destinationInput.value} adventure with us.`;
                    } else {
                        bookingConfirmationMessage.textContent = `Thank you for booking your adventure with us.`;
                    }
                }
                
            } else {
            }
        });
    }

    const doneBtn = document.getElementById('doneBtn');
    if (doneBtn) {
        doneBtn.addEventListener('click', function() {
            const travelFormDiv = document.querySelector('.travel-form');
            const bookingConfirmationDiv = document.getElementById('bookingConfirmation');
            
            if (bookingConfirmationDiv) bookingConfirmationDiv.classList.add('hidden');
            if (travelFormDiv) travelFormDiv.classList.remove('hidden');
            
            if(bookingForm) bookingForm.reset();
        });
    }
});