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
            { name: 'Node.js', level: 85, color: 'accent-green' },
            { name: 'Python', level: 70, color: 'accent-blue' },
            { name: 'PostgreSQL', level: 80, color: 'accent-blue' },
            { name: 'MongoDB', level: 75, color: 'accent-green' },
            { name: 'REST APIs', level: 90, color: 'accent-blue' },
            { name: 'Express.js', level: 80, color: 'accent-green' }
        ],
        frontend: [
            { name: 'React', level: 85, color: 'accent-blue' },
            { name: 'JavaScript', level: 90, color: 'accent-orange' },
            { name: 'Tailwind CSS', level: 85, color: 'accent-blue' },
            { name: 'HTML/CSS', level: 90, color: 'accent-orange' },
            { name: 'Vite', level: 75, color: 'accent-green' },
            { name: 'Framer Motion', level: 70, color: 'accent-blue' }
        ],
        automation: [
            { name: 'n8n', level: 90, color: 'accent-green' },
            { name: 'Make (Integromat)', level: 85, color: 'accent-blue' },
            { name: 'Zapier', level: 80, color: 'accent-orange' },
            { name: 'Webhooks', level: 90, color: 'accent-green' },
            { name: 'API Integration', level: 90, color: 'accent-blue' },
            { name: 'Workflow Design', level: 85, color: 'accent-green' }
        ],
        tools: [
            { name: 'Git/GitHub', level: 85, color: 'accent-orange' },
            { name: 'Docker', level: 70, color: 'accent-blue' },
            { name: 'Postman', level: 85, color: 'accent-orange' },
            { name: 'VS Code', level: 90, color: 'accent-blue' },
            { name: 'AWS (básico)', level: 65, color: 'accent-green' },
            { name: 'Vercel/Netlify', level: 80, color: 'accent-blue' }
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

                {/* Skills Grid */}
                <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
                >
                    {currentSkills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-card p-6 rounded-lg border border-gray-800 hover:border-accent-blue/50 transition-all"
                        >
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-white font-semibold">{skill.name}</span>
                                <span className="text-accent-blue font-bold">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-background rounded-full h-3 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1, delay: index * 0.1 }}
                                    className={`h-full bg-gradient-to-r from-accent-blue to-accent-green rounded-full`}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </Section>
    )
}

export default Skills
