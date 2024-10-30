// Show button when scrolled down
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) { 
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

// Scroll to top when button clicked
backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


// Toggle mobile navigation menu
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
});


// Sample car data (replace with actual data if available)
const carData = {
    "bmw": {
        name: "BMW M3",
        description: "A high-performance sedan with exceptional handling and power.",
        specs: ["Engine: Inline-6", "Horsepower: 503 HP", "Transmission: 8-speed automatic"] 
    },
    "corolla": {
        name: "Toyota Corolla",
        description: "A reliable and fuel-efficient compact car.",
        specs: ["Engine: 1.8L 4-cylinder", "Transmission: CVT", "Fuel Economy: 30 mpg city, 40 mpg highway"]
    },
    "ford": {
        name: "Ford F-150",
        description: "A powerful and versatile pickup truck.",
        specs: ["Engine: V8", "Towing Capacity: 14,000 lbs", "4x4 Capability"]
    },
    "ford_ranger": {
        name: "Ford Ranger",
        description: "A mid-size pickup truck with off-road capabilities.",
        specs: ["Engine: V6", "4x4 Capability", "Bed Length: 5 ft"]
    },
    "honda": {
        name: "Honda Civic",
        description: "A popular compact car with a spacious interior and good fuel economy.",
        specs: ["Engine: 1.5L Turbocharged 4-cylinder", "Transmission: CVT", "Fuel Economy: 34 mpg city, 42 mpg highway"]
    },
    "lamborghini": {
        name: "Lamborghini Huracan",
        description: "A high-performance sports car with a powerful V10 engine.",
        specs: ["Engine: V10", "Horsepower: 640 HP", "All-wheel Drive"]
    },
    "lexus": {
        name: "Lexus LX-570",
        description: "A luxury SUV with a smooth ride and advanced features.",
        specs: ["Engine: V6", "All-wheel Drive", "Luxury Interior"]
    },
    "nissan_hiace": {
        name: "Nissan Hiace",
        description: "A versatile van perfect for passenger transport or cargo.",
        specs: ["Engine: Diesel", "Rear-wheel Drive", "High Roof"]
    },
    "passo": {
        name: "Toyota Passo",
        description: "A compact city car with excellent fuel economy.",
        specs: ["Engine: 1.0L 3-cylinder", "Manual Transmission", "Fuel Economy: 40+ mpg"]
    },
    "porsche_cayenne": {
        name: "Porsche Cayenne",
        description: "A high-performance luxury SUV with off-road capabilities.",
        specs: ["Engine: V6 or V8", "All-wheel Drive", "Air Suspension"]
    },
    "volkswagen_touareg": {
        name: "Volkswagen Touareg",
        description: "A premium SUV with a luxurious interior and advanced technology.",
        specs: ["Engine: V6 or V8", "All-wheel Drive", "Adaptive Cruise Control"]
    },
    "toyota_landcruiser": {
        name: "Toyota Land Cruiser",
        description: "A rugged and reliable off-road vehicle.",
        specs: ["Engine: V8", "4x4 Capability", "Off-Road Package"]
    }
    // Add more car data as needed
};

// Modal elements
const carModal = document.getElementById("carModal");
const carName = document.getElementById("carName");
const carDescription = document.getElementById("carDescription");
const carSpecs = document.getElementById("carSpecs");
const closeButton = document.querySelector(".close-button");

// Open car modal and fill in data
document.querySelectorAll(".car-item a").forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        
        // Retrieve car ID (assuming each button has a data attribute with the car ID)
        const carId = button.getAttribute("data-car-id");
        const car = carData[carId];
        
        if (car) {
            carName.textContent = car.name;
            carDescription.textContent = car.description;
            
            // Display specs as a single string instead of a list
            carSpecs.innerHTML = car.specs.join("<br>");

            // Show the modal
            carModal.style.display = "flex";
        }
    });
});

// Close the car modal when the "X" button is clicked
closeButton.addEventListener("click", () => {
    carModal.style.display = "none";
});


// Close car modal when clicking outside of the modal content
window.addEventListener("click", (e) => {
    if (e.target === carModal) {
        carModal.style.display = "none";
    }
});

// Close car modal when pressing the Escape key
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && carModal.style.display === "flex") {
        carModal.style.display = "none";
    }
});


// Spare Parts Modal
document.addEventListener('DOMContentLoaded', () => {
    const sparePartModal = document.getElementById('sparePartModal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalPriceValue = document.getElementById('modal-price-value');
    const sparePartCloseButton = document.querySelector('.spare-part-close-button');

    // Function to open the modal and set its content
    function openSparePartModal(title, description, price) {
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modalPriceValue.textContent = price;
        sparePartModal.style.display = 'flex';
    }

    // Close spare part modal
    sparePartCloseButton.addEventListener('click', () => {
        sparePartModal.style.display = 'none';
    });

    // Close spare part modal when clicking outside the content
    window.addEventListener('click', (event) => {
        if (event.target === sparePartModal) {
            sparePartModal.style.display = 'none';
        }
    });

    // Close spare part modal when pressing the Escape key
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && sparePartModal.style.display === "flex") {
            sparePartModal.style.display = "none";
        }
    });

    // Event listeners for all "View Details" buttons for spare parts
    document.querySelectorAll('.part-item a').forEach((button, index) => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            
            // Define spare part details
            const partDetails = [
                { title: 'Engine Parts', description: 'High-quality engine parts for optimal performance.', price: '7550' },
                { title: 'Brake Pads', description: 'Durable brake pads for safe braking.', price: '180' },
                { title: 'Tires', description: 'High-quality tires for a smooth drive.', price: '120' },
                { title: 'Car Battery', description: 'Long-lasting car battery.', price: '240' },
                { title: 'Car Rims', description: 'Durable car rims that enhance vehicle performance.', price: '300' },
                { title: 'Oil Filter', description: 'Premium oil filter for cleaner oil.', price: '50' },
                { title: 'Headlight Bulbs', description: 'Bright headlight bulbs for better visibility.', price: '50' },
                { title: 'Spare Tire', description: 'Essential spare tire for emergencies.', price: '120' },
                { title: 'Car Rims', description: 'Durable car rims that enhance vehicle performance.', price: '300' },
                { title: 'Car Rims', description: 'Sleek design car rims for better handling.', price: '300' },
                { title: 'Engine Parts', description: 'Genuine engine parts for improved efficiency.', price: '8100' },
                { title: 'Wheel Hub', description: 'Reliable wheel hub for smooth rides.', price: '480' }
            ];
            
            // Set content based on the clicked item
            const { title, description, price } = partDetails[index];
            openSparePartModal(title, description, price);
        });
    });
});
