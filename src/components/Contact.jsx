import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Mail, Phone, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import Button from './ui/Button'
import Section from './ui/Section'
import { useLanguage } from '../contexts/LanguageContext'

const Contact = () => {
    const { t } = useLanguage()
    const [formStatus, setFormStatus] = useState('idle') // idle, loading, success, error
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const onSubmit = async (data) => {
        setFormStatus('loading')

        try {
            const response = await fetch('https://formspree.io/f/xpqqaaag', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            if (response.ok) {
                setFormStatus('success')
                reset()
                setTimeout(() => setFormStatus('idle'), 5000)
            } else {
                setFormStatus('error')
                setTimeout(() => setFormStatus('idle'), 5000)
            }
        } catch (error) {
            setFormStatus('error')
            setTimeout(() => setFormStatus('idle'), 5000)
        }
    }

    return (
        <Section id="contact">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-accent-blue to-accent-green bg-clip-text text-transparent">
                        {t('contact.title')}
                    </span>
                </h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                    {t('contact.subtitle')}
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Información de contacto */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <h3 className="text-2xl font-bold mb-6">{t('contact.info')}</h3>

                    <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-accent-blue/20 hover:border-accent-blue/50 transition-all">
                        <div className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center">
                            <Mail className="text-accent-blue" size={24} />
                        </div>
                        <div>
                            <p className="text-text-secondary text-sm">{t('contact.email')}</p>
                            <a href="mailto:josecaballerogonzalez49@gmail.com" className="text-text-primary hover:text-accent-blue transition-colors">
                                josecaballerogonzalez49@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-accent-green/20 hover:border-accent-green/50 transition-all">
                        <div className="w-12 h-12 bg-accent-green/10 rounded-full flex items-center justify-center">
                            <Phone className="text-accent-green" size={24} />
                        </div>
                        <div>
                            <p className="text-text-secondary text-sm">{t('contact.phone')}</p>
                            <a href="tel:+573046661245" className="text-text-primary hover:text-accent-green transition-colors">
                                +57 304-666-1245
                            </a>
                        </div>
                    </div>

                    <div className="pt-6">
                        <h4 className="text-lg font-semibold mb-4">{t('contact.social')}</h4>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/yourusername" // TODO: Reemplazar con tu GitHub
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-card rounded-full flex items-center justify-center border border-accent-blue/20 hover:border-accent-blue hover:bg-accent-blue/10 transition-all"
                            >
                                <Github className="text-text-primary" size={24} />
                            </a>
                            <a
                                href="https://linkedin.com/in/yourusername" // TODO: Reemplazar con tu LinkedIn
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-card rounded-full flex items-center justify-center border border-accent-blue/20 hover:border-accent-blue hover:bg-accent-blue/10 transition-all"
                            >
                                <Linkedin className="text-text-primary" size={24} />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Formulario */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-text-secondary text-sm mb-2">
                                {t('contact.form.name')} *
                            </label>
                            <input
                                id="name"
                                type="text"
                                {...register('name', { required: t('contact.form.nameRequired') })}
                                className="w-full px-4 py-3 bg-card border border-gray-700 rounded-lg focus:border-accent-blue focus:outline-none text-text-primary transition-colors"
                                placeholder={t('contact.form.namePlaceholder')}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-text-secondary text-sm mb-2">
                                {t('contact.form.email')} *
                            </label>
                            <input
                                id="email"
                                type="email"
                                {...register('email', {
                                    required: t('contact.form.emailRequired'),
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: t('contact.form.emailInvalid'),
                                    },
                                })}
                                className="w-full px-4 py-3 bg-card border border-gray-700 rounded-lg focus:border-accent-blue focus:outline-none text-text-primary transition-colors"
                                placeholder={t('contact.form.emailPlaceholder')}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-text-secondary text-sm mb-2">
                                {t('contact.form.subject')} *
                            </label>
                            <input
                                id="subject"
                                type="text"
                                {...register('subject', { required: t('contact.form.subjectRequired') })}
                                className="w-full px-4 py-3 bg-card border border-gray-700 rounded-lg focus:border-accent-blue focus:outline-none text-text-primary transition-colors"
                                placeholder={t('contact.form.subjectPlaceholder')}
                            />
                            {errors.subject && (
                                <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-text-secondary text-sm mb-2">
                                {t('contact.form.message')} *
                            </label>
                            <textarea
                                id="message"
                                rows="5"
                                {...register('message', { required: t('contact.form.messageRequired') })}
                                className="w-full px-4 py-3 bg-card border border-gray-700 rounded-lg focus:border-accent-blue focus:outline-none text-text-primary transition-colors resize-none"
                                placeholder={t('contact.form.messagePlaceholder')}
                            />
                            {errors.message && (
                                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                            )}
                        </div>

                        <Button
                            type="submit"
                            variant="cta"
                            className="w-full"
                            disabled={formStatus === 'loading'}
                        >
                            {formStatus === 'loading' ? (
                                <>
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                    {t('contact.form.sending')}
                                </>
                            ) : (
                                <>
                                    <Send size={20} />
                                    {t('contact.form.send')}
                                </>
                            )}
                        </Button>

                        {/* Success Message */}
                        {formStatus === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-2 p-4 bg-accent-green/10 border border-accent-green/50 rounded-lg text-accent-green"
                            >
                                <CheckCircle size={20} />
                                <p>{t('contact.form.success')}</p>
                            </motion.div>
                        )}

                        {/* Error Message */}
                        {formStatus === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-500"
                            >
                                <AlertCircle size={20} />
                                <p>{t('contact.form.error')}</p>
                            </motion.div>
                        )}
                    </form>
                </motion.div>
            </div>
        </Section>
    )
}

export default Contact
