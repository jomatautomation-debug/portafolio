import { motion } from 'framer-motion'
import { Award, Cloud, Database, Languages } from 'lucide-react'
import Card from './ui/Card'
import Section from './ui/Section'
import { useLanguage } from '../contexts/LanguageContext'

const Certifications = () => {
    const { t } = useLanguage()

    // Config for icons and colors which are not in translation files
    const certConfig = [
        { icon: Cloud, color: 'accent-orange' },
        { icon: Cloud, color: 'accent-blue' },
        { icon: Database, color: 'accent-green' },
        { icon: Languages, color: 'accent-blue' },
    ]

    const certificationsList = t('certifications.list')
    const certifications = certificationsList.map((cert, index) => ({
        ...cert,
        ...(certConfig[index] || { icon: Award, color: 'accent-blue' }) // Fallback
    }))

    return (
        <Section id="certifications" className="bg-card/30">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-accent-blue to-accent-green bg-clip-text text-transparent">
                        {t('certifications.title')}
                    </span>
                </h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                    {t('certifications.subtitle')}
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {certifications.map((cert, index) => {
                    const Icon = cert.icon
                    return (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05, type: "spring", stiffness: 200 }}
                            whileHover={{ y: -10, scale: 1.05, rotateZ: 2, transition: { duration: 0.15 } }}
                            className="bg-card p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-150 border border-gray-800 hover:border-accent-blue/50 relative overflow-hidden group"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="text-center relative z-10">
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${cert.color}/10 mb-4`}>
                                    <motion.div whileHover={{ rotate: [0, -15, 15, 0], scale: 1.3 }} transition={{ duration: 0.3 }}>
                                        <Icon className={`text-${cert.color}`} size={32} />
                                    </motion.div>
                                </div>
                                <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.3 }}>
                                    <Award className="text-accent-green mx-auto mb-3" size={24} />
                                </motion.div>
                                <h3 className="text-lg font-bold mb-2 text-text-primary leading-tight">
                                    {cert.title}
                                </h3>
                                <p className="text-text-secondary text-sm">{cert.issuer}</p>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </Section>
    )
}

export default Certifications
