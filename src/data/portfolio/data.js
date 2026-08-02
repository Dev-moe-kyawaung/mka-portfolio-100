// Navigation links (10 pages)
export const navLinks = [
  { label: 'Home', to: '/', burmese: 'အိမ်မောက်' },
  { label: 'About', to: '/about', burmese: 'အကြောင်း' },
  { label: 'Services', to: '/services', burmese: 'ဝန်ဆောင်မှု' },
  { label: 'Projects', to: '/projects', burmese: 'ပရောဂျက်' },
  { label: 'Pricing', to: '/pricing', burmese: 'အကြွေး' },
  { label: 'FAQ', to: '/faq', burmese: 'မေးခွန်း' },
  { label: 'Gallery', to: '/gallery', burmese: 'ဓာဒါတ်' },
  { label: 'Certificates', to: '/certificates', burmese: 'စာလက်' },
  { label: 'Contact', to: '/contact', burmese: 'ဆက်သွယ်' },
  { label: 'Social', to: '/social', burmese: 'ဆက်ဘလစ်' },
];

// Social media links from Gravatar + additional
export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/', icon: 'fa-github', burmese: 'ဂိတ်ဟပ်' },
  { label: 'Gravatar', href: 'https://gravatar.com/moekyawaung13721', icon: 'fa-user', burmese: 'ဂရိ봐တာ' },
  { label: 'Email', href: 'mailto:moekyawaung13721@gmail.com', icon: 'fa-envelope', burmese: 'အီးမေးလ်' },
  { label: 'Phone', href: 'tel:+959000000000', icon: 'fa-phone', burmese: 'ဖုန်း' },
  { label: 'Instagram', href: 'https://instagram.com/', icon: 'fa-instagram', burmese: 'အင်စတာ' },
  { label: 'Telegram', href: 'https://t.me/', icon: 'fa-telegram', burmese: 'ထလီဂရမ်' },
  { label: 'LinkedIn', href: 'https://linkedin.com/', icon: 'fa-linkedin', burmese: 'လိန့်ކင်' },
  { label: 'Play Store', href: 'https://play.google.com/store', icon: 'fa-google-play', burmese: 'ပလေ့စတိုर' },
];

// Animated statistics counter
export const stats = [
  { label: 'Years Experience', value: 10, suffix: '+', note: 'hands-on experience', burmese: 'နှစ် الخبرة' },
  { label: 'Apps Built', value: 3000, suffix: '+', note: 'shipped products', burmese: 'ပရောဂျက်' },
  { label: 'GitHub Repos', value: 122, suffix: '', note: 'public & private', burmese: 'ကုဒ်' },
  { label: 'Satisfaction', value: 100, suffix: '%', note: 'recommended feedbacks', burmese: 'အောင်' },
];

// Skills with progress bars
export const skills = [
  { name: 'Kotlin', percent: 96, burmese: 'ကိုတလင်' },
  { name: 'Jetpack Compose', percent: 95, burmese: 'ဂျန့်ပက်' },
  { name: 'MVVM Architecture', percent: 94, burmese: 'MVVM' },
  { name: 'Firebase', percent: 91, burmese: 'ဖီးဘ эфиँ' },
  { name: 'Room & Retrofit', percent: 93, burmese: 'ရूम' },
  { name: 'CI/CD Pipelines', percent: 90, burmese: 'CI/CD' },
  { name: 'Material 3', percent: 88, burmese: 'မေတီလား' },
  { name: 'Clean Architecture', percent: 92, burmese: 'ခလီးन' },
];

// Services (6 cards)
export const services = [
  {
    title: 'Android App Architecture',
    desc: 'Build secure, scalable apps with clean modular structure, MVVM, and production-grade patterns.',
    icon: 'fa-shield-alt',
    burmese_title: 'အန်ဒရောઇड အာခိတেকချား'
  },
  {
    title: 'Jetpack Compose UI',
    desc: 'Modern UI systems with animations, themes, accessibility, and state-driven composition.',
    icon: 'fa-palette',
    burmese_title: 'ဂျန့်ပက် ကိုမ္ပိုး'
  },
  {
    title: 'Firebase Integration',
    desc: 'Auth, Firestore, analytics, push notifications, and cloud workflows with robust error handling.',
    icon: 'fa-fire',
    burmese_title: 'ဖီးဘ အေ entrepreneurial'
  },
  {
    title: 'API & Networking',
    desc: 'REST integration, caching, offline-ready flows, and resilient data pipelines.',
    icon: 'fa-network-wired',
    burmese_title: 'API နဲ့ Network'
  },
  {
    title: 'CI/CD Automation',
    desc: 'Release automation with GitHub Actions, signing, quality gates, and deployment pipelines.',
    icon: 'fa-robot',
    burmese_title: 'CI/CD အောတို'
  },
  {
    title: 'Localization (Burmese)',
    desc: 'Burmese and English support with culturally aware UI copy and seamless language switching.',
    icon: 'fa-language',
    burmese_title: 'မြန်မာလိုင်း'
  },
];

// Projects (6 cards with tags)
export const projects = [
  { 
    title: 'Developer Dashboard', 
    tag: 'React + TypeScript', 
    desc: 'Production dashboard with data visualization and real-time analytics.',
    demo: '#', 
    source: 'https://github.com/', 
    color: 'cyan',
    burmese: 'တီချာပေါ်ဒါဘ်'
  },
  { 
    title: 'Translator Dashboard', 
    tag: 'Multi-language', 
    desc: 'Translation management platform supporting Burmese and English localization.',
    demo: '#', 
    source: 'https://github.com/', 
    color: 'pink',
    burmese: 'တာန့်စလေတာ'
  },
  { 
    title: 'Bangan Gold', 
    tag: 'Finance UI', 
    desc: 'Financial application with secure transaction handling and data encryption.',
    demo: '#', 
    source: 'https://github.com/', 
    color: 'yellow',
    burmese: 'ဘန်ဂန်ဂိုး'
  },
  { 
    title: 'Kotlin Jetpack App', 
    tag: 'Android', 
    desc: 'Modern Android app using Jetpack Compose, MVVM, and Material Design 3.',
    demo: '#', 
    source: 'https://github.com/', 
    color: 'cyan',
    burmese: 'ကိုတလင် ဂျန့်'
  },
  { 
    title: 'Portfolio 100', 
    tag: 'Brand Site', 
    desc: 'SaaS landing page with cyber-glassmorphism style and multi-page structure.',
    demo: '#', 
    source: 'https://github.com/', 
    color: 'pink',
    burmese: 'ပေါ်တဖီးလိုး'
  },
  { 
    title: 'SaaS Landing', 
    tag: 'Conversion', 
    desc: 'High-converting landing page with pricing, FAQ, testimonials, and contact forms.',
    demo: '#', 
    source: 'https://github.com/', 
    color: 'yellow',
    burmese: 'SaaS လန်းဒင်'
  },
];

// Tech-heavy specialties (from your query)
export const techSpecialties = [
  'Android Developer | Kotlin | Jetpack Compose | MVVM | Clean Architecture',
  'Android Engineer | Kotlin, Coroutines, Room, Retrofit, Dagger/Hilt',
  'Android Developer | Jetpack Compose, Material 3, Firebase, CI/CD',
  'Android Developer | Native Android, Modular Architecture, Performance Optimization',
  'Android Engineer | Kotlin Multiplatform (KMM) | Android | Backend Integration',
];

// Certificates collection
export const certificates = [
  { title: 'Android Developer Certified', issuer: 'Google', year: 2023, image: 'https://placehold.co/400x300/00f5ff/001018?text=Android+Cert' },
  { title: 'Firebase Expert', issuer: 'Google Cloud', year: 2022, image: 'https://placehold.co/400x300/ff4fd8/001018?text=Firebase+Cert' },
  { title: 'Kotlin Mastery', issuer: 'JetBrains', year: 2021, image: 'https://placehold.co/400x300/ffe84d/001018?text=Kotlin+Cert' },
  { title: 'CI/CD Professional', issuer: 'GitHub', year: 2023, image: 'https://placehold.co/400x300/00c9ff/001018?text=CI-CD+Cert' },
];

// Organization info
export const organization = {
  name: 'Moe Kyaw Aung Development',
  location: 'London, England, GB',
  email: 'moekyawaung13721@gmail.com',
  phone: '+95 900 000 0000',
  burmese_name: 'မိုးကျဲအောင် ဒီဗလောပမန့်',
};

// Mail collection (placeholder for email showcases)
export const mailCollection = [
  { subject: 'Project Inquiry - Android App', from: 'client@example.com', date: '2024-06-15' },
  { subject: 'Collaboration Opportunity', from: 'partner@company.com', date: '2024-06-10' },
  { subject: 'Job Offer - Senior Android', from: 'recruiter@tech.com', date: '2024-06-05' },
];

// Lovable WPA links collection
export const lovableWpaLinks = [
  { title: 'App Prototype v1', link: 'https://lovable.dev/prototype1', desc: 'Initial UI prototype with animations' },
  { title: 'Dashboard Demo', link: 'https://lovable.dev/dashboard', desc: 'Live dashboard with data viz' },
  { title: 'Mobile Mockup', link: 'https://lovable.dev/mockup', desc: 'Mobile app mockup design' },
];

// GitHub account collections
export const githubCollections = [
  { repo: 'moe-android-app', stars: 245, forks: 32, desc: 'Modern Android app with Jetpack' },
  { repo: 'firebase-integration Kit', stars: 189, forks: 28, desc: 'Firebase utilities package' },
  { repo: 'compose-ui library', stars: 312, forks: 45, desc: 'Reusable Compose UI components' },
];

// Testimonials
export const testimonials = [
  { 
    name: 'John Smith', 
    role: 'Tech Lead @ Startup', 
    text: 'Moe delivered a production-ready Android app in 3 months. Clean code, excellent communication.',
    avatar: 'https://placehold.co/80x80/00f5ff/001018?text=JS'
  },
  { 
    name: 'Sarah Lee', 
    role: 'Product Manager', 
    text: '12 years of experience really shows. The app performance is outstanding and bug-free.',
    avatar: 'https://placehold.co/80x80/ff4fd8/001018?text=SL'
  },
  { 
    name: 'David Chen', 
    role: 'CEO @ TechCorp', 
    text: 'Best Android developer we've worked with. Burmese localization was perfect.',
    avatar: 'https://placehold.co/80x80/ffe84d/001018?text=DC'
  },
];

// Pricing table (3 tiers)
export const pricingPlans = [
  {
    name: 'Starter',
    price: 1500,
    period: 'per app',
    features: [
      'Basic Android App',
      'UI Implementation',
      'REST API Integration',
      '1 Month Support',
    ],
    recommended: false,
  },
  {
    name: 'Professional',
    price: 3500,
    period: 'per app',
    features: [
      'Full-featured Android App',
      'MVVM + Clean Architecture',
      'Firebase Integration',
      'Unit Testing',
      '3 Months Support',
      'CI/CD Pipeline',
    ],
    recommended: true,
  },
  {
    name: 'Enterprise',
    price: 7000,
    period: 'per app',
    features: [
      'Enterprise-grade App',
      'Modular Architecture',
      'Multi-language Support',
      'Advanced Security',
      'Performance Optimization',
      '6 Months Support',
      'Full CI/CD Setup',
      'Code Documentation',
    ],
    recommended: false,
  },
];

// FAQ accordion (4+ questions)
export const faqs = [
  { 
    q: 'Do you support Burmese labels and messages?', 
    a: 'Yes, the interface includes Burmese-ready copy, validation messages, and localized layout patterns. I have experience developing multi-language apps supporting Burmese and English.',
    burmese_q: 'မြန်မာလိုင်း လိုဘယ်လား?'
  },
  { 
    q: 'Is the app mobile-friendly and responsive?', 
    a: 'Yes, all apps are designed to be fully responsive across desktop, tablet, and mobile devices with smooth transitions and micro-interactions.',
    burmese_q: 'မိုဘိုင်းလ် ဖြစ်လား?'
  },
  { 
    q: 'Can you convert this to Next.js for better SEO?', 
    a: 'Yes, the same content structure can be migrated to Next.js with SSR/SSG for enhanced SEO, metadata, and performance optimizations.',
    burmese_q: 'Next.js လားလို့?'
  },
  { 
    q: 'Can you connect to a CMS or backend?', 
    a: 'Yes, apps can be wired to Firebase, a headless CMS (like Supabase, Postgres), or any REST/GraphQL backend with proper error handling.',
    burmese_q: 'Backend နဲ့ဆက်လား?'
  },
  { 
    q: 'What is your development timeline?', 
    a: 'Typical timeline: Starter (2-3 weeks), Professional (4-6 weeks), Enterprise (8-12 weeks). Depends on complexity and feature requirements.',
    burmese_q: 'အချိန်ဘယ်လား?'
  },
  { 
    q: 'Do you provide post-launch support?', 
    a: 'Yes, all packages include support periods (1-6 months). I also offer ongoing maintenance and update services for long-term projects.',
    burmese_q: 'ဆော့ပို့လား?'
  },
];

// Gallery images (lightbox)
export const galleryImages = [
  { src: 'https://placehold.co/600x400/00f5ff/001018?text=App+UI+1', alt: 'Android App UI Design 1' },
  { src: 'https://placehold.co/600x400/ff4fd8/001018?text=Dashboard', alt: 'Dashboard Component' },
  { src: 'https://placehold.co/600x400/ffe84d/001018?text=Animation', alt: 'UI Animation Demo' },
  { src: 'https://placehold.co/600x400/00c9ff/001018?text=Architecture', alt: 'App Architecture' },
  { src: 'https://placehold.co/600x400/ff38d8/001018?text=Testing', alt: 'Unit Testing Setup' },
  { src: 'https://placehold.co/600x400/ffd84d/001018?text=CI-CD', alt: 'CI/CD Pipeline' },
];

// Contact form Burmese error messages
export const burmeseErrors = {
  name_required: 'အမည် လိုအပ်ပါသည်',
  email_required: 'အီးမေးလ် လိုအပ်ပါသည်',
  email_invalid: 'အီးမေးလ် ပုံစ် မမှန်ပါ',
  message_required: 'စာလွန် လိုအပ်ပါသည်',
  message_min: 'စာလွန် ကို 10 စာလုံး အနည်းအျင့် ရိုက်ပါ',
  submit_success: 'စာလွန် အောင်မြင်စွာ ပို့ခဲ့သည်',
  submit_error: 'ပို့ရာတွင် အမှား ရှိခဲ့သည်',
};
