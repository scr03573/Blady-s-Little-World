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
            aboutDescription: "Blady's Little World is dedicated to providing a nurturing environment for early childhood development...",
            ourPrograms: "Our Programs",
            infantCare: "Infant Care",
            infantCareDescription: "Our infant care program provides a safe and stimulating environment...",
            toddlerProgram: "Toddler Program",
            toddlerProgramDescription: "Our toddler program encourages exploration and learning through play...",
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
            aboutDescription: "Blady's Little World está dedicada a proporcionar un ambiente acogedor para el desarrollo infantil temprano...",
            ourPrograms: "Nuestros Programas",
            infantCare: "Cuidado Infantil",
            infantCareDescription: "Nuestro programa de cuidado infantil proporciona un entorno seguro y estimulante...",
            toddlerProgram: "Programa para Niños Pequeños",
            toddlerProgramDescription: "Nuestro programa para niños pequeños fomenta la exploración y el aprendizaje a través del juego...",
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

        // Update text content for all elements
        document.getElementById('home-heading').textContent = content.welcome;
        document.getElementById('home-description').textContent = content.vision;
        document.getElementById('info-btn').textContent = content.requestInfo;
        document.getElementById('tour-btn').textContent = content.scheduleTour;
        document.getElementById('about-heading').textContent = content.aboutUs;
        document.getElementById('about-description').textContent = content.aboutDescription;
        document.getElementById('programs-heading').textContent = content.ourPrograms;
        document.getElementById('infant-care-heading').textContent = content.infantCare;
        document.getElementById('infant-care-description').textContent = content.infantCareDescription;
        document.getElementById('toddler-program-heading').textContent = content.toddlerProgram;
        document.getElementById('toddler-program-description').textContent = content.toddlerProgramDescription;
        document.getElementById('contact-heading').textContent = content.contactInfo;
        document.getElementById('contact-address').innerHTML = `<strong>${content.address.split(':')[0]}:</strong>${content.address.split(':')[1]}`;
        document.getElementById('contact-phone').innerHTML = `<strong>${content.phone.split(':')[0]}:</strong> <a href="tel:7866149899">${content.phone.split(':')[1]}</a>`;
        document.getElementById('contact-email').innerHTML = `<strong>${content.email.split(':')[0]}:</strong> <a href="mailto:bladyslittleworld@gmail.com">${content.email.split(':')[1]}</a>`;
        document.getElementById('form-heading').textContent = content.formHeader;
        document.getElementById('name-label').textContent = content.nameLabel;
        document.getElementById('email-label').textContent = content.emailLabel;
        document.getElementById('message-label').textContent = content.messageLabel;
        document.getElementById('submit-btn').value = content.submitBtn;
        translateBtn.textContent = content.translateBtnText;
    }

    translateBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'es' : 'en';
        updateContent(currentLang);
    });

    updateContent(currentLang);
});