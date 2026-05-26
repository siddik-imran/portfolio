// All content extracted directly from CV — edit here to update site copy.

import {
  SiLaravel,
  SiPhp,
  SiReact,
  SiVuedotjs,
  SiJavascript,
  SiMysql,
  SiTailwindcss,
  SiBootstrap,
  SiDocker,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiJquery,
  SiHtml5,
  SiCss,
  SiStripe,
  SiOpenai,
  SiClaude,
} from 'react-icons/si'
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaLayerGroup,
  FaPalette,
  FaTools,
  FaRobot,
} from 'react-icons/fa'

export const personal = {
  name: 'Imran Hasan',
  firstName: 'Imran',
  role: 'Full-Stack Web Developer',
  tagline:
    'I build scalable SaaS platforms and modern web applications with Laravel, React, and Vue.js.',
  summary:
    'Results-driven Software Engineer with 4+ years of experience building scalable full-stack web applications using Laravel, PHP, React.js, Vue.js, and MySQL. Proficient in REST API development, database design, performance optimization, and modern front-end technologies. Committed to delivering maintainable, user-focused solutions with clean architecture and efficient problem-solving.',
  location: 'Kushtia, Bangladesh',
  availability: 'Open to remote, freelance & full-time roles',
  email: 'siddikimraan@gmail.com',
  phone: '+8801774441359',
  whatsapp: '8801774441359', // digits only, used for wa.me
  photo: './profile.jpg',
  cv: './Imran_Hasan_CV.pdf',
  socials: {
    github: 'https://github.com/siddik-imran',
    linkedin: 'https://www.linkedin.com/in/imranhasansiddiki',
    email: 'mailto:siddikimraan@gmail.com',
    whatsapp: 'https://wa.me/8801774441359',
  },
  stats: [
    { label: 'Years of experience', value: '4+' },
    { label: 'Projects delivered', value: '20+' },
    { label: 'Happy clients', value: '15+' },
    { label: 'Tech stacks', value: '12+' },
  ],
}

export const skills = [
  {
    group: 'Backend',
    icon: FaServer,
    items: [
      { name: 'PHP', icon: SiPhp },
      { name: 'Laravel', icon: SiLaravel },
      { name: 'REST APIs', icon: FaCode },
      { name: 'MySQL', icon: SiMysql },
      { name: 'SQL', icon: FaDatabase },
    ],
  },
  {
    group: 'Frontend',
    icon: FaCode,
    items: [
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'React.js', icon: SiReact },
      { name: 'Vue.js', icon: SiVuedotjs },
      { name: 'jQuery', icon: SiJquery },
      { name: 'AJAX', icon: FaCode },
    ],
  },
  {
    group: 'UI & Styling',
    icon: FaPalette,
    items: [
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Bootstrap', icon: SiBootstrap },
    ],
  },
  {
    group: 'Architecture',
    icon: FaLayerGroup,
    items: [
      { name: 'MVC', icon: FaLayerGroup },
      { name: 'SPA Development', icon: FaCode },
      { name: 'Database Design', icon: FaDatabase },
      { name: 'SaaS Architecture', icon: FaServer },
    ],
  },
  {
    group: 'Tools & DevOps',
    icon: FaTools,
    items: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'GitHub Actions (CI/CD)', icon: SiGithubactions },
      { name: 'Docker', icon: SiDocker },
    ],
  },
  {
    group: 'AI Workflow',
    icon: FaRobot,
    items: [
      { name: 'ChatGPT', icon: SiOpenai },
      { name: 'Claude', icon: SiClaude },
      { name: 'Cursor', icon: FaRobot },
      { name: 'AI-Assisted Debugging', icon: FaRobot },
    ],
  },
]

export const experience = [
  {
    role: 'Software Engineer',
    company: 'Clevpro',
    location: 'Cumilla, Bangladesh',
    mode: 'Hybrid',
    period: 'Sept 2023 – Present',
    stack: ['Laravel', 'React.js', 'Vue.js', 'MySQL', 'REST APIs', 'Git', 'Docker'],
    highlights: [
      'Developed and maintained scalable web applications using Laravel and React.js, serving multiple clients.',
      'Collaborated with cross-functional teams to deliver high-quality solutions on schedule.',
      'Integrated third-party APIs to streamline automation and boost operational efficiency.',
      'Developed RESTful APIs and optimized database queries, improving API performance and database efficiency.',
    ],
  },
  {
    role: 'Web Developer',
    company: 'SATT Academy',
    location: 'Rajshahi, Bangladesh',
    mode: 'On-site',
    period: 'Jan 2022 – Aug 2023',
    stack: ['Laravel', 'JavaScript', 'REST APIs', 'Git'],
    highlights: [
      'Built dynamic web applications using the Laravel framework for internal and client projects.',
      'Designed and implemented backend REST APIs and admin panels for content management.',
      'Enhanced system reliability through targeted debugging and performance tuning.',
    ],
  },
  {
    role: 'Web Developer Intern',
    company: 'IT Scholar',
    location: 'Dhaka, Bangladesh',
    mode: 'On-site',
    period: 'Sep 2021 – Dec 2021',
    stack: ['PHP', 'Laravel', 'MVC'],
    highlights: [
      'Developed PHP-based web applications under senior developer guidance.',
      'Applied MVC architecture patterns and Laravel framework in production projects.',
    ],
  },
]

export const projects = [
  {
    name: 'Joincorely',
    tagline: 'Multi-tenant SaaS platform for Pilates studios',
    description:
      'Built a multi-tenant SaaS platform for Pilates businesses featuring tenant isolation, custom domains, admin dashboards, and full website management.',
    stack: ['Laravel', 'JavaScript', 'jQuery', 'Stripe', 'REST APIs', 'Bootstrap', 'MySQL'],
    tags: ['SaaS', 'Multi-tenancy', 'Payments'],
    accent: 'from-violet-500 to-fuchsia-500',
    featured: true,
  },
  {
    name: 'SpaceNest',
    tagline: 'Space rental & booking platform',
    description:
      'Engineered a space rental and booking platform enabling property listing, browsing, and management with real-time availability and scheduling.',
    stack: ['Laravel', 'React.js', 'Tailwind CSS', 'MySQL'],
    tags: ['Marketplace', 'Booking', 'Real-time'],
    accent: 'from-cyan-500 to-blue-500',
    featured: true,
  },
  {
    name: 'Clubband CRM',
    tagline: 'Event & band management CRM',
    description:
      'Developed an event and band management system handling booking requests, event coordination, performer management, and scheduling for administrators.',
    stack: ['Laravel', 'JavaScript', 'jQuery', 'REST APIs', 'Bootstrap', 'MySQL'],
    tags: ['CRM', 'Scheduling', 'Admin'],
    accent: 'from-emerald-500 to-teal-500',
    featured: true,
  },
  {
    name: 'Fineme',
    tagline: 'Mobile beauty services on demand',
    description:
      'Built a mobile beauty service platform enabling users to book salon services at their preferred location with appointment scheduling and service management.',
    stack: ['Laravel', 'JavaScript', 'jQuery', 'Bootstrap', 'MySQL'],
    tags: ['Booking', 'On-demand'],
    accent: 'from-pink-500 to-rose-500',
    featured: false,
  },
  {
    name: 'Buildela',
    tagline: 'Job marketplace for skilled professionals',
    description:
      'Developed a job marketplace connecting clients with skilled professionals for project collaboration and hiring.',
    stack: ['PHP', 'JavaScript', 'jQuery', 'REST APIs', 'Bootstrap', 'MySQL'],
    tags: ['Marketplace', 'Hiring'],
    accent: 'from-amber-500 to-orange-500',
    featured: false,
  },
  {
    name: 'SATT Academy',
    tagline: 'Online learning platform',
    description:
      'Built an online learning platform for course management, student progress tracking, and interactive educational content.',
    stack: ['Laravel', 'JavaScript', 'jQuery', 'Bootstrap', 'MySQL'],
    tags: ['EdTech', 'LMS'],
    accent: 'from-indigo-500 to-violet-500',
    featured: false,
  },
]

export const services = [
  {
    title: 'Full-Stack Web Development',
    description:
      'End-to-end development of modern web applications using Laravel on the backend and React or Vue on the frontend — clean architecture, scalable from day one.',
    icon: FaCode,
    accent: 'text-accent',
  },
  {
    title: 'SaaS & Multi-Tenant Platforms',
    description:
      'Build SaaS products from scratch with tenant isolation, custom domains, subscription billing (Stripe), and admin dashboards.',
    icon: FaLayerGroup,
    accent: 'text-accent-cyan',
  },
  {
    title: 'REST API Design & Integration',
    description:
      'Design clean, well-documented RESTful APIs and integrate third-party services to automate business workflows.',
    icon: FaServer,
    accent: 'text-accent-pink',
  },
  {
    title: 'Database Design & Optimization',
    description:
      'Architect efficient relational schemas in MySQL and optimize slow queries to keep applications fast at scale.',
    icon: FaDatabase,
    accent: 'text-accent-emerald',
  },
  {
    title: 'Admin Dashboards & CMS',
    description:
      'Custom admin panels and content management systems tailored to your operations — not bloated, off-the-shelf templates.',
    icon: FaPalette,
    accent: 'text-accent',
  },
  {
    title: 'Code Review & Refactoring',
    description:
      'Audit legacy PHP/Laravel codebases, fix performance bottlenecks, and modernize them with current best practices.',
    icon: FaTools,
    accent: 'text-accent-cyan',
  },
]

export const education = [
  {
    degree: 'B.Sc. in Computer Science & Engineering',
    school: 'Stamford University Bangladesh',
    period: '2016 – 2020',
    detail: 'CGPA: 3.45',
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]
