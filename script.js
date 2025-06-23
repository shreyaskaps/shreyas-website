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

// Enhanced Shreyas-Bot Knowledge Base
const shreyasBotKnowledge = {
    personal: {
        name: "Shreyas Kaps",
        email: "kaps@berkeley.edu",
        university: "UC Berkeley",
        major: "Computer Science / Engineering",
        languages: ["English", "Telugu", "Hindi", "French", "Spanish"],
        interests: ["Software Engineering", "Algorithm Design", "Game Development", "AI/ML", "Problem Solving"],
        personality: "Passionate, analytical, creative, loves challenges"
    },
    
    projects: {
        globle: {
            name: "Globle Solver",
            description: "An intelligent solver for the geography game Globle using advanced algorithms",
            tech: ["Java", "Graph Algorithms", "Entropy Calculation", "Distance Matrices", "Optimization"],
            features: ["Adjacency graph implementation", "Entropy-based decision making", "Distance calculations", "Candidate management"],
            github: "https://github.com/shreyaskaps/globle-solver",
            complexity: "Advanced algorithm implementation with O(n log n) optimization"
        },
        pacman: {
            name: "Pacman with Random Maps",
            description: "Fully functional Pacman game with procedural map generation",
            tech: ["Game Development", "Procedural Generation", "Algorithm Design", "Graphics Programming"],
            features: ["Procedural map generation", "Classic gameplay mechanics", "AI-driven ghost behavior", "Dynamic progression"],
            status: "Private repository (academic coursework)"
        },
        bot: {
            name: "Shreyas-Bot",
            description: "AI-powered multilingual conversational assistant",
            tech: ["Natural Language Processing", "Machine Learning", "Multilingual AI", "JavaScript"],
            features: ["5-language support", "Context awareness", "Personality modeling", "Real-time responses"],
            languages: ["English", "Telugu", "Hindi", "French", "Spanish"]
        }
    },

    skills: {
        programming: ["Java", "Python", "JavaScript", "C++"],
        technologies: ["Machine Learning", "Natural Language Processing", "Game Development", "Web Development"],
        algorithms: ["Graph Algorithms", "Dynamic Programming", "Optimization", "Search Algorithms"],
        tools: ["Git", "GitHub", "IDE tools", "Version Control"]
    },

    education: {
        current: "UC Berkeley",
        focus: "Computer Science and Engineering",
        interests: ["Algorithms", "Software Engineering", "AI/ML Applications"]
    }
};

// Language-specific response templates
const responseTemplates = {
    english: {
        greeting: "Hello! I'm Shreyas-Bot, your AI assistant trained on Shreyas's communication patterns. I can tell you about his projects, skills, and experiences. What would you like to know?",
        projects: "Shreyas has worked on several fascinating projects including the Globle Solver (a geography game AI), a Pacman game with procedural generation, and me - his multilingual AI assistant!",
        skills: "Shreyas is proficient in Java, Python, JavaScript, and C++. He specializes in algorithms, game development, and AI/ML applications.",
        education: "Shreyas studies at UC Berkeley, focusing on Computer Science and Engineering with particular interest in algorithms and software engineering.",
        contact: "You can reach Shreyas at kaps@berkeley.edu or check out his projects on GitHub at github.com/shreyaskaps",
        personality: "Shreyas is passionate about solving complex problems through elegant code. He enjoys challenging projects that combine creativity with technical expertise.",
        languages: "Shreyas speaks 5 languages fluently: English, Telugu, Hindi, French, and Spanish - which is why I can chat with you in any of these languages!",
        goodbye: "Thanks for chatting! Feel free to reach out to Shreyas directly at kaps@berkeley.edu if you'd like to discuss opportunities or collaborations."
    },
    telugu: {
        greeting: "నమస్కారం! నేను శ్రేయస్-బాట్, శ్రేయస్ యొక్క కమ్యూనికేషన్ పద్ధతులపై శిక్షణ పొందిన AI అసిస్టెంట్. అతని ప్రాజెక్టులు, నైపుణ్యాలు గురించి తెలుసుకోవాలంటే అడగండి.",
        projects: "శ్రేయస్ గ్లోబ్ సాల్వర్ (భౌగోళిక గేమ్ AI), ప్రొసీజరల్ జనరేషన్‌తో ప్యాక్‌మ్యాన్ గేమ్, మరియు నేను వంటి ప్రాజెక్టులపై పనిచేశాడు!",
        skills: "శ్రేయస్‌కు జావా, పైథాన్, జావాస్క్రిప్ట్, C++ లలో మంచి పరిజ్ఞానం ఉంది. అల్గోరిథమ్స్, గేమ్ డెవలప్‌మెంట్‌లో నిపుణుడు.",
        education: "శ్రేయస్ UC బర్కిలీలో కంప్యూటర్ సైన్స్ అండ్ ఇంజనీరింగ్ చదువుతున్నాడు.",
        contact: "శ్రేయస్‌ను kaps@berkeley.edu లో సంప్రదించవచ్చు లేదా GitHub లో అతని ప్రాజెక్టులు చూడవచ్చు.",
        personality: "శ్రేయస్ కాంప్లెక్స్ ప్రాబ్లెమ్స్‌ను కోడ్ ద్వారా పరిష్కరించడంలో మక్కువ కలిగి ఉన్నాడు."
    },
    hindi: {
        greeting: "नमस्ते! मैं श्रेयस-बॉट हूं, श्रेयस के कम्युनिकेशन पैटर्न पर ट्रेन किया गया AI असिस्टेंट। उनके प्रोजेक्ट्स और स्किल्स के बारे में पूछ सकते हैं।",
        projects: "श्रेयस ने ग्लोबल सॉल्वर (geography गेम AI), प्रोसीजरल जेनरेशन के साथ पैकमैन गेम, और मुझ जैसे प्रोजेक्ट्स पर काम किया है!",
        skills: "श्रेयस को Java, Python, JavaScript, C++ में अच्छी expertise है। algorithms और game development में माहिर हैं।",
        education: "श्रेयस UC Berkeley में Computer Science और Engineering पढ़ रहे हैं।",
        contact: "श्रेयस से kaps@berkeley.edu पर संपर्क कर सकते हैं या GitHub पर उनके projects देख सकते हैं।",
        personality: "श्रेयस को complex problems को elegant code से solve करने में passion है।"
    },
    french: {
        greeting: "Salut! Je suis Shreyas-Bot, l'assistant IA entraîné sur les patterns de communication de Shreyas. Je peux vous parler de ses projets et compétences.",
        projects: "Shreyas a travaillé sur le solveur Globle (IA de jeu géographique), un jeu Pacman avec génération procédurale, et moi - son assistant IA multilingue!",
        skills: "Shreyas maîtrise Java, Python, JavaScript et C++. Il se spécialise dans les algorithmes et le développement de jeux.",
        education: "Shreyas étudie à UC Berkeley en informatique et ingénierie.",
        contact: "Vous pouvez contacter Shreyas à kaps@berkeley.edu ou voir ses projets sur GitHub.",
        personality: "Shreyas est passionné par la résolution de problèmes complexes avec du code élégant."
    },
    spanish: {
        greeting: "¡Hola! Soy Shreyas-Bot, el asistente de IA entrenado en los patrones de comunicación de Shreyas. Puedo contarte sobre sus proyectos y habilidades.",
        projects: "Shreyas ha trabajado en el solucionador Globle (IA de juego geográfico), un juego Pacman con generación procedural, y yo - ¡su asistente de IA multilingüe!",
        skills: "Shreyas domina Java, Python, JavaScript y C++. Se especializa en algoritmos y desarrollo de juegos.",
        education: "Shreyas estudia en UC Berkeley en Ciencias de la Computación e Ingeniería.",
        contact: "Puedes contactar a Shreyas en kaps@berkeley.edu o ver sus proyectos en GitHub.",
        personality: "Shreyas es apasionado por resolver problemas complejos con código elegante."
    }
};

// Advanced language detection with better accuracy
function detectLanguage(text) {
    const lowerText = text.toLowerCase();
    
    // Telugu detection (Devanagari script)
    if (/[\u0C00-\u0C7F]/.test(text)) return 'telugu';
    
    // Hindi detection (Devanagari script)
    if (/[\u0900-\u097F]/.test(text)) return 'hindi';
    
    // French detection (keywords and patterns)
    const frenchKeywords = ['bonjour', 'salut', 'français', 'projet', 'compétences', 'université', 'merci', 'au revoir'];
    if (frenchKeywords.some(keyword => lowerText.includes(keyword))) return 'french';
    
    // Spanish detection (keywords and patterns)
    const spanishKeywords = ['hola', 'español', 'proyecto', 'programación', 'universidad', 'gracias', 'adiós', 'qué'];
    if (spanishKeywords.some(keyword => lowerText.includes(keyword))) return 'spanish';
    
    // Default to English
    return 'english';
}

// Advanced intent recognition system
function analyzeIntent(message, language) {
    const lowerMessage = message.toLowerCase();
    
    // Greeting patterns
    const greetingPatterns = {
        english: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'],
        telugu: ['నమస్కారం', 'హలో', 'హాయ్'],
        hindi: ['नमस्ते', 'हैलो', 'हाय', 'प्रणाम'],
        french: ['bonjour', 'salut', 'bonsoir', 'hello'],
        spanish: ['hola', 'buenos días', 'buenas tardes', 'buenas noches']
    };
    
    // Project-related patterns
    const projectPatterns = {
        english: ['project', 'work', 'built', 'created', 'developed', 'globle', 'pacman', 'bot'],
        telugu: ['ప్రాజెక్ట్', 'పని', 'సృష్టించిన'],
        hindi: ['प्रोजेक्ट', 'काम', 'बनाया', 'विकसित'],
        french: ['projet', 'travail', 'créé', 'développé'],
        spanish: ['proyecto', 'trabajo', 'creado', 'desarrollado']
    };
    
    // Skills patterns
    const skillPatterns = {
        english: ['skill', 'programming', 'language', 'technology', 'expertise', 'experience'],
        telugu: ['నైపుణ్యం', 'ప్రోగ్రామింగ్'],
        hindi: ['कौशल', 'प्रोग्रामिंग', 'भाषा'],
        french: ['compétence', 'programmation', 'langage'],
        spanish: ['habilidad', 'programación', 'lenguaje']
    };
    
    // Education patterns
    const educationPatterns = {
        english: ['education', 'study', 'university', 'berkeley', 'student'],
        telugu: ['చదువు', 'విద్య', 'విశ్వవిద్యాలయం'],
        hindi: ['शिक्षा', 'पढ़ाई', 'विश्वविद्यालय'],
        french: ['éducation', 'étude', 'université'],
        spanish: ['educación', 'estudio', 'universidad']
    };
    
    // Contact patterns
    const contactPatterns = {
        english: ['contact', 'email', 'reach', 'connect', 'hire'],
        telugu: ['సంప్రదించు', 'ఇమెయిల్'],
        hindi: ['संपर्क', 'ईमेल'],
        french: ['contact', 'email', 'contacter'],
        spanish: ['contacto', 'email', 'contactar']
    };
    
    const patterns = [greetingPatterns, projectPatterns, skillPatterns, educationPatterns, contactPatterns];
    const intents = ['greeting', 'projects', 'skills', 'education', 'contact'];
    
    for (let i = 0; i < patterns.length; i++) {
        const languagePatterns = patterns[i][language] || patterns[i]['english'];
        if (languagePatterns.some(pattern => lowerMessage.includes(pattern))) {
            return intents[i];
        }
    }
    
    return 'general';
}

// Enhanced response generation system
function getBotResponse(userMessage) {
    const language = detectLanguage(userMessage);
    const intent = analyzeIntent(userMessage, language);
    const templates = responseTemplates[language] || responseTemplates['english'];
    
    // Context-aware responses based on intent
    switch (intent) {
        case 'greeting':
            return templates.greeting;
            
        case 'projects':
            return generateProjectResponse(userMessage, language, templates);
            
        case 'skills':
            return templates.skills;
            
        case 'education':
            return templates.education;
            
        case 'contact':
            return templates.contact;
            
        default:
            return generateContextualResponse(userMessage, language, templates);
    }
}

// Generate detailed project responses
function generateProjectResponse(message, language, templates) {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('globle')) {
        const globleInfo = shreyasBotKnowledge.projects.globle;
        if (language === 'english') {
            return `The Globle Solver is fascinating! It's ${globleInfo.description}. Shreyas implemented ${globleInfo.features.join(', ')} using technologies like ${globleInfo.tech.slice(0, 3).join(', ')}. The algorithm achieves ${globleInfo.complexity}. You can check it out at ${globleInfo.github}`;
        }
    }
    
    if (lowerMessage.includes('pacman')) {
        const pacmanInfo = shreyasBotKnowledge.projects.pacman;
        if (language === 'english') {
            return `The Pacman project showcases Shreyas's game development skills! It features ${pacmanInfo.features.join(', ')}. The procedural generation algorithm creates unique mazes every time you play. Unfortunately, it's a ${pacmanInfo.status}, so I can't share the code directly.`;
        }
    }
    
    if (lowerMessage.includes('bot') || lowerMessage.includes('ai')) {
        const botInfo = shreyasBotKnowledge.projects.bot;
        if (language === 'english') {
            return `That's me! I'm the Shreyas-Bot, ${botInfo.description}. I can communicate in ${botInfo.languages.join(', ')} and I'm built using ${botInfo.tech.join(', ')}. My features include ${botInfo.features.join(', ')}. Pretty cool, right?`;
        }
    }
    
    return templates.projects;
}

// Generate contextual responses for complex queries
function generateContextualResponse(message, language, templates) {
    const lowerMessage = message.toLowerCase();
    
    // Personality questions
    if (lowerMessage.includes('personality') || lowerMessage.includes('like') || lowerMessage.includes('enjoy')) {
        return templates.personality;
    }
    
    // Language questions
    if (lowerMessage.includes('language') && !lowerMessage.includes('programming')) {
        return templates.languages;
    }
    
    // Goodbye patterns
    if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye') || lowerMessage.includes('thanks')) {
        return templates.goodbye || templates.greeting;
    }
    
    // Default to greeting for unrecognized patterns
    return templates.greeting;
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

// Conversation context and memory
let conversationContext = {
    previousMessages: [],
    currentLanguage: 'english',
    topicsDiscussed: [],
    userPreferences: {}
};

// Enhanced send message functionality with typing indicator
function sendMessage() {
    const message = chatInputField.value.trim();
    if (message === '') return;

    // Add user message to chat
    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'user-message';
    userMessageDiv.innerHTML = `<p>${message}</p>`;
    chatMessages.appendChild(userMessageDiv);

    // Update conversation context
    conversationContext.previousMessages.push({
        type: 'user',
        message: message,
        timestamp: new Date()
    });

    // Clear input
    chatInputField.value = '';

    // Add typing indicator
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'bot-message typing-indicator';
    typingIndicator.innerHTML = `
        <div class="typing-dots">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <p style="margin-top: 5px; font-size: 0.9em; opacity: 0.7;">Shreyas-Bot is typing...</p>
    `;
    chatMessages.appendChild(typingIndicator);

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Generate response with realistic delay
    const responseDelay = Math.random() * 1000 + 1500; // 1.5-2.5 seconds
    setTimeout(() => {
        // Remove typing indicator
        typingIndicator.remove();

        // Get sophisticated response
        const botResponse = getBotResponse(message);
        const botMessageDiv = document.createElement('div');
        botMessageDiv.className = 'bot-message';
        botMessageDiv.innerHTML = `<p>${botResponse}</p>`;
        chatMessages.appendChild(botMessageDiv);

        // Update context
        conversationContext.previousMessages.push({
            type: 'bot',
            message: botResponse,
            timestamp: new Date()
        });

        // Update language preference
        conversationContext.currentLanguage = detectLanguage(message);

        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, responseDelay);
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