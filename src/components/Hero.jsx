import { motion } from 'framer-motion'
import { ArrowRight, Code, FileText } from 'lucide-react'
import Button from './ui/Button'
import Section from './ui/Section'

const Hero = () => {
    return (
        <Section id="hero" className="min-h-screen flex items-center pt-16">
            <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                {/* Foto - Izquierda */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex justify-center md:justify-start order-1 md:order-1"
                >
                    <motion.div
                        className="relative"
                        animate={{
                            y: [0, -15, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        whileHover={{ scale: 1.05 }}
                    >
                        {/* Outer glow - pulsing */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-accent-blue via-accent-green to-accent-orange rounded-full blur-3xl"
                            animate={{
                                opacity: [0.3, 0.6, 0.3],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />

                        {/* Rotating ring 1 - Fast */}
                        <motion.div
                            className="absolute inset-0 rounded-full"
                            style={{
                                background: 'conic-gradient(from 0deg, transparent 0%, #3B82F6 25%, transparent 50%, #22C55E 75%, transparent 100%)',
                                padding: '6px'
                            }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                        />

                        {/* Rotating ring 2 - Medium */}
                        <motion.div
                            className="absolute inset-0 rounded-full"
                            style={{
                                background: 'conic-gradient(from 180deg, transparent 0%, #22C55E 25%, transparent 50%, #F59E0B 75%, transparent 100%)',
                                padding: '6px'
                            }}
                            animate={{ rotate: -360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        />

                        {/* Rotating ring 3 - Slow */}
                        <motion.div
                            className="absolute inset-0 rounded-full"
                            style={{
                                background: 'conic-gradient(from 90deg, transparent 0%, #F59E0B 25%, transparent 50%, #3B82F6 75%, transparent 100%)',
                                padding: '6px'
                            }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        />

                        {/* Breathing effect */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-accent-blue/20 to-accent-green/20 rounded-full blur-xl"
                            animate={{
                                scale: [1, 1.15, 1],
                                opacity: [0.4, 0.7, 0.4]
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />

                        {/* Photo container with border */}
                        <motion.div
                            className="relative rounded-full p-1 bg-gradient-to-br from-accent-blue via-accent-green to-accent-orange"
                            animate={{
                                boxShadow: [
                                    '0 0 20px rgba(59, 130, 246, 0.5)',
                                    '0 0 40px rgba(34, 197, 94, 0.5)',
                                    '0 0 20px rgba(59, 130, 246, 0.5)'
                                ]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <img
                                src="/foto mia.jpg"
                                alt="José Caballero G."
                                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-background shadow-2xl"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Contenido - Derecha */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center md:text-left order-2 md:order-2"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full mb-4 border border-accent-blue/30"
                    >
                        <Code size={20} className="text-accent-blue" />
                        <span className="text-text-secondary text-sm">Disponible para trabajar</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-4xl md:text-6xl font-bold mb-4"
                    >
                        <span className="shimmer-text">
                            José Caballero G.
                        </span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-xl md:text-2xl text-text-secondary mb-6 relative"
                    >
                        <span className="inline-block">
                            Desarrollador de Software Junior – Automatización de Procesos
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-text-secondary text-lg mb-8 max-w-2xl"
                    >
                        Full Stack Developer especializado en automatización con n8n y Make.
                        Integro APIs, webhooks y bases de datos para optimizar procesos empresariales.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                    >
                        <Button href="#projects" variant="primary">
                            Ver Proyectos <ArrowRight size={20} />
                        </Button>
                        <Button
                            href="https://www.canva.com/design/DAG93ehcQk0/DHgvVpOtgqHhge46uY4wfQ/view?utm_content=DAG93ehcQk0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hfec087fb1e"
                            variant="secondary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FileText size={20} /> Ver Hoja de Vida
                        </Button>
                        <Button href="#contact" variant="cta">
                            Contactarme
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </Section>
    )
}

export default Hero
