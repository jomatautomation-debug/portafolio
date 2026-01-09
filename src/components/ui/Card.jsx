import { motion } from 'framer-motion'

const Card = ({ children, className = '', delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={`bg-card p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-150 border border-gray-800 hover:border-accent-blue/50 ${className}`}
        >
            {children}
        </motion.div>
    )
}

export default Card
