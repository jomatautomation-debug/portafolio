import { motion } from 'framer-motion'

const Section = ({ children, id, className = '' }) => {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className={`py-20 px-6 md:px-12 lg:px-24 ${className}`}
        >
            <div className="max-w-7xl mx-auto">
                {children}
            </div>
        </motion.section>
    )
}

export default Section
