import { motion } from 'framer-motion'
import { Heart, Code2, Lightbulb } from 'lucide-react'
import Section from './ui/Section'

const About = () => {
    return (
        <Section id="about" className="bg-card/30">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-4xl mx-auto"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-accent-blue to-accent-green bg-clip-text text-transparent">
                        Sobre Mí
                    </span>
                </h2>

                <p className="text-text-secondary text-lg leading-relaxed mb-8">
                    Apasionado por la tecnología y la automatización. Me encanta resolver problemas complejos
                    con soluciones simples y eficientes. Siempre en busca de nuevos desafíos y oportunidades
                    de aprendizaje que me permitan crecer como desarrollador.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mt-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.05 }}
                        whileHover={{ y: -10, scale: 1.05, rotateY: 5, transition: { duration: 0.15 } }}
                        className="bg-card p-6 rounded-xl border border-accent-blue/20 hover:border-accent-blue/50 transition-all duration-150 relative overflow-hidden group"
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <motion.div whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }} transition={{ duration: 0.3 }}>
                            <Heart className="text-accent-blue mx-auto mb-4 relative z-10" size={40} />
                        </motion.div>
                        <h3 className="text-xl font-semibold mb-2 relative z-10">Pasión</h3>
                        <p className="text-text-secondary text-sm relative z-10">
                            Dedicado a crear soluciones que impacten positivamente
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.08 }}
                        whileHover={{ y: -10, scale: 1.05, rotateY: 5, transition: { duration: 0.15 } }}
                        className="bg-card p-6 rounded-xl border border-accent-green/20 hover:border-accent-green/50 transition-all duration-150 relative overflow-hidden group"
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <motion.div whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }} transition={{ duration: 0.3 }}>
                            <Code2 className="text-accent-green mx-auto mb-4 relative z-10" size={40} />
                        </motion.div>
                        <h3 className="text-xl font-semibold mb-2 relative z-10">Código Limpio</h3>
                        <p className="text-text-secondary text-sm relative z-10">
                            Escribo código mantenible y escalable siguiendo mejores prácticas
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.11 }}
                        whileHover={{ y: -10, scale: 1.05, rotateY: 5, transition: { duration: 0.15 } }}
                        className="bg-card p-6 rounded-xl border border-accent-orange/20 hover:border-accent-orange/50 transition-all duration-150 relative overflow-hidden group"
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <motion.div whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }} transition={{ duration: 0.3 }}>
                            <Lightbulb className="text-accent-orange mx-auto mb-4 relative z-10" size={40} />
                        </motion.div>
                        <h3 className="text-xl font-semibold mb-2 relative z-10">Innovación</h3>
                        <p className="text-text-secondary text-sm relative z-10">
                            Siempre buscando nuevas tecnologías y formas de mejorar
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </Section>
    )
}

export default About
