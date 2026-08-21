# Golden Star — Classical String Quartet & Concert Productions

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![i18n](https://img.shields.io/badge/i18n-3%20Languages-B88A38?style=for-the-badge)
![Ticketing](https://img.shields.io/badge/Ticketing-Eventim%20Integration-15181F?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-In%20Development-2ea44f?style=for-the-badge)

> A bespoke, multi-page digital platform engineered for European chamber music tours, candlelight soundtrack productions, and luxury private events (Poland • Germany • Austria).

🔗 **Live Production Deployment:** [Visit Website](https://danielopezpiepoli.github.io/golden-star/)

---

## 🎻 Project Architecture & Purpose

**Golden Star Quartet** is an editorial, high-elegance digital platform created for a professional European string ensemble specializing in multi-genre performances. The platform bridges the gap between classical concert hall traditions, immersive *Candlelight* cinematic experiences (Hans Zimmer, John Williams, Studio Ghibli), and bespoke luxury wedding entertainment (*Bridgerton-style* pop acoustic crossover).

The architecture is built to streamline two distinct commercial conversion funnels: direct public ticket routing via verified ticketing providers (Eventim, OETicket) and high-end private client inquiries via seamless serverless form integration.

---

## ✨ Key Technical & UX Highlights

* **Tour Hub & Eventim Presale Accordion:**
  * Interactive city-by-city schedule viewer on `tour-dates.html` with smooth CSS max-height transitions.
  * Direct outbound deep-linking to localized European ticketing platforms (**Eventim DE**, **Eventim PL**, **OETicket AT**).
  * Collapsible venue specifications, schedules, and unreserved seating notes.

* **Bespoke Wedding Booking & Repertoire Showcase:**
  * Dedicated high-conversion wedding portal (`weddings.html`) with tiered collection cards (*Ceremony*, *Ceremony & Cocktail*, *The Grand Gala*).
  * Interactive package pre-selection binding between pricing triggers and the booking form.
  * Editorial repertoire display showcasing classical, pop crossover, and film music suites.

* **Serverless Asynchronous Communication:**
  * Headless form handling powered by **Web3Forms API** via modern asynchronous `fetch()` requests without page reloads.
  * Built-in client-side input validation, honeypot anti-spam protection (`botcheck`), and contextual UI status feedback.
  * Direct inbox delivery to ensemble management (`gsmusictrio@gmail.com`).

* **Refined Editorial Design System:**
  * Tailored CSS Custom Properties architecture featuring a luminous pastel/alabaster background palette (`#FBF9F5`, `#F4EFE6`) paired with vintage gold accents (`#B88A38`, `#DFB76C`).
  * Elegant serif and geometric typography pairings utilizing Google Fonts (**Cormorant Garamond** and **Montserrat**).
  * Ultra-discreet, minimalist sub-footer copyright and designer credit typography.

* **Responsive Glassmorphism & UI States:**
  * Sticky navigation bar with dynamic backdrop blur filtering and scroll elevation detection.
  * Pure CSS mobile navigation drawer toggle.
  * Multilingual interface readiness (English, Polish, German).

---

## 🛠️ Technology Stack

* **Markup & Semantics:** HTML5 (Semantic landmark regions, Open Graph meta tags, responsive viewport configuration).
* **Styling & Layout:** Vanilla CSS3 (Custom Properties, CSS Grid, Flexbox, Glassmorphism, zero framework overhead).
* **Scripting:** Vanilla JavaScript (ES6+, asynchronous Fetch API, DOM manipulation, dynamic event listeners).
* **Forms & API:** Web3Forms API.
* **Deployment & Hosting:** GitHub Pages.

---

## 📂 Repository Structure

```text
├── index.html          # Main landing page, ensemble overview & signature tours
├── tour-dates.html     # European tour hub with interactive city accordions & ticket links
├── weddings.html       # Luxury wedding collections, repertoire catalogue & booking portal
├── contact.html        # General management, festival programming & press (EPK) inquiries
```

---

## 🚀 Local Development Setup

To inspect or run this project locally:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/danielopezpiepoli/golden-star.git](https://github.com/danielopezpiepoli/golden-star.git)
   cd golden-star
   ```

2. **Serve locally:**
   Because the project uses pure vanilla web standards, you can open `index.html` directly in any modern browser, or run a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   ```

   Open `http://localhost:8000` in your browser.

---

## 👨‍💻 Author & Architecture

**Daniel López Piepoli**  
* Frontend Developer & Digital Architect | Data Science
* 📍 Berlin, Germany  
* ✉️ [danielopezpiepoli@gmail.com](mailto:danielopezpiepoli@gmail.com)  
* 💼 [GitHub Profile](https://github.com/danielopezpiepoli)
