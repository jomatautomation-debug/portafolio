export const translations = {
    es: {
        // Navbar
        navbar: {
            home: 'Inicio',
            about: 'Sobre Mí',
            skills: 'Habilidades',
            projects: 'Proyectos',
            experience: 'Experiencia',
            certifications: 'Certificaciones',
            contact: 'Contacto',
            darkMode: 'Modo Oscuro',
            lightMode: 'Modo Claro'
        },

        // Hero
        hero: {
            availableToWork: 'Disponible para trabajar',
            name: 'José Caballero G.',
            title: 'Desarrollador de Software Junior – Automatización de Procesos',
            description: 'Full Stack Developer especializado en automatización con n8n y Make. Integro APIs, webhooks y bases de datos para optimizar procesos empresariales.',
            viewProjects: 'Ver Proyectos',
            viewResume: 'Ver Hoja de Vida',
            contactMe: 'Contactarme'
        },

        // About
        about: {
            title: 'Sobre Mí',
            description: 'Apasionado por la tecnología y la automatización. Me encanta resolver problemas complejos con soluciones simples y eficientes.',
            availability: 'Disponible para trabajar - Dispuesto a nuevos retos',
            qualities: {
                proactive: {
                    title: 'Proactivo',
                    description: 'Tomo la iniciativa para resolver problemas antes de que se conviertan en obstáculos'
                },
                collaborative: {
                    title: 'Colaborativo',
                    description: 'Me adapto fácilmente a equipos y disfruto compartir conocimientos'
                },
                passion: {
                    title: 'Pasión',
                    description: 'Dedicado a crear soluciones que impacten positivamente'
                },
                cleanCode: {
                    title: 'Código Limpio',
                    description: 'Escribo código mantenible y escalable siguiendo mejores prácticas'
                },
                innovation: {
                    title: 'Innovación',
                    description: 'Siempre buscando nuevas tecnologías y formas de mejorar'
                }
            }
        },

        // Skills
        skills: {
            title: 'Habilidades Técnicas',
            subtitle: 'Selecciona una categoría para ver mis herramientas',
            categories: {
                backend: 'Backend',
                frontend: 'Frontend',
                automation: 'Automatización',
                tools: 'Herramientas'
            },
            items: {
                nodejs: 'Entorno de ejecución para JavaScript en servidor',
                mysql: 'Gestión de bases de datos relacionales robustas',
                postgresql: 'Base de datos relacional avanzada y potente',
                mongodb: 'Base de datos NoSQL para datos flexibles',
                restapis: 'Diseño de servicios web estándar y escalables',
                react: 'Biblioteca líder para interfaces de usuario',
                vite: 'Herramienta de construcción frontend ultrarrápida',
                javascript: 'Lenguaje fundamental para la web interactiva',
                tailwind: 'Framework de utilidades para diseño rápido',
                htmlcss: 'Estructura y estilo fundamentales de la web',
                n8n: 'Automatización de flujos de trabajo personalizables',
                make: 'Plataforma visual de integración de apps',
                zapier: 'Conector de aplicaciones web líder',
                webhooks: 'Comunicación en tiempo real entre sistemas',
                vscode: 'El editor de código más potente y versátil',
                git: 'Sistema de control de versiones esencial',
                github: 'Colaboración y alojamiento de código',
                postman: 'Pruebas y desarrollo de APIs',
                docker: 'Contenedores para despliegue consistente',
                npm: 'Gestor de paquetes para JavaScript'
            }
        },

        // Projects
        projects: {
            title: 'Proyectos Destacados',
            subtitle: 'Algunos de mis trabajos recientes',
            viewDemo: 'Ver Demo',
            viewCode: 'Ver Código'
        },

        // Experience
        experience: {
            title: 'Experiencia Laboral',
            subtitle: 'Mi trayectoria profesional',
            present: 'Presente'
        },

        // Certifications
        certifications: {
            title: 'Certificaciones',
            subtitle: 'Formación continua y aprendizaje',
            viewCertificate: 'Ver Certificado'
        },

        // FAQ
        faq: {
            title: 'Preguntas Frecuentes',
            subtitle: 'Respuestas a preguntas técnicas comunes en entrevistas',
            questions: [
                {
                    question: "¿Qué es una API REST y cómo la has utilizado?",
                    answer: "Una API REST es una interfaz que permite la comunicación entre sistemas usando HTTP. He trabajado con APIs REST en varios proyectos, consumiendo endpoints para obtener datos de usuarios, crear registros y actualizar información. Por ejemplo, en el proyecto de DataExplorer integré la API de JSONPlaceholder para mostrar usuarios y posts en tiempo real."
                },
                {
                    question: "¿Cómo manejas errores en JavaScript?",
                    answer: "Utilizo try-catch para capturar errores síncronos y .catch() para promesas. Siempre valido datos de entrada, manejo casos edge y muestro mensajes claros al usuario. En mis proyectos implemento manejo de errores tanto en el frontend como en el backend, registrando errores para debugging y mostrando mensajes amigables al usuario."
                },
                {
                    question: "¿Qué experiencia tienes con bases de datos?",
                    answer: "He trabajado con PostgreSQL y MongoDB. En PostgreSQL diseño esquemas normalizados, creo índices para optimizar consultas y manejo relaciones entre tablas. Con MongoDB trabajo con documentos JSON, implemento agregaciones y optimizo queries. También tengo experiencia con ORMs como Prisma para facilitar las operaciones de base de datos."
                },
                {
                    question: "¿Qué es Git y cómo lo usas en tu flujo de trabajo?",
                    answer: "Git es un sistema de control de versiones que uso diariamente. Creo branches para nuevas features, hago commits descriptivos, uso pull requests para code review y resuelvo conflictos cuando es necesario. Sigo buenas prácticas como commits atómicos y mensajes claros. También uso GitHub para colaboración y despliegue continuo."
                },
                {
                    question: "¿Cómo optimizas el rendimiento de una aplicación web?",
                    answer: "Optimizo mediante lazy loading de componentes, minimizo re-renders innecesarios con React.memo, uso debouncing en búsquedas, implemento caché con localStorage o Redis, optimizo imágenes con formatos modernos como WebP, y uso code splitting. También monitoreo métricas de rendimiento con herramientas como Lighthouse."
                },
                {
                    question: "¿Qué herramientas de automatización conoces?",
                    answer: "Tengo experiencia con n8n y Make (Integromat) para automatizar procesos empresariales. He creado flujos que conectan APIs, procesan webhooks, envían notificaciones automáticas y sincronizan datos entre sistemas. También he trabajado con Zapier para integraciones más simples y scripts personalizados con Node.js para automatizaciones específicas."
                }
            ]
        },

        // Contact
        contact: {
            title: 'Contacto',
            subtitle: '¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para nuevas oportunidades',
            info: 'Información de Contacto',
            email: 'Email',
            phone: 'Teléfono',
            social: 'Redes Sociales',
            form: {
                name: 'Nombre',
                namePlaceholder: 'Tu nombre',
                nameRequired: 'El nombre es requerido',
                email: 'Email',
                emailPlaceholder: 'tu@email.com',
                emailRequired: 'El email es requerido',
                emailInvalid: 'Email inválido',
                subject: 'Asunto',
                subjectPlaceholder: 'Asunto del mensaje',
                subjectRequired: 'El asunto es requerido',
                message: 'Mensaje',
                messagePlaceholder: 'Escribe tu mensaje aquí...',
                messageRequired: 'El mensaje es requerido',
                send: 'Enviar Mensaje',
                sending: 'Enviando...',
                success: '¡Mensaje enviado con éxito! Te responderé pronto.',
                error: 'Hubo un error al enviar el mensaje. Intenta de nuevo.'
            }
        },

        // Footer
        footer: {
            rights: 'Todos los derechos reservados.'
        }
    },

    en: {
        // Navbar
        navbar: {
            home: 'Home',
            about: 'About Me',
            skills: 'Skills',
            projects: 'Projects',
            experience: 'Experience',
            certifications: 'Certifications',
            contact: 'Contact',
            darkMode: 'Dark Mode',
            lightMode: 'Light Mode'
        },

        // Hero
        hero: {
            availableToWork: 'Available to work',
            name: 'José Caballero G.',
            title: 'Junior Software Developer – Process Automation',
            description: 'Full Stack Developer specialized in automation with n8n and Make. I integrate APIs, webhooks and databases to optimize business processes.',
            viewProjects: 'View Projects',
            viewResume: 'View Resume',
            contactMe: 'Contact Me'
        },

        // About
        about: {
            title: 'About Me',
            description: 'Passionate about technology and automation. I love solving complex problems with simple and efficient solutions.',
            availability: 'Available to work - Ready for new challenges',
            qualities: {
                proactive: {
                    title: 'Proactive',
                    description: 'I take the initiative to solve problems before they become obstacles'
                },
                collaborative: {
                    title: 'Collaborative',
                    description: 'I easily adapt to teams and enjoy sharing knowledge'
                },
                passion: {
                    title: 'Passion',
                    description: 'Dedicated to creating solutions that positively impact'
                },
                cleanCode: {
                    title: 'Clean Code',
                    description: 'I write maintainable and scalable code following best practices'
                },
                innovation: {
                    title: 'Innovation',
                    description: 'Always looking for new technologies and ways to improve'
                }
            }
        },

        // Skills
        skills: {
            title: 'Technical Skills',
            subtitle: 'Select a category to see my tools',
            categories: {
                backend: 'Backend',
                frontend: 'Frontend',
                automation: 'Automation',
                tools: 'Tools'
            },
            items: {
                nodejs: 'JavaScript runtime environment for server',
                mysql: 'Robust relational database management',
                postgresql: 'Advanced and powerful relational database',
                mongodb: 'NoSQL database for flexible data',
                restapis: 'Standard and scalable web service design',
                react: 'Leading library for user interfaces',
                vite: 'Ultra-fast frontend build tool',
                javascript: 'Fundamental language for interactive web',
                tailwind: 'Utility framework for rapid design',
                htmlcss: 'Fundamental web structure and styling',
                n8n: 'Customizable workflow automation',
                make: 'Visual app integration platform',
                zapier: 'Leading web app connector',
                webhooks: 'Real-time communication between systems',
                vscode: 'The most powerful and versatile code editor',
                git: 'Essential version control system',
                github: 'Code collaboration and hosting',
                postman: 'API testing and development',
                docker: 'Containers for consistent deployment',
                npm: 'JavaScript package manager'
            }
        },

        // Projects
        projects: {
            title: 'Featured Projects',
            subtitle: 'Some of my recent work',
            viewDemo: 'View Demo',
            viewCode: 'View Code'
        },

        // Experience
        experience: {
            title: 'Work Experience',
            subtitle: 'My professional journey',
            present: 'Present'
        },

        // Certifications
        certifications: {
            title: 'Certifications',
            subtitle: 'Continuous training and learning',
            viewCertificate: 'View Certificate'
        },

        // FAQ
        faq: {
            title: 'Frequently Asked Questions',
            subtitle: 'Answers to common technical interview questions',
            questions: [
                {
                    question: "What is a REST API and how have you used it?",
                    answer: "A REST API is an interface that enables communication between systems using HTTP. I've worked with REST APIs in several projects, consuming endpoints to fetch user data, create records, and update information. For example, in the DataExplorer project I integrated the JSONPlaceholder API to display users and posts in real-time."
                },
                {
                    question: "How do you handle errors in JavaScript?",
                    answer: "I use try-catch for synchronous errors and .catch() for promises. I always validate input data, handle edge cases, and show clear messages to users. In my projects I implement error handling in both frontend and backend, logging errors for debugging and displaying user-friendly messages."
                },
                {
                    question: "What experience do you have with databases?",
                    answer: "I've worked with PostgreSQL and MongoDB. In PostgreSQL I design normalized schemas, create indexes to optimize queries, and handle relationships between tables. With MongoDB I work with JSON documents, implement aggregations, and optimize queries. I also have experience with ORMs like Prisma to facilitate database operations."
                },
                {
                    question: "What is Git and how do you use it in your workflow?",
                    answer: "Git is a version control system I use daily. I create branches for new features, make descriptive commits, use pull requests for code review, and resolve conflicts when necessary. I follow best practices like atomic commits and clear messages. I also use GitHub for collaboration and continuous deployment."
                },
                {
                    question: "How do you optimize web application performance?",
                    answer: "I optimize through lazy loading components, minimize unnecessary re-renders with React.memo, use debouncing in searches, implement caching with localStorage or Redis, optimize images with modern formats like WebP, and use code splitting. I also monitor performance metrics with tools like Lighthouse."
                },
                {
                    question: "What automation tools do you know?",
                    answer: "I have experience with n8n and Make (Integromat) for automating business processes. I've created flows that connect APIs, process webhooks, send automatic notifications, and synchronize data between systems. I've also worked with Zapier for simpler integrations and custom scripts with Node.js for specific automations."
                }
            ]
        },

        // Contact
        contact: {
            title: 'Contact',
            subtitle: 'Have a project in mind? Let\'s talk! I\'m available for new opportunities',
            info: 'Contact Information',
            email: 'Email',
            phone: 'Phone',
            social: 'Social Media',
            form: {
                name: 'Name',
                namePlaceholder: 'Your name',
                nameRequired: 'Name is required',
                email: 'Email',
                emailPlaceholder: 'your@email.com',
                emailRequired: 'Email is required',
                emailInvalid: 'Invalid email',
                subject: 'Subject',
                subjectPlaceholder: 'Message subject',
                subjectRequired: 'Subject is required',
                message: 'Message',
                messagePlaceholder: 'Write your message here...',
                messageRequired: 'Message is required',
                send: 'Send Message',
                sending: 'Sending...',
                success: 'Message sent successfully! I\'ll respond soon.',
                error: 'There was an error sending the message. Please try again.'
            }
        },

        // Footer
        footer: {
            rights: 'All rights reserved.'
        }
    },

    fr: {
        // Navbar
        navbar: {
            home: 'Accueil',
            about: 'À Propos',
            skills: 'Compétences',
            projects: 'Projets',
            experience: 'Expérience',
            certifications: 'Certifications',
            contact: 'Contact',
            darkMode: 'Mode Sombre',
            lightMode: 'Mode Clair'
        },

        // Hero
        hero: {
            availableToWork: 'Disponible pour travailler',
            name: 'José Caballero G.',
            title: 'Développeur de Logiciels Junior – Automatisation des Processus',
            description: 'Développeur Full Stack spécialisé dans l\'automatisation avec n8n et Make. J\'intègre des APIs, webhooks et bases de données pour optimiser les processus d\'entreprise.',
            viewProjects: 'Voir les Projets',
            viewResume: 'Voir le CV',
            contactMe: 'Me Contacter'
        },

        // About
        about: {
            title: 'À Propos de Moi',
            description: 'Passionné par la technologie et l\'automatisation. J\'adore résoudre des problèmes complexes avec des solutions simples et efficaces.',
            availability: 'Disponible pour travailler - Prêt pour de nouveaux défis',
            qualities: {
                proactive: {
                    title: 'Proactif',
                    description: 'Je prends l\'initiative de résoudre les problèmes avant qu\'ils ne deviennent des obstacles'
                },
                collaborative: {
                    title: 'Collaboratif',
                    description: 'Je m\'adapte facilement aux équipes et j\'aime partager mes connaissances'
                },
                passion: {
                    title: 'Passion',
                    description: 'Dédié à créer des solutions qui ont un impact positif'
                },
                cleanCode: {
                    title: 'Code Propre',
                    description: 'J\'écris du code maintenable et évolutif en suivant les meilleures pratiques'
                },
                innovation: {
                    title: 'Innovation',
                    description: 'Toujours à la recherche de nouvelles technologies et façons d\'améliorer'
                }
            }
        },

        // Skills
        skills: {
            title: 'Compétences Techniques',
            subtitle: 'Sélectionnez une catégorie pour voir mes outils',
            categories: {
                backend: 'Backend',
                frontend: 'Frontend',
                automation: 'Automatisation',
                tools: 'Outils'
            },
            items: {
                nodejs: 'Environnement d\'exécution JavaScript pour serveur',
                mysql: 'Gestion de bases de données relationnelles robustes',
                postgresql: 'Base de données relationnelle avancée et puissante',
                mongodb: 'Base de données NoSQL pour données flexibles',
                restapis: 'Conception de services web standard et évolutifs',
                react: 'Bibliothèque leader pour interfaces utilisateur',
                vite: 'Outil de construction frontend ultra-rapide',
                javascript: 'Langage fondamental pour le web interactif',
                tailwind: 'Framework d\'utilitaires pour conception rapide',
                htmlcss: 'Structure et style fondamentaux du web',
                n8n: 'Automatisation de flux de travail personnalisables',
                make: 'Plateforme visuelle d\'intégration d\'applications',
                zapier: 'Connecteur d\'applications web leader',
                webhooks: 'Communication en temps réel entre systèmes',
                vscode: 'L\'éditeur de code le plus puissant et polyvalent',
                git: 'Système de contrôle de version essentiel',
                github: 'Collaboration et hébergement de code',
                postman: 'Tests et développement d\'APIs',
                docker: 'Conteneurs pour déploiement cohérent',
                npm: 'Gestionnaire de paquets JavaScript'
            }
        },

        // Projects
        projects: {
            title: 'Projets en Vedette',
            subtitle: 'Certains de mes travaux récents',
            viewDemo: 'Voir la Démo',
            viewCode: 'Voir le Code'
        },

        // Experience
        experience: {
            title: 'Expérience Professionnelle',
            subtitle: 'Mon parcours professionnel',
            present: 'Présent'
        },

        // Certifications
        certifications: {
            title: 'Certifications',
            subtitle: 'Formation continue et apprentissage',
            viewCertificate: 'Voir le Certificat'
        },

        // FAQ
        faq: {
            title: 'Questions Fréquentes',
            subtitle: 'Réponses aux questions techniques courantes en entretien',
            questions: [
                {
                    question: "Qu'est-ce qu'une API REST et comment l'avez-vous utilisée?",
                    answer: "Une API REST est une interface qui permet la communication entre systèmes en utilisant HTTP. J'ai travaillé avec des APIs REST dans plusieurs projets, consommant des endpoints pour obtenir des données utilisateur, créer des enregistrements et mettre à jour des informations. Par exemple, dans le projet DataExplorer, j'ai intégré l'API JSONPlaceholder pour afficher des utilisateurs et des posts en temps réel."
                },
                {
                    question: "Comment gérez-vous les erreurs en JavaScript?",
                    answer: "J'utilise try-catch pour capturer les erreurs synchrones et .catch() pour les promesses. Je valide toujours les données d'entrée, gère les cas limites et affiche des messages clairs aux utilisateurs. Dans mes projets, j'implémente la gestion des erreurs tant en frontend qu'en backend, enregistrant les erreurs pour le débogage et affichant des messages conviviaux."
                },
                {
                    question: "Quelle expérience avez-vous avec les bases de données?",
                    answer: "J'ai travaillé avec PostgreSQL et MongoDB. Avec PostgreSQL, je conçois des schémas normalisés, crée des index pour optimiser les requêtes et gère les relations entre tables. Avec MongoDB, je travaille avec des documents JSON, implémente des agrégations et optimise les requêtes. J'ai également de l'expérience avec des ORMs comme Prisma pour faciliter les opérations de base de données."
                },
                {
                    question: "Qu'est-ce que Git et comment l'utilisez-vous dans votre flux de travail?",
                    answer: "Git est un système de contrôle de version que j'utilise quotidiennement. Je crée des branches pour de nouvelles fonctionnalités, fais des commits descriptifs, utilise des pull requests pour la revue de code et résous les conflits si nécessaire. Je suis les meilleures pratiques comme les commits atomiques et les messages clairs. J'utilise également GitHub pour la collaboration et le déploiement continu."
                },
                {
                    question: "Comment optimisez-vous les performances d'une application web?",
                    answer: "J'optimise via le chargement paresseux des composants, minimise les re-rendus inutiles avec React.memo, utilise le debouncing dans les recherches, implémente le cache avec localStorage ou Redis, optimise les images avec des formats modernes comme WebP, et utilise le code splitting. Je surveille également les métriques de performance avec des outils comme Lighthouse."
                },
                {
                    question: "Quels outils d'automatisation connaissez-vous?",
                    answer: "J'ai de l'expérience avec n8n et Make (Integromat) pour automatiser les processus d'entreprise. J'ai créé des flux qui connectent des APIs, traitent des webhooks, envoient des notifications automatiques et synchronisent des données entre systèmes. J'ai également travaillé avec Zapier pour des intégrations plus simples et des scripts personnalisés avec Node.js pour des automatisations spécifiques."
                }
            ]
        },

        // Contact
        contact: {
            title: 'Contact',
            subtitle: 'Vous avez un projet en tête? Parlons-en! Je suis disponible pour de nouvelles opportunités',
            info: 'Informations de Contact',
            email: 'Email',
            phone: 'Téléphone',
            social: 'Réseaux Sociaux',
            form: {
                name: 'Nom',
                namePlaceholder: 'Votre nom',
                nameRequired: 'Le nom est requis',
                email: 'Email',
                emailPlaceholder: 'votre@email.com',
                emailRequired: 'L\'email est requis',
                emailInvalid: 'Email invalide',
                subject: 'Sujet',
                subjectPlaceholder: 'Sujet du message',
                subjectRequired: 'Le sujet est requis',
                message: 'Message',
                messagePlaceholder: 'Écrivez votre message ici...',
                messageRequired: 'Le message est requis',
                send: 'Envoyer le Message',
                sending: 'Envoi...',
                success: 'Message envoyé avec succès! Je répondrai bientôt.',
                error: 'Une erreur s\'est produite lors de l\'envoi du message. Veuillez réessayer.'
            }
        },

        // Footer
        footer: {
            rights: 'Tous droits réservés.'
        }
    },

    pt: {
        // Navbar
        navbar: {
            home: 'Início',
            about: 'Sobre Mim',
            skills: 'Habilidades',
            projects: 'Projetos',
            experience: 'Experiência',
            certifications: 'Certificações',
            contact: 'Contato',
            darkMode: 'Modo Escuro',
            lightMode: 'Modo Claro'
        },

        // Hero
        hero: {
            availableToWork: 'Disponível para trabalhar',
            name: 'José Caballero G.',
            title: 'Desenvolvedor de Software Júnior – Automação de Processos',
            description: 'Desenvolvedor Full Stack especializado em automação com n8n e Make. Integro APIs, webhooks e bancos de dados para otimizar processos empresariais.',
            viewProjects: 'Ver Projetos',
            viewResume: 'Ver Currículo',
            contactMe: 'Entre em Contato'
        },

        // About
        about: {
            title: 'Sobre Mim',
            description: 'Apaixonado por tecnologia e automação. Adoro resolver problemas complexos com soluções simples e eficientes.',
            availability: 'Disponível para trabalhar - Pronto para novos desafios',
            qualities: {
                proactive: {
                    title: 'Proativo',
                    description: 'Tomo a iniciativa para resolver problemas antes que se tornem obstáculos'
                },
                collaborative: {
                    title: 'Colaborativo',
                    description: 'Me adapto facilmente a equipes e gosto de compartilhar conhecimentos'
                },
                passion: {
                    title: 'Paixão',
                    description: 'Dedicado a criar soluções que impactem positivamente'
                },
                cleanCode: {
                    title: 'Código Limpo',
                    description: 'Escrevo código mantível e escalável seguindo as melhores práticas'
                },
                innovation: {
                    title: 'Inovação',
                    description: 'Sempre buscando novas tecnologias e formas de melhorar'
                }
            }
        },

        // Skills
        skills: {
            title: 'Habilidades Técnicas',
            subtitle: 'Selecione uma categoria para ver minhas ferramentas',
            categories: {
                backend: 'Backend',
                frontend: 'Frontend',
                automation: 'Automação',
                tools: 'Ferramentas'
            },
            items: {
                nodejs: 'Ambiente de execução JavaScript para servidor',
                mysql: 'Gerenciamento de banco de dados relacional robusto',
                postgresql: 'Banco de dados relacional avançado e poderoso',
                mongodb: 'Banco de dados NoSQL para dados flexíveis',
                restapis: 'Design de serviços web padrão e escaláveis',
                react: 'Biblioteca líder para interfaces de usuário',
                vite: 'Ferramenta de construção frontend ultra-rápida',
                javascript: 'Linguagem fundamental para web interativa',
                tailwind: 'Framework de utilitários para design rápido',
                htmlcss: 'Estrutura e estilo fundamentais da web',
                n8n: 'Automação de fluxos de trabalho personalizáveis',
                make: 'Plataforma visual de integração de aplicativos',
                zapier: 'Conector de aplicativos web líder',
                webhooks: 'Comunicação em tempo real entre sistemas',
                vscode: 'O editor de código mais poderoso e versátil',
                git: 'Sistema de controle de versão essencial',
                github: 'Colaboração e hospedagem de código',
                postman: 'Testes e desenvolvimento de APIs',
                docker: 'Contêineres para implantação consistente',
                npm: 'Gerenciador de pacotes JavaScript'
            }
        },

        // Projects
        projects: {
            title: 'Projetos em Destaque',
            subtitle: 'Alguns dos meus trabalhos recentes',
            viewDemo: 'Ver Demo',
            viewCode: 'Ver Código'
        },

        // Experience
        experience: {
            title: 'Experiência Profissional',
            subtitle: 'Minha trajetória profissional',
            present: 'Presente'
        },

        // Certifications
        certifications: {
            title: 'Certificações',
            subtitle: 'Formação contínua e aprendizado',
            viewCertificate: 'Ver Certificado'
        },

        // FAQ
        faq: {
            title: 'Perguntas Frequentes',
            subtitle: 'Respostas a perguntas técnicas comuns em entrevistas',
            questions: [
                {
                    question: "O que é uma API REST e como você a utilizou?",
                    answer: "Uma API REST é uma interface que permite a comunicação entre sistemas usando HTTP. Trabalhei com APIs REST em vários projetos, consumindo endpoints para obter dados de usuários, criar registros e atualizar informações. Por exemplo, no projeto DataExplorer integrei a API JSONPlaceholder para exibir usuários e posts em tempo real."
                },
                {
                    question: "Como você lida com erros em JavaScript?",
                    answer: "Uso try-catch para capturar erros síncronos e .catch() para promessas. Sempre valido dados de entrada, lido com casos extremos e mostro mensagens claras aos usuários. Em meus projetos implemento tratamento de erros tanto no frontend quanto no backend, registrando erros para depuração e exibindo mensagens amigáveis ao usuário."
                },
                {
                    question: "Que experiência você tem com bancos de dados?",
                    answer: "Trabalhei com PostgreSQL e MongoDB. No PostgreSQL projeto esquemas normalizados, crio índices para otimizar consultas e gerencio relacionamentos entre tabelas. Com MongoDB trabalho com documentos JSON, implemento agregações e otimizo consultas. Também tenho experiência com ORMs como Prisma para facilitar operações de banco de dados."
                },
                {
                    question: "O que é Git e como você o usa em seu fluxo de trabalho?",
                    answer: "Git é um sistema de controle de versão que uso diariamente. Crio branches para novos recursos, faço commits descritivos, uso pull requests para revisão de código e resolvo conflitos quando necessário. Sigo as melhores práticas como commits atômicos e mensagens claras. Também uso GitHub para colaboração e implantação contínua."
                },
                {
                    question: "Como você otimiza o desempenho de uma aplicação web?",
                    answer: "Otimizo através de lazy loading de componentes, minimizo re-renders desnecessários com React.memo, uso debouncing em buscas, implemento cache com localStorage ou Redis, otimizo imagens com formatos modernos como WebP, e uso code splitting. Também monitoro métricas de desempenho com ferramentas como Lighthouse."
                },
                {
                    question: "Quais ferramentas de automação você conhece?",
                    answer: "Tenho experiência com n8n e Make (Integromat) para automatizar processos empresariais. Criei fluxos que conectam APIs, processam webhooks, enviam notificações automáticas e sincronizam dados entre sistemas. Também trabalhei com Zapier para integrações mais simples e scripts personalizados com Node.js para automações específicas."
                }
            ]
        },

        // Contact
        contact: {
            title: 'Contato',
            subtitle: 'Tem um projeto em mente? Vamos conversar! Estou disponível para novas oportunidades',
            info: 'Informações de Contato',
            email: 'Email',
            phone: 'Telefone',
            social: 'Redes Sociais',
            form: {
                name: 'Nome',
                namePlaceholder: 'Seu nome',
                nameRequired: 'O nome é obrigatório',
                email: 'Email',
                emailPlaceholder: 'seu@email.com',
                emailRequired: 'O email é obrigatório',
                emailInvalid: 'Email inválido',
                subject: 'Assunto',
                subjectPlaceholder: 'Assunto da mensagem',
                subjectRequired: 'O assunto é obrigatório',
                message: 'Mensagem',
                messagePlaceholder: 'Escreva sua mensagem aqui...',
                messageRequired: 'A mensagem é obrigatória',
                send: 'Enviar Mensagem',
                sending: 'Enviando...',
                success: 'Mensagem enviada com sucesso! Responderei em breve.',
                error: 'Houve um erro ao enviar a mensagem. Tente novamente.'
            }
        },

        // Footer
        footer: {
            rights: 'Todos os direitos reservados.'
        }
    }
}
