import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon, Globe } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'
import { useLanguage } from '../contexts/LanguageContext'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [showLangMenu, setShowLangMenu] = useState(false)
    const { theme, toggleTheme } = useTheme()
    const { language, setLanguage, t } = useLanguage()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: t('navbar.home'), href: '#hero' },
        { name: t('navbar.about'), href: '#about' },
        { name: t('navbar.skills'), href: '#skills' },
        { name: t('navbar.projects'), href: '#projects' },
        { name: t('navbar.experience'), href: '#experience' },
        { name: t('navbar.certifications'), href: '#certifications' },
        { name: t('navbar.contact'), href: '#contact' },
    ]

    const languages = [
        { code: 'es', name: 'Español', flag: '🇪🇸' },
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'pt', name: 'Português', flag: '🇧🇷' },
    ]

    const currentLang = languages.find(lang => lang.code === language)

    const handleLinkClick = () => {
        setIsOpen(false)
    }

    const handleLanguageChange = (langCode) => {
        setLanguage(langCode)
        setShowLangMenu(false)
    }

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-150 ${scrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.a
                        href="#hero"
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img
                            src="/foto mia.jpg"
                            alt="José Caballero G."
                            className="w-10 h-10 rounded-full object-cover border-2 border-accent-blue shadow-lg hover:scale-110 transition-transform duration-150"
                        />
                        <span className="text-xl font-bold bg-gradient-to-r from-accent-blue to-accent-green bg-clip-text text-transparent hidden sm:block">
                            José Caballero
                        </span>
                    </motion.a>
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                className="text-text-secondary hover:text-accent-blue transition-colors duration-150"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {link.name}
                            </motion.a>
                        ))}

                        {/* Language Selector */}
                        <div className="relative">
                            <motion.button
                                onClick={() => setShowLangMenu(!showLangMenu)}
                                className="p-2 rounded-lg bg-card border border-gray-800 hover:border-accent-blue transition-all hover:scale-110 flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                title="Change Language"
                            >
                                <Globe className="text-accent-blue" size={20} />
                                <span className="text-sm font-semibold text-text-primary">{currentLang?.flag}</span>
                            </motion.button>

                            <AnimatePresence>
                                {showLangMenu && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute right-0 mt-2 w-48 bg-card border border-gray-800 rounded-lg shadow-xl overflow-hidden z-50"
                                    >
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => handleLanguageChange(lang.code)}
                                                className={`w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-accent-blue/10 transition-colors ${language === lang.code ? 'bg-accent-blue/20 text-accent-blue' : 'text-text-secondary'
                                                    }`}
                                            >
                                                <span className="text-xl">{lang.flag}</span>
                                                <span className="font-medium">{lang.name}</span>
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Theme Toggle Button */}
                        <motion.button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-card border border-gray-800 hover:border-accent-blue transition-all hover:scale-110"
                            whileHover={{ rotate: 180 }}
                            transition={{ duration: 0.3 }}
                            title={theme === 'dark' ? t('navbar.lightMode') : t('navbar.darkMode')}
                        >
                            {theme === 'dark' ? (
                                <Sun className="text-accent-orange" size={20} />
                            ) : (
                                <Moon className="text-accent-blue" size={20} />
                            )}
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-text-primary hover:text-accent-blue transition-colors"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-card/95 backdrop-blur-md"
                    >
                        <div className="px-6 py-4 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={handleLinkClick}
                                    className="block text-text-secondary hover:text-accent-blue transition-colors duration-150"
                                >
                                    {link.name}
                                </a>
                            ))}

                            {/* Mobile Language Selector */}
                            <div className="pt-4 border-t border-gray-700">
                                <p className="text-text-secondary text-sm mb-2">Language / Idioma</p>
                                <div className="grid grid-cols-2 gap-2">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                handleLanguageChange(lang.code)
                                                setIsOpen(false)
                                            }}
                                            className={`px-3 py-2 rounded-lg text-left flex items-center gap-2 transition-colors ${language === lang.code
                                                ? 'bg-accent-blue/20 text-accent-blue border border-accent-blue'
                                                : 'bg-background text-text-secondary border border-gray-700 hover:border-accent-blue'
                                                }`}
                                        >
                                            <span>{lang.flag}</span>
                                            <span className="text-sm">{lang.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
