# Nisaraistudio ✨

Nisaraistudio- is a modern React-based portfolio website that showcases dynamic UI elements and interactive components. Built with Vite, Tailwind CSS, and Framer Motion, it provides a visually engaging experience with animated modals for project details and a functional contact form. This project demonstrates a clean frontend architecture with a focus on user interface design and smooth animations.

## Table of Contents

- [Project Title & Badges](#project-title--badges)
- [Description](#description)
- [Features](#features) ✨
- [Tech Stack](#tech-stack) 🛠️
- [Installation](#installation) ⬇️
- [Usage](#usage) 💡
- [Project Structure](#project-structure) 📂
- [Contributing](#contributing) 🤝
- [License](#license) 📄
- [Important Links](#important-links) 🔗
- [Footer](#footer) 🚀

## Project Title & Badges

![GitHub Repo Stars](https://img.shields.io/github/stars/rananisarsb51214-web/Nisaraistudio-?color=30A2FF&style=for-the-badge)
![GitHub Forks](https://img.shields.io/github/forks/rananisarsb51214-web/Nisaraistudio-?color=30A2FF&style=for-the-badge)

## Description

Nisaraistudio- is a polished frontend portfolio application built using React and Vite. It features a visually appealing design with a dark theme, interactive elements, and smooth animations powered by Framer Motion. The application serves as a personal portfolio, allowing users to explore projects with detailed descriptions in animated modals and submit inquiries via a contact form.

While the repository's description and some configuration files hint at broader AI and full-stack capabilities (like AI Website Builder, Development Agent, and various backend services defined in `docker-compose.yml`), the analyzed frontend code (`apps/frontend`) focuses solely on presenting a user-friendly and interactive portfolio interface.

## Features ✨

-   **Interactive Portfolio Showcase:** Displays a list of portfolio items, each with a title and a brief description. Clicking on a card reveals more details.
-   **Animated Project Modals:** Features a modal window that animates open when a portfolio item is clicked. It displays the full project description, technologies used, and a link to the project (currently placeholder `#`).
-   **Animated Contact Form Modal:** A dedicated modal for users to submit contact information. This form also animates smoothly into view and out of view.
-   **Dynamic UI Elements:** Leverages `lucide-react` for modern icons and `motion` from Framer Motion for sophisticated animations and transitions.
-   **Responsive Design:** Implemented using Tailwind CSS, ensuring the website adapts gracefully to various screen sizes and devices.
-   **Vercel Analytics Integration:** Includes `@vercel/analytics` for tracking user engagement and performance metrics.
-   **Modern Tooling:** Built with Vite for a fast development experience and efficient build process.

## Tech Stack 🛠️

-   **Languages:** TypeScript, HTML, CSS
-   **Frameworks/Libraries:**
    -   **React:** Core UI library (`react`, `react-dom`).
    -   **Vite:** Fast build tool and development server (`vite`, `@vitejs/plugin-react`, `@tailwindcss/vite`).
    -   **Tailwind CSS:** Utility-first CSS framework for rapid UI development (`tailwindcss`, `autoprefixer`).
    -   **Framer Motion:** Animation library for creating engaging UI transitions (`motion`).
    -   **Lucide React:** A library of highly customizable icons (`lucide-react`).
    -   **Vercel Analytics:** For website analytics (`@vercel/analytics`).
-   **AI Integration (Stated Purpose):** `@google/genai` is listed as a dependency, suggesting potential future or backend integration.
-   **Backend (Stated Purpose):** `express` is a dependency, and `docker-compose.yml` defines several backend services (PostgreSQL, Redis, Minio, builder-service, memory-service, deployment-agent), indicating a larger intended full-stack architecture.

## Installation ⬇️

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/rananisarsb51214-web/Nisaraistudio-
    cd Nisaraistudio-
    ```

2.  **Install dependencies:**
    Ensure you have Node.js and npm installed.
    ```bash
    npm install
    ```

3.  **Environment Variables (Optional):**
    The project uses `dotenv` and has configurations suggesting potential use of API keys (e.g., for Google AI). Create a `.env` file in the root directory if needed for local development:
    ```
    GEMINI_GEMINI_API_KEY=your_gemini_api_key
    # Add other necessary environment variables here
    ```

## Usage 💡

This project is primarily a demonstration of a modern React frontend with advanced UI/UX capabilities. It can be run locally to view the portfolio and test its interactive features.

### Running the Development Server

1.  Complete the **Installation** steps.
2.  Start the Vite development server:
    ```bash
    npm run dev
    ```
    The application will be accessible at `http://localhost:3000`.

### Interacting with the Portfolio

-   **Main View:** Upon loading, you'll see the main heading and a brief description. Buttons allow you to "Explore Portfolio" or "Contact Me".
-   **Explore Portfolio:** Clicking "Explore Portfolio" (or directly viewing the portfolio section) displays project cards.
-   **View Project Details:** Click on any portfolio card. An animated modal will slide in, showing the full project description, the technologies used, and a "View Project" button (which currently links to `#`).
-   **Contact Form:** Click "Contact Me" to open an animated modal containing a form for name, email, and message. Submitting the form will trigger a JavaScript alert and close the modal.

## How to Use 🧑‍💻

The current codebase provides a functional frontend portfolio website, serving as a strong foundation for showcasing projects and skills. Its interactive elements and animations demonstrate modern web development practices using React, Tailwind CSS, and Framer Motion.

-   **Portfolio Exploration:** Navigate through the project cards to see how project details are presented in a well-designed, animated modal.
-   **Animation Showcase:** Observe the smooth transitions and animations powered by `motion` and `AnimatePresence` in both the project modals and the contact form.
-   **Contact Form:** Test the contact form's functionality (currently a simple alert on submit).

While the frontend is complete for its portfolio purpose, the `docker-compose.yml` file indicates a much larger intended full-stack architecture involving databases, AI services, and deployment agents. This frontend could be integrated with those backend services to provide a more complete application.

## Project Structure 📂

```
Nisaraistudio-
├── node_modules/
├── public/
├── src/
│   ├── App.tsx             # Main application component with portfolio and modals
│   ├── index.css           # Global CSS with Tailwind imports
│   └── main.tsx            # Entry point for React application
├── docs/
│   ├── .keep               # Placeholder directory
│   └── sprint_1.md         # Documentation file
├── ai-router/              # Placeholder directory (contains .keep)
├── analytics/              # Placeholder directory (contains .keep)
├── api/                    # Placeholder directory (contains .keep)
├── apps/
│   └── frontend/           # Contains the frontend application code
│       └── Dockerfile.dev  # Development Dockerfile for the frontend
├── automation/             # Placeholder directory (contains .keep)
├── bash/
├── billing/                # Placeholder directory (contains .keep)
├── cli/                    # Placeholder directory (contains .keep)
├── infra/                  # Placeholder directory (contains .keep)
├── services/
│   ├── builder/
│   ├── deployment-agent/
│   └── memory/
├── templates/              # Placeholder directory (contains .keep)
├── .env                    # Environment variables (example, not analyzed)
├── .gitignore
├── docker-compose.yml      # Docker Compose configuration for services
├── index.html              # HTML entry point for Vite
├── metadata.json           # Project metadata
├── package.json            # Project dependencies and scripts
├── README.md               # Project README file
└── vite.config.ts          # Vite build tool configuration
```

*(Note: Many top-level directories like `ai-router`, `analytics`, `api`, etc., contain only a `.keep` file, indicating they are likely placeholders for future development or modularity.)*

## Contributing 🤝

Contributions are welcome! If you'd like to contribute to Nisaraistudio-, please follow these steps:

1.  **Fork the Repository:** Create a fork of the `Nisaraistudio-` repository on GitHub.
2.  **Clone Your Fork:** Clone your forked repository to your local machine:
    ```bash
    git clone https://github.com/YOUR_USERNAME/Nisaraistudio-
    cd Nisaraistudio-
    ```
3.  **Create a New Branch:** Start a new branch for your feature or fix:
    ```bash
    git checkout -b feature/your-feature-name
    ```
4.  **Make Your Changes:** Implement your contributions.
5.  **Commit Changes:** Add and commit your changes with a clear message:
    ```bash
    git add .
    git commit -m 'Add your descriptive commit message'
    ```
6.  **Push to Your Fork:** Push your branch to your fork on GitHub:
    ```bash
    git push origin feature/your-feature-name
    ```
7.  **Open a Pull Request:** Submit a pull request to the `main` branch of the original `Nisaraistudio-` repository.

## License 📄

No explicit license information was found in the repository's metadata or configuration files. It is recommended to add a `LICENSE` file to the repository to clearly define usage, distribution, and contribution terms. Currently, this project should be considered proprietary unless a license is specified.

## Important Links 🔗

-   **Repository:** [Nisaraistudio-](https://github.com/rananisarsb51214-web/Nisaraistudio-)
-   **Author:** Muhammed Nisar
-   **Live Demo:** (Not available based on provided data)
-   **Google AI Studio:** Configuration suggests integration with Google AI (Gemini).

## Footer 🚀

<div align="center">
  <p>The Ultimate AI Website Builder, Full-Stack Development Platform & Super AI Toolbox</p>
  <p>
    Build websites, SaaS applications, AI agents, automation workflows, engagement tools, and deploy production-ready applications using AI.
  </p>
  <p>
    <a href="https://github.com/rananisarsb51214-web/Nisaraistudio-">Nisaraistudio-</a> | Developed by Muhammed Nisar
  </p>
  <p>
    <a href="#">MIT License</a> <!-- Placeholder, update when license is defined -->
    ·
    <a href="https://github.com/rananisarsb51214-web/Nisaraistudio-/issues">Request Features</a>
    ·
    <a href="https://github.com/rananisarsb51214-web/Nisaraistudio-/issues">Report Bugs</a>
  </p>
</div>
