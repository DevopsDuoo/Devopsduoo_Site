# The DevOps Duoo - Company Website

A modern, fully animated service-based company website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern & Animated UI**: Stunning animations powered by Framer Motion
- **Fully Responsive**: Mobile-friendly design that works on all devices
- **Fast & Optimized**: Built with Next.js 14 for optimal performance
- **TypeScript**: Type-safe code for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development

## 📄 Pages

1. **Home Page** - Hero section with animated elements, services showcase, stats, and CTA
2. **About Us** - Company story, core values, and team members with animations
3. **Contact Us** - Contact form with validation, contact information, and social links

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
DevOpsDuo/
├── app/
│   ├── about/
│   │   └── page.tsx          # About Us page
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/
│   ├── Footer.tsx            # Footer component
│   └── Navbar.tsx            # Navigation component
├── public/                   # Static assets
├── next.config.mjs          # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies
```

## 🎬 Animation Features

- **Page transitions** with Framer Motion
- **Scroll-triggered animations** for sections
- **Hover effects** on buttons and cards
- **Floating elements** in hero sections
- **Gradient animations** on text and backgrounds
- **Smooth navigation** with animated underlines
- **Mobile menu** with slide-in animation

## 📧 Contact Form

The contact form includes:
- Name (required)
- Email (required)
- Phone (optional)
- Company (optional)
- Message (required)
- Form validation
- Success/Error states
- Animated submission feedback

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
