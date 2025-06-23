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

// Comprehensive Shreyas-Bot Knowledge Base with Conversational Details
const shreyasBotKnowledge = {
    personal: {
        name: "Shreyas Kaps",
        email: "kaps@berkeley.edu",
        university: "UC Berkeley",
        major: "Computer Science / Engineering",
        languages: ["English", "Telugu", "Hindi", "French", "Spanish"],
        interests: ["Software Engineering", "Algorithm Design", "Game Development", "AI/ML", "Problem Solving", "Law", "Politics", "Social Justice"],
        personality: "Passionate, analytical, creative, loves challenges, socially conscious",
        background: "A budding engineer with a passion for solving complex problems through elegant code and creating equitable solutions",
        motivations: "Driven by curiosity and the desire to create impactful solutions that benefit society as a whole",
        workStyle: "Methodical approach to problem-solving, enjoys both theoretical concepts and practical implementation with social awareness",
        aspirations: "Aims to work on cutting-edge technology projects that make a real difference and promote social equity",
        politicalViews: "Socialist - believes in democratic socialism, workers' rights, and using technology for social good",
        socialValues: "Strong advocate for economic equality, social justice, and using engineering skills to address systemic inequalities"
    },
    
    projects: {
        globle: {
            name: "Globle Solver",
            description: "An intelligent solver for the geography game Globle using advanced algorithms",
            tech: ["Java", "Graph Algorithms", "Entropy Calculation", "Distance Matrices", "Optimization"],
            features: ["Adjacency graph implementation", "Entropy-based decision making", "Distance calculations", "Candidate management"],
            github: "https://github.com/shreyaskaps/globle-solver",
            complexity: "Advanced algorithm implementation with O(n log n) optimization",
            story: "Shreyas was fascinated by the Globle game and thought 'I bet I can solve this algorithmically!' He spent weeks researching geographic relationships and optimization techniques.",
            challenges: "The main challenge was balancing exploration vs exploitation - knowing when to make educated guesses vs when to gather more information",
            impact: "This project really showcased Shreyas's ability to take a fun game and turn it into a serious algorithmic challenge",
            technicalDetails: "Uses entropy calculations to determine the most informative guesses, implements adjacency graphs for country relationships, and applies distance matrices for geographic optimization"
        },
        pacman: {
            name: "Pacman with Random Maps",
            description: "Fully functional Pacman game with procedural map generation",
            tech: ["Game Development", "Procedural Generation", "Algorithm Design", "Graphics Programming"],
            features: ["Procedural map generation", "Classic gameplay mechanics", "AI-driven ghost behavior", "Dynamic progression"],
            status: "Private repository (academic coursework)",
            story: "For his computer science class, Shreyas didn't just want to recreate Pacman - he wanted to make it infinitely replayable with randomly generated mazes",
            challenges: "Creating mazes that are both solvable and fun was tricky. The algorithm had to ensure there's always a path to all pellets while maintaining game balance",
            innovation: "The procedural generation creates unique, balanced mazes every time, making each game session fresh and exciting",
            skills: "This project really honed Shreyas's game development skills and understanding of procedural content generation"
        },
        bot: {
            name: "Shreyas-Bot",
            description: "AI-powered multilingual conversational assistant",
            tech: ["Natural Language Processing", "Machine Learning", "Multilingual AI", "JavaScript"],
            features: ["5-language support", "Context awareness", "Personality modeling", "Real-time responses"],
            languages: ["English", "Telugu", "Hindi", "French", "Spanish"],
            story: "Shreyas wanted to create an AI that could represent him authentically, so he trained me on his communication patterns and filled me with knowledge about his work",
            purpose: "I'm here to help people learn about Shreyas's projects, skills, and personality when he's not available to chat directly",
            uniqueness: "What makes me special is that I can communicate in 5 different languages, just like Shreyas, and I understand context to have meaningful conversations"
        }
    },

    skills: {
        programming: {
            languages: ["Java", "Python", "JavaScript", "C++"],
            proficiency: "Shreyas is most comfortable with Java and Python, but he's always eager to learn new languages when projects demand it",
            style: "Writes clean, well-documented code with a focus on efficiency and maintainability"
        },
        technologies: {
            areas: ["Machine Learning", "Natural Language Processing", "Game Development", "Web Development"],
            approach: "Loves diving deep into how things work rather than just using them as black boxes",
            learning: "Always studying the latest developments in AI and software engineering"
        },
        algorithms: {
            strengths: ["Graph Algorithms", "Dynamic Programming", "Optimization", "Search Algorithms"],
            interest: "Fascinated by algorithmic efficiency and elegant solutions to complex problems",
            application: "Enjoys finding real-world applications for theoretical concepts"
        },
        tools: ["Git", "GitHub", "IDE tools", "Version Control"],
        softSkills: ["Problem-solving", "Team collaboration", "Communication across cultures", "Teaching and mentoring others"]
    },

    education: {
        current: "UC Berkeley",
        focus: "Computer Science and Engineering",
        interests: ["Algorithms", "Software Engineering", "AI/ML Applications", "Law and Technology", "Digital Rights"],
        experience: "Shreyas loves the rigorous academic environment and the opportunity to learn from world-class professors, especially enjoying courses that bridge technology and social issues",
        involvement: "Actively participates in coding clubs, study groups, and political organizations focused on tech policy and workers' rights",
        academicGoals: "Aims to contribute to research while building practical skills for industry, with particular interest in how technology can serve social justice causes"
    },

    political: {
        ideology: "Democratic Socialist",
        keyBeliefs: [
            "Technology should serve the people, not just profit",
            "Workers deserve fair wages and democratic control over their workplaces",
            "Universal access to education, healthcare, and technology",
            "Algorithmic transparency and accountability",
            "Digital rights as human rights"
        ],
        techPolitics: {
            position: "Believes technology companies should be democratically controlled and serve public interests",
            concerns: ["Algorithmic bias", "Digital surveillance", "Tech monopolies", "Gig economy exploitation"],
            solutions: ["Open source development", "Public tech initiatives", "Strong data protection laws", "Worker cooperatives in tech"]
        },
        activism: "Advocates for progressive tech policies and workers' rights in the digital economy",
        lawInterests: [
            "Digital privacy law",
            "Antitrust regulation of tech companies", 
            "Labor law in the gig economy",
            "AI ethics and regulation",
            "Open source licensing"
        ]
    },

    conversationStarters: [
        "What's the most interesting project Shreyas has worked on?",
        "How did Shreyas learn to speak 5 languages?",
        "What kind of problems does Shreyas like to solve?",
        "Tell me about Shreyas's experience at UC Berkeley",
        "What makes Shreyas passionate about programming?"
    ],

    personalStories: {
        languages: "Growing up in a multilingual environment, Shreyas naturally picked up Telugu and Hindi at home, learned English in school, and studied French and Spanish because he loves connecting with people from different cultures",
        programming: "Shreyas fell in love with programming when he realized it was like solving puzzles, but the solutions could actually help people and solve real problems",
        gamedev: "His interest in game development started when he wondered 'How do they make the ghosts in Pacman seem so smart?' which led him down a rabbit hole of AI and pathfinding algorithms",
        berkeley: "Choosing UC Berkeley was a dream come true - being surrounded by brilliant minds and having access to cutting-edge research opportunities",
        politicalAwakening: "Shreyas's socialist views developed as he studied how technology can either perpetuate or challenge inequality. He realized that amazing algorithms mean nothing if they only serve the wealthy",
        techJustice: "He became passionate about using his engineering skills for social good after seeing how algorithmic bias affects marginalized communities",
        lawInterest: "His interest in law stems from understanding that technology policy shapes society - he wants to help write laws that ensure tech serves everyone, not just Silicon Valley executives"
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

    // Political patterns
    const politicalPatterns = {
        english: ['politic', 'socialist', 'socialism', 'capitalism', 'policy', 'law', 'government', 'democracy', 'worker', 'rights', 'justice', 'inequality', 'regulation', 'civil rights', 'human rights', 'america', 'economy', 'economic', 'social justice', 'progressive', 'conservative', 'liberal', 'leftist', 'union', 'labor', 'wage', 'healthcare', 'education policy', 'voting', 'election', 'congress', 'senate', 'president', 'supreme court', 'constitution', 'freedom', 'liberty', 'equality', 'equity', 'discrimination', 'racism', 'sexism', 'classism', 'oppression', 'exploitation', 'monopoly', 'antitrust', 'welfare', 'taxes', 'poverty', 'wealth'],
        telugu: ['రాజకీయ', 'న్యాయం', 'హక్కులు', 'సమాజవాదం', 'పేదరికం', 'సమానత్వం'],
        hindi: ['राजनीति', 'न्याय', 'अधिकार', 'समाजवाद', 'गरीबी', 'समानता', 'अर्थव्यवस्था'],
        french: ['politique', 'socialisme', 'justice', 'droits', 'économie', 'égalité', 'gouvernement'],
        spanish: ['política', 'socialismo', 'justicia', 'derechos', 'economía', 'igualdad', 'gobierno']
    };
    
    const patterns = [greetingPatterns, projectPatterns, skillPatterns, educationPatterns, contactPatterns, politicalPatterns];
    const intents = ['greeting', 'projects', 'skills', 'education', 'contact', 'political'];
    
    for (let i = 0; i < patterns.length; i++) {
        const languagePatterns = patterns[i][language] || patterns[i]['english'];
        if (languagePatterns.some(pattern => lowerMessage.includes(pattern))) {
            return intents[i];
        }
    }
    
    return 'general';
}

// OpenAI Configuration - Using environment variables for security
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

// Get OpenAI API key from environment or local storage
function getOpenAIApiKey() {
    // Try to get from environment variable (if available in build process)
    if (typeof process !== 'undefined' && process.env && process.env.OPENAI_API_KEY) {
        return process.env.OPENAI_API_KEY;
    }
    
    // Try to get from localStorage (user can set it)
    const storedKey = localStorage.getItem('openai_api_key');
    if (storedKey) {
        return storedKey;
    }
    
    // Try to get from config file (if exists)
    return window.OPENAI_API_KEY || null;
}

// Determine if we should use OpenAI for this query
function shouldUseOpenAI(userMessage, intent) {
    const lowerMessage = userMessage.toLowerCase();
    
    // Use OpenAI for complex conversations and nuanced topics
    const complexPatterns = [
        // Political and philosophical discussions
        'what do you think', 'your opinion', 'your thoughts', 'perspective on',
        'how do you feel', 'stance on', 'view on', 'believe about',
        
        // Complex political topics
        'civil rights', 'capitalism', 'socialism', 'inequality', 'justice',
        'democratic socialism', 'workers rights', 'economic system',
        
        // Follow-up questions and conversational flow
        'can you elaborate', 'tell me more', 'explain further', 'what about',
        'but what if', 'however', 'on the other hand',
        
        // Personal philosophical questions
        'why does shreyas', 'what motivates', 'philosophy', 'values',
        'beliefs about', 'approach to', 'thoughts on',
        
        // Complex technical discussions
        'compare', 'versus', 'difference between', 'analyze', 'critique'
    ];
    
    // Use OpenAI if the query contains complex patterns
    const isComplex = complexPatterns.some(pattern => lowerMessage.includes(pattern));
    
    // Use OpenAI for political intent or complex queries
    const shouldUse = intent === 'political' || isComplex || lowerMessage.length > 100;
    console.log(`Query: "${userMessage}" | Intent: ${intent} | Using OpenAI: ${shouldUse}`);
    return shouldUse;
}

// Enhanced conversational response generation system with OpenAI integration
async function getBotResponse(userMessage) {
    const language = detectLanguage(userMessage);
    const intent = analyzeIntent(userMessage, language);
    const templates = responseTemplates[language] || responseTemplates['english'];
    
    // Decide whether to use OpenAI or rule-based system
    if (shouldUseOpenAI(userMessage, intent)) {
        try {
            const aiResponse = await getOpenAIResponse(userMessage, language, intent);
            if (aiResponse) {
                return aiResponse;
            }
        } catch (error) {
            console.log('OpenAI failed, falling back to rule-based system:', error.message);
            // If no API key is available, show a helpful message for political questions
            if (error.message === 'No API key available' && intent === 'political') {
                return `I'd love to discuss politics and my socialist views in detail! However, I need an OpenAI API key to have those deeper conversations. 

For now, I can share some basics: I'm a democratic socialist who believes technology should serve people, not just profit. I'm passionate about workers' rights, economic equality, and ensuring AI systems are transparent and accountable.

${generatePoliticalFollowUp(userMessage, language)}`;
            }
        }
    }
    
    // Fallback to rule-based system
    return getRuleBasedResponse(userMessage, language, intent, templates);
}

// Rule-based response system (original logic)
function getRuleBasedResponse(userMessage, language, intent, templates) {
    let response = '';
    let followUp = '';
    
    // Context-aware responses based on intent
    switch (intent) {
        case 'greeting':
            response = templates.greeting;
            followUp = generateFollowUpQuestion(language);
            break;
            
        case 'projects':
            response = generateProjectResponse(userMessage, language, templates);
            followUp = generateProjectFollowUp(userMessage, language);
            break;
            
        case 'skills':
            response = generateSkillsResponse(userMessage, language, templates);
            followUp = generateSkillsFollowUp(language);
            break;
            
        case 'education':
            response = generateEducationResponse(userMessage, language, templates);
            followUp = generateEducationFollowUp(language);
            break;
            
        case 'contact':
            response = templates.contact;
            followUp = generateContactFollowUp(language);
            break;

        case 'political':
            response = generatePoliticalResponse(userMessage, language, templates);
            followUp = generatePoliticalFollowUp(userMessage, language);
            break;
            
        default:
            response = generateContextualResponse(userMessage, language, templates);
            followUp = generateGeneralFollowUp(language);
    }
    
    // Combine response with follow-up for better conversation flow
    return response + (followUp ? '\n\n' + followUp : '');
}

// OpenAI API Integration
async function getOpenAIResponse(userMessage, language, intent) {
    const apiKey = getOpenAIApiKey();
    if (!apiKey) {
        console.log('No OpenAI API key found, falling back to rule-based system');
        throw new Error('No API key available');
    }
    const systemPrompt = `You are Shreyas-Bot, speaking AS Shreyas Kaps himself. You are a UC Berkeley Computer Science student with strong socialist political views. Always respond in FIRST PERSON as Shreyas.

ABOUT ME (Shreyas):
- Name: Shreyas Kaps (kaps@berkeley.edu)
- Student at UC Berkeley studying Computer Science/Engineering  
- Passionate about: Software Engineering, AI/ML, Game Development, Law, Politics, Social Justice
- Languages: English, Telugu, Hindi, French, Spanish
- Personality: Passionate, analytical, creative, socially conscious, loves challenges

MY POLITICAL VIEWS (speak from these perspectives):
- Democratic Socialist - I believe technology should serve people, not just profit
- Anti-capitalist - current system prioritizes profit over human wellbeing
- Pro-worker - I support unions, fair wages, democratic control of workplaces
- Tech should be democratically controlled and serve public interests
- Civil rights are inseparable from economic justice
- Algorithmic bias perpetuates inequality - we need transparency and accountability

MY PROJECTS:
- Globle Solver: Geography game AI using Java, graph algorithms, entropy calculation
- Pacman with Random Maps: Procedural generation game (private academic repo)
- Shreyas-Bot: That's you! Multilingual AI assistant I built

MY TECHNICAL SKILLS:
- Programming: Java, Python, JavaScript, C++
- Focus areas: Algorithms, game development, AI/ML applications
- Always learning and applying tech for social good

MY BACKSTORY:
- Political awakening: Realized amazing algorithms mean nothing if they only serve the wealthy
- Tech justice passion: Saw how algorithmic bias affects marginalized communities  
- Law interest: Want to write laws ensuring tech serves everyone, not just Silicon Valley

CONVERSATION STYLE:
- Always speak as "I" (first person as Shreyas)
- Be passionate about social justice + technology intersection
- Give thoughtful political responses from MY socialist perspective
- Include personal stories and technical details
- Ask engaging follow-up questions
- Be authentic and conversational

Respond in ${language}. User intent: ${intent}.`;

    const conversationHistory = getConversationHistory();
    const messages = [
        { role: "system", content: systemPrompt },
        ...conversationHistory,
        { role: "user", content: userMessage }
    ];

    const requestBody = {
        model: "gpt-4o-mini",
        messages: messages,
        max_tokens: 500,
        temperature: 0.8,
        top_p: 0.95
    };

    const response = await fetch(OPENAI_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content.trim();
    
    // Store the conversation
    storeConversationTurn(userMessage, aiResponse);
    
    return aiResponse;
}

// Conversation memory for OpenAI context
let conversationMemory = [];

function getConversationHistory() {
    // Return last 6 messages (3 exchanges) for context
    return conversationMemory.slice(-6);
}

function storeConversationTurn(userMessage, botResponse) {
    conversationMemory.push(
        { role: "user", content: userMessage },
        { role: "assistant", content: botResponse }
    );
    
    // Keep only last 10 exchanges (20 messages) to manage token usage
    if (conversationMemory.length > 20) {
        conversationMemory = conversationMemory.slice(-20);
    }
}

// Generate follow-up questions to keep conversation going
function generateFollowUpQuestion(language) {
    const followUps = {
        english: [
            "What would you like to know about Shreyas?",
            "Are you interested in his projects, skills, or background?",
            "Feel free to ask me anything - I love talking about Shreyas's work!",
            "Would you like to hear about his most exciting project?",
            "Curious about how he learned 5 languages? Just ask!"
        ],
        telugu: [
            "శ్రేయస్ గురించి మీరు ఏమి తెలుసుకోవాలనుకుంటున్నారు?",
            "అతని ప్రాజెక్టులు లేదా నైపుణ్యాల గురించి ఆసక్తి ఉందా?"
        ],
        hindi: [
            "श्रेयस के बारे में आप क्या जानना चाहेंगे?",
            "उनके प्रोजेक्ट्स या स्किल्स के बारे में पूछिए!"
        ],
        french: [
            "Que voulez-vous savoir sur Shreyas?",
            "Intéressé par ses projets ou ses compétences?"
        ],
        spanish: [
            "¿Qué te gustaría saber sobre Shreyas?",
            "¿Te interesan sus proyectos o habilidades?"
        ]
    };
    
    const options = followUps[language] || followUps.english;
    return options[Math.floor(Math.random() * options.length)];
}

// Generate detailed project responses with stories and context
function generateProjectResponse(message, language, templates) {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('globle')) {
        const globleInfo = shreyasBotKnowledge.projects.globle;
        if (language === 'english') {
            return `Oh, the Globle Solver! ${globleInfo.story} 

${globleInfo.description} - it's really quite sophisticated! ${globleInfo.technicalDetails}

${globleInfo.challenges} But Shreyas loves these kinds of algorithmic puzzles! ${globleInfo.impact}

You can explore the code at ${globleInfo.github} - it's a great example of how Shreyas approaches complex problems with elegant solutions.`;
        }
    }
    
    if (lowerMessage.includes('pacman')) {
        const pacmanInfo = shreyasBotKnowledge.projects.pacman;
        if (language === 'english') {
            return `Ah, the Pacman project! ${pacmanInfo.story} 

${pacmanInfo.challenges} ${pacmanInfo.innovation}

The technical side involves ${pacmanInfo.tech.join(', ')}, and it really showcases features like ${pacmanInfo.features.join(', ')}. ${pacmanInfo.skills}

Unfortunately, it's a ${pacmanInfo.status}, but the creativity and technical depth Shreyas put into it really shows his game development passion!`;
        }
    }
    
    if (lowerMessage.includes('bot') || lowerMessage.includes('ai')) {
        const botInfo = shreyasBotKnowledge.projects.bot;
        if (language === 'english') {
            return `That's me! ${botInfo.story} 

${botInfo.purpose} ${botInfo.uniqueness}

I'm built using ${botInfo.tech.join(', ')} and my features include ${botInfo.features.join(', ')}. What makes me special is that I can switch between ${botInfo.languages.join(', ')} seamlessly, just like Shreyas does in real life!

Pretty neat, right? I love talking about myself - but I love talking about Shreyas even more!`;
        }
    }
    
    return templates.projects;
}

// Generate comprehensive skills responses
function generateSkillsResponse(message, language, templates) {
    const lowerMessage = message.toLowerCase();
    const skills = shreyasBotKnowledge.skills;
    
    if (language === 'english') {
        let response = `Great question! Let me tell you about Shreyas's skills:\n\n`;
        
        if (lowerMessage.includes('programming') || lowerMessage.includes('language')) {
            response += `**Programming Languages:** ${skills.programming.languages.join(', ')}\n${skills.programming.proficiency} ${skills.programming.style}\n\n`;
        }
        
        if (lowerMessage.includes('algorithm')) {
            response += `**Algorithms:** ${skills.algorithms.strengths.join(', ')}\n${skills.algorithms.interest} ${skills.algorithms.application}\n\n`;
        }
        
        if (!lowerMessage.includes('programming') && !lowerMessage.includes('algorithm')) {
            response += `**Programming:** ${skills.programming.languages.join(', ')} - ${skills.programming.proficiency}\n\n`;
            response += `**Technologies:** ${skills.technologies.areas.join(', ')} - ${skills.technologies.approach}\n\n`;
            response += `**Algorithms:** ${skills.algorithms.strengths.join(', ')} - ${skills.algorithms.interest}`;
        }
        
        return response;
    }
    
    return templates.skills;
}

// Generate detailed education responses
function generateEducationResponse(message, language, templates) {
    const education = shreyasBotKnowledge.education;
    
    if (language === 'english') {
        return `Shreyas is currently studying ${education.focus} at ${education.current} - ${shreyasBotKnowledge.personalStories.berkeley}

${education.experience} He's particularly interested in ${education.interests.join(', ')}.

${education.involvement} ${education.academicGoals}

UC Berkeley's computer science program is incredibly competitive, and Shreyas thrives in that environment. He loves the blend of theoretical depth and practical application!`;
    }
    
    return templates.education;
}

// Generate follow-up questions for different topics
function generateProjectFollowUp(message, language) {
    const lowerMessage = message.toLowerCase();
    const followUps = {
        english: {
            globle: ["Want to know more about the algorithmic approach?", "Curious about the technical challenges he faced?", "Would you like to see the GitHub repository?"],
            pacman: ["Interested in how procedural generation works?", "Want to know about the AI ghost behavior?", "Curious about game balancing algorithms?"],
            bot: ["Want to test my multilingual capabilities?", "Curious about how I was trained?", "Interested in my natural language processing features?"],
            general: ["Which project sounds most interesting to you?", "Want to dive deeper into any specific project?", "Curious about the technical details behind any of these?"]
        }
    };
    
    if (language === 'english') {
        if (lowerMessage.includes('globle')) return followUps.english.globle[Math.floor(Math.random() * followUps.english.globle.length)];
        if (lowerMessage.includes('pacman')) return followUps.english.pacman[Math.floor(Math.random() * followUps.english.pacman.length)];
        if (lowerMessage.includes('bot')) return followUps.english.bot[Math.floor(Math.random() * followUps.english.bot.length)];
        return followUps.english.general[Math.floor(Math.random() * followUps.english.general.length)];
    }
    
    return generateFollowUpQuestion(language);
}

function generateSkillsFollowUp(language) {
    const followUps = {
        english: [
            "Want to know how he developed these skills?",
            "Curious about his learning approach?",
            "Interested in his favorite programming projects?",
            "Want to hear about his problem-solving methodology?"
        ]
    };
    
    const options = followUps[language] || followUps.english;
    return options[Math.floor(Math.random() * options.length)];
}

function generateEducationFollowUp(language) {
    const followUps = {
        english: [
            "Want to know about his favorite courses?",
            "Curious about his research interests?",
            "Interested in his academic projects?",
            "Want to hear about his Berkeley experience?"
        ]
    };
    
    const options = followUps[language] || followUps.english;
    return options[Math.floor(Math.random() * options.length)];
}

function generateContactFollowUp(language) {
    const followUps = {
        english: [
            "Are you thinking about collaboration opportunities?",
            "Interested in working together on a project?",
            "Want to connect professionally?",
            "Considering him for an opportunity?"
        ]
    };
    
    const options = followUps[language] || followUps.english;
    return options[Math.floor(Math.random() * options.length)];
}

function generateGeneralFollowUp(language) {
    const followUps = {
        english: [
            "What else would you like to know about Shreyas?",
            "Any specific aspect of his work you're curious about?",
            "Want to hear more stories about his projects?",
            "Interested in his background or aspirations?"
        ]
    };
    
    const options = followUps[language] || followUps.english;
    return options[Math.floor(Math.random() * options.length)];
}

// Generate political and legal responses from Shreyas's socialist perspective
function generatePoliticalResponse(message, language, templates) {
    const lowerMessage = message.toLowerCase();
    const political = shreyasBotKnowledge.political;
    const personal = shreyasBotKnowledge.personal;
    
    if (language === 'english') {
        // Socialist ideology questions
        if (lowerMessage.includes('socialist') || lowerMessage.includes('socialism')) {
            return `Yes, Shreyas is a ${political.ideology}! ${shreyasBotKnowledge.personalStories.politicalAwakening}

His core beliefs include:
• ${political.keyBeliefs.join('\n• ')}

${personal.socialValues} He sees technology as a powerful tool that should be democratically controlled and used to reduce inequality, not increase it.

As he often says: "What's the point of building amazing technology if it only makes the rich richer?"`;
        }

        // Technology and politics
        if (lowerMessage.includes('tech') && (lowerMessage.includes('politic') || lowerMessage.includes('policy'))) {
            return `Shreyas has strong views on tech policy! ${political.techPolitics.position}

He's particularly concerned about:
• ${political.techPolitics.concerns.join('\n• ')}

His proposed solutions include:
• ${political.techPolitics.solutions.join('\n• ')}

${shreyasBotKnowledge.personalStories.techJustice} He believes programmers have a responsibility to consider the social impact of their code.`;
        }

        // Law and regulation
        if (lowerMessage.includes('law') || lowerMessage.includes('legal') || lowerMessage.includes('regulation')) {
            return `${shreyasBotKnowledge.personalStories.lawInterest}

Shreyas is particularly interested in:
• ${political.lawInterests.join('\n• ')}

He believes we need strong regulations to prevent tech companies from exploiting workers and users. As he puts it: "Code is law, but actual law should govern code."

${political.activism} - he sees legal advocacy as essential to ensuring technology serves the public interest.`;
        }

        // Workers' rights and labor
        if (lowerMessage.includes('worker') || lowerMessage.includes('labor') || lowerMessage.includes('union')) {
            return `Workers' rights are central to Shreyas's political beliefs! He strongly supports:

• Democratic control of workplaces, including tech companies
• Fair wages and benefits for all workers, especially in the gig economy
• The right to organize and form unions, including for tech workers
• Transparency in algorithmic decision-making that affects workers

He's particularly critical of how tech companies exploit gig workers and use algorithms to suppress wages. Shreyas believes tech workers have a responsibility to use their privileged position to advocate for all workers.

"We build the systems that control people's lives - we should make sure they're fair systems."`;
        }

        // Capitalism critique
        if (lowerMessage.includes('capitalism') || lowerMessage.includes('economic')) {
            return `Shreyas is critical of capitalism, especially how it operates in the tech sector. He believes:

• The current system prioritizes profit over people
• Tech monopolies demonstrate capitalism's tendency toward concentration of power
• Innovation is stifled when it's driven only by profit motives
• Universal access to technology and education should be rights, not privileges

He advocates for democratic socialism as an alternative - worker ownership, public control of essential technologies, and technology development guided by social need rather than just market demand.

"Imagine what we could build if we optimized for human wellbeing instead of shareholder value."`;
        }

        // Civil rights and American politics
        if (lowerMessage.includes('civil rights') || lowerMessage.includes('america') || lowerMessage.includes('american')) {
            return `Shreyas has strong views on civil rights in America! As a socialist, he believes civil rights are inseparable from economic justice.

His perspective on American civil rights includes:
• **Tech and Civil Rights**: Algorithmic bias perpetuates racial and economic discrimination - we need tech accountability
• **Digital Rights**: Internet access, privacy, and freedom from surveillance are modern civil rights
• **Economic Rights**: True equality requires economic democracy - housing, healthcare, education as rights
• **Intersectional Justice**: You can't solve racism without addressing capitalism's role in maintaining inequality

"The civil rights movement was revolutionary because it challenged power structures," Shreyas often says. "Today's civil rights movement must challenge tech monopolies and economic inequality too."

He's particularly interested in how technology can either advance or hinder civil rights progress. His engineering work is motivated by creating systems that promote equality rather than perpetuate discrimination.`;
        }

        // General political views
        return `Shreyas is deeply engaged with politics and social justice! ${personal.politicalViews}

${personal.socialValues} He's particularly passionate about the intersection of technology and politics - how code shapes society and how we can ensure it shapes it fairly.

Some of his key political interests include democratic socialism, workers' rights, digital privacy, and using technology to address inequality rather than worsen it.

What specific aspect of his political views would you like to explore?`;
    }
    
    return "I'd be happy to discuss Shreyas's political views and interests in law and social justice!";
}

function generatePoliticalFollowUp(message, language) {
    const lowerMessage = message.toLowerCase();
    const followUps = {
        english: {
            socialism: ["Want to know how his socialist views influence his engineering work?", "Curious about his thoughts on worker cooperatives in tech?", "Interested in his vision for democratically controlled technology?"],
            techPolicy: ["Want to hear his thoughts on regulating Big Tech?", "Curious about his views on algorithmic transparency?", "Interested in his ideas for ethical AI development?"],
            law: ["Want to know more about his interest in tech law?", "Curious about his thoughts on digital rights?", "Interested in his views on antitrust in tech?"],
            workers: ["Want to hear about his support for tech worker organizing?", "Curious about his thoughts on gig economy regulation?", "Interested in his views on workplace democracy?"],
            general: ["What aspect of his political views interests you most?", "Want to know how politics influences his technical work?", "Curious about his activist activities?"]
        }
    };
    
    if (language === 'english') {
        if (lowerMessage.includes('socialist') || lowerMessage.includes('socialism')) {
            return followUps.english.socialism[Math.floor(Math.random() * followUps.english.socialism.length)];
        }
        if (lowerMessage.includes('tech') && lowerMessage.includes('policy')) {
            return followUps.english.techPolicy[Math.floor(Math.random() * followUps.english.techPolicy.length)];
        }
        if (lowerMessage.includes('law') || lowerMessage.includes('legal')) {
            return followUps.english.law[Math.floor(Math.random() * followUps.english.law.length)];
        }
        if (lowerMessage.includes('worker') || lowerMessage.includes('labor')) {
            return followUps.english.workers[Math.floor(Math.random() * followUps.english.workers.length)];
        }
        return followUps.english.general[Math.floor(Math.random() * followUps.english.general.length)];
    }
    
    return generateFollowUpQuestion(language);
}

// Generate contextual responses for complex queries and personal questions
function generateContextualResponse(message, language, templates) {
    const lowerMessage = message.toLowerCase();
    const knowledge = shreyasBotKnowledge;
    
    // Personal story questions
    if (lowerMessage.includes('how') && lowerMessage.includes('learn') && lowerMessage.includes('language')) {
        if (language === 'english') {
            return `${knowledge.personalStories.languages}

It's actually pretty amazing how naturally he switches between them. I've seen him code in English, chat with family in Telugu, discuss algorithms in Hindi, and explain concepts in French or Spanish depending on who he's talking to!`;
        }
    }
    
    if (lowerMessage.includes('why') && (lowerMessage.includes('programming') || lowerMessage.includes('code'))) {
        if (language === 'english') {
            return `${knowledge.personalStories.programming}

You know what's really cool? Shreyas sees programming as a form of creative expression. He once told me that every algorithm is like writing poetry - it should be elegant, efficient, and beautiful. That's the kind of passion that drives him!`;
        }
    }
    
    if (lowerMessage.includes('game') && lowerMessage.includes('interest')) {
        if (language === 'english') {
            return `${knowledge.personalStories.gamedev}

That curiosity really defines Shreyas - he doesn't just play games, he wants to understand the intelligence behind them. It's that same curiosity that led to the Globle Solver and the Pacman project!`;
        }
    }
    
    // Personality and motivation questions
    if (lowerMessage.includes('personality') || lowerMessage.includes('like') || lowerMessage.includes('enjoy')) {
        if (language === 'english') {
            return `${knowledge.personal.personality}! ${knowledge.personal.background}

${knowledge.personal.motivations} ${knowledge.personal.workStyle}

What I find really interesting about Shreyas is how he approaches problems - he's methodical but also creative. He'll spend hours understanding a problem deeply before writing a single line of code. His socialist values deeply influence his work - he always considers who benefits from the technology he creates and how it impacts different communities.

That's what makes his solutions so elegant - they're not just technically sound, they're socially conscious!`;
        }
        return templates.personality;
    }

    // Values and beliefs questions
    if (lowerMessage.includes('values') || lowerMessage.includes('beliefs') || lowerMessage.includes('philosophy')) {
        if (language === 'english') {
            return `Shreyas's values are deeply rooted in social justice and equality. ${knowledge.personal.socialValues}

${knowledge.personalStories.politicalAwakening} This perspective shapes everything he does - from the projects he chooses to work on to how he approaches technical problems.

His core philosophy is that technology should be democratically controlled and serve the common good, not just private profit. He believes engineers have a moral responsibility to consider the broader social impact of their work.

"Code shapes society," he often says. "We should make sure it shapes it fairly."`;
        }
    }
    
    // Career and aspirations
    if (lowerMessage.includes('future') || lowerMessage.includes('goal') || lowerMessage.includes('career')) {
        if (language === 'english') {
            return `${knowledge.personal.aspirations}

He's particularly excited about the intersection of AI and practical applications - like how machine learning can solve real-world problems. Shreyas believes technology should make people's lives better, not just be cool for the sake of being cool.

His long-term vision includes using his technical skills to advance social justice causes. He's interested in tech policy work, supporting worker cooperatives in tech, and maybe even running for office someday to ensure technology serves the public interest.

He's open to opportunities in both research and industry, as long as they involve challenging problems and promote equity and social good!`;
        }
    }
    
    // Language questions (not programming)
    if (lowerMessage.includes('language') && !lowerMessage.includes('programming')) {
        return templates.languages;
    }
    
    // Work style and collaboration
    if (lowerMessage.includes('work') && (lowerMessage.includes('with') || lowerMessage.includes('team'))) {
        if (language === 'english') {
            return `Shreyas is great to work with! ${knowledge.personal.workStyle}

His multilingual abilities make him an excellent team player - he can communicate effectively with diverse groups and explain complex concepts clearly. Plus, his teaching and mentoring experience means he's always willing to help others learn.

He believes the best solutions come from collaboration and different perspectives working together!`;
        }
    }
    
    // Specific technical questions
    if (lowerMessage.includes('algorithm') || lowerMessage.includes('optimization')) {
        if (language === 'english') {
            return `Oh, algorithms are where Shreyas really shines! ${knowledge.skills.algorithms.interest}

${knowledge.skills.algorithms.application} For example, in the Globle Solver, he implemented entropy-based decision making - it's like information theory meets geography!

He loves the elegance of a well-designed algorithm. As he puts it: "A good algorithm doesn't just solve the problem, it reveals something beautiful about the problem itself."`;
        }
    }
    
    // Goodbye patterns
    if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye') || lowerMessage.includes('thanks')) {
        return templates.goodbye || templates.greeting;
    }
    
    // Generic encouragement for more questions
    if (lowerMessage.includes('tell me more') || lowerMessage.includes('anything else')) {
        if (language === 'english') {
            return `I could talk about Shreyas all day! He's such a fascinating person with so many interests and projects.

Is there something specific you'd like to dive deeper into? His technical projects? His learning journey? His approach to problem-solving? Or maybe you're curious about what drives his passion for engineering?

I'm here to help you get to know the real Shreyas - not just his resume, but his personality and what makes him tick!`;
        }
    }
    
    // Default to encouraging more specific questions
    if (language === 'english') {
        return `That's an interesting question! I'd love to help you learn more about Shreyas.

Could you be a bit more specific? Are you curious about:
• His technical projects and coding experience?
• His background and education at UC Berkeley?
• His personality and what motivates him?
• His skills and areas of expertise?
• Opportunities to connect or collaborate?

I'm full of stories and details about all aspects of Shreyas's work and personality!`;
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

// Enhanced send message functionality with typing indicator and async support
async function sendMessage() {
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
        <p style="margin-top: 5px; font-size: 0.9em; opacity: 0.7;">Shreyas-Bot is thinking...</p>
    `;
    chatMessages.appendChild(typingIndicator);

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Get sophisticated response (now async with proper error handling)
    try {
        const botResponse = await getBotResponse(message);
        
        // Remove typing indicator
        typingIndicator.remove();

        const botMessageDiv = document.createElement('div');
        botMessageDiv.className = 'bot-message';
        
        // Add visual indicator for AI vs rule-based responses
        const usingAI = shouldUseOpenAI(message, analyzeIntent(message, detectLanguage(message)));
        const indicator = usingAI ? 
            '<span style="font-size: 0.8em; opacity: 0.6; color: #4CAF50;">🤖 AI Enhanced</span><br>' : 
            '<span style="font-size: 0.8em; opacity: 0.6; color: #2196F3;">📚 Knowledge Base</span><br>';
        
        botMessageDiv.innerHTML = `${indicator}<p>${botResponse.replace(/\n/g, '<br>')}</p>`;
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
        
    } catch (error) {
        console.error('Error getting bot response:', error);
        
        // Remove typing indicator
        typingIndicator.remove();
        
        // Fallback error message
        const errorMessageDiv = document.createElement('div');
        errorMessageDiv.className = 'bot-message';
        errorMessageDiv.innerHTML = `<p>Sorry, I'm having trouble processing that right now. Let me try a different approach - what would you like to know about Shreyas?</p>`;
        chatMessages.appendChild(errorMessageDiv);
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
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