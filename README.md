# The DevOps Duoo - Company Website

A modern, fully animated service-based company website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern & Animated UI**: Stunning animations powered by Framer Motion
- **Interactive Elements**: 
  - Animated stats counter that counts up when scrolled into view
  - Interactive service preview cards with hover effects and links
  - 3D flip cards for team members
  - Multi-step contact form with progress tracking
- **Global Enhancements**:
  - Scroll progress indicator at the top of the page
  - Smooth page transitions between routes
  - Back-to-top button with scroll progress circle (mobile)
- **Fully Responsive**: Mobile-friendly design that works on all devices
- **Fast & Optimized**: Built with Next.js 14 for optimal performance
- **TypeScript**: Type-safe code for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **EmailJS Integration**: Working contact form with email delivery

## 📄 Pages

1. **Home Page** - Hero section with physics-based floating icons, animated stats counter, interactive service cards, and CTA
2. **About Us** - Company story, core values, and 3D flip cards for team founders (Chandrashekhar Patil & Hrushikesh Potbhare)
3. **Services** - Comprehensive service offerings with interactive animations:
   - Core DevOps Services (Cloud, CI/CD, Kubernetes, Monitoring, IaC, Security) with click-to-expand cards
   - Professional Consultation with interactive journey visualization
   - Coaching Programs with animated curriculum reveals
4. **Contact Us** - Multi-step contact form with EmailJS integration, Google Maps, contact information, and social links

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Static type checking
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **React Icons** - Beautiful icon library

## 📦 Installation & Setup

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Step-by-Step Installation

1. **Navigate to the project directory:**
   ```bash
   cd /Users/hrushi/DevOpsDuo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   
   This will install all required packages including:
   - Next.js
   - React
   - TypeScript
   - Tailwind CSS
   - Framer Motion
   - React Icons

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   
   Navigate to [http://localhost:3000](http://localhost:3000)
   
   You should see your website running!

## 🎯 Available Scripts

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## 📱 Mobile-Friendly Design

The website is fully responsive with breakpoints at:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:
- Primary colors: Blue shades
- Secondary colors: Purple shades
- Background: Slate/Dark theme

### Content

- **Home Page**: Edit `app/page.tsx`
- **About Page**: Edit `app/about/page.tsx`
- **Services Page**: Edit `app/services/page.tsx`
- **Contact Page**: Edit `app/contact/page.tsx`
- **Navigation**: Edit `components/Navbar.tsx`
- **Footer**: Edit `components/Footer.tsx`

### Animations

All animations are configured using Framer Motion. You can adjust:
- Animation durations
- Transition effects
- Hover states
- Scroll animations

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click!

### Build for Production

```bash
npm run build
npm start
```

## 📂 Project Structure

```
Devopsduoo_Site/
├── app/
│   ├── about/
│   │   ├── layout.tsx        # About page layout with metadata
│   │   └── page.tsx          # About Us page with 3D flip cards
│   ├── contact/
│   │   ├── layout.tsx        # Contact page layout with metadata
│   │   └── page.tsx          # Multi-step contact form with EmailJS
│   ├── services/
│   │   ├── layout.tsx        # Services layout with metadata
│   │   └── page.tsx          # Interactive services page
│   ├── globals.css           # Global styles & animations
│   ├── layout.tsx            # Root layout with metadata & SEO
│   ├── page.tsx              # Home page with animated stats
│   └── sitemap.ts            # Sitemap generation
├── components/
│   ├── ClientLayout.tsx      # Client-side layout wrapper
│   ├── Footer.tsx            # Footer with social links
│   ├── GlobalEnhancements.tsx # Scroll progress & back-to-top
│   ├── Navbar.tsx            # Navigation with mobile menu
│   ├── PageTransition.tsx    # Smooth page transitions
│   └── ThemeToggle.tsx       # Dark/light theme switcher
├── context/
│   └── ThemeContext.tsx      # Theme context provider
├── lib/
│   └── structured-data.ts    # SEO structured data
├── public/
│   └── robots.txt            # Search engine crawling rules
├── .env.local               # EmailJS credentials (gitignored)
├── .gitignore               # Git ignore rules
├── EMAILJS_SETUP.md         # EmailJS setup guide
├── SEO_SETUP.md             # SEO configuration guide
├── next.config.mjs          # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies
```

## 🎬 Animation Features

### Home Page
- **Physics-based floating icons** with collision detection
- **Animated stats counter** that counts up when scrolled into view (500+ projects, 150+ clients, etc.)
- **Interactive service cards** with gradient backgrounds, shine effects, and links to Services page
- **Hover animations** with scale, color transitions, and animated arrows

### About Page
- **3D flip cards** for team founders with skills and certifications
- **Animated skill bars** that fill on scroll
- **Expandable value cards** with smooth transitions

### Services Page
- **Click-to-expand service cards** with detailed information
- **CI/CD pipeline visualization** with animated flow
- **Interactive consultation journey** with step-by-step animations
- **Curriculum reveal animations** for coaching programs

### Contact Page
- **Multi-step form** with progress bar (3 steps)
- **Step transitions** with slide animations
- **Real-time validation** with animated error messages
- **Success/error feedback** with confetti effect

### Global Enhancements
- **Scroll progress bar** at the top (gradient animation)
- **Page transitions** with fade and slide effects
- **Back-to-top button** with bounce animation
- **Scroll progress circle** (mobile) showing percentage
- **Smooth scrolling** throughout the site

## 📧 Contact Form

The multi-step contact form includes:

### Step 1: Personal Information
- Name (required, min 2 characters)
- Email (required, validated format)

### Step 2: Company Details
- Phone number (optional)
- Company name (optional)
- Service interest (dropdown selection)

### Step 3: Message & Review
- Message (required, min 10 characters)
- Review all information before submission

### Features
- **EmailJS Integration**: Sends emails to devopsduoo@gmail.com
- **Real-time validation**: Inline error messages
- **Progress tracking**: Visual progress bar (33%, 66%, 100%)
- **Step navigation**: Back/Next buttons with animations
- **Success/Error states**: Animated feedback messages
- **Form reset**: Clears form after successful submission

### Setup
See `EMAILJS_SETUP.md` for detailed configuration instructions.

## 🔧 Troubleshooting

### If you see TypeScript errors:

The errors you see are expected before running `npm install`. They will be resolved after installing dependencies.

### If the dev server doesn't start:

1. Make sure you're in the correct directory
2. Delete `node_modules` and `.next` folders
3. Run `npm install` again
4. Try `npm run dev` again

### Port already in use:

If port 3000 is busy, Next.js will automatically use port 3001, 3002, etc.

## 📝 License

This project is created for The DevOps Duoo company.

## 🤝 Support

For support, email hello@devopsduoo.com or contact us through the website.

---

**Built with ❤️ using Next.js, TypeScript, and Framer Motion**
