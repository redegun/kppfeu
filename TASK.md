# Task: Build KPPF.EU Website

Read PLAN.md for full context. Build the complete site in Astro 5 + Preact + Tailwind CSS.

## What to build:

### 1. Layout & Components
- Base layout with header (logo, nav: Products, Videos, About, Contact, Cart icon with count) and footer (contacts, copyright)
- Mobile responsive hamburger menu
- Premium dark automotive theme (dark grays, accent gold/amber)

### 2. Pages

**Homepage (src/pages/index.astro):**
- Hero section: bold headline "Premium Paint Protection Film for European Market", subtitle, CTA button
- Features grid (self-healing, chemical resistance, deep gloss, 7-year durability, easy installation)
- Product showcase (3 films)
- CTA banner

**Products catalog (src/pages/products/index.astro):**
- Grid of product cards with image placeholder, name, brief specs, "View Details" + "Add to Cart" buttons

**Product detail pages (src/pages/products/[slug].astro):**
- Use content collections or static paths for: kppf-24, kppf-25, kppf-10
- Product info from kppf.ru data:
  - KPPF #24: 190μm thickness, 15m × 1.52m roll, self-healing without heat, anti-yellowing, deep gloss, chemical resistant
  - KPPF #25: 200μm thickness, 15m × 1.52m roll, enhanced protection for dark vehicles
  - KPPF #10: 160μm thickness, 15m × 1.52m roll, economy line, good basic protection
- Specs table, features list, "Add to Cart" button with quantity selector
- Prices placeholder: €890, €990, €690 respectively

**Videos page (src/pages/videos.astro):**
- Grid layout for YouTube video embeds (use placeholder thumbnails for now)
- Title + description for each video
- Add 4-5 placeholder video cards: "Installation test on BMW M2", "KPPF #25 on Mini Cooper JCW", etc.

**About page (src/pages/about.astro):**
- Company story, mission, values
- Why KPPF - quality commitment
- European presence (Sweden)

**Contact page (src/pages/contact.astro):**
- Contact form (name, email, phone, message) - frontend only for now
- Address: Drottninggatan 55, 111 21 Stockholm, Sweden
- Email: info@kppf.eu
- Phone: +46 8 123 45 67

**Cart page (src/pages/cart.astro):**
- Preact island component for cart functionality
- Cart stored in localStorage
- Shows items, quantity +/-, remove, total
- Order form: name, email, phone
- Submit button (frontend only, console.log for now)

### 3. Cart Logic (Preact Islands)
- CartIcon component (header) - shows item count
- CartPage component - full cart with order form
- AddToCart button component - used on product pages
- Shared cart store using preact signals or simple localStorage wrapper

### 4. Styling
- Tailwind CSS with custom theme
- Color palette: dark backgrounds (#0a0a0a, #1a1a1a, #2a2a2a), gold accent (#c8a45c), white text
- Clean typography, generous spacing
- Smooth transitions and hover effects
- Professional product photography placeholders (use gradient placeholders)

### 5. SEO
- Proper meta tags on all pages
- sitemap integration
- robots.txt

### 6. Global CSS
- Create src/styles/global.css with @import "tailwindcss" and custom utilities

## Important:
- All content in ENGLISH
- Use placeholder images (CSS gradients or placeholder services)
- Mobile-first responsive design
- Keep it clean, premium, automotive feel
- No backend yet - forms just log to console

When completely finished, run: openclaw system event --text "Done: KPPF.EU site built with all pages, cart, and styling" --mode now
