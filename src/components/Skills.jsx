import { motion } from 'framer-motion'
import Section from './ui/Section'

const SkillCard = ({ skill }) => (
    <motion.div
        className={`flex-shrink-0 px-6 py-4 bg-card/50 dark:bg-card/50 bg-white/50 backdrop-blur-sm rounded-xl border border-${skill.color}/30 hover:border-${skill.color} transition-all duration-300 group cursor-default relative overflow-hidden`}
        whileHover={{
            scale: 1.05,
            y: -5,
            boxShadow: `0 10px 30px -10px var(--${skill.color})` // Dynamic shadow based on color
        }}
    >
        {/* Hover Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-br from-${skill.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

        <span className="text-text-primary font-semibold text-lg relative z-10 mx-2">
            {skill.name}
        </span>
    </motion.div>
)

const Skills = () => {
    const skills = [
        // Row 1
        { name: 'Node.js', color: 'accent-green' },
        { name: 'React', color: 'accent-blue' },
        { name: 'Python', color: 'accent-blue' },
        { name: 'n8n', color: 'accent-green' },
        { name: 'TypeScript', color: 'accent-blue' },
        { name: 'MongoDB', color: 'accent-green' },
        { name: 'PostgreSQL', color: 'accent-blue' },
        { name: 'Docker', color: 'accent-blue' },
        // Row 2
        { name: 'JavaScript', color: 'accent-orange' },
        { name: 'Tailwind CSS', color: 'accent-blue' },
        { name: 'Make', color: 'accent-blue' },
        { name: 'Git', color: 'accent-orange' },
        { name: 'AWS', color: 'accent-green' },
        { name: 'Express', color: 'accent-green' },
        { name: 'Next.js', color: 'accent-blue' },
        { name: 'Zapier', color: 'accent-orange' }
    ]

    // Split skills into rows for the effect
    const row1 = skills.slice(0, 8)
    const row2 = skills.slice(8, 16)

    // Duplicating for seamless loop
    const duplicatedRow1 = [...row1, ...row1, ...row1]
    const duplicatedRow2 = [...row2, ...row2, ...row2]

    return (
        <Section id="skills" className="overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-accent-blue to-accent-green bg-clip-text text-transparent">
                        Habilidades Técnicas
                    </span>
                </h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                    Tecnologías que utilizo para construir soluciones
                </p>
            </motion.div>

            <div className="flex flex-col gap-8 relative z-10 w-full mb-12">
                {/* Row 1 - Moving Right */}
                <div className="relative flex overflow-hidden">
                    <div className="flex gap-6 animate-scroll-normal items-center">
                        {duplicatedRow1.map((skill, idx) => (
                            <SkillCard key={`r1-${idx}`} skill={skill} />
                        ))}
                    </div>
                </div>

                {/* Row 2 - Moving Left */}
                <div className="relative flex overflow-hidden">
                    <div className="flex gap-6 animate-scroll-reverse items-center">
                        {duplicatedRow2.map((skill, idx) => (
                            <SkillCard key={`r2-${idx}`} skill={skill} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

        </Section>
    )
}

export default Skills
