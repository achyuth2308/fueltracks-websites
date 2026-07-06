# 🚛 Fuel Tracks Technologies — Website Scaffold

A modern, Stripe-inspired React website for Fuel Tracks Technologies (GPS tracking & fuel monitoring).

---

## ✨ Features

- **Stripe-inspired design** — Gradient meshes, glassmorphism, smooth animations
- **React + Vite** — Fast development with hot module replacement
- **Framer Motion** — Scroll-triggered animations, smooth transitions
- **Tailwind CSS v4** — Utility-first styling with custom design tokens
- **React Router** — Multi-page navigation (Home, About, Contact)
- **Mobile responsive** — Fully responsive across all breakpoints
- **WhatsApp integration** — Contact form sends enquiries via WhatsApp
- **Video support** — YouTube embeds and local video files
- **Easy content management** — All content in `/src/data/` files

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
fueltracks-website/
├── public/                 # Static assets (served as-is)
│   ├── images/            # Drop your images here
│   └── videos/            # Drop your videos here
├── src/
│   ├── assets/            # Imported assets
│   │   ├── images/
│   │   ├── videos/
│   │   └── icons/
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── AnimatedSection.jsx
│   │   ├── DynamicIcon.jsx
│   │   ├── VideoEmbed.jsx
│   │   ├── ImagePlaceholder.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── FeaturesSection.jsx
│   │   ├── IndustriesSection.jsx
│   │   ├── MobileAppSection.jsx
│   │   ├── DealerSection.jsx
│   │   ├── TestimonialsSection.jsx
│   │   ├── FAQSection.jsx
│   │   ├── ContactSection.jsx
│   │   └── CTASection.jsx
│   ├── data/              # 📝 EDIT THESE to change content
│   │   ├── siteConfig.js  # Company info, navigation, socials
│   │   ├── heroData.js    # Hero section content
│   │   ├── servicesData.js # Services, features, stats
│   │   ├── industriesData.js # Industry cards
│   │   ├── testimonialsData.js # Customer testimonials
│   │   ├── faqData.js     # FAQ accordion items
│   │   └── dealerData.js  # Dealer program details
│   ├── hooks/             # Custom React hooks
│   │   ├── useCountUp.js
│   │   └── useScrollProgress.js
│   ├── pages/             # Page components
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   └── ContactPage.jsx
│   ├── App.jsx            # Main app with routing
│   ├── main.jsx           # Entry point
│   └── index.css          # Tailwind + custom styles
├── index.html
├── vite.config.js
└── package.json
```

---

## 📝 How to Add Content

### 1. Add Images

Drop images in `public/images/` and reference them:

```jsx
// In any data file or component
image: "/images/my-photo.jpg"

// Or in JSX
<ImagePlaceholder src="/images/my-photo.jpg" alt="Description" />
```

### 2. Add Videos

**Local video files:**
```jsx
<VideoEmbed src="/videos/demo.mp4" autoPlay muted loop />
```

**YouTube videos:**
```jsx
<VideoEmbed youtubeId="Z2pAeH0HFdA" title="Demo Video" />
```

### 3. Update Company Info

Edit `src/data/siteConfig.js`:

```javascript
export const company = {
  name: "Fuel Tracks Technologies",
  phone: "+91 73374 33351",
  email: "info@fueltracks.in",
  // ... etc
};
```

### 4. Add Testimonials

Edit `src/data/testimonialsData.js`:

```javascript
export const testimonials = [
  {
    name: "Customer Name",
    role: "Job Title",
    company: "Company Name",
    quote: "Their testimonial text here...",
    avatar: "/images/avatar-name.jpg", // optional
    rating: 5,
  },
  // Add more...
];
```

### 5. Add FAQ Items

Edit `src/data/faqData.js`:

```javascript
export const faqs = [
  {
    question: "Your question here?",
    answer: "Your answer here...",
  },
];
```

### 6. Add Services

Edit `src/data/servicesData.js`:

```javascript
export const services = [
  {
    title: "Service Name",
    description: "Brief description",
    icon: "MapPin", // Lucide icon name
    image: "/images/service-image.jpg", // optional
  },
];
```

---

## 🎨 Customizing Colors

Edit `src/index.css` → `@theme` block:

```css
@theme {
  --color-primary-500: #3378ff;  /* Your brand color */
  --color-accent-500: #10b981;   /* Secondary color */
  --color-violet-500: #8b5cf6;   /* Tertiary color */
}
```

### Available color utilities:
- `primary-50` to `primary-950`
- `accent-50` to `accent-900`
- `violet-400` to `violet-700`
- `warm-400` to `warm-600`
- `surface-50` to `surface-950`

---

## 🎭 CSS Classes

### Gradient backgrounds:
- `.gradient-mesh` — Light gradient mesh background
- `.gradient-mesh-dark` — Dark gradient mesh background

### Glassmorphism:
- `.glass` — Frosted glass effect (light)
- `.glass-dark` — Frosted glass effect (dark)

### Text gradients:
- `.text-gradient` — Blue to teal gradient text
- `.text-gradient-violet` — Purple to blue gradient text

### Effects:
- `.glow-primary` — Blue glow shadow
- `.glow-accent` — Teal glow shadow
- `.gradient-border` — Animated gradient border
- `.pulse-dot` — Pulsing dot animation

---

## 🔧 Components Guide

### AnimatedSection
Wrap any content for scroll-triggered fade-in animation:
```jsx
<AnimatedSection delay={0.2} direction="up">
  <YourContent />
</AnimatedSection>
```
- `delay`: Animation delay in seconds
- `direction`: `"up" | "down" | "left" | "right"`

### VideoEmbed
Renders videos with fallback placeholder:
```jsx
<VideoEmbed
  src="/videos/demo.mp4"        // Local video
  youtubeId="abc123"            // YouTube video
  poster="/images/poster.jpg"   // Video poster
  autoPlay={true}
  muted={true}
  loop={true}
  controls={true}
/>
```

### ImagePlaceholder
Renders images with fallback placeholder:
```jsx
<ImagePlaceholder
  src="/images/photo.jpg"
  alt="Description"
  aspectRatio="aspect-video"    // "aspect-square", "aspect-[4/3]", etc.
  rounded="rounded-2xl"
/>
```

### DynamicIcon
Renders any Lucide icon by name:
```jsx
<DynamicIcon name="MapPin" size={24} className="text-primary-600" />
```

---

## 📱 Responsive Breakpoints

- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`

---

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the `dist/` folder
```

### Static hosting
```bash
npm run build
# Upload the `dist/` folder to any static host
```

---

## 🔗 Useful Links

- [Lucide Icons](https://lucide.dev/icons/) — Icon names for DynamicIcon
- [Framer Motion](https://www.framer.com/motion/) — Animation docs
- [Tailwind CSS](https://tailwindcss.com/docs) — Utility classes
- [Vite](https://vitejs.dev/) — Build tool docs

---

## 📞 Support

For questions or customizations, contact the development team.

**Built with ❤️ for Fuel Tracks Technologies**
