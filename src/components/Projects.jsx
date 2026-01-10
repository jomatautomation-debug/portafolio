import { motion } from 'framer-motion'
import { useState } from 'react'
import { FileText, ChevronDown, ChevronUp } from 'lucide-react'
import Section from './ui/Section'
import ProjectModal from './ProjectModal'
import { useLanguage } from '../contexts/LanguageContext'

const Projects = () => {
    const { t } = useLanguage()
    const [selectedProject, setSelectedProject] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [showAll, setShowAll] = useState(false)

    const openProjectDetails = (project) => {
        setSelectedProject(project)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setTimeout(() => setSelectedProject(null), 300)
    }

    const projects = t('projects.list')

    return (
        <>
            <Section id="projects" className="bg-card/30">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-accent-blue to-accent-green bg-clip-text text-transparent">
                            {t('projects.title')}
                        </span>
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        {t('projects.subtitle')}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {(showAll ? projects : projects.slice(0, 3)).map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50, rotateX: -15 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.3,
                                delay: index * 0.08,
                                type: "spring",
                                stiffness: 200
                            }}
                            whileHover={{
                                y: -15,
                                rotateY: 2,
                                scale: 1.02,
                                transition: { duration: 0.15 }
                            }}
                            className="bg-gradient-to-br from-card to-card/50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-150 border border-gray-800 hover:border-accent-blue/50 backdrop-blur-sm relative overflow-hidden group"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            {/* Animated gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-transparent to-accent-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <motion.h3
                                    className="text-xl font-bold mb-3 text-accent-blue"
                                    whileHover={{ x: 5 }}
                                >
                                    {project.title}
                                </motion.h3>
                                <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mb-4">
                                    <p className="text-xs text-text-secondary mb-2 font-semibold">{t('projects.labels.stack')}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.stack.map((tech) => (
                                            <motion.span
                                                key={tech}
                                                whileHover={{ scale: 1.1, y: -2 }}
                                                className="px-3 py-1 bg-background text-accent-blue text-xs rounded-full border border-accent-blue/30 hover:border-accent-blue/70 transition-all"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <p className="text-xs text-text-secondary mb-2 font-semibold">{t('projects.labels.achievements')}</p>
                                    <ul className="space-y-1">
                                        {project.achievements.map((achievement) => (
                                            <motion.li
                                                key={achievement}
                                                className="text-xs text-text-secondary flex items-start"
                                                whileHover={{ x: 5 }}
                                            >
                                                <span className="text-accent-green mr-2">✓</span>
                                                {achievement}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>

                                <button
                                    onClick={() => openProjectDetails(project)}
                                    className="w-full mt-4 bg-gradient-to-r from-accent-blue to-accent-green text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-accent-blue/50 transition-all duration-200 flex items-center justify-center gap-2"
                                >
                                    <FileText size={16} />
                                    {t('projects.viewDocs')}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Ver Más / Ver Menos Button */}
                {projects.length > 3 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex justify-center mt-12"
                    >
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="bg-gradient-to-r from-accent-blue to-accent-green text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-accent-blue/50 transition-all duration-200 flex items-center gap-2"
                        >
                            {showAll ? (
                                <>
                                    <ChevronUp size={20} />
                                    {t('projects.viewLess')}
                                </>
                            ) : (
                                <>
                                    <ChevronDown size={20} />
                                    {t('projects.viewMore')}
                                </>
                            )}
                        </button>
                    </motion.div>
                )}
            </Section>

            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </>
    )
}

export default Projects
