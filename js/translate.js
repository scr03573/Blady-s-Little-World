document.addEventListener('DOMContentLoaded', () => {
    const translateBtn = document.getElementById('translate-btn');

    // Translations
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
        const content = translations[lang];
        document.querySelector('#home h1').textContent = content.welcome;
        document.querySelector('#home p').textContent = content.vision;
        document.getElementById('info-btn').textContent = content.requestInfo;
        document.getElementById('tour-btn').textContent = content.scheduleTour;
        document.querySelector('#about h2').textContent = content.aboutUs;
        document.querySelectorAll('#programs h3')[0].textContent = content.infantCare;
        document.querySelectorAll('#programs h3')[1].textContent = content.toddlerProgram;
        document.querySelector('#contact h2').textContent = content.contactInfo;
        document.querySelector('#contact p:nth-of-type(1)').innerHTML = `<strong>${content.address.split(':')[0]}:</strong> ${content.address.split(':')[1]}`;
        document.querySelector('#contact p:nth-of-type(2)').innerHTML = `<strong>${content.phone.split(':')[0]}:</strong> <a href="tel:7866149899">${content.phone.split(':')[1]}</a>`;
        document.querySelector('#contact p:nth-of-type(3)').innerHTML = `<strong>${content.email.split(':')[0]}:</strong> <a href="mailto:bladyslittleworld@gmail.com">${content.email.split(':')[1]}</a>`;
        document.querySelector('#form-section h2').textContent = content.formHeader;
        document.querySelector('label[for="name"]').textContent = content.nameLabel;
        document.querySelector('label[for="email"]').textContent = content.emailLabel;
        document.querySelector('label[for="message"]').textContent = content.messageLabel;
        document.querySelector('input[type="submit"]').value = content.submitBtn;
        translateBtn.textContent = content.translateBtnText;
    }

    translateBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'es' : 'en';
        updateContent(currentLang);
    });

    updateContent(currentLang);
});