# 🏡 Aura Properties - Malnadu Coffee Estate

A modern, responsive website for Aura Properties showcasing the Malnadu Coffee Estate in Sakleshpur, Karnataka. Built with React, Vite, and Tailwind CSS featuring smooth animations and optimized performance.

## 🌟 Features

- **Modern Design**: Clean, professional design with coffee plantation theme
- **Smooth Animations**: Framer Motion powered scroll animations and micro-interactions
- **Optimized Images**: Progressive loading with fallbacks
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Components**: Gallery modal, testimonials, and inquiry forms
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Performance Focused**: Lazy loading and optimized asset delivery

## 🏗️ Built With

- **Frontend Framework**: React 19
- **Build Tool**: Vite 7.1.5
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router
- **Development**: ESLint, PostCSS

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/SanketsMane/Coffie-estate.git
cd Coffie-estate
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🚀 Deployment

### GitHub Pages (Automatic)

The project is configured for automatic deployment to GitHub Pages:

1. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch
   - Click Save

2. **Deploy manually**:
```bash
npm run deploy
```

3. **Live URL**: `https://sanketsmane.github.io/Coffie-estate/`

### Other Deployment Options

#### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
npm run build
# Upload the dist/ folder to Netlify
```

#### Manual Static Hosting
```bash
npm run build
# Upload contents of dist/ folder to your web server
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Hero.jsx        # Hero section with video background
│   ├── Features.jsx    # Estate features grid
│   ├── Gallery.jsx     # Image gallery with modal
│   ├── NearbyAttractions.jsx
│   ├── Transport.jsx   # Transportation info
│   ├── Testimonials.jsx
│   ├── Inquiry.jsx     # Contact form
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   └── VideoBackground.jsx # Video component
├── pages/              # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Estate.jsx
│   ├── Activities.jsx
│   └── Contact.jsx
├── assets/            # Static assets
│   └── aura-logo.png  # Aura Properties logo
├── App.jsx            # Main app component
├── main.jsx          # App entry point
└── index.css         # Global styles
```

## 🎨 Design Features

### Branding
- **Logo**: Aura Properties with house and plants design
- **Colors**: Green nature theme with slate footer
- **Typography**: Poppins font family for modern look

### Animations
- **Scroll Triggers**: Elements animate when entering viewport
- **Staggered Effects**: Sequential animations for grid items
- **Hover Interactions**: Micro-animations on user interaction
- **Video Background**: Compressed hero video for impact

### Components Overview
- **Hero Section**: Full-screen video background with animated text
- **Features Grid**: Coffee estate features with icons and animations
- **Gallery**: Interactive image gallery with coffee plantation photos
- **Estate Page**: Modern split-screen design showcasing property
- **Responsive Navbar**: Compact design with Aura Properties logo
- **Modern Footer**: Slate color scheme with company branding

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Perfect layout for tablets
- **Desktop Enhanced**: Rich desktop experience
- **Touch Friendly**: Optimized touch interactions

## ⚡ Performance Optimizations

- **Video Compression**: Hero video optimized from 195MB to 24.8MB
- **Code Splitting**: Vendor and animation libraries separated
- **Image Optimization**: WebP support with fallbacks
- **Bundle Analysis**: Optimized chunk sizes
- **Production Build**: Minified and optimized for deployment

## 🌐 SEO Features

- **Meta Tags**: Comprehensive meta tag setup
- **Semantic HTML**: Proper HTML5 structure
- **Favicon**: Aura Properties logo as browser tab icon
- **Schema Markup**: Structured data for search engines

## 📞 Contact Information

- **Phone**: +91 90356 09555
- **Email**: info@auraproperties.com
- **Location**: Sakleshpur, Karnataka

## �️ Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
npm run deploy   # Deploy to GitHub Pages
```

### Environment Setup

1. Copy `.env.example` to `.env.local` if needed
2. Configure any environment variables
3. Run `npm install` to install dependencies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## � License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Unsplash**: High-quality coffee plantation images
- **Lucide**: Beautiful icon library
- **Framer Motion**: Smooth animations
- **Tailwind CSS**: Utility-first CSS framework

---

**Made with ❤️ for Aura Properties**
