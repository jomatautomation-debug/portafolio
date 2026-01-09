import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'
import Section from './ui/Section'

const Experience = () => {
    const experiences = [
        {
            company: 'SENA – SENNOVA',
            position: 'Desarrollador de Software – Automatización',
            period: 'Junio 2025 – Diciembre 2025',
            responsibilities: [
                'Desarrollo de aplicaciones web para proyectos tecnológicos del SENA',
                'Diseño e implementación de procesos automatizados mediante flujos en n8n y Make',
                'Integración de plataformas mediante APIs, Webhooks y herramientas de automatización',
                'Gestión de datos y APIs para optimizar tareas administrativas y operativas',
                'Soporte técnico y mejora continua de flujos automatizados',
            ],
        },
        {
            company: 'Proyectos Independientes (Freelance)',
            position: 'Full Stack Developer & Automatización',
            period: '2025 – Presente',
            responsibilities: [
                'Desarrollo de interfaces web y sistemas internos con React',
                'Implementación de flujos automatizados para envío de datos, notificaciones y control de procesos',
                'Integración de plataformas mediante APIs, Webhooks y herramientas de automatización',
            ],
        },
    ]

    return (
        <Section id="experience">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-accent-blue to-accent-green bg-clip-text text-transparent">
                        Experiencia
                    </span>
                </h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                    Mi trayectoria profesional en desarrollo de software y automatización de procesos
                </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
                <div className="relative border-l-2 border-accent-blue/30 pl-8 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="relative"
                        >
                            {/* Timeline dot with pulse */}
                            <motion.div
                                className="absolute -left-[41px] top-0 w-6 h-6 bg-accent-blue rounded-full border-4 border-background"
                                whileHover={{ scale: 1.5 }}
                            >
                                <motion.div
                                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute inset-0 bg-accent-blue rounded-full"
                                />
                            </motion.div>

                            <motion.div
                                className="bg-card p-6 rounded-xl border border-accent-blue/20 hover:border-accent-blue/50 transition-all duration-150 relative overflow-hidden group"
                                whileHover={{ x: 10, scale: 1.02, transition: { duration: 0.15 } }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="flex items-start justify-between mb-4 flex-wrap gap-2 relative z-10">
                                    <div>
                                        <h3 className="text-xl font-bold text-accent-blue flex items-center gap-2">
                                            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.3 }}>
                                                <Briefcase size={20} />
                                            </motion.div>
                                            {exp.position}
                                        </h3>
                                        <p className="text-text-primary font-semibold mt-1">{exp.company}</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-text-secondary text-sm bg-background px-3 py-1 rounded-full">
                                        <Calendar size={16} />
                                        {exp.period}
                                    </div>
                                </div>

                                <ul className="space-y-2 relative z-10">
                                    {exp.responsibilities.map((resp, idx) => (
                                        <motion.li
                                            key={idx}
                                            className="text-text-secondary text-sm flex items-start"
                                            whileHover={{ x: 5 }}
                                        >
                                            <span className="text-accent-green mr-2 mt-1">▸</span>
                                            <span>{resp}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default Experience
