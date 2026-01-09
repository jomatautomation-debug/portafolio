import { useState } from 'react'
import { motion } from 'framer-motion'
import { Server, Code, Zap, Wrench } from 'lucide-react'
import Section from './ui/Section'

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('backend')

    const categories = [
        { id: 'backend', name: 'Backend', icon: Server },
        { id: 'frontend', name: 'Frontend', icon: Code },
        { id: 'automation', name: 'Automatización', icon: Zap },
        { id: 'tools', name: 'Herramientas', icon: Wrench }
    ]

    const skillsByCategory = {
        backend: [
            { name: 'Node.js', color: 'accent-green' },
            { name: 'Python', color: 'accent-blue' },
            { name: 'PostgreSQL', color: 'accent-blue' },
            { name: 'MongoDB', color: 'accent-green' },
            { name: 'REST APIs', color: 'accent-blue' },
            { name: 'Express.js', color: 'accent-green' }
        ],
        frontend: [
            { name: 'React', color: 'accent-blue' },
            { name: 'JavaScript', color: 'accent-orange' },
            { name: 'Tailwind CSS', color: 'accent-blue' },
            { name: 'HTML/CSS', color: 'accent-orange' },
            { name: 'Vite', color: 'accent-green' },
            { name: 'Framer Motion', color: 'accent-blue' }
        ],
        automation: [
            { name: 'n8n', color: 'accent-green' },
            { name: 'Make (Integromat)', color: 'accent-blue' },
            { name: 'Zapier', color: 'accent-orange' },
            { name: 'Webhooks', color: 'accent-green' },
            { name: 'API Integration', color: 'accent-blue' },
            { name: 'Workflow Design', color: 'accent-green' }
        ],
        tools: [
            { name: 'Git/GitHub', color: 'accent-orange' },
            { name: 'Docker', color: 'accent-blue' },
            { name: 'Postman', color: 'accent-orange' },
            { name: 'VS Code', color: 'accent-blue' },
            { name: 'AWS (básico)', color: 'accent-green' },
            { name: 'Vercel/Netlify', color: 'accent-blue' }
        ]
    }

    const currentSkills = skillsByCategory[activeCategory]

    return (
        <Section id="skills">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-accent-blue to-accent-green bg-clip-text text-transparent">
                        Habilidades Técnicas
                    </span>
                </h2>
                <p className="text-text-secondary mb-12 max-w-2xl mx-auto">
                    Tecnologías y herramientas con las que trabajo para crear soluciones eficientes
                </p>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => {
                        const Icon = category.icon
                        return (
                            <motion.button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${activeCategory === category.id
                                        ? 'bg-gradient-to-r from-accent-blue to-accent-green text-white shadow-lg shadow-accent-blue/50'
                                        : 'bg-card text-text-secondary hover:bg-card/80 border border-gray-800'
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Icon size={20} />
                                {category.name}
                            </motion.button>
                        )
                    })}
                </div>

                {/* Skills Grid - Card Style */}
                <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
                >
                    {currentSkills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            whileHover={{
                                scale: 1.1,
                                y: -8,
                                boxShadow: '0 0 25px rgba(59, 130, 246, 0.6)',
                                transition: { duration: 0.2 }
                            }}
                            className={`px-6 py-4 bg-gradient-to-br from-card to-card/50 rounded-xl border-2 border-${skill.color}/50 hover:border-${skill.color} transition-all shadow-lg backdrop-blur-sm relative overflow-hidden group cursor-pointer`}
                        >
                            {/* Animated gradient overlay */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-accent-blue/20 via-accent-green/20 to-accent-orange/20 opacity-0 group-hover:opacity-100"
                                animate={{
                                    x: ['-100%', '100%']
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />

                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-accent-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

                            <span className="text-white font-semibold text-lg relative z-10">
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </Section>
    )
}

export default Skills
