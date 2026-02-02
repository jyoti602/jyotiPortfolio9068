# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and TailwindCSS.

## Features

- 🎨 Modern, clean design with smooth animations
- 📱 Fully responsive layout
- ⚡ Built with Next.js 14 for optimal performance
- 🎯 TypeScript for type safety
- 🌙 Beautiful gradient effects and hover states
- 📧 Contact section with multiple contact methods
- 💼 Project showcase with tech stacks
- 🛠️ Skills section organized by categories

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Update the following in `app/page.tsx`:
- Your name in the hero section
- Email address in contact section
- Social media links
- Project information
- Skills and expertise

### Styling

The website uses TailwindCSS with custom color schemes. Modify `tailwind.config.js` to customize:
- Color palette
- Fonts
- Custom utilities

### Adding Projects

Update the `projects` array in `app/page.tsx` with your own projects:
```typescript
{
  title: 'Your Project',
  description: 'Project description',
  tech: ['React', 'Node.js', 'MongoDB'],
  github: 'https://github.com/yourusername/project',
  demo: 'https://project-demo.com',
  image: '/path/to/image'
}
```

## Build & Deploy

Build the application for production:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **TailwindCSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Framer Motion** - Animations (optional)

## License

This project is open source and available under the [MIT License](LICENSE).
