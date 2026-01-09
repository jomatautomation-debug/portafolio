import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, Users, Code, CheckCircle, FileText } from 'lucide-react'

const ProjectModal = ({ project, isOpen, onClose }) => {
    if (!isOpen || !project) return null

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="bg-gradient-to-br from-card to-card/50 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-800 shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="sticky top-0 bg-card/95 backdrop-blur-lg border-b border-gray-800 p-6 flex items-start justify-between z-10">
                        <div>
                            <h2 className="text-3xl font-bold text-accent-blue mb-2">{project.title}</h2>
                            <p className="text-text-secondary">{project.description}</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/10 rounded-lg transition-all"
                        >
                            <X className="text-text-secondary hover:text-white" size={24} />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-8">
                        {/* Project Info */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Calendar className="text-accent-blue" size={20} />
                                    <div>
                                        <p className="text-xs text-text-secondary">Duración</p>
                                        <p className="text-white font-semibold">{project.duration}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Users className="text-accent-green" size={20} />
                                    <div>
                                        <p className="text-xs text-text-secondary">Equipo</p>
                                        <p className="text-white font-semibold">{project.team}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Code className="text-accent-blue" size={20} />
                                    <div>
                                        <p className="text-xs text-text-secondary">Rol</p>
                                        <p className="text-white font-semibold">{project.role}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="text-accent-green" size={20} />
                                    <div>
                                        <p className="text-xs text-text-secondary">Estado</p>
                                        <p className="text-white font-semibold">{project.status}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Collaborators */}
                        {project.collaborators && (
                            <div>
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <Users className="text-accent-blue" size={20} />
                                    Equipo de Desarrollo
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {project.collaborators.map((collab, idx) => (
                                        <div key={idx} className="bg-background/50 p-4 rounded-lg border border-gray-800">
                                            <p className="font-semibold text-white">{collab.name}</p>
                                            <p className="text-sm text-accent-blue">{collab.role}</p>
                                            {collab.responsibilities && (
                                                <p className="text-xs text-text-secondary mt-2">{collab.responsibilities}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Technical Details */}
                        <div>
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <Code className="text-accent-blue" size={20} />
                                Detalles Técnicos
                            </h3>
                            <div className="bg-background/50 p-6 rounded-lg border border-gray-800 space-y-4">
                                <div>
                                    <p className="text-sm font-semibold text-accent-blue mb-2">Stack Tecnológico</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.stack.map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-card text-accent-green text-xs rounded-full border border-accent-green/30">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                {project.architecture && (
                                    <div>
                                        <p className="text-sm font-semibold text-accent-blue mb-2">Arquitectura</p>
                                        <p className="text-sm text-text-secondary">{project.architecture}</p>
                                    </div>
                                )}
                                {project.database && (
                                    <div>
                                        <p className="text-sm font-semibold text-accent-blue mb-2">Base de Datos</p>
                                        <p className="text-sm text-text-secondary">{project.database}</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Features */}
                        <div>
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <FileText className="text-accent-blue" size={20} />
                                Características Principales
                            </h3>
                            <div className="grid md:grid-cols-2 gap-3">
                                {project.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-2 bg-background/30 p-3 rounded-lg">
                                        <CheckCircle className="text-accent-green mt-0.5 flex-shrink-0" size={16} />
                                        <p className="text-sm text-text-secondary">{feature}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Challenges & Solutions */}
                        {project.challenges && (
                            <div>
                                <h3 className="text-xl font-bold text-white mb-4">Desafíos y Soluciones</h3>
                                <div className="space-y-4">
                                    {project.challenges.map((challenge, idx) => (
                                        <div key={idx} className="bg-background/50 p-4 rounded-lg border border-gray-800">
                                            <p className="font-semibold text-accent-blue mb-2">{challenge.challenge}</p>
                                            <p className="text-sm text-text-secondary">{challenge.solution}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Results */}
                        {project.results && (
                            <div>
                                <h3 className="text-xl font-bold text-white mb-4">Resultados</h3>
                                <div className="bg-gradient-to-r from-accent-blue/10 to-accent-green/10 p-6 rounded-lg border border-accent-blue/30">
                                    <ul className="space-y-2">
                                        {project.results.map((result, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <span className="text-accent-green">✓</span>
                                                <p className="text-sm text-white">{result}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default ProjectModal
