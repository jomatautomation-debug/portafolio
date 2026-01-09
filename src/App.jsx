import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import FAQ from './components/FAQ'
import Contact from './components/Contact'

function App() {
    useEffect(() => {
        // Create floating particles
        const particlesContainer = document.createElement('div')
        particlesContainer.className = 'particles'
        document.body.appendChild(particlesContainer)

        // Generate 50 particles
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div')
            particle.className = 'particle'
            particle.style.left = `${Math.random() * 100}%`
            particle.style.animationDelay = `${Math.random() * 20}s`
            particle.style.animationDuration = `${15 + Math.random() * 10}s`

            // Random colors
            const colors = ['rgba(59, 130, 246, 0.5)', 'rgba(34, 197, 94, 0.5)', 'rgba(245, 158, 11, 0.5)']
            particle.style.background = colors[Math.floor(Math.random() * colors.length)]

            particlesContainer.appendChild(particle)
        }

        return () => {
            if (particlesContainer.parentNode) {
                particlesContainer.parentNode.removeChild(particlesContainer)
            }
        }
    }, [])

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Certifications />
                <FAQ />
                <Contact />
            </main>
            <footer className="bg-card py-6 text-center text-text-secondary text-sm border-t border-accent-blue/20">
                <p>&copy; {new Date().getFullYear()} José Caballero G. Todos los derechos reservados.</p>
            </footer>
        </div>
    )
}

export default App
