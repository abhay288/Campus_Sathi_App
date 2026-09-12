<div align="center">

  <img src="public/logo.png" alt="Campus Saathi Logo" width="120" style="border-radius: 24px; margin-bottom: 16px;" />

  # Campus Saathi 🎓
  ### *Your Campus. Your Companion.*

  **The official modern web portal and companion hub for Campus Saathi — an all-in-one student productivity and academic companion platform.**

  [![Live Website](https://img.shields.io/badge/Website-campussathii.netlify.app-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://campussathii.netlify.app/)
  [![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite-6.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

  <p align="center">
    <a href="https://campussathii.netlify.app/">🌐 Live Portal</a> •
    <a href="https://campussathii.netlify.app/features">✨ Features</a> •
    <a href="https://campussathii.netlify.app/tools">🧮 Student Tools</a> •
    <a href="https://campussathii.netlify.app/repository">📚 Academic Repository</a> •
    <a href="https://campussathii.netlify.app/events">🎉 Campus Events</a>
  </p>

</div>

---

## 📌 About Campus Saathi

**Campus Saathi** is an academic productivity suite designed for college and university students. It unites timetable schedules, attendance forecasting against institutional attendance thresholds (such as the 75% rule), campus academic resource repositories (handwritten notes, PYQs, and lab manuals), private offline document scanning, study timers, and placement utilities into one unified ecosystem.

This repository powers the official **Single Page Application (SPA)** and developer landing portal deployed on **Netlify Edge**.

---

## 🚀 Key Features

### 📅 Smart Timetable Management
- Slot alerts and lecture reminders so you never miss a class.
- Day-to-day lecture views with classroom details and faculty mapping.

### 📊 75% Attendance Intelligence & Safe-Bunk Calculator
- Subject-wise lecture tracking with instant percentage visual indicators.
- **Safe-Bunk Forecast**: Automatically computes how many classes you can skip while staying safely above institutional thresholds.
- **Recovery Forecast**: Calculates the exact number of consecutive lectures required to regain eligibility if attendance falls below 75%.

### 📚 Campus Academic Repository
- Curated study materials categorized by **College, Branch, Semester, and Subject**.
- Instant access to **Previous Year Question papers (PYQs)**, handwritten topper notes, lab manuals, and syllabus files.

### 📑 Smart Privacy-First Document Scanner
- Built-in on-device document scanner with automatic edge detection and perspective warping.
- Multiple color filters (B&W, Magic Color, High-Contrast) and instant offline PDF export.
- **Zero Cloud Leakage**: Scanned documents are processed purely locally on the student's device.

### 🧮 Student Productivity Tools
- **CGPA & SGPA Calculators**: Supports percentage, 10-point, and 4-point grading systems.
- **Focus Study Timer**: Integrated Pomodoro technique with distraction-free tracking.
- **ATS Resume Builder**: Industry-standard ATS-friendly templates and resume analysis.
- **Conversion Utilities**: Academic formula cheatsheets, engineering unit converters, and PDF compression.

---

## 🤖 Next-Gen Search & AI Engine Optimization

This web portal is built from the ground up for modern discovery across traditional search engines, Answer Engines, and Generative AI Agents:

| Optimization Layer | Implementation |
| :--- | :--- |
| **AEO (Answer Engine Optimization)** | Structured `FAQPage` schema answering high-intent student queries for Google AI Overviews and Perplexity. |
| **GEO (Generative Engine Optimization)** | Multi-regional geo-targeting (`geo.region: IN`), language directives, and canonical linking. |
| **LLMO (LLM Optimization)** | Native [`llms.txt`](https://campussathii.netlify.app/llms.txt) and [`llms-full.txt`](https://campussathii.netlify.app/llms-full.txt) providing complete context for ChatGPT, Claude, and Gemini bots. |
| **AISEO** | Explicit crawler accessibility in [`robots.txt`](https://campussathii.netlify.app/robots.txt) for `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, and `OAI-SearchBot`. |
| **E-E-A-T Schema** | Full Schema.org graph combining `WebSite`, `SoftwareApplication`, and verified developer credentials (`Person`). |

---

## 🛠️ Technology Stack

- **Framework**: [React 18](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) + PostCSS + Autoprefixer
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router DOM v6](https://reactrouter.com/)
- **Deployment**: [Netlify Edge](https://www.netlify.com/) (with custom `_headers` and SPA `_redirects`)

---

## 📂 Project Structure

```text
website/
├── public/
│   ├── _headers            # Security & caching headers
│   ├── _redirects          # SPA client-side routing fallback
│   ├── app-ads.txt         # Ad network verification
│   ├── favicon.png         # Site favicon
│   ├── llms.txt            # Curated summary for AI models
│   ├── llms-full.txt       # Full product specification for LLMs
│   ├── logo.png            # Official brand identity
│   ├── robots.txt          # Crawler instructions & AI directives
│   └── sitemap.xml         # XML Sitemap
├── src/
│   ├── components/         # Reusable UI components (Navbar, Footer, SEO, JsonLd)
│   ├── pages/              # Page routes (Home, Features, Tools, Repository, etc.)
│   ├── App.tsx             # Route configuration
│   ├── index.css           # Tailwind custom styling & design tokens
│   └── main.tsx            # Application entry point
├── index.html              # HTML shell with AEO, GEO, LLMO, AISEO & E-E-A-T
├── netlify.toml            # Netlify build configuration
├── package.json            # Node dependencies and scripts
├── tailwind.config.js      # Design system configuration
└── vite.config.ts          # Vite build pipeline setup
```

---

## 💻 Local Development Setup

### Prerequisites
- **Node.js**: v18.0 or higher
- **npm**: v9.0 or higher

### Installation & Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/abhay288/Campus_Sathi_App.git
   cd Campus_Sathi_App
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   *Open [http://localhost:5173](http://localhost:5173) in your browser.*

4. **Build production bundle:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 🚀 Deployment

The site is configured for continuous deployment on **Netlify**:
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Routing**: Client-side single page app fallback routed through `public/_redirects`.

---

## 👨‍💻 Author & Developer

**Abhay Kushwaha**
- 🐙 GitHub: [@abhay288](https://github.com/abhay288)
- 📸 Instagram: [@the.abhay.maurya](https://www.instagram.com/the.abhay.maurya/)
- 📧 Contact: [mauryaabhay938@gmail.com](mailto:mauryaabhay938@gmail.com)

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.
