import { useState } from 'react'
import { motion } from 'framer-motion'
import { Server, Code, Zap, Wrench, Grid } from 'lucide-react'
import Section from './ui/Section'

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('all')
    const [activeTooltip, setActiveTooltip] = useState(null)

    const categories = [
        { id: 'all', name: 'Todas', icon: Grid },
        { id: 'backend', name: 'Backend', icon: Server },
        { id: 'frontend', name: 'Frontend', icon: Code },
        { id: 'automation', name: 'Automatización', icon: Zap },
        { id: 'tools', name: 'Herramientas', icon: Wrench }
    ]

    const allSkills = [
        // Backend
        { name: 'Node.js', color: 'accent-green', category: 'backend', description: 'Creación de backends y APIs para gestión de datos y procesos automatizados' },
        { name: 'Python', color: 'accent-blue', category: 'backend', description: 'Desarrollo de scripts de automatización y procesamiento de datos' },
        { name: 'PostgreSQL', color: 'accent-blue', category: 'backend', description: 'Gestión de bases de datos relacionales para almacenamiento y consulta de información' },
        { name: 'MongoDB', color: 'accent-green', category: 'backend', description: 'Bases de datos NoSQL para aplicaciones escalables y flexibles' },
        { name: 'REST APIs', color: 'accent-blue', category: 'backend', description: 'Consumo y creación de APIs RESTful para comunicación entre aplicaciones' },
        { name: 'Express.js', color: 'accent-green', category: 'backend', description: 'Framework de Node.js para crear servidores web y APIs robustas' },

        // Frontend
        { name: 'React', color: 'accent-blue', category: 'frontend', description: 'Desarrollo de interfaces web modernas y sistemas internos con componentes reutilizables' },
        { name: 'JavaScript', color: 'accent-orange', category: 'frontend', description: 'Lenguaje principal para desarrollo web interactivo y dinámico' },
        { name: 'Tailwind CSS', color: 'accent-blue', category: 'frontend', description: 'Framework CSS utility-first para diseños modernos y responsivos' },
        { name: 'HTML/CSS', color: 'accent-orange', category: 'frontend', description: 'Fundamentos de estructura y diseño web' },
        { name: 'Vite', color: 'accent-green', category: 'frontend', description: 'Build tool moderno para desarrollo web rápido' },
        { name: 'Framer Motion', color: 'accent-blue', category: 'frontend', description: 'Biblioteca de animaciones para React con efectos profesionales' },

        // Automation
        { name: 'n8n', color: 'accent-green', category: 'automation', description: 'Diseño e implementación de flujos automatizados para optimizar procesos empresariales' },
        { name: 'Make (Integromat)', color: 'accent-blue', category: 'automation', description: 'Automatización visual de procesos y conexión de aplicaciones' },
        { name: 'Zapier', color: 'accent-orange', category: 'automation', description: 'Integración rápida de aplicaciones sin código' },
        { name: 'Webhooks', color: 'accent-green', category: 'automation', description: 'Integración de plataformas mediante Webhooks para sincronización de datos en tiempo real' },
        { name: 'API Integration', color: 'accent-blue', category: 'automation', description: 'Conexión de sistemas mediante APIs para flujos automatizados' },
        { name: 'Workflow Design', color: 'accent-green', category: 'automation', description: 'Diseño de procesos automatizados eficientes y escalables' },

        // Tools
        { name: 'Git/GitHub', color: 'accent-orange', category: 'tools', description: 'Control de versiones y colaboración en proyectos de desarrollo de software' },
        { name: 'Docker', color: 'accent-blue', category: 'tools', description: 'Contenedorización de aplicaciones para despliegue consistente' },
        { name: 'Postman', color: 'accent-orange', category: 'tools', description: 'Pruebas y documentación de APIs' },
        { name: 'VS Code', color: 'accent-blue', category: 'tools', description: 'Editor de código principal con extensiones para productividad' },
        { name: 'AWS (básico)', color: 'accent-green', category: 'tools', description: 'Conocimientos fundamentales de servicios cloud de AWS' },
        { name: 'Vercel/Netlify', color: 'accent-blue', category: 'tools', description: 'Plataformas de despliegue para aplicaciones web modernas' }
    ]

    const currentSkills = activeCategory === 'all'
        ? allSkills
        : allSkills.filter(skill => skill.category === activeCategory)

    const handleSkillClick = (skillName) => {
        setActiveTooltip(activeTooltip === skillName ? null : skillName)
    }

    return (
        <Section id="skills">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-accent-blue to-accent-green bg-clip-text text-transparent">
                        Habilidades Técnicas
                    </span>
                </h2>
                <p className="text-text-secondary mb-12 max-w-2xl mx-auto">
                    Tecnologías y herramientas con las que trabajo para crear soluciones eficientes
                </p>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => {
                        const Icon = category.icon
                        return (
                            <motion.button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${activeCategory === category.id
                                        ? 'bg-gradient-to-r from-accent-blue to-accent-green text-white shadow-lg shadow-accent-blue/50'
                                        : 'bg-card text-text-secondary hover:bg-card/80 border border-gray-800'
                                    }`}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Icon size={20} />
                                {category.name}
                            </motion.button>
                        )
                    })}
                </div>

                {/* Skills Grid */}
                <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto"
                >
                    {currentSkills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.03,
                                type: "spring",
                                stiffness: 200
                            }}
                            whileHover={{
                                scale: 1.15,
                                y: -12,
                                rotateY: 5,
                                rotateX: 5,
                                transition: { duration: 0.2 }
                            }}
                            onClick={() => handleSkillClick(skill.name)}
                            className={`relative px-6 py-4 bg-gradient-to-br from-card to-card/50 rounded-xl border-2 border-${skill.color}/50 hover:border-${skill.color} transition-all shadow-lg backdrop-blur-sm group cursor-pointer ${activeTooltip === skill.name ? 'border-accent-blue scale-110' : ''}`}
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            {/* Animated gradient overlay */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-accent-blue/20 via-accent-green/20 to-accent-orange/20 opacity-0 group-hover:opacity-100 rounded-xl"
                                animate={{
                                    x: ['-100%', '100%']
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />

                            {/* Pulsing glow */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-accent-green/10 opacity-0 group-hover:opacity-100 blur-xl rounded-xl"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0, 0.5, 0]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />

                            <span className="text-white font-semibold text-lg relative z-10">
                                {skill.name}
                            </span>

                            {/* Tooltip */}
                            <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-4 py-3 bg-gradient-to-br from-card to-card/90 border-2 border-accent-blue/70 rounded-lg shadow-2xl transition-all duration-150 pointer-events-none w-72 z-50 backdrop-blur-md ${activeTooltip === skill.name ? 'opacity-100 visible' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'
                                }`}>
                                <p className="text-text-primary text-sm text-center leading-relaxed font-medium">
                                    {skill.description}
                                </p>
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-2">
                                    <div className="border-[10px] border-transparent border-t-card drop-shadow-[0_2px_8px_rgba(59,130,246,0.5)]"></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </Section>
    )
}

export default Skills
