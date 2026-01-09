import { useState } from 'react'
import { motion } from 'framer-motion'
import Section from './ui/Section'

const Skills = () => {
    const [activeTooltip, setActiveTooltip] = useState(null)

    const handleSkillClick = (skillName) => {
        setActiveTooltip(activeTooltip === skillName ? null : skillName)
    }

    const skills = [
        {
            name: 'Automatización (n8n, Make)',
            color: 'accent-blue',
            description: 'Diseño e implementación de flujos automatizados para optimizar procesos empresariales y administrativos'
        },
        {
            name: 'Integración de APIs / Webhooks',
            color: 'accent-green',
            description: 'Integración de plataformas mediante APIs REST y Webhooks para sincronización de datos en tiempo real'
        },
        {
            name: 'React',
            color: 'accent-blue',
            description: 'Desarrollo de interfaces web modernas y sistemas internos con componentes reutilizables'
        },
        {
            name: 'Node.js',
            color: 'accent-green',
            description: 'Creación de backends y APIs para gestión de datos y procesos automatizados'
        },
        {
            name: 'SQL',
            color: 'accent-blue',
            description: 'Gestión de bases de datos relacionales para almacenamiento y consulta de información'
        },
        {
            name: 'Git/GitHub',
            color: 'accent-orange',
            description: 'Control de versiones y colaboración en proyectos de desarrollo de software'
        },
        {
            name: 'JSON',
            color: 'accent-blue',
            description: 'Manejo y transformación de datos en formato JSON para integración de sistemas'
        },
        {
            name: 'REST APIs',
            color: 'accent-green',
            description: 'Consumo y creación de APIs RESTful para comunicación entre aplicaciones'
        },
        {
            name: 'Testing básico / Validación de flujos',
            color: 'accent-blue',
            description: 'Pruebas y validación de flujos automatizados para garantizar funcionamiento correcto'
        },
        {
            name: 'AWS Cloud (básico)',
            color: 'accent-orange',
            description: 'Conocimientos fundamentales de servicios cloud de AWS y arquitecturas en la nube'
        },
    ]

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
                        Habilidades
                    </span>
                </h2>
                <p className="text-text-secondary mb-12 max-w-2xl mx-auto">
                    Tecnologías y herramientas con las que trabajo para crear soluciones eficientes
                </p>

                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
                            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.03,
                                type: "spring",
                                stiffness: 150
                            }}
                            whileHover={{
                                scale: 1.15,
                                y: -10,
                                rotateY: 5,
                                rotateX: 5,
                                transition: { duration: 0.2 }
                            }}
                            onClick={() => handleSkillClick(skill.name)}
                            className="relative group perspective-1000 cursor-pointer"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <motion.div
                                className={`px-6 py-3 bg-gradient-to-br from-card to-card/50 rounded-full border-2 border-${skill.color}/50 hover:border-${skill.color} transition-all duration-150 cursor-pointer shadow-lg backdrop-blur-sm relative overflow-hidden ${activeTooltip === skill.name ? 'border-accent-blue scale-110' : ''}`}
                                whileHover={{
                                    boxShadow: '0 0 25px rgba(59, 130, 246, 0.6), 0 0 50px rgba(59, 130, 246, 0.3)'
                                }}
                            >
                                {/* Animated gradient overlay */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-accent-blue/20 via-accent-green/20 to-accent-orange/20 opacity-0 group-hover:opacity-100"
                                    animate={{
                                        x: ['-100%', '100%']
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />
                                <span className="text-text-primary font-medium relative z-10">{skill.name}</span>
                            </motion.div>

                            {/* Enhanced Tooltip - Shows on hover (desktop) or click (mobile) */}
                            <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-4 py-3 bg-gradient-to-br from-card to-card/90 border-2 border-accent-blue/70 rounded-lg shadow-2xl transition-all duration-150 pointer-events-none w-72 z-50 backdrop-blur-md ${activeTooltip === skill.name ? 'opacity-100 visible' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'
                                }`}>
                                <p className="text-text-primary text-sm text-center leading-relaxed font-medium">
                                    {skill.description}
                                </p>
                                {/* Glowing Arrow */}
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-2">
                                    <div className="border-[10px] border-transparent border-t-card drop-shadow-[0_2px_8px_rgba(59,130,246,0.5)]"></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </Section>
    )
}

export default Skills
