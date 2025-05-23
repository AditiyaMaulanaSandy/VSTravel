const destinationData = [
    {
        id: 1,
        title: "Flores",
        country: "Indonesia",
        days: "3 Days",
        price: "$200",
        description: "Flores is an exotic island in Indonesia known for its Komodo National Park, Lake Kelimutu and beautiful beaches. Rich in culture and nature, Flores offers adventure, underwater beauty and authentic traditional villages.",
        image: "HOME 2.JPG", 
    },
    {
        id: 2,
        title: "Rome", 
        country: "Italy", 
        days: "3 Days",
        price: "$500",
        description: "Rome, the capital of Italy, is a historic city with magnificent architecture and a rich cultural heritage. From the Colosseum to the Vatican, the city offers art, culinary specialties and a classic atmosphere that makes it an iconic travel destination in the world.",
        image: "HOME 3.jpg",    
    },
    {
        id: 3,
        title: "London",
        country: "United Kingdom",
        days: "7 Days",
        price: "$250",
        description: "London offers a tour of history, culture and modernity. Enjoy Big Ben, Tower Bridge, Buckingham Palace, museums, West End theaters, and culinary specialties with convenient transportation in this cosmopolitan city.",
        image: "HOME 4.jpg",    
    },
    {
        id: 4,
        title: "Full Europe",
        country: "Europe",
        days: "10 Days",
        price: "$1900",
        description: "Europe offers historical, cultural and natural beauty. From Paris to Rome, enjoy the grand architecture, culinary specialties, famous museums and breathtaking landscapes that make it a dream destination for world travelers.",
        image: "HOME 5.jpg",    
    }
];

const destinationCards = document.querySelectorAll('.destination-card');
const popupOverlay = document.getElementById('popupOverlay');
const popupClose = document.getElementById('popupClose');
const popupImage = document.getElementById('popupImage');
const popupTitle = document.getElementById('popupTitle');
const popupCountry = document.getElementById('popupCountry');
const popupDuration = document.getElementById('popupDuration');
const popupPrice = document.getElementById('popupPrice');
const popupDescription = document.getElementById('popupDescription');
const popupBookingBtn = document.getElementById('popupBookingBtn');

destinationCards.forEach(card => {
    card.addEventListener('click', function() {
        const destinationId = parseInt(this.getAttribute('data-id'));
        const destination = destinationData.find(item => item.id === destinationId);
        
        if (destination) {
            popupImage.src = destination.image;
            popupImage.alt = destination.title;
            popupTitle.textContent = destination.title;
            popupCountry.textContent = destination.country;
            popupDuration.textContent = destination.days;
            popupPrice.textContent = destination.price + ' / person';
            popupDescription.textContent = destination.description;
            
            popupOverlay.style.display = 'flex';
            
            document.body.style.overflow = 'hidden';
        }
    });
});

if (popupClose) {
    popupClose.addEventListener('click', function() {
        closePopup();
    });
}

if (popupOverlay) {
    popupOverlay.addEventListener('click', function(event) {
        if (event.target === popupOverlay) {
            closePopup();
        }
    });
}

function closePopup() {
    if (popupOverlay) {
        popupOverlay.style.display = 'none';
    }
    document.body.style.overflow = 'auto';
}

if (popupBookingBtn) {
    popupBookingBtn.addEventListener('click', function() {
        const destTitle = popupTitle.textContent;
        const destCountry = popupCountry.textContent;
        const destDays = popupDuration.textContent;
        
        localStorage.setItem('selectedDestinationTitle', destTitle);
        localStorage.setItem('selectedDestinationCountry', destCountry.trim());
        localStorage.setItem('selectedDestinationDays', destDays);
        
        window.location.href = 'Travel Now.html';
    });
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && popupOverlay && popupOverlay.style.display === 'flex') {
        closePopup();
    }
});

window.addEventListener('DOMContentLoaded', function() {
    destinationCards.forEach(card => {
        card.style.display = 'flex';
    });
});

window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    if (window.scrollY > 50) { 
        header.classList.add("header-scrolled"); 
    } else { 
        header.classList.remove("header-scrolled");
    }
});