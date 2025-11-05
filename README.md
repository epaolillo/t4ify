# T4ify 🦠

![T4ify Banner](https://img.shields.io/badge/T4ify-Go%20Viral%20%26%20Monetize-00d4ff?style=for-the-badge)

> **Viraliza. Monetiza. Crece.**

T4ify es una plataforma innovadora que permite a creadores de contenido hacerse virales y monetizar a través de videos especiales embebibles llamados "T4s". Inspirado en la estructura del bacteriófago T4, el diseño combina ciencia y tecnología con una estética moderna y divertida.

## ✨ Características Principales

- 🎬 **Videos Embebibles**: Snippets web compartibles en redes sociales, WhatsApp y como anuncios
- 🔐 **Login Social**: Google, Facebook, Apple y Email
- 💳 **Pagos Integrados**: Stripe, Google Pay y Apple Pay
- 🎁 **Sistema de Referencias**: 10% de descuento por cada contacto recomendado (hasta 30%)
- 💰 **Precios Accesibles**: Menos de 2 USD por T4
- 🌍 **Multilenguaje**: Soporte completo para Español e Inglés

## 🛠️ Tecnologías Utilizadas

- **React 18** - Framework principal
- **Vite** - Build tool y dev server ultra rápido
- **i18next** - Internacionalización (ES/EN)
- **CSS3** - Estilos modernos con gradientes y animaciones
- **SVG** - Gráficos vectoriales para bacteriófagos

## 📦 Instalación

### Prerequisitos

- Node.js 18+ 
- npm o yarn

### Pasos

1. **Clonar el repositorio**

```bash
git clone <repository-url>
cd t4ify
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Ejecutar el proyecto en modo desarrollo**

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 🚀 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview de la build
npm run preview
```

## 🎨 Estructura del Proyecto

```
t4ify/
├── src/
│   ├── components/          # Componentes React
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   ├── i18n/               # Configuración de internacionalización
│   │   ├── config.js
│   │   └── locales/
│   │       ├── en.json
│   │       └── es.json
│   ├── App.jsx             # Componente principal
│   ├── App.css             # Estilos globales
│   ├── main.jsx            # Entry point
│   └── index.css           # Reset y variables CSS
├── public/                 # Assets estáticos
├── index.html             # HTML principal
├── vite.config.js         # Configuración de Vite
└── package.json           # Dependencias
```

## 🌐 Internacionalización

La aplicación soporta cambio dinámico de idiomas entre Español e Inglés. Los textos se encuentran en:

- `src/i18n/locales/es.json` - Traducciones en español
- `src/i18n/locales/en.json` - Traducciones en inglés

Para agregar un nuevo texto:

1. Añade la clave en ambos archivos JSON
2. Usa `t('clave')` en tu componente con el hook `useTranslation()`

## 🎨 Tema y Diseño

El diseño está inspirado en **Vimeo** con una estética limpia y minimalista, incorporando elementos visuales del **Bacteriófago T4**. Los elementos visuales incluyen:

- Colores principales: Azul Vimeo (`#1ab7ea`), tonos complementarios suaves
- Tipografía: Inter (sistema completo) con weights variables
- Fondo claro y limpio con sombras sutiles
- SVG personalizados de bacteriófagos con colores suaves
- Animaciones minimalistas y transiciones suaves

## 📱 Responsive Design

La aplicación es completamente responsive y se adapta a:

- 📱 Móviles (< 768px)
- 💻 Tablets (768px - 1024px)
- 🖥️ Desktop (> 1024px)

## 🔧 Configuración de Vite

El proyecto utiliza Vite para un desarrollo rápido. Configuración en `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
})
```

## 📄 Licencia

Todos los derechos reservados © 2025 T4ify

## 🤝 Contribuir

¿Quieres contribuir? ¡Genial! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📧 Contacto

Para más información sobre T4ify, visita [t4ify.com](https://t4ify.com)

---

**Desarrollado con 💙 por el equipo de T4ify**

