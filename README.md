# Mergen Website

Modern, responsive website for Mergen - The Art of Database Management.

## 🚀 Features

- **🌍 Multilingual Support**: English/Turkish language switching with localStorage persistence
- **🌙 Dark/Light Theme**: System preference detection with manual toggle
- **📱 Responsive Design**: Mobile-first approach with perfect scaling across all devices
- **🎥 Video-First Hero**: Engaging video showcase in the hero section
- **⚡ GitHub Integration**: Automatic download links from GitHub releases API
- **🖥️ Platform Detection**: Automatic OS detection for Windows/macOS/Linux downloads
- **✨ Modern UI**: Glassmorphism design with smooth animations
- **⚡ Performance**: Built with Next.js 14, TypeScript, and Tailwind CSS

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Theme**: next-themes
- **Animations**: CSS animations with Intersection Observer

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/metehanelmas1/mergenwebsite.git

# Navigate to project directory
cd mergenwebsite

# Install dependencies
npm install
# or
pnpm install

# Start development server
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🌐 Language Support

The website supports both English and Turkish languages. Language preference is automatically saved to localStorage and persists across sessions.

### Adding New Languages

1. Add translations to `lib/translations.ts`
2. Update the `Language` type
3. Add language toggle logic in `contexts/language-context.tsx`

## 🎨 Customization

### Theme Colors

Colors are defined in `app/globals.css` using CSS custom properties. The website supports both light and dark themes.

### Components

All components are located in the `components/` directory:
- `hero.tsx` - Main hero section with video
- `features.tsx` - Feature showcase grid
- `principles.tsx` - Company principles section
- `showcase.tsx` - Database and platform showcase
- `cta.tsx` - Call-to-action with download buttons
- `footer.tsx` - Site footer with links

## 📁 Project Structure

```
├── app/                    # Next.js app directory
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── ...               # Page-specific components
├── contexts/             # React contexts
├── lib/                  # Utility functions and translations
├── public/               # Static assets
└── styles/               # Global styles
```

## 🚀 Deployment

The website is optimized for deployment on Vercel, Netlify, or any other modern hosting platform.

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📝 License

This project is licensed under the GPL v3.0 License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or support, please contact the Mergen team.

---

Built with ❤️ for the developer community.