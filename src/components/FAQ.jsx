import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Section from './ui/Section'

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const faqs = {
        es: [
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
        ],
        en: [
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
    }

    const [language, setLanguage] = useState('es')
    const currentFaqs = faqs[language]

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <Section id="faq" className="bg-card/30">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-accent-blue to-accent-green bg-clip-text text-transparent">
                        {language === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
                    </span>
                </h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                    {language === 'es'
                        ? 'Respuestas a preguntas técnicas comunes en entrevistas'
                        : 'Answers to common technical interview questions'}
                </p>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
                {currentFaqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="bg-card border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:border-accent-blue/50 transition-all"
                    >
                        <button
                            onClick={() => toggleQuestion(index)}
                            className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                        >
                            <h3 className="text-lg font-semibold text-text-primary">
                                {faq.question}
                            </h3>
                            <motion.div
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ChevronDown className="text-accent-blue flex-shrink-0" size={24} />
                            </motion.div>
                        </button>

                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-6 text-text-secondary leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </Section>
    )
}

export default FAQ
