/* =========================================
   BUSINESS DATA
========================================= */

const servicesData = [

    {
        id: 1,
        title: "ELECTRICAL WORKS",
        icon: "fa-bolt",

        desc:
            "Installation, maintenance and repair services, light fixing, wiring, fans and other electrical works.",

        items: [
            "Light Fixing, Wiring, Fans & Other Works",
            "Electrical support for labs, offices and campus facilities",
            "Supply of electrical materials and products",
            "CCTV Camera Installation",
            "Automatic Water Level Controller"
        ],

        msg:
            "Hello Shri Poojyaya Enterprises, I am interested in your Electrical Works services. Please share more details."
    },


    {
        id: 2,
        title: "SOLAR WORKS",
        icon: "fa-solar-panel",

        desc:
            "Eco-friendly sustainable solar power solutions, rooftop installations, heaters and street lighting.",

        items: [
            "Solar panel installation",
            "Water heater",
            "Rooftop solar",
            "Heat pump",
            "Solar street lights",
            "CC camera"
        ],

        msg:
            "Hello Shri Poojyaya Enterprises, I am interested in your Solar Works services. Please share more details."
    },


    {
        id: 3,
        title: "PLUMBING WORKS",
        icon: "fa-faucet-drip",

        desc:
            "Complete plumbing installation, maintenance, leakage repairs, sanitary fittings and motor pumps.",

        items: [
            "Installation & maintenance of water supply lines",
            "Repair of leakages, taps, valves and pipelines",
            "Sanitary fittings installation",
            "Drainage & Blockage Clearing Works",
            "Water Motor Pump Repair & Services"
        ],

        msg:
            "Hello Shri Poojyaya Enterprises, I am interested in your Plumbing Works services. Please share more details."
    },


    {
        id: 4,
        title: "PLANTATION & GIFTING SERVICES",
        icon: "fa-seedling",

        desc:
            "Green indoor plants for offices, corridors, common areas and corporate guest gifting.",

        items: [
            "Indoor plants for offices, labs, corridors & common areas",
            "Corporate plant gifting for guests, professors and trainers",
            "Plant gifting for delegates, event speakers & visitors"
        ],

        msg:
            "Hello Shri Poojyaya Enterprises, I am interested in Plantation & Gifting Services. Please share more details."
    },


    {
        id: 5,
        title: "FURNITURE & ACADEMIC SUPPLIES",
        icon: "fa-chair",

        desc:
            "High quality office and classroom furniture, chairs, tables, bulk books, academic materials and stationery.",

        items: [
            "Chairs, tables and office/classroom furniture",
            "Books (bulk supply)",
            "Academic materials and stationery"
        ],

        msg:
            "Hello Shri Poojyaya Enterprises, I am interested in Furniture & Academic Supplies. Please share more details."
    },


    {
        id: 6,
        title: "SUPPLY OF ELECTRONIC PRODUCTS",
        icon: "fa-laptop",

        desc:
            "Essential computer peripherals, headsets, keyboards, mice, speakers and electronic accessories.",

        items: [
            "Supply of electronic items such as headsets",
            "Keyboards, mouse, speakers & accessories"
        ],

        msg:
            "Hello Shri Poojyaya Enterprises, I am interested in Electronic Products supply. Please share more details."
    },


    {
        id: 7,
        title: "REAL ESTATE BUSINESS",
        icon: "fa-tent",

        desc:
            "Buying and selling of residential and commercial properties, land and real estate consultancy.",

        items: [
            "Property buying and selling",
            "Land acquisition and development",
            "Real estate consultancy"
        ],

        msg:
            "Hello Shri Poojyaya Enterprises, I am interested in Real Estate Business. Please share more details."
    },


    {
        id: 8,
        title: "TEXTILES & GARMENTS",
        icon: "fa-shirt",

        desc:
            "Quality textiles and garment solutions for institutions, businesses, events and bulk requirements.",

        items: [
            "School, college, corporate & industrial uniforms",
            "Event T-shirts, custom T-shirts, shirts & trousers",
            "Sportswear, workwear & institutional garments",
            "Bulk textile supply & customized printing/branding"
        ],

        msg:
            "Hello Shri Poojyaya Enterprises, I am interested in Textiles & Garments. I would like to enquire about bulk/custom requirements."
    }

];


/* =========================================
   RENDER SERVICES
========================================= */

function renderServices() {

    const servicesGrid =
        document.getElementById("services-grid");

    const homeServicesGrid =
        document.getElementById("home-services-grid");


    if (!servicesGrid) {
        return;
    }


    servicesGrid.innerHTML = "";


    servicesData.forEach(service => {

        const card =
            document.createElement("div");

        card.className =
            "service-card glass-card";

        card.dataset.title =
            service.title.toLowerCase();


        card.innerHTML = `

            <div>

                <div class="service-icon">
                    <i class="fa-solid ${service.icon}"></i>
                </div>

                <h3>
                    ${service.title}
                </h3>

                <p>
                    ${service.desc}
                </p>

                <ul>

                    ${service.items.map(item => `

                        <li>
                            <i class="fa-solid fa-check"></i>
                            <span>${item}</span>
                        </li>

                    `).join("")}

                </ul>

            </div>


            <button
                class="whatsapp-button full-width"
                onclick="enquireService(${service.id})"
            >
                <i class="fa-brands fa-whatsapp"></i>
                Enquire Now
            </button>

        `;


        servicesGrid.appendChild(card);

    });


    /* Home preview */

    if (homeServicesGrid) {

        homeServicesGrid.innerHTML = "";

        servicesData.slice(0, 4).forEach(service => {

            const card =
                document.createElement("div");

            card.className =
                "service-card glass-card";


            card.innerHTML = `

                <div>

                    <div class="service-icon">
                        <i class="fa-solid ${service.icon}"></i>
                    </div>

                    <h3>
                        ${service.title}
                    </h3>

                    <p>
                        ${service.desc}
                    </p>

                </div>

                <button
                    class="whatsapp-button full-width"
                    onclick="enquireService(${service.id})"
                >
                    <i class="fa-brands fa-whatsapp"></i>
                    Enquire Now
                </button>

            `;


            homeServicesGrid.appendChild(card);

        });

    }

}


/* =========================================
   SECTION SWITCHING
========================================= */

function switchSection(sectionId) {

    const sections =
        document.querySelectorAll(".page-section");


    sections.forEach(section => {

        section.classList.add("hidden");

    });


    const target =
        document.getElementById(
            `section-${sectionId}`
        );


    if (target) {

        target.classList.remove("hidden");

        target.style.animation = "none";

        void target.offsetWidth;

        target.style.animation =
            "slideUp 0.5s ease";

    }


    /* Navigation */

    const navButtons =
        document.querySelectorAll(".nav-btn");


    navButtons.forEach(button => {

        button.classList.remove("active");

    });


    const activeButton =
        document.getElementById(
            `nav-${sectionId}`
        );


    if (activeButton) {

        activeButton.classList.add("active");

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   MOBILE MENU
========================================= */

function toggleMobileMenu() {

    const menu =
        document.getElementById("mobile-menu");


    if (!menu) {
        return;
    }


    menu.classList.toggle("hidden");

}


/* =========================================
   SERVICE SEARCH
========================================= */

function filterServices() {

    const searchInput =
        document.getElementById("service-search");


    if (!searchInput) {
        return;
    }


    const query =
        searchInput.value
            .trim()
            .toLowerCase();


    const cards =
        document.querySelectorAll(
            "#services-grid .service-card"
        );


    cards.forEach(card => {

        const title =
            card.dataset.title || "";


        if (title.includes(query)) {

            card.style.display = "flex";

        } else {

            card.style.display = "none";

        }

    });

}


/* =========================================
   WHATSAPP SERVICE ENQUIRY
========================================= */

function enquireService(serviceId) {

    const service =
        servicesData.find(
            item => item.id === serviceId
        );


    if (!service) {
        return;
    }


    const phone =
        "919900240988";


    const message =
        encodeURIComponent(
            service.msg
        );


    const whatsappUrl =
        `https://wa.me/${phone}?text=${message}`;


    window.open(
        whatsappUrl,
        "_blank"
    );

}


/* =========================================
   CONTACT FORM
========================================= */

function handleFormSubmit(event) {

    event.preventDefault();


    const name =
        document
            .getElementById("form-name")
            .value
            .trim();


    const phone =
        document
            .getElementById("form-phone")
            .value
            .trim();


    const email =
        document
            .getElementById("form-email")
            .value
            .trim();


    const service =
        document
            .getElementById("form-service")
            .value;


    const message =
        document
            .getElementById("form-message")
            .value
            .trim();


    const whatsappMessage =

`*New Website Enquiry*

*Name:* ${name}

*Phone:* ${phone}

*Email:* ${email || "Not provided"}

*Service:* ${service}

*Message:* ${message}

*Location:* RPC Layout, Bengaluru`;


    const whatsappUrl =
        `https://wa.me/919900240988?text=${encodeURIComponent(
            whatsappMessage
        )}`;


    window.open(
        whatsappUrl,
        "_blank"
    );

}


/* =========================================
   CURRENT YEAR
========================================= */

function updateYear() {

    const yearElement =
        document.getElementById(
            "current-year"
        );


    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }

}


/* =========================================
   INITIALIZE WEBSITE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        renderServices();

        updateYear();

    }
);