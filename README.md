# Nisara Studio ✨

A modern React portfolio website showcasing dynamic UI elements, animated modals, and interactive components. Built with Vite, Tailwind CSS, and Framer Motion for smooth animations and responsive design.

**Current Status:** Frontend portfolio is functional and complete. Backend and AI platform features are scaffolded but not yet integrated.

## Quick Start

```bash
# Clone and install
git clone https://github.com/rananisarsb51214/Nisaraistudio-
cd Nisaraistudio-
npm install

# Run development server
npm run dev
# Visit http://localhost:3000
```

## Features

- **Interactive Portfolio Cards** – Click to view detailed project descriptions in animated modals
- **Animated Modals** – Smooth slide-in/slide-out animations for project details
- **Contact Form Modal** – Functional contact form with animations
- **Dark Theme UI** – Modern design with Tailwind CSS
- **Responsive Layout** – Works seamlessly on desktop, tablet, and mobile
- **Lucide Icons** – Clean, customizable icon library
- **Analytics Ready** – Vercel Analytics integration included

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React, TypeScript, Vite |
| **Styling** | Tailwind CSS, Framer Motion |
| **Icons** | Lucide React |
| **Analytics** | Vercel Analytics |
| **Future** | Express, PostgreSQL, Redis (Docker Compose ready) |

## Project Structure

```text
├── src/
│   ├── App.tsx          # Main app with portfolio & modals
│   ├── index.css        # Global styles + Tailwind
│   └── main.tsx         # React entry point
├── public/              # Static assets
├── apps/frontend/       # Dockerized frontend
├── services/            # Backend service stubs (future)
├── docker-compose.yml   # Full-stack services config
├── docs/                # Documentation files
├── .env                 # Example environment file
├── package.json         # Scripts and dependencies
├── vite.config.ts       # Vite configuration
└── README.md            # Project documentation
```

**Note:** Directories like `ai-router/`, `analytics/`, `api/`, and similar top-level folders are placeholders for future development work.

## How to Use

### Development

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

### Features in Action

1. **Explore Portfolio** – Browse project cards with titles and descriptions
2. **View Details** – Click any card to open an animated modal with full project info
3. **Contact Form** – Click "Contact Me" to submit your information
4. **Responsive** – Resize the window to see mobile-optimized layout

## Environment Variables (Optional)

Create a `.env` file for future AI integrations:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

## Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'Add feature'`
4. Push and open a Pull Request

## Roadmap

- [ ] Connect contact form to backend
- [ ] Integrate Google Gemini AI
- [ ] Backend API with Node.js/Express
- [ ] Database layer (PostgreSQL)
- [ ] Full-stack deployment
- [ ] AI-powered features

## License

Proprietary — no license is currently specified. Add a `LICENSE` file to define usage terms.

## Links

- **Repository:** [github.com/rananisarsb51214/Nisaraistudio-](https://github.com/rananisarsb51214/Nisaraistudio-)
- **Author:** Muhammed Nisar
- **Report Issues:** [GitHub Issues](https://github.com/rananisarsb51214/Nisaraistudio-/issues)

---

Built with ❤️ by Muhammed Nisar
