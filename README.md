# MoneyCraft - Premium Stock Market Trading Course Website

A visually stunning, fully responsive stock market course website built with Next.js, Tailwind CSS, and Framer Motion. This premium education platform features a dark theme with electric cyan and green accents, designed to showcase high-value trading education content.

## 🚀 Features

### Design & UX
- **Premium Dark Theme** - Black base with cyan and green gradient accents
- **Fully Responsive** - Optimized for all devices and screen sizes
- **Smooth Animations** - Framer Motion powered transitions and micro-interactions
- **Custom Components** - Hand-designed layouts, no generic templates
- **Glass Morphism Effects** - Modern backdrop blur and transparency effects
- **Gradient Text & Borders** - Eye-catching visual elements

### Pages & Sections
1. **Home Page**
   - Animated stock ticker with real-time data simulation
   - Hero section with bold typography and dynamic CTAs
   - Features showcase with hover animations
   - Statistics section with animated counters
   - Scroll-based reveal animations

2. **Why Us Page**
   - Split-screen layouts with compelling statistics
   - Animated feature cards with icons
   - Success rate highlights and trust indicators
   - Custom grid layouts for different content types

3. **Mentors Page**
   - Creative mentor profile cards with hover effects
   - Social media integration
   - Expertise tags and success metrics
   - Spotlight section with mentor statistics

4. **Courses Page**
   - Interactive course filtering by category
   - Detailed course cards with pricing and features
   - Course level indicators and student counts
   - Enrollment CTAs with hover animations

5. **Testimonials Page**
   - Featured success story with before/after comparison
   - Animated testimonial cards with ratings
   - Video testimonial placeholders
   - Student profit statistics

6. **Contact Page**
   - Functional contact form with validation
   - Smooth input focus animations
   - Contact information cards
   - FAQ section and map placeholder

### Technical Features
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **Responsive Design** with mobile-first approach
- **SEO Optimized** with proper meta tags
- **Performance Optimized** with lazy loading

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
moneycrafttrader/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with Navbar & Footer
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Global styles and animations
│   │   ├── why-us/
│   │   │   └── page.tsx        # Why Us page
│   │   ├── mentors/
│   │   │   └── page.tsx        # Mentors page
│   │   ├── courses/
│   │   │   └── page.tsx        # Courses page
│   │   ├── testimonials/
│   │   │   └── page.tsx        # Testimonials page
│   │   └── contact/
│   │       └── page.tsx        # Contact page
│   └── components/
│       ├── Navbar.tsx          # Navigation component
│       ├── Footer.tsx          # Footer component
│       └── Ticker.tsx          # Stock ticker component
├── public/
│   └── svgs/                   # Custom SVG assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🎨 Design System

### Colors
- **Primary**: Black (#000000)
- **Secondary**: Deep Navy (#0a0a0a)
- **Accent 1**: Cyan (#22d3ee)
- **Accent 2**: Green (#22c55e)
- **Text**: White (#ffffff), Gray (#9ca3af)

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold weights with gradient text effects
- **Body**: Regular weight with proper line heights

### Animations
- **Page Transitions**: Fade in/out with scale effects
- **Scroll Animations**: Reveal on scroll with staggered delays
- **Hover Effects**: Scale, glow, and color transitions
- **Micro-interactions**: Button presses, form focus states

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd moneycrafttrader
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎯 Key Features Implementation

### Stock Ticker Animation
- Continuous horizontal scroll animation
- Real-time stock data simulation
- Color-coded price changes (green/red)
- Smooth performance optimized animation

### Form Handling
- Controlled form inputs with validation
- Smooth focus animations
- Loading states and success feedback
- Form reset functionality

### Navigation
- Sticky navbar with scroll effects
- Mobile hamburger menu
- Smooth page transitions
- Active state indicators

## 🔧 Customization

### Adding New Pages
1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. Follow the existing page structure pattern
4. Update navigation in `Navbar.tsx`

### Modifying Colors
Update the color scheme in `tailwind.config.js` and `globals.css`:
```css
.gradient-text {
  @apply bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent;
}
```

### Adding Animations
Use Framer Motion components with consistent animation patterns:
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
```

## 📈 Performance Optimizations

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components load on demand
- **Animation Performance**: Hardware-accelerated animations
- **Bundle Size**: Optimized imports and tree shaking

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch
3. Custom domain configuration available

### Other Platforms
- **Netlify**: Compatible with Next.js static export
- **AWS Amplify**: Full Next.js support
- **DigitalOcean App Platform**: Easy deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎨 Credits

- **Design**: Custom design system
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Framework**: Next.js
- **Styling**: Tailwind CSS

## 📞 Support

For support or questions:
- Email: hello@moneycraft.com
- Website: [moneycraft.com](https://moneycraft.com)

---

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion
