# 🚀 Doh Lah Nundo Christian - Fullstack Developer Portfolio

A modern, responsive, and interactive portfolio showcasing my fullstack development skills and projects. Built with React, featuring smooth animations, responsive design, and engaging user experience.

## 🌐 Live Demo

**[Visit Portfolio](https://christiandoh.github.io/portfolio)**

## ✨ Features

- 🎨 **Modern Design** - Glassmorphism effects with dark theme
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- ✨ **Smooth Animations** - Powered by Framer Motion
- 🎯 **Interactive Elements** - Click-to-enlarge images, smooth scrolling
- 🌍 **Multilingual** - English interface
- 📊 **Project Showcase** - Filter by category (Web, Mobile, Fullstack)
- 💬 **Contact Form** - Direct messaging with WhatsApp integration
- ♿ **Accessible** - Following web accessibility standards

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2.0
- **Animation Library**: Framer Motion 10.16.4
- **Icons**: React Icons (FontAwesome)
- **Styling**: CSS3 with Media Queries
- **Build Tool**: Create React App
- **Deployment**: GitHub Pages
- **Version Control**: Git

## 📦 Project Structure

```
portfolio-dola/
├── public/
│   ├── index.html
│   ├── doh-lah.jpeg          # Profile photo
│   ├── projet1.jpeg          # Project images
│   ├── musicapp.jpeg
│   ├── managment.jpeg
│   ├── téléchargement.jpeg
│   ├── socialeapp.jpeg
│   └── fintechapp.jpeg
├── src/
│   ├── components/
│   │   ├── Hero.js           # Landing section
│   │   ├── Navbar.js         # Navigation
│   │   ├── About.js          # About section
│   │   ├── Skills.js         # Skills showcase
│   │   ├── Projects.js       # Project portfolio
│   │   ├── Contact.js        # Contact form
│   │   └── Cursor.js         # Custom cursor
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## 🎯 Sections

### Hero
- Eye-catching introduction
- Profile photo with click-to-enlarge modal
- Floating technology cards with animations
- Call-to-action buttons

### About
- Personal introduction
- Key features and strengths
- Statistics and achievements

### Skills
- Technical proficiency levels
- Categorized by Frontend, Backend, and Tools
- Visual progress indicators

### Projects
- 6 featured projects
- Filter by category (All, Web, Mobile, Fullstack)
- Project images with enlargement modal
- Technology tags
- Links to source code

### Contact
- Contact information
- Social media links (GitHub, LinkedIn, WhatsApp)
- Contact form for direct messaging

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: 480px to 767px
- **Small Phone**: Below 480px

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/christiandoh/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The build folder will contain the optimized production build.

### Deploy to GitHub Pages

```bash
npm run deploy
```

This will build and deploy your portfolio to GitHub Pages.

## 📝 Projects Included

1. **E-Commerce Platform**
   - Full online store with checkout
   - Inventory tracking and payment processing
   - Tech: React, Node.js, MongoDB, Stripe

2. **Music App**
   - Music streaming with playlist support
   - Performance optimized for large libraries
   - Tech: React Native, Firebase, Redux

3. **Management Dashboard**
   - Real-time project tracking
   - Team collaboration features
   - Tech: React, D3.js, WebSocket, Express

4. **Download Manager**
   - File management on mobile
   - Large file support with pause/resume
   - Tech: React Native, Google Maps API, Node.js

5. **Social Network**
   - Professional networking platform
   - Messaging and notifications
   - Tech: React, Node.js, PostgreSQL, Socket.io

6. **Fintech Platform**
   - Financial transaction management
   - Investment tracking
   - Tech: React, Express, MongoDB, AWS S3

## 🎨 Customization

### Colors
Edit CSS variables in `src/App.css`:
```css
:root {
  --primary-bg: #000000;
  --secondary-bg: #0a0a0a;
  --text-primary: #ffffff;
  --text-secondary: #a0a0a0;
  --accent: #ffffff;
}
```

### Content
Update text and information in respective component files:
- Hero content: `src/components/Hero.js`
- About section: `src/components/About.js`
- Skills: `src/components/Skills.js`
- Projects: `src/components/Projects.js`
- Contact: `src/components/Contact.js`

### Images
Replace images in the `public/` folder:
- Profile photo: `public/doh-lah.jpeg`
- Project images: `public/projet1.jpeg`, etc.

## 📂 Available Scripts

- `npm start` - Runs development server
- `npm build` - Creates production build
- `npm test` - Runs tests
- `npm run deploy` - Deploys to GitHub Pages

## 🔗 Links

- **Portfolio**: https://christiandoh.github.io/portfolio
- **GitHub**: https://github.com/christiandoh/portfolio
- **Email**: christiandoh99@gmail.com

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Framer Motion for smooth animations
- React Icons for beautiful icons
- Create React App for project setup
- GitHub Pages for hosting

---

**Made with ❤️ by Doh Lah Nundo Christian**
