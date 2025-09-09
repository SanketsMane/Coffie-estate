# Malnadu Coffee Estate Website

A modern, responsive website for Malnadu Coffee Estate built with React, Vite, and Tailwind CSS. This website showcases the beauty and features of a coffee sanctuary in the heart of Sakleshpur, Karnataka.

## 🌟 Features

### 📱 Pages
- **Home Page**: Hero section, estate features, gallery, nearby attractions, transport access, testimonials, and inquiry form
- **About Page**: Detailed information about the estate, values, and investment opportunities
- **Contact Page**: Contact form, location information, FAQ section, and contact details

### 🎨 Design Highlights
- Fully responsive design optimized for mobile, tablet, and desktop
- Earth-tone color scheme with coffee and nature-inspired themes
- Smooth animations and hover effects
- Modern gradient backgrounds and typography
- Interactive image gallery with modal view

### 🛠️ Technical Features
- React 19 with functional components and hooks
- React Router for seamless navigation
- Tailwind CSS for styling with custom color palette
- Lucide React for modern icons
- Vite for fast development and optimized builds
- SEO-friendly structure

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation component
│   ├── Footer.jsx          # Footer component
│   ├── Hero.jsx            # Hero section
│   ├── Features.jsx        # Estate features section
│   ├── Gallery.jsx         # Image gallery with modal
│   ├── NearbyAttractions.jsx # Tourist attractions
│   ├── Transport.jsx       # Transportation access
│   ├── Testimonials.jsx    # Customer testimonials
│   └── Inquiry.jsx         # Contact form section
├── pages/
│   ├── Home.jsx            # Home page
│   ├── About.jsx           # About page
│   └── Contact.jsx         # Contact page
├── App.jsx                 # Main app component
├── main.jsx               # Entry point
└── index.css              # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Coffie-estate
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Color Scheme
The website uses a custom color palette defined in `tailwind.config.js`:

- **Earth tones**: Various shades of beige and brown
- **Coffee colors**: Rich brown tones for coffee-related elements
- **Nature colors**: Green shades for natural elements

### Content Updates
To update content:

1. **Contact Information**: Update phone number and email in components
2. **Estate Features**: Modify the features array in `Features.jsx`
3. **Attractions**: Update attractions data in `NearbyAttractions.jsx`
4. **Images**: Replace placeholder images with actual estate photos

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add it to the desired page
3. Follow the existing design patterns and Tailwind classes

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🔧 Configuration Files

- **`tailwind.config.js`**: Tailwind CSS configuration with custom colors and animations
- **`postcss.config.js`**: PostCSS configuration for Tailwind processing
- **`vite.config.js`**: Vite build configuration
- **`package.json`**: Project dependencies and scripts

## 📞 Contact Information

**Malnadu Coffee Estate**
- Phone: +91 90356 09555
- Email: info@malnaducoffee.com
- Location: Sakleshpur, Hassan District, Karnataka

## 🌐 Deployment

The website can be deployed to various platforms:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the dist/ folder to Netlify
```

### GitHub Pages
```bash
npm install -g gh-pages
npm run build
gh-pages -d dist
```

## 🛡️ SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Fast loading times
- Mobile-optimized
- Clean URLs with React Router

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support and inquiries:
- Email: info@malnaducoffee.com
- Phone: +91 90356 09555

---

**Built with ❤️ for coffee lovers and nature enthusiasts**+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
