import { motion } from 'framer-motion'
import { useState } from 'react'
import { FileText, ChevronDown, ChevronUp } from 'lucide-react'
import Section from './ui/Section'
import ProjectModal from './ProjectModal'

const Projects = () => {
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

    const projects = [
        {
            title: 'Sistema de Automatización para Recursos Humanos',
            description: 'Plataforma integral de automatización para el departamento de RR.HH. con gestión de nómina, control de asistencia y evaluaciones de desempeño',
            stack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
            achievements: ['Automatización de nómina', 'Control biométrico', 'Reportes en tiempo real', 'Reducción 70% tiempo administrativo'],
            duration: '6 meses',
            team: '2 desarrolladores',
            role: 'Full Stack Developer & Team Lead',
            status: 'Completado - En producción',
            collaborators: [
                {
                    name: 'José Caballero G.',
                    role: 'Full Stack Developer & Team Lead',
                    responsibilities: 'Arquitectura del sistema, desarrollo backend, integración de APIs, gestión del proyecto'
                },
                {
                    name: 'Camilo Zapata',
                    role: 'Frontend Developer',
                    responsibilities: 'Desarrollo de interfaces, diseño UX/UI, implementación de dashboards interactivos'
                }
            ],
            architecture: 'Arquitectura de microservicios con API RESTful, autenticación JWT, y sistema de caché con Redis para optimización de consultas',
            database: 'PostgreSQL con replicación maestro-esclavo para alta disponibilidad',
            features: [
                'Gestión automatizada de nómina con cálculo de impuestos',
                'Control de asistencia con integración biométrica',
                'Sistema de evaluaciones de desempeño 360°',
                'Generación automática de contratos y documentos',
                'Dashboard ejecutivo con métricas en tiempo real',
                'Módulo de reclutamiento y selección',
                'Gestión de vacaciones y permisos',
                'Reportes personalizables y exportables',
                'Sistema de notificaciones por email y SMS',
                'Portal de autoservicio para empleados'
            ],
            challenges: [
                {
                    challenge: 'Integración con sistema biométrico legacy',
                    solution: 'Desarrollo de middleware personalizado para traducir protocolos propietarios a API REST moderna'
                },
                {
                    challenge: 'Cálculos complejos de nómina con múltiples variables',
                    solution: 'Implementación de motor de reglas configurable con validación en múltiples capas'
                },
                {
                    challenge: 'Rendimiento con grandes volúmenes de datos',
                    solution: 'Implementación de sistema de caché con Redis y optimización de queries con índices compuestos'
                }
            ],
            results: [
                'Reducción del 70% en tiempo de procesamiento de nómina',
                'Eliminación del 95% de errores en cálculos manuales',
                'Ahorro de 40 horas/mes en tareas administrativas',
                'Mejora del 85% en satisfacción de empleados',
                'ROI positivo en 8 meses de implementación'
            ]
        },
        {
            title: 'Sistema de Automatización para Barbería',
            description: 'Sistema completo de gestión y automatización para barbería con reservas online, recordatorios automáticos y gestión de clientes',
            stack: ['React', 'Node.js', 'MongoDB', 'WhatsApp API'],
            achievements: ['Reservas automáticas 24/7', 'Recordatorios por WhatsApp', 'Gestión de inventario', 'Dashboard de métricas'],
            duration: '3 meses',
            team: '1 desarrollador',
            role: 'Full Stack Developer',
            status: 'Completado',
            collaborators: [
                {
                    name: 'José Caballero G.',
                    role: 'Full Stack Developer',
                    responsibilities: 'Desarrollo completo del sistema, integración con WhatsApp Business API'
                }
            ],
            architecture: 'Aplicación monolítica con separación clara de capas (presentación, lógica de negocio, datos)',
            database: 'MongoDB con esquemas optimizados para consultas frecuentes de disponibilidad',
            features: [
                'Sistema de reservas online con calendario interactivo',
                'Envío automático de recordatorios por WhatsApp',
                'Gestión de clientes con historial de servicios',
                'Control de inventario de productos',
                'Dashboard con métricas de negocio',
                'Sistema de fidelización de clientes',
                'Reportes de ventas y servicios',
                'Gestión de múltiples barberos'
            ],
            challenges: [
                {
                    challenge: 'Sincronización en tiempo real de disponibilidad',
                    solution: 'Implementación de WebSockets para actualización instantánea del calendario'
                },
                {
                    challenge: 'Integración con WhatsApp Business API',
                    solution: 'Desarrollo de servicio de mensajería con cola de prioridad y reintentos automáticos'
                }
            ],
            results: [
                'Aumento del 45% en reservas mensuales',
                'Reducción del 80% en no-shows gracias a recordatorios',
                'Mejora del 60% en gestión de inventario',
                'Ahorro de 15 horas/semana en gestión administrativa'
            ]
        },
        {
            title: 'Página Web para Óptica Premium',
            description: 'Sitio web moderno para óptica con catálogo de productos, prueba virtual de lentes y sistema de citas online',
            stack: ['React', 'Tailwind CSS', 'Firebase', 'AR.js'],
            achievements: ['Catálogo interactivo', 'Prueba virtual de lentes', 'Sistema de citas', 'Diseño responsive'],
            duration: '2 meses',
            team: '1 desarrollador',
            role: 'Frontend Developer',
            status: 'Completado',
            collaborators: [
                {
                    name: 'José Caballero G.',
                    role: 'Frontend Developer',
                    responsibilities: 'Desarrollo frontend, implementación de realidad aumentada, diseño responsive'
                }
            ],
            architecture: 'Single Page Application (SPA) con Firebase como backend-as-a-service',
            database: 'Firebase Firestore para almacenamiento en tiempo real',
            features: [
                'Catálogo de productos con filtros avanzados',
                'Prueba virtual de lentes usando cámara web',
                'Sistema de citas online con Google Calendar',
                'Carrito de compras con cotización',
                'Blog de salud visual',
                'Galería de clientes satisfechos',
                'Formulario de contacto integrado',
                'Optimización SEO'
            ],
            challenges: [
                {
                    challenge: 'Implementación de prueba virtual precisa',
                    solution: 'Uso de AR.js con detección facial y ajuste automático de escala'
                }
            ],
            results: [
                'Aumento del 120% en consultas online',
                'Reducción del 50% en tiempo de atención presencial',
                'Mejora del 90% en experiencia de usuario'
            ]
        },
        {
            title: 'E-commerce de Zapatería',
            description: 'Tienda online completa para zapatería con carrito de compras, pasarela de pagos y gestión de inventario en tiempo real',
            stack: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
            achievements: ['Carrito de compras', 'Pagos seguros', 'Gestión de stock', 'Panel administrativo'],
            duration: '4 meses',
            team: '1 desarrollador',
            role: 'Full Stack Developer',
            status: 'Completado - En producción',
            collaborators: [
                {
                    name: 'José Caballero G.',
                    role: 'Full Stack Developer',
                    responsibilities: 'Desarrollo completo, integración de pagos, optimización de rendimiento'
                }
            ],
            architecture: 'Next.js con Server-Side Rendering (SSR) para mejor SEO y rendimiento',
            database: 'PostgreSQL con índices optimizados para búsquedas de productos',
            features: [
                'Catálogo de productos con búsqueda avanzada',
                'Carrito de compras persistente',
                'Integración con Stripe para pagos seguros',
                'Sistema de envíos con tracking',
                'Panel administrativo completo',
                'Gestión de inventario en tiempo real',
                'Sistema de descuentos y cupones',
                'Reseñas y calificaciones de productos',
                'Wishlist y comparador de productos',
                'Notificaciones de stock'
            ],
            challenges: [
                {
                    challenge: 'Sincronización de inventario en tiempo real',
                    solution: 'Implementación de sistema de eventos con actualización optimista y reconciliación'
                },
                {
                    challenge: 'Optimización de imágenes de productos',
                    solution: 'Uso de Next.js Image Optimization con lazy loading y formatos modernos (WebP)'
                }
            ],
            results: [
                'Ventas online aumentaron 200% en 3 meses',
                'Tiempo de carga reducido a menos de 2 segundos',
                'Tasa de conversión del 3.5%',
                'Reducción del 60% en consultas de stock'
            ]
        },
        {
            title: 'Landing Page para Restaurante',
            description: 'Página web atractiva para restaurante con menú digital, reservas online y integración con redes sociales',
            stack: ['React', 'Tailwind CSS', 'Google Maps API', 'EmailJS'],
            achievements: ['Menú digital interactivo', 'Sistema de reservas', 'Galería de fotos', 'Formulario de contacto'],
            duration: '1 mes',
            team: '1 desarrollador',
            role: 'Frontend Developer',
            status: 'Completado',
            collaborators: [
                {
                    name: 'José Caballero G.',
                    role: 'Frontend Developer',
                    responsibilities: 'Diseño y desarrollo frontend, optimización de imágenes, integración de APIs'
                }
            ],
            architecture: 'Static Site Generation con optimización de assets',
            database: 'No requiere base de datos - contenido estático',
            features: [
                'Menú digital con categorías y filtros',
                'Galería de fotos profesional',
                'Sistema de reservas integrado',
                'Mapa interactivo con ubicación',
                'Integración con redes sociales',
                'Formulario de contacto funcional',
                'Diseño responsive y moderno',
                'Optimización SEO local'
            ],
            results: [
                'Aumento del 80% en reservas online',
                'Mejora del 95% en presencia digital',
                'Reducción del 40% en llamadas telefónicas'
            ]
        },
        {
            title: 'Sistema de Gestión para Gimnasio',
            description: 'Plataforma completa para gestión de gimnasio con control de membresías, clases y rutinas personalizadas',
            stack: ['React', 'Node.js', 'MySQL', 'Chart.js'],
            achievements: ['Control de membresías', 'Calendario de clases', 'Rutinas personalizadas', 'Reportes de progreso'],
            duration: '5 meses',
            team: '1 desarrollador',
            role: 'Full Stack Developer',
            status: 'Completado - En producción',
            collaborators: [
                {
                    name: 'José Caballero G.',
                    role: 'Full Stack Developer',
                    responsibilities: 'Arquitectura del sistema, desarrollo full stack, implementación de métricas'
                }
            ],
            architecture: 'API RESTful con autenticación basada en roles',
            database: 'MySQL con normalización 3NF para integridad de datos',
            features: [
                'Gestión de membresías y pagos',
                'Control de acceso con tarjetas RFID',
                'Calendario de clases grupales',
                'Rutinas personalizadas por entrenador',
                'Seguimiento de progreso con gráficas',
                'Sistema de reservas de clases',
                'Dashboard para entrenadores',
                'App móvil para miembros',
                'Reportes financieros',
                'Sistema de notificaciones'
            ],
            challenges: [
                {
                    challenge: 'Gestión de capacidad de clases en tiempo real',
                    solution: 'Sistema de reservas con bloqueo optimista y lista de espera automática'
                },
                {
                    challenge: 'Seguimiento preciso de progreso físico',
                    solution: 'Implementación de algoritmos de análisis de datos con visualización interactiva'
                }
            ],
            results: [
                'Reducción del 85% en tiempo de check-in',
                'Aumento del 40% en asistencia a clases',
                'Mejora del 75% en retención de miembros',
                'Ahorro de 25 horas/semana en administración'
            ]
        },
        {
            title: 'Portal Web para Inmobiliaria',
            description: 'Sitio web profesional para inmobiliaria con búsqueda avanzada de propiedades, tours virtuales y sistema de contacto',
            stack: ['React', 'Google Maps API', 'Firebase', 'Tailwind CSS'],
            achievements: ['Búsqueda avanzada', 'Tours virtuales 360°', 'Filtros inteligentes', 'Sistema de favoritos'],
            duration: '3 meses',
            team: '1 desarrollador',
            role: 'Full Stack Developer',
            status: 'Completado',
            collaborators: [
                {
                    name: 'José Caballero G.',
                    role: 'Full Stack Developer',
                    responsibilities: 'Desarrollo completo, integración de mapas, implementación de tours virtuales'
                }
            ],
            architecture: 'Progressive Web App (PWA) con capacidades offline',
            database: 'Firebase Firestore con índices compuestos para búsquedas complejas',
            features: [
                'Búsqueda avanzada con múltiples filtros',
                'Tours virtuales 360° de propiedades',
                'Mapa interactivo con propiedades',
                'Sistema de favoritos y comparación',
                'Calculadora de hipoteca',
                'Formulario de contacto por propiedad',
                'Panel administrativo para agentes',
                'Notificaciones de nuevas propiedades',
                'Integración con redes sociales',
                'Optimización SEO por propiedad'
            ],
            challenges: [
                {
                    challenge: 'Carga rápida de tours virtuales 360°',
                    solution: 'Implementación de lazy loading progresivo con precarga inteligente'
                },
                {
                    challenge: 'Búsqueda eficiente con múltiples criterios',
                    solution: 'Uso de índices compuestos en Firestore y caché de resultados frecuentes'
                }
            ],
            results: [
                'Aumento del 150% en consultas de propiedades',
                'Reducción del 60% en visitas presenciales innecesarias',
                'Mejora del 90% en experiencia de búsqueda',
                'Incremento del 70% en cierre de ventas'
            ]
        },
    ]

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
                            Proyectos
                        </span>
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        Algunos de los proyectos en los que he trabajado, demostrando mis habilidades en desarrollo y automatización
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
                                    <p className="text-xs text-text-secondary mb-2 font-semibold">Stack:</p>
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
                                    <p className="text-xs text-text-secondary mb-2 font-semibold">Logros:</p>
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
                                    Ver Documentación
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
                                    Ver Menos
                                </>
                            ) : (
                                <>
                                    <ChevronDown size={20} />
                                    Ver Más Proyectos
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
