// Navbar functionality
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animate hamburger menu
        const bars = navToggle.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            if (navMenu.classList.contains('active')) {
                if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
                if (index === 1) bar.style.opacity = '0';
                if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            }
        });
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const bars = navToggle.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            });
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Chat Modal functionality
const chatModal = document.getElementById('chat-modal');
const closeBtn = document.querySelector('.close');
const chatInputField = document.getElementById('chat-input-field');
const sendMessageBtn = document.getElementById('send-message');
const chatMessages = document.getElementById('chat-messages');

// Sample responses for Shreyas-Bot (in different languages)
const botResponses = {
    english: [
        "Hello! I'm Shreyas-Bot. I can tell you about Shreyas's projects and skills. What would you like to know?",
        "Shreyas is passionate about software engineering and loves solving complex problems through code.",
        "Some of Shreyas's key projects include the Globle Solver, a Pacman game with procedural generation, and me - his AI assistant!",
        "Shreyas is proficient in Java, Python, JavaScript, and C++, with expertise in algorithms and AI.",
        "Feel free to ask me anything about Shreyas's work or interests!",
        "Shreyas enjoys working on challenging projects that combine creativity with technical expertise.",
        "The Globle Solver project demonstrates Shreyas's skills in graph algorithms and optimization techniques."
    ],
    telugu: [
        "నమస్కారం! నేను శ్రేయస్-బాట్. శ్రేయస్ గురించి మీకు ఏదైనా తెలుసుకోవాలంటే అడగండి.",
        "శ్రేయస్ సాఫ్ట్‌వేర్ ఇంజనీరింగ్‌లో చాలా ఆసక్తి కలిగి ఉన్నాడు.",
        "అతని ప్రధాన ప్రాజెక్టులలో గ్లోబ్ సాల్వర్ మరియు ప్యాక్‌మ్యాన్ గేమ్ ఉన్నాయి.",
        "జావా, పైథాన్, జావాస్క్రిప్ట్ మరియు C++లలో అతనికి మంచి అనుభవం ఉంది."
    ],
    hindi: [
        "नमस्ते! मैं श्रेयस-बॉट हूं। श्रेयस के बारे में कुछ भी पूछ सकते हैं।",
        "श्रेयस सॉफ्टवेयर इंजीनियरिंग में बहुत रुचि रखता है।",
        "उसके मुख्य प्रोजेक्ट्स में ग्लोबल सॉल्वर और पैकमैन गेम शामिल हैं।",
        "जावा, पायथन, जावास्क्रिप्ट और C++ में उसका अच्छा अनुभव है।"
    ],
    french: [
        "Salut! Je suis Shreyas-Bot. Je peux vous parler des projets de Shreyas.",
        "Shreyas est passionné par l'ingénierie logicielle et résoudre des problèmes complexes.",
        "Ses projets principaux incluent le solveur Globle et un jeu Pacman avec génération procédurale.",
        "Il maîtrise Java, Python, JavaScript et C++."
    ],
    spanish: [
        "¡Hola! Soy Shreyas-Bot. Puedo contarte sobre los proyectos de Shreyas.",
        "Shreyas es apasionado de la ingeniería de software y resolver problemas complejos.",
        "Sus proyectos principales incluyen el solucionador Globle y un juego Pacman.",
        "Domina Java, Python, JavaScript y C++."
    ]
};

// Function to detect language from user input
function detectLanguage(text) {
    const lowerText = text.toLowerCase();
    
    // Telugu detection
    if (/[\u0C00-\u0C7F]/.test(text)) return 'telugu';
    
    // Hindi detection
    if (/[\u0900-\u097F]/.test(text)) return 'hindi';
    
    // French detection
    if (lowerText.includes('bonjour') || lowerText.includes('salut') || 
        lowerText.includes('français') || lowerText.includes('projet')) return 'french';
    
    // Spanish detection
    if (lowerText.includes('hola') || lowerText.includes('español') || 
        lowerText.includes('proyecto') || lowerText.includes('programación')) return 'spanish';
    
    // Default to English
    return 'english';
}

// Function to get bot response
function getBotResponse(userMessage) {
    const language = detectLanguage(userMessage);
    const responses = botResponses[language] || botResponses.english;
    
    // Simple keyword-based responses
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('project') || lowerMessage.includes('प्रोजेक्ट') || 
        lowerMessage.includes('প্রকল্প') || lowerMessage.includes('projet') || 
        lowerMessage.includes('proyecto')) {
        return responses[Math.floor(Math.random() * Math.min(3, responses.length))];
    }
    
    if (lowerMessage.includes('skill') || lowerMessage.includes('programming') || 
        lowerMessage.includes('language') || lowerMessage.includes('कौशल')) {
        return responses[Math.floor(Math.random() * responses.length)];
    }
    
    if (lowerMessage.includes('globle') || lowerMessage.includes('game')) {
        if (language === 'english') {
            return "The Globle Solver is one of Shreyas's most impressive projects! It uses advanced algorithms like entropy calculation and graph optimization to efficiently solve the geography game Globle.";
        }
        return responses[Math.floor(Math.random() * responses.length)];
    }
    
    // Default response
    return responses[0];
}

// Open chat modal
function openChat() {
    chatModal.style.display = 'block';
    chatInputField.focus();
}

// Close chat modal
function closeChat() {
    chatModal.style.display = 'none';
}

// Event listeners for chat modal
if (closeBtn) {
    closeBtn.addEventListener('click', closeChat);
}

window.addEventListener('click', function(event) {
    if (event.target === chatModal) {
        closeChat();
    }
});

// Send message functionality
function sendMessage() {
    const message = chatInputField.value.trim();
    if (message === '') return;

    // Add user message to chat
    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'user-message';
    userMessageDiv.innerHTML = `<p>${message}</p>`;
    chatMessages.appendChild(userMessageDiv);

    // Clear input
    chatInputField.value = '';

    // Add bot response after a short delay
    setTimeout(() => {
        const botResponse = getBotResponse(message);
        const botMessageDiv = document.createElement('div');
        botMessageDiv.className = 'bot-message';
        botMessageDiv.innerHTML = `<p>${botResponse}</p>`;
        chatMessages.appendChild(botMessageDiv);

        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

if (sendMessageBtn) {
    sendMessageBtn.addEventListener('click', sendMessage);
}

if (chatInputField) {
    chatInputField.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

// Contact form functionality
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simple form validation
        if (name && email && message) {
            // Simulate form submission
            alert('Thank you for your message! Shreyas will get back to you soon.');
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.project-card, .skill-category, .stat');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('fade-in-up');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);

// Typing effect for hero section
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect on page load
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero-title');
    const originalText = heroTitle.innerHTML;
    
    // Add a slight delay before starting the typing effect
    setTimeout(() => {
        typeWriter(heroTitle, originalText, 50);
    }, 500);
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && heroContent) {
        const rate = scrolled * -0.5;
        heroContent.style.transform = `translateY(${rate}px)`;
    }
});

// Add interactive hover effects to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add click effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.project-card, .skill-category, .stat, .about-description').forEach(el => {
    observer.observe(el);
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Remove any loading indicators
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.display = 'none';
    }
});

// Console easter egg
console.log(`
🚀 Welcome to Shreyas Kaps's Portfolio!
═══════════════════════════════════════

Built with passion for engineering excellence.
Featuring modern web technologies and clean design.

Projects showcased:
• Globle Solver - Advanced algorithm implementation
• Pacman Game - Procedural generation & game development  
• Shreyas-Bot - AI-powered multilingual assistant

Want to chat? Try the Shreyas-Bot in the projects section!

📧 Interested in collaboration? Use the contact form!
🔗 GitHub: https://github.com/shreyaskaps
`); 