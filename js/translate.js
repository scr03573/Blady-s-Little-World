document.addEventListener('DOMContentLoaded', function() {
    const translateBtn = document.getElementById('translate-btn');

    // Define the translations
    const translations = {
        en: {
            welcome: "Welcome to Blady's Little World",
            vision: "At Blady's Little World, our vision is to be a leader in early childhood education.",
            requestInfo: "Request Information",
            scheduleTour: "Schedule a Tour",
            aboutUs: "About Us",
            infantCare: "Infant Care",
            toddlerProgram: "Toddler Program",
            contactInfo: "Contact Information",
            address: "Address: 84 Warren Ave, Marlborough, MA 01752",
            phone: "Phone: 786 614 9899",
            email: "Email: bladyslittleworld@gmail.com",
            formHeader: "Request Information or Schedule a Tour",
            nameLabel: "Name:",
            emailLabel: "Email:",
            messageLabel: "Message:",
            submitBtn: "Submit",
            translateBtnText: "Translate to Spanish"
        },
        es: {
            welcome: "Bienvenido a Blady's Little World",
            vision: "En Blady's Little World, nuestra visión es ser un líder en la educación infantil.",
            requestInfo: "Solicitar Información",
            scheduleTour: "Programar una Visita",
            aboutUs: "Sobre Nosotros",
            infantCare: "Cuidado Infantil",
            toddlerProgram: "Programa para Niños Pequeños",
            contactInfo: "Información de Contacto",
            address: "Dirección: 84 Warren Ave, Marlborough, MA 01752",
            phone: "Teléfono: 786 614 9899",
            email: "Correo Electrónico: bladyslittleworld@gmail.com",
            formHeader: "Solicitar Información o Programar una Visita",
            nameLabel: "Nombre:",
            emailLabel: "Correo Electrónico:",
            messageLabel: "Mensaje:",
            submitBtn: "Enviar",
            translateBtnText: "Translate to English"
        }
    };

    let currentLang = 'en';

    function updateContent(lang) {
        document.querySelector('#home h1').textContent = translations[lang].welcome;
        document.querySelector('#home p').textContent = translations[lang].vision;
        document.querySelector('#info-btn').textContent = translations[lang].requestInfo;
        document.querySelector('#tour-btn').textContent = translations[lang].scheduleTour;
        document.querySelector('#about h2').textContent = translations[lang].aboutUs;
        document.querySelector('#programs h3:nth-of-type(1)').textContent = translations[lang].infantCare;
        document.querySelector('#programs h3:nth-of-type(2)').textContent = translations[lang].toddlerProgram;
        document.querySelector('#contact h2').textContent = translations[lang].contactInfo;
        document.querySelector('#contact p:nth-of-type(1)').textContent = translations[lang].address;
        document.querySelector('#contact p:nth-of-type(2)').textContent = translations[lang].phone;
        document.querySelector('#contact p:nth-of-type(3)').textContent = translations[lang].email;
        document.querySelector('#form-section h2').textContent = translations[lang].formHeader;
        document.querySelector('label[for="name"]').textContent = translations[lang].nameLabel;
        document.querySelector('label[for="email"]').textContent = translations[lang].emailLabel;
        document.querySelector('label[for="message"]').textContent = translations[lang].messageLabel;
        document.querySelector('input[type="submit"]').value = translations[lang].submitBtn;
        translateBtn.textContent = translations[lang].translateBtnText;
    }

    translateBtn.addEventListener('click', function() {
        currentLang = currentLang === 'en' ? 'es' : 'en';
        updateContent(currentLang);
    });

    updateContent(currentLang);
});
