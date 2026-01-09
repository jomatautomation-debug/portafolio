import { motion } from 'framer-motion'

const Button = ({ children, variant = 'primary', onClick, href, className = '' }) => {
    const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-150 inline-flex items-center gap-2'

    const variants = {
        primary: 'bg-accent-blue hover:bg-blue-600 text-white shadow-lg hover:shadow-xl hover:scale-105',
        secondary: 'border-2 border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white',
        cta: 'bg-accent-orange hover:bg-orange-600 text-white shadow-lg hover:shadow-xl hover:scale-105',
    }

    const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`

    if (href) {
        return (
            <motion.a
                href={href}
                className={buttonClasses}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {children}
            </motion.a>
        )
    }

    return (
        <motion.button
            onClick={onClick}
            className={buttonClasses}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </motion.button>
    )
}

export default Button
