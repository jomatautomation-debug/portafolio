# Portafolio José Caballero G.

Portafolio web profesional de José Caballero G. - Desarrollador de Software Junior especializado en Automatización de Procesos.

## 🚀 Tecnologías

- **Frontend**: React 18
- **Build Tool**: Vite
- **Estilos**: TailwindCSS
- **Animaciones**: Framer Motion
- **Formularios**: React Hook Form
- **Iconos**: Lucide React

## 📋 Características

- ✅ Diseño responsive (mobile, tablet, desktop)
- ✅ Animaciones suaves con Framer Motion
- ✅ Formulario de contacto funcional
- ✅ Secciones: Hero, Sobre Mí, Habilidades, Proyectos, Experiencia, Certificaciones, Contacto
- ✅ SEO optimizado
- ✅ Performance optimizado

## 🛠️ Instalación

```bash
# Clonar el repositorio
git clone https://github.com/yourusername/portafolio-josecaballero.git

# Entrar al directorio
cd portafolio-josecaballero

# Instalar dependencias
npm install

# Copiar archivo de variables de entorno
cp .env.example .env
```

## ⚙️ Configuración

### 1. Formspree (Formulario de Contacto)

1. Ve a [Formspree](https://formspree.io/) y crea una cuenta gratuita
2. Crea un nuevo formulario
3. Copia el Form ID que te proporcionen
4. Abre el archivo `.env` y reemplaza:
   ```
   VITE_FORMSPREE_FORM_ID=tu_form_id_aqui
   ```

### 2. Links de Proyectos

Abre `src/components/Projects.jsx` y actualiza los siguientes placeholders:

```javascript
// Busca los comentarios TODO y reemplaza con tus URLs reales
demoUrl: 'https://your-demo-url.vercel.app', // TODO: Reemplazar
codeUrl: 'https://github.com/yourusername/proyecto', // TODO: Reemplazar
```

### 3. Redes Sociales

Abre `src/components/Contact.jsx` y actualiza:

```javascript
// GitHub
href="https://github.com/yourusername" // TODO: Reemplazar

// LinkedIn
href="https://linkedin.com/in/yourusername" // TODO: Reemplazar
```

### 4. Foto de Perfil

Reemplaza el archivo `public/foto mia.jpg` con tu foto profesional (mantén el mismo nombre o actualiza la ruta en `src/components/Hero.jsx`).

## 🚀 Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev

# El sitio estará disponible en http://localhost:5173
```

## 📦 Build para Producción

```bash
# Crear build de producción
npm run build

# Preview del build
npm run preview
```

## 🌐 Deploy en Vercel

### Opción 1: Deploy desde GitHub

1. Sube tu código a GitHub
2. Ve a [Vercel](https://vercel.com)
3. Importa tu repositorio
4. Configura las variables de entorno:
   - `VITE_FORMSPREE_FORM_ID`: Tu Form ID de Formspree
5. Deploy automático

### Opción 2: Deploy con Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy a producción
vercel --prod
```

**Importante**: No olvides configurar las variables de entorno en el dashboard de Vercel.

## 📝 Estructura del Proyecto

```
portafolio-josecaballero/
├── public/
│   └── foto mia.jpg          # Tu foto de perfil
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.jsx    # Componente de botón reutilizable
│   │   │   ├── Card.jsx      # Componente de tarjeta
│   │   │   └── Section.jsx   # Wrapper de sección
│   │   ├── Navbar.jsx        # Barra de navegación
│   │   ├── Hero.jsx          # Sección principal
│   │   ├── About.jsx         # Sobre mí
│   │   ├── Skills.jsx        # Habilidades
│   │   ├── Projects.jsx      # Proyectos
│   │   ├── Experience.jsx    # Experiencia laboral
│   │   ├── Certifications.jsx # Certificaciones
│   │   └── Contact.jsx       # Contacto y formulario
│   ├── App.jsx               # Componente principal
│   ├── main.jsx              # Punto de entrada
│   └── index.css             # Estilos globales
├── .env.example              # Ejemplo de variables de entorno
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Personalización

### Colores

Los colores están definidos en `tailwind.config.js`:

```javascript
colors: {
  background: '#0F172A',
  card: '#111827',
  'text-primary': '#E5E7EB',
  'text-secondary': '#94A3B8',
  'accent-blue': '#3B82F6',
  'accent-green': '#22C55E',
  'accent-orange': '#F59E0B',
}
```

### Contenido

Puedes editar el contenido directamente en cada componente:

- **Hero**: `src/components/Hero.jsx`
- **Sobre Mí**: `src/components/About.jsx`
- **Habilidades**: `src/components/Skills.jsx`
- **Proyectos**: `src/components/Projects.jsx`
- **Experiencia**: `src/components/Experience.jsx`
- **Certificaciones**: `src/components/Certifications.jsx`
- **Contacto**: `src/components/Contact.jsx`

## 📧 Contacto

- **Email**: josecaballerogonzalez49@gmail.com
- **Teléfono**: 304-666-1245
- **GitHub**: [Tu GitHub]
- **LinkedIn**: [Tu LinkedIn]

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

Desarrollado con ❤️ por José Caballero G.
