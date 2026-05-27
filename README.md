# Baker Lounge - Premium Designer Cakes UX Portal

Welcome to **Baker Lounge**, a premium web platform designed for Noida Sector 62's signature cake atelier. This application showcases an exquisite collection of 100% vegetarian, artisanal designer cakes built for royalty.

## 🚀 Live Link
- **Deployed link:** [https://baker-lounge.netlify.app](https://baker-lounge.netlify.app)

---

## ✨ Features
- **Premium UX/UI:** Elegant gold and dark-themed interface matching the brand's royal identity.
- **Cake Categories:** Browse through specialized sections like *Wedding Cakes* and *Birthday Cakes*.
- **100% Pure Veg Filter:** Dedicated toggle/indicator to assure users of purely vegetarian options.
- **Inspiration Portfolio:** A comprehensive gallery containing over 52 curated cake designs.
- **Store Locator & Contact:** Quick links to locate the TOT Mall Sector 62 outlet and get support instantly.

---

## 🛠️ Tech Stack Used

- **Frontend:** React (v18+), TypeScript, Vite (for ultra-fast bundling)
- **Styling:** Tailwind CSS (with custom configurations for premium colors)
- **Icons & Fonts:** Font Awesome, Google Fonts (Playfair Display & Inter)

---

## 📁 Project Structure

```text
BAKER-LOUNGE/
├── node_modules/       # Installed dependencies
├── src/                # Main application source code
│   ├── assets/         # Images, logos, and static graphics
│   ├── components/     # Reusable UI Components (Navbar, Hero, Cards, etc.)
│   ├── App.tsx         # Main application container
│   ├── data.ts         # Static data configurations
│   ├── index.css       # Global styles and Tailwind directives
│   ├── main.tsx        # Application entry point
│   ├── portfolioData.ts# Data source for the 52+ inspiration portfolio
│   └── types.ts        # TypeScript interfaces and type definitions
├── index.html          # Main HTML template
├── metadata.json       # Application metadata
├── package.json        # Project dependencies and scripts
├── README.md           # Project documentation
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite bundler configuration

## ⚙️ How to Run and Manage the Project

Follow these precise commands in your terminal to setup, run, and push the project:

### 1. Initialize Git Repository
If you are initializing Git in this project folder for the first time, run:
```bash
git init
```

### 2. Connect to GitHub Remote
Link this local project folder to your remote GitHub repository:
```bash
git remote add origin https://github.com/Shubhamfixes/baker-lounge-ux-portal.git
git branch -M main
```

### 3. Install Dependencies
Download and install all the required packages (`node_modules`) specified in the project:
```bash
npm install
```

### 4. Start Local Development Server
Launch the project locally on your machine to view it in the browser:
```bash
npm run dev
```
*Once started, open `http://localhost:5173` in your browser to view the application live.*

### 5. Build for Production Deployment
To generate a highly optimized, clean bundle for hosting (like Netlify or Vercel):
```bash
npm run build
```

### 6. Save and Push Changes to GitHub
Save your progress and upload your commits securely to your repository:
```bash
git add .
git commit -m "Initial commit: Setup premium layout, project architecture, and production configuration"
git push -u origin main