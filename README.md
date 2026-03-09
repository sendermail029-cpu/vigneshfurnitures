# Vignesh Furniture's & Electronics — Website

> Premium website for Vignesh Furniture's & Electronics, Hanuman Junction, Andhra Pradesh

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# Open http://localhost:3000

# 3. Build for production
npm run build
npm start
```

---

## 📁 Project Structure

```
vignesh-furniture/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout, fonts, SEO schema
│   │   ├── page.tsx          # Home page
│   │   ├── globals.css       # Tailwind + global styles
│   │   ├── sitemap.ts        # Auto-generated sitemap
│   │   └── catalog/
│   │       └── page.tsx      # Full product catalog page
│   │
│   ├── components/
│   │   ├── Navbar.tsx        # Sticky top navbar
│   │   ├── Hero.tsx          # Full-screen hero section
│   │   ├── Owners.tsx        # Owner profile cards
│   │   ├── Products.tsx      # Product grid with WhatsApp
│   │   ├── Brands.tsx        # Brands scrolling strip
│   │   ├── Offers.tsx        # Finance & deals section
│   │   ├── Reviews.tsx       # Customer testimonials
│   │   ├── Gallery.tsx       # Photo gallery + lightbox
│   │   ├── Contact.tsx       # Contact form + map
│   │   ├── Footer.tsx        # Full footer
│   │   ├── FloatingButtons.tsx  # Fixed call + WhatsApp buttons
│   │   └── hooks/
│   │       └── useInView.ts  # Scroll animation hook
│   │
│   └── data/
│       └── products.ts       # All product data + WhatsApp helpers
│
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

---

## ✏️ How to Update

### Update WhatsApp Number
Edit `src/data/products.ts`:
```ts
export const WHATSAPP_NUMBER = '919849639368'  // Change here
```

### Add New Products
Add to the `products` array in `src/data/products.ts`:
```ts
{
  id: 13,
  name: 'New Product Name',
  category: 'furniture',   // or 'electronics'
  subcategory: 'Beds',
  description: 'Product description here.',
  image: '/images/product.jpg',
  badge: 'New Arrival',
  featured: true,
},
```

### Change Store Hours
Edit `src/components/Contact.tsx` → `hours` array.

### Update Phone Numbers
Edit `src/components/Navbar.tsx`, `Footer.tsx`, `Contact.tsx`.

---

## 🌐 Deploy on Vercel (Free)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Click **Deploy**
5. Done! Your site is live.

**Custom domain setup:**
- In Vercel dashboard → Domains → Add your domain
- Update DNS records at your domain provider

---

## 📱 Key Features

- ✅ Mobile-first responsive design
- ✅ WhatsApp enquiry on every product
- ✅ Floating call + WhatsApp buttons
- ✅ Product catalog page at /catalog
- ✅ Customer reviews section
- ✅ Brands showcase with scroll animation
- ✅ Photo gallery with lightbox
- ✅ Google Maps integration
- ✅ Contact form (sends via WhatsApp)
- ✅ Local SEO optimized
- ✅ Schema markup for Local Business
- ✅ Performance optimized (90+ Lighthouse)

---

## 📞 Store Details

**Vignesh Furniture's & Electronics**
- 📍 Vijayawada Rd, Hanuman Junction, Bapulapadu, AP 521105
- 📞 98496 39368 / 98663 44294
- 🕒 Mon–Sat: 9AM–8PM | Sun: 10AM–6PM
