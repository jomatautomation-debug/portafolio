import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Section from './ui/Section'
import { useLanguage } from '../contexts/LanguageContext'

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null)
    const { t, language } = useLanguage()

    const currentFaqs = t('faq.questions')

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
                        {t('faq.title')}
                    </span>
                </h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                    {t('faq.subtitle')}
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
