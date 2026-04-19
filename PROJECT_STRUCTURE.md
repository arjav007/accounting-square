# Accounting Square — Next.js Project Structure

```
accounting-square/
├── app/
│   ├── layout.tsx          # Root layout (fonts, metadata, Loader, Cursor)
│   ├── page.tsx            # Home page
│   ├── contact/
│   │   └── page.tsx        # Contact page
│   └── globals.css         # All global styles + CSS variables
├── components/
│   ├── Navbar.tsx
│   ├── Loader.tsx
│   ├── Cursor.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── TrustBar.tsx
│   │   ├── Services.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Team.tsx
│   │   ├── Promise.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   └── CTA.tsx
│   ├── contact/
│   │   └── ContactForm.tsx
│   └── Footer.tsx
├── lib/
│   └── data.ts             # All static content (team, FAQs, testimonials, etc.)
├── hooks/
│   ├── useScrollReveal.ts
│   └── useCountUp.ts
├── public/
│   └── images/
│       ├── ankur.png
│       └── dhwani.png
├── next.config.ts
├── tailwind.config.ts      # (optional — project uses CSS vars, not Tailwind)
└── package.json
```

## Setup

```bash
npx create-next-app@latest accounting-square --typescript --app --no-tailwind
cd accounting-square
npm install
# Copy files from this output into src/
npm run dev
```

## Notes
- Images: extract the base64 data URIs from the HTML and save as /public/images/ankur.png and /public/images/dhwani.png
- All CSS is in globals.css — no CSS Modules or Tailwind needed
- Scroll reveal uses IntersectionObserver via a custom hook
- Counter animation uses a custom useCountUp hook
- The 'use client' directive is used only on interactive components
