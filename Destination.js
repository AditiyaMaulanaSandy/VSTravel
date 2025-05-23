document.getElementById("searchButton").addEventListener("click", function() {
    performSearch();
});

document.getElementById("searchInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("searchButton").click();
    }
});

function performSearch() {
    let searchQuery = document.getElementById("searchInput").value.toLowerCase().trim();
    let destinations = document.querySelectorAll(".destination-card");

    destinations.forEach(card => {
        let title = card.querySelector("h3").innerText.toLowerCase();
        let category = card.querySelector(".category").innerText.toLowerCase();
        
        let matchFound = title.includes(searchQuery) || category.includes(searchQuery);

        card.style.display = matchFound || searchQuery === "" ? "flex" : "none";
    });
}

window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    if (window.scrollY > 50) { 
        header.classList.add("header-scrolled"); 
    } else { 
        header.classList.remove("header-scrolled");
    }
});

const destinationData = [
    {
        id: 1,
        title: "Flores",
        country: "Indonesia",
        image: "HOME 2.jpg",
        days: "3 Days",
        price: "$200",
        description: "Flores is an exotic island in Indonesia known for its Komodo National Park, Lake Kelimutu and beautiful beaches. Rich in culture and nature, Flores offers adventure, underwater beauty and authentic traditional villages."
    },
    {
        id: 2,
        title: "Rome",
        country: "Italy",
        image: "HOME 3.jpg",
        days: "3 Days",
        price: "$500",
        description: "Rome, the capital of Italy, is a historic city with magnificent architecture and a rich cultural heritage. From the Colosseum to the Vatican, the city offers art, culinary specialties and a classic atmosphere that makes it an iconic travel destination in the world."
    },
    {
        id: 3,
        title: "London",
        country: "United Kingdom",
        image: "HOME 4.jpg",
        days: "7 Days",
        price: "$250",
        description: "London offers a tour of history, culture and modernity. Enjoy Big Ben, Tower Bridge, Buckingham Palace, museums, West End theaters, and culinary specialties with convenient transportation in this cosmopolitan city."
    },
    {
        id: 4,
        title: "Full Europe",
        country: "Europe",
        image: "HOME 5.jpg",
        days: "10 Days",
        price: "$1900",
        description: "Europe offers historical, cultural and natural beauty. From Paris to Rome, enjoy the grand architecture, culinary specialties, famous museums and breathtaking landscapes that make it a dream destination for world travelers."
    },
    {
        id: 5,
        title: "Santorini",
        country: "Greece",
        image: "HOME 6.jpg",
        days: "3 Days",
        price: "$300",
        description: "Santorini is a beautiful island in Greece with distinctive white buildings, clear blue seas and stunning sunsets. This romantic destination offers exotic beaches, delicious cuisine and spectacular views."
    },
    {
        id: 6,
        title: "Bali",
        country: "Indonesia",
        image: "HOME 7.jpg",
        days: "7 Days",
        price: "$600",
        description: "Bali is a tropical paradise with exotic beaches, rich culture and stunning natural scenery. From verdant Ubud to bustling Kuta, the island offers spiritual tourism, delicious cuisine, and unique art and tradition experiences. "
    },
    {
        id: 7,
        title: "Male",
        country: "Maldives",
        image: "HOME 8.jpg",
        days: "2 Days",
        price: "$150",
        description: "Malé, the capital of the Maldives, is a small, compact city with a blend of culture, history and tropical beauty. Surrounded by clear blue waters, the city boasts historic mosques, local markets and easy access to the exclusive resorts nearby."
    },
    {
        id: 8,
        title: "Singapore",
        country: "Singapore",
        image: "HOME 9.jpg",
        days: "4 Days",
        price: "$570",
        description: "Singapore is a modern city with a blend of culture, technology and nature. From Marina Bay Sands, Gardens by the Bay, to Orchard Road, the city offers delicious cuisine, world-class shopping, and an efficient transportation system."
    },
    {
        id: 9,
        title: "Kuala Lumpur",
        country: "Malaysia",
        image: "HOME 10.jpg",
        days: "4 Days",
        price: "$350",
        description: "Kuala Lumpur, the capital of Malaysia, offers a blend of modernity and culture. From the Petronas Twin Towers to Chinatown, the city offers iconic architecture, fine dining, luxury shopping and a vibrant and diverse travel experience."
    },
    {
        id: 10,
        title: "Bangkok",
        country: "Thailand",
        image: "HOME 11.jpg",
        days: "5 Days",
        price: "$640",
        description: "Bangkok, the capital of Thailand, offers a blend of traditional culture and modernity. From the Grand Palace to the floating markets, the city offers majestic temples, delicious street food, vibrant nightlife and unique and diverse travel experiences."
    },
    {
        id: 11,
        title: "Bandar Seri Begawan",
        country: "Brunei",
        image: "HOME 12.jpg",
        days: "2 Days",
        price: "$100",
        description: "Bandar Seri Begawan, the capital of Brunei, is a city rich in Islamic culture and history. Known for its majestic Sultan Omar Ali Saifuddien Mosque, traditional markets, and the beauty of Kampong Ayer, the city offers a quiet and sophisticated escape."
    },
    {
        id: 12,
        title: "Shanghai",
        country: "China",
        image: "HOME 13.jpg",
        days: "3 Days",
        price: "$200",
        description: "Shanghai is a modern metropolis in China that combines history and innovation. From the historic Bund to the skyscrapers in Pudong, the city offers delicious cuisine, luxury shopping centers, and a dynamic nightlife." // Translated to English
    },
    {
        id: 13,
        title: "Seoul",
        country: "South Korea",
        image: "HOME 14.jpg",
        days: "5 Days",
        price: "$700",
        description: "Seoul, the capital of South Korea, is a blend of traditional culture and modernity. From the Gyeongbokgung Palace to the Gangnam district, the city offers delicious cuisine, cutting-edge technology, shopping centers and a vibrant nightlife."
    },
    {
        id: 14,
        title: "Buenos Aires",
        country: "Argentina",
        image: "HOME 15.jpg",
        days: "6 Days",
        price: "$450",
        description: "Buenos Aires, the capital of Argentina, is a colorful city with a blend of European and Latin cultures. Known for its tango, classic architecture and delicious cuisine like asado, the city offers art, history and a vibrant nightlife."
    },
    {
        id: 15,
        title: "Washington D.C.",
        country: "USA",
        image: "HOME 16.jpg",
        days: "6 Days",
        price: "$450",
        description: "Washington, D.C., the capital of the United States, is the center of politics and history. The city is famous for the White House, the Capitol, the Lincoln Memorial, and the Smithsonian museums, making it an educational tourist destination with grand architecture and a classy atmosphere."
    },
    {
        id: 16,
        title: "Mount Fuji",
        country: "Japan",
        image: "HOME 17.jpg",
        days: "7 Days",
        price: "$700",
        description: "Mount Fuji, an icon of Japan, is the country's tallest volcano with a majestic snowy peak. A popular destination for climbing, photography, and spiritual reflection, its beauty is even more captivating during the cherry blossom and fall seasons."
    },
    {
        id: 17,
        title: "Tokyo Skytree",
        country: "Japan",
        image: "HOME 18.jpeg",
        days: "3 Days",
        price: "$210",
        description: "Tokyo Skytree is the tallest tower in Japan, offering spectacular views of Tokyo. This modern icon serves as a broadcasting, sightseeing, and entertainment center, with observation decks, restaurants, and attractive shopping malls."
    },
    {
        id: 18,
        title: "New York City",
        country: "USA",
        image: "HOME 19.jpg",
        days: "3 Days",
        price: "$210",
        description: "New York City is an iconic metropolis with skyscrapers, Times Square and Central Park. As a financial, cultural, and entertainment center, the city offers Broadway, world-class museums, and cuisine from around the world."
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

popupClose.addEventListener('click', function() {
    closePopup();
});

popupOverlay.addEventListener('click', function(event) {
    if (event.target === popupOverlay) {
        closePopup();
    }
});

function closePopup() {
    popupOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
}

popupBookingBtn.addEventListener('click', function() {
    const destTitle = popupTitle.textContent;
    const destCountry = popupCountry.textContent;
    const destDays = popupDuration.textContent; 
    
    localStorage.setItem('selectedDestinationTitle', destTitle);
    localStorage.setItem('selectedDestinationCountry', destCountry.trim());
    localStorage.setItem('selectedDestinationDays', destDays);
    
    window.location.href = 'Travel Now.html';
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && popupOverlay.style.display === 'flex') {
        closePopup();
    }
});