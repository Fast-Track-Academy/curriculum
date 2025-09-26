// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const moduleCards = document.querySelectorAll('.module-card');
const moduleButtons = document.querySelectorAll('.module-btn');
const modal = document.getElementById('moduleModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close-modal');

// Module Data
const moduleData = {
    'ai-bot': {
        title: '🤖 AI & Digital Bot Creation',
        description: 'Create intelligent AI avatars and chatbots that represent you and solve real problems.',
        projects: [
            {
                title: 'Your First Chatbot (Beginner)',
                timeline: '2-3 weeks',
                goal: 'Build a simple conversational bot that can answer questions about your interests',
                tools: ['Chatfuel', 'Dialogflow', 'Replit'],
                skills: ['Basic AI concepts', 'Conversation design', 'No-code development']
            },
            {
                title: 'AI Avatar Creator (Intermediate)', 
                timeline: '4-5 weeks',
                goal: 'Develop an AI avatar that mimics your personality and communication style',
                tools: ['OpenAI API', 'Python', 'Gradio'],
                skills: ['API integration', 'Personality modeling', 'Web interfaces']
            },
            {
                title: 'Smart Life Assistant Bot (Advanced)',
                timeline: '6-8 weeks', 
                goal: 'Create a comprehensive AI assistant for personal productivity and organization',
                tools: ['LangChain', 'Vector databases', 'Custom training'],
                skills: ['Advanced AI frameworks', 'Data management', 'System integration']
            },
            {
                title: 'AI-Powered Content Generator (Expert)',
                timeline: '8-12 weeks',
                goal: 'Build an AI system that generates content across multiple formats and platforms',
                tools: ['Multiple APIs', 'Custom models', 'Cloud deployment'],
                skills: ['Model fine-tuning', 'Multi-modal AI', 'Production deployment']
            }
        ],
        outcomes: ['Build AI avatars', 'Machine learning basics', 'Conversational bots', 'AI-powered tools']
    },
    'automation': {
        title: '🔧 Life Automation & Design',
        description: 'Transform your daily routines through smart automation and productivity systems.',
        projects: [
            {
                title: 'Digital Life Audit & Quick Wins (Beginner)',
                timeline: '1-2 weeks',
                goal: 'Map your current digital habits and implement 3 simple automations',
                tools: ['IFTTT', 'Zapier', 'Time tracking apps'],
                skills: ['Self-analysis', 'Basic automation', 'Habit tracking']
            },
            {
                title: 'Smart Home Starter System (Intermediate)',
                timeline: '3-4 weeks',
                goal: 'Create an automated environment that responds to your needs',
                tools: ['Smart plugs', 'Home Assistant', 'Arduino/Raspberry Pi'],
                skills: ['IoT basics', 'Sensor integration', 'System design']
            },
            {
                title: 'Personal Productivity Dashboard (Advanced)',
                timeline: '5-6 weeks',
                goal: 'Build a comprehensive dashboard that tracks and optimizes your life metrics',
                tools: ['Custom web app', 'APIs', 'Database management'],
                skills: ['Full-stack development', 'Data visualization', 'Analytics']
            },
            {
                title: 'AI-Enhanced Life Operating System (Expert)',
                timeline: '8-12 weeks',
                goal: 'Create an intelligent system that learns and adapts to optimize your life',
                tools: ['Machine learning', 'Advanced automation', 'AI integration'],
                skills: ['Predictive systems', 'Adaptive algorithms', 'Complex integrations']
            }
        ],
        outcomes: ['Automate daily tasks', 'Productivity systems', 'Smart home solutions', 'Time management tools']
    },
    'content': {
        title: '🎨 Digital Content Creation & Monetization',
        description: 'Master the art of creating compelling digital content and turn creativity into income.',
        projects: [
            {
                title: 'Content Creator Identity (Beginner)',
                timeline: '2-3 weeks',
                goal: 'Define your niche and create your first 10 pieces of content',
                tools: ['Canva', 'Basic editing tools', 'Social platforms'],
                skills: ['Content planning', 'Basic editing', 'Audience research']
            },
            {
                title: 'Multi-Platform Presence (Intermediate)',
                timeline: '4-5 weeks',
                goal: 'Establish consistent branding across 3 different platforms',
                tools: ['Advanced editing', 'Scheduling tools', 'Analytics'],
                skills: ['Brand design', 'Cross-platform strategy', 'Community management']
            },
            {
                title: 'First Revenue Stream (Advanced)',
                timeline: '6-8 weeks',
                goal: 'Generate your first $100 from your content',
                tools: ['Monetization platforms', 'E-commerce tools', 'Analytics'],
                skills: ['Sales psychology', 'Product creation', 'Business basics']
            },
            {
                title: 'Creator Business Scaling (Expert)',
                timeline: '8-12 weeks',
                goal: 'Build a sustainable creator business with multiple income streams',
                tools: ['Business automation', 'Team collaboration', 'Advanced analytics'],
                skills: ['Business strategy', 'Team management', 'Advanced marketing']
            }
        ],
        outcomes: ['Create engaging content', 'Build online audiences', 'Multiple revenue streams', 'Digital marketing']
    },
    'learning': {
        title: '📚 Self-Paced, Project-Based Learning',
        description: 'Learn how to learn effectively and master project management for lifelong growth.',
        projects: [
            {
                title: 'Learning Style Discovery (Beginner)',
                timeline: '1-2 weeks',
                goal: 'Identify your optimal learning methods and create a personal learning system',
                tools: ['Learning assessments', 'Note-taking apps', 'Time tracking'],
                skills: ['Self-awareness', 'Learning strategies', 'Personal organization']
            },
            {
                title: 'Skill Acquisition Challenge (Intermediate)',
                timeline: '3-4 weeks',
                goal: 'Master a new skill using deliberate practice and documentation',
                tools: ['Progress tracking', 'Spaced repetition', 'Peer feedback'],
                skills: ['Deliberate practice', 'Progress measurement', 'Reflection techniques']
            },
            {
                title: 'Research and Synthesis Project (Advanced)',
                timeline: '5-6 weeks',
                goal: 'Conduct original research and create educational content for others',
                tools: ['Research databases', 'Content creation', 'Peer review'],
                skills: ['Research methodology', 'Critical thinking', 'Knowledge synthesis']
            },
            {
                title: 'Teaching and Mentoring Project (Expert)',
                timeline: '8-12 weeks',
                goal: 'Design and deliver a complete learning experience for other students',
                tools: ['Course creation', 'Assessment design', 'Community building'],
                skills: ['Instructional design', 'Mentorship', 'Community leadership']
            }
        ],
        outcomes: ['Learning strategies', 'Project planning', 'Self-assessment skills', 'Personal learning systems']
    }
};

// Navigation functionality
hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu?.classList.toggle('active');
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

// Module card interactions
moduleCards?.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
        const progressFill = card.querySelector('.progress-fill');
        const progressText = card.querySelector('.progress-text');
        
        if (progressFill && progressText) {
            progressFill.style.width = '25%';
            progressText.textContent = 'Ready to Start!';
        }
    });
    
    card.addEventListener('mouseleave', () => {
        const progressFill = card.querySelector('.progress-fill');
        const progressText = card.querySelector('.progress-text');
        
        if (progressFill && progressText) {
            progressFill.style.width = '0%';
            progressText.textContent = 'Start Learning';
        }
    });
});

// Module button clicks
moduleButtons?.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const target = button.getAttribute('data-target');
        if (target && moduleData[target]) {
            showModuleModal(moduleData[target]);
        }
    });
});

// Modal functionality
function showModuleModal(data) {
    modalTitle.textContent = data.title;
    
    modalBody.innerHTML = `
        <div class="module-modal-content">
            <p class="module-description">${data.description}</p>
            
            <div class="module-outcomes-section">
                <h4>What You'll Achieve:</h4>
                <div class="outcomes-grid">
                    ${data.outcomes.map(outcome => `<span class="outcome-badge">${outcome}</span>`).join('')}
                </div>
            </div>
            
            <div class="projects-section">
                <h4>Project Learning Path:</h4>
                <div class="projects-list">
                    ${data.projects.map((project, index) => `
                        <div class="project-item">
                            <div class="project-header">
                                <div class="project-level">${['Beginner', 'Intermediate', 'Advanced', 'Expert'][index]}</div>
                                <div class="project-timeline">${project.timeline}</div>
                            </div>
                            <h5>${project.title}</h5>
                            <p class="project-goal">${project.goal}</p>
                            <div class="project-details">
                                <div class="tools-section">
                                    <strong>Tools:</strong>
                                    <div class="tools-list">
                                        ${project.tools.map(tool => `<span class="tool-badge">${tool}</span>`).join('')}
                                    </div>
                                </div>
                                <div class="skills-section">
                                    <strong>Skills Developed:</strong>
                                    <div class="skills-list">
                                        ${project.skills.map(skill => `<span class="skill-badge">${skill}</span>`).join('')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="modal-actions">
                <button class="btn btn-primary btn-large">
                    <i class="fas fa-rocket"></i> Start This Module
                </button>
                <button class="btn btn-secondary">
                    <i class="fas fa-bookmark"></i> Save for Later
                </button>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function hideModuleModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Modal close events
closeModal?.addEventListener('click', hideModuleModal);
modal?.addEventListener('click', (e) => {
    if (e.target === modal) {
        hideModuleModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        hideModuleModal();
    }
});

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.module-card, .step, .demo-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate-in');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Chat demo functionality
function initChatDemo() {
    const chatInterface = document.querySelector('.chat-interface');
    if (!chatInterface) return;
    
    setTimeout(() => {
        const typingMessage = chatInterface.querySelector('.typing');
        if (typingMessage) {
            typingMessage.innerHTML = `
                <div class="message">
                    Project-based learning is amazing! Instead of memorizing facts, you learn by building real things. 
                    Like this AI bot - I was created as a student project! You learn faster because you're solving 
                    actual problems and seeing immediate results. 🚀
                </div>
            `;
            typingMessage.classList.remove('typing');
        }
    }, 3000);
}

// Dashboard animation
function animateDashboard() {
    const metrics = document.querySelectorAll('.metric-value');
    metrics.forEach((metric, index) => {
        const finalValue = metric.textContent;
        const isNumber = !isNaN(parseFloat(finalValue));
        
        if (isNumber) {
            const target = parseFloat(finalValue);
            let current = 0;
            const increment = target / 30;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                metric.textContent = Math.floor(current) + finalValue.replace(/[0-9.]/g, '');
            }, 50);
        }
    });
}

// Initialize demos when page loads
document.addEventListener('DOMContentLoaded', () => {
    initChatDemo();
    
    // Animate dashboard when it comes into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.classList.contains('dashboard')) {
                animateDashboard();
                observer.unobserve(entry.target);
            }
        });
    });
    
    const dashboard = document.querySelector('.dashboard');
    if (dashboard) {
        observer.observe(dashboard);
    }
    
    // Add loading animation to hero code
    setTimeout(() => {
        const codeContent = document.querySelector('.code-content');
        if (codeContent) {
            const newLine = document.createElement('div');
            newLine.className = 'code-line';
            newLine.innerHTML = '<span class="keyword">print</span>(<span class="string">"Ready to learn!"</span>)';
            codeContent.insertBefore(newLine, codeContent.querySelector('.typing-cursor'));
        }
    }, 2000);
});

// Add CSS for animations
const animationStyles = `
    .module-card, .step, .demo-card {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .module-card.animate-in, .step.animate-in, .demo-card.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .module-modal-content {
        max-height: 70vh;
        overflow-y: auto;
    }
    
    .module-description {
        font-size: 1.1rem;
        color: var(--gray-600);
        margin-bottom: 2rem;
        line-height: 1.7;
    }
    
    .module-outcomes-section, .projects-section {
        margin-bottom: 2rem;
    }
    
    .module-outcomes-section h4, .projects-section h4 {
        font-size: 1.2rem;
        font-weight: 600;
        color: var(--gray-900);
        margin-bottom: 1rem;
    }
    
    .outcomes-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }
    
    .outcome-badge {
        background: var(--primary-color);
        color: var(--white);
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: 500;
    }
    
    .projects-list {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
    
    .project-item {
        border: 1px solid var(--gray-200);
        border-radius: var(--border-radius);
        padding: 1.5rem;
        background: var(--gray-50);
    }
    
    .project-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }
    
    .project-level {
        background: var(--secondary-color);
        color: var(--white);
        padding: 0.25rem 0.75rem;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: 600;
    }
    
    .project-timeline {
        color: var(--gray-500);
        font-size: 0.9rem;
        font-weight: 500;
    }
    
    .project-item h5 {
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--gray-900);
        margin-bottom: 0.5rem;
    }
    
    .project-goal {
        color: var(--gray-600);
        margin-bottom: 1rem;
        line-height: 1.6;
    }
    
    .project-details {
        display: grid;
        gap: 1rem;
    }
    
    .tools-section strong, .skills-section strong {
        display: block;
        margin-bottom: 0.5rem;
        color: var(--gray-700);
        font-size: 0.9rem;
    }
    
    .tools-list, .skills-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }
    
    .tool-badge, .skill-badge {
        background: var(--gray-200);
        color: var(--gray-700);
        padding: 0.25rem 0.5rem;
        border-radius: 12px;
        font-size: 0.8rem;
    }
    
    .modal-actions {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
        padding-top: 2rem;
        border-top: 1px solid var(--gray-200);
    }
    
    @media (max-width: 768px) {
        .modal-actions {
            flex-direction: column;
        }
        
        .modal-actions .btn {
            width: 100%;
            justify-content: center;
        }
        
        .project-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
        }
        
        .tools-list, .skills-list {
            flex-direction: column;
        }
    }
`;

// Inject animation styles
const styleSheet = document.createElement('style');
styleSheet.textContent = animationStyles;
document.head.appendChild(styleSheet);