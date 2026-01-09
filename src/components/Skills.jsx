import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Server, Code, Zap, Wrench, Grid } from 'lucide-react'
import Section from './ui/Section'

const SkillCard = ({ skill }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                className={`flex-shrink-0 px-8 py-5 bg-card/40 dark:bg-card/40 bg-white/60 backdrop-blur-md rounded-2xl border-2 border-${skill.color}/30 hover:border-${skill.color} transition-all duration-300 cursor-default relative overflow-visible`}
                whileHover={{
                    scale: 1.1,
                    y: -5,
                    boxShadow: `0 0 20px rgba(var(--color-${skill.color}), 0.4)`
                }}
            >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${skill.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />

                <span className="text-text-primary font-bold text-xl relative z-10 whitespace-nowrap">
                    {skill.name}
                </span>
            </motion.div>

            {/* Tooltip */}
            <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 px-4 py-3 bg-card/95 border border-${skill.color}/50 text-text-primary text-sm rounded-lg shadow-xl whitespace-normal w-64 text-center z-[100] transition-all duration-200 pointer-events-none ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                {skill.description}
                <div className={`absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-${skill.color}/50`} />
            </div>
        </div>
    )
}

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('backend')

    const categories = [
        { id: 'backend', name: 'Backend', icon: Server },
        { id: 'frontend', name: 'Frontend', icon: Code },
        { id: 'automation', name: 'Automatización', icon: Zap },
        { id: 'tools', name: 'Herramientas', icon: Wrench }
    ]

    const allSkills = [
        // Backend
        { name: 'Node.js', color: 'accent-green', category: 'backend', description: 'Creación de backends y APIs robustas' },
        { name: 'Python', color: 'accent-blue', category: 'backend', description: 'Automatización y ciencia de datos' },
        { name: 'PostgreSQL', color: 'accent-blue', category: 'backend', description: 'bases de datos relacionales avanzadas' },
        { name: 'MongoDB', color: 'accent-green', category: 'backend', description: 'Base de datos NoSQL flexible y escalable' },
        { name: 'REST APIs', color: 'accent-blue', category: 'backend', description: 'Diseño e integración de servicios web' },
        { name: 'Express.js', color: 'accent-green', category: 'backend', description: 'Framework web rápido y minimalista' },

        // Frontend
        { name: 'React', color: 'accent-blue', category: 'frontend', description: 'Interfaces de usuario interactivas y reactivas' },
        { name: 'JavaScript', color: 'accent-orange', category: 'frontend', description: 'Lógica dinámica del lado del cliente' },
        { name: 'Tailwind CSS', color: 'accent-blue', category: 'frontend', description: 'Estilizado moderno y responsivo' },
        { name: 'HTML/CSS', color: 'accent-orange', category: 'frontend', description: 'Estructura y diseño web fundamental' },
        { name: 'Vite', color: 'accent-green', category: 'frontend', description: 'Entorno de desarrollo frontend ultrarrápido' },
        { name: 'Framer Motion', color: 'accent-blue', category: 'frontend', description: 'Animaciones fluidas y complejas' },

        // Automation
        { name: 'n8n', color: 'accent-green', category: 'automation', description: 'Automatización de flujos de trabajo potentes' },
        { name: 'Make', color: 'accent-blue', category: 'automation', description: 'Integración visual de aplicaciones' },
        { name: 'Zapier', color: 'accent-orange', category: 'automation', description: 'Conectividad entre apps sin código' },
        { name: 'Webhooks', color: 'accent-green', category: 'automation', description: 'Eventos en tiempo real entre sistemas' },

        // Tools
        { name: 'Git', color: 'accent-orange', category: 'tools', description: 'Control de versiones distribuido' },
        { name: 'Docker', color: 'accent-blue', category: 'tools', description: 'Despliegue de aplicaciones en contenedores' },
        { name: 'Postman', color: 'accent-orange', category: 'tools', description: 'Pruebas y desarrollo de APIs' },
        { name: 'AWS', color: 'accent-green', category: 'tools', description: 'Servicios en la nube escalables' },
        { name: 'VS Code', color: 'accent-blue', category: 'tools', description: 'Editor de código potente y extensible' },
    ]

    const currentSkills = allSkills.filter(skill => skill.category === activeCategory)

    // Duplicate skills to ensure smooth scrolling loop even with few items
    const marqueeSkills = [...currentSkills, ...currentSkills, ...currentSkills, ...currentSkills]

    return (
        <Section id="skills" className="overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-accent-blue to-accent-green bg-clip-text text-transparent">
                        Habilidades Técnicas
                    </span>
                </h2>
                <p className="text-text-secondary max-w-2xl mx-auto mb-8">
                    Selecciona una categoría para ver mis herramientas
                </p>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16 px-4">
                    {categories.map((category) => {
                        const Icon = category.icon
                        return (
                            <motion.button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 border-2 ${activeCategory === category.id
                                        ? 'bg-gradient-to-r from-accent-blue to-accent-green text-white border-transparent shadow-lg shadow-accent-blue/30'
                                        : 'bg-card text-text-secondary border-gray-700/50 hover:border-accent-blue/50 hover:text-text-primary'
                                    }`}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Icon size={18} />
                                {category.name}
                            </motion.button>
                        )
                    })}
                </div>
            </motion.div>

            {/* Infinite Marquee Container */}
            <div className="relative w-full py-10">
                {/* Mask for fading edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

                <div
                    className="flex overflow-hidden group"
                // Inline style for marquee animation to allow easy speed adjustment
                >
                    <div
                        className="flex gap-8 animate-scroll-slow group-hover:paused pl-8 items-center"
                        style={{ width: 'max-content' }}
                    >
                        {marqueeSkills.map((skill, index) => (
                            <SkillCard key={`${skill.name}-${index}`} skill={skill} />
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Skills
