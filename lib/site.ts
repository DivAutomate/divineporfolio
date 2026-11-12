export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://divinejude.vercel.app'

export const site = {
  name: 'Divine Jude',
  email: 'judedivine9@gmail.com',
  booking: 'https://calendly.com/divinejude/30min',
  location: 'Nigeria · Working remotely worldwide',
  portrait: '/images/portrait.webp',
  socials: [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/divinechidubem' },
    { label: 'X', href: 'https://x.com/divautomation' },
  ],
}

export type Project = {
  slug: string
  title: string
  category: string
  description: string
  tags: string[]
  image: string
  imageAlt: string
  href: string
}

export const projects: Project[] = [
  {
    slug: 'executive-support',
    title: 'Executive & Virtual Support',
    category: 'Executive assistance · Personal administration',
    description: 'A support framework that cut a leader’s daily inbox time from 3.5 hours to 45 minutes and gave back 25% of their week.',
    tags: ['Inbox & calendar', 'Travel', 'Reporting'],
    image: '/images/covers/executive-support.webp',
    imageAlt: 'Illustration of a weekly calendar, envelope, travel ticket, and checklist',
    href: '/case-study/executive-virtual-support',
  },
  {
    slug: 'project-management',
    title: 'Project Management',
    category: 'Project coordination · Global delivery',
    description: 'One shared system that kept 100+ multilingual projects moving across three timezones, with 98% delivered on time.',
    tags: ['Trello', 'Vendor management', 'QA'],
    image: '/images/covers/project-management.webp',
    imageAlt: 'Illustration of a task board with clocks showing different timezones',
    href: '/case-study/transperfect',
  },
  {
    slug: 'lead-generation',
    title: 'Lead Generation',
    category: 'Prospect research · Outbound pipeline',
    description: 'A research-led outreach program that turned 1,975+ prospects into 231 qualified leads in 12 weeks.',
    tags: ['Apollo', 'Sales Navigator', 'Email deliverability'],
    image: '/images/covers/lead-generation.webp',
    imageAlt: 'Illustration of contact cards narrowing through a funnel into one qualified lead',
    href: '/case-study/windwire',
  },
  {
    slug: 'seo-ecommerce',
    title: 'SEO & E-Commerce',
    category: 'Shopify SEO · Paid media',
    description: 'Technical SEO and ad restructuring that grew organic traffic by 350% and lifted ad returns to 3.5x for a small brand.',
    tags: ['Shopify', 'Ahrefs', 'Meta Ads'],
    image: '/images/covers/seo-ecommerce.webp',
    imageAlt: 'Illustration of an online store window with a rising traffic chart',
    href: '/case-study/pura-utz',
  },
  {
    slug: 'field-operations',
    title: 'CRM & AI Workflow Automation',
    category: 'Field operations · Route scheduling',
    description: 'A routing system that moved 2,000+ sites off paper, scheduled 17 daily routes, and cleared a three-week backlog.',
    tags: ['GoHighLevel', 'n8n', 'Webhooks'],
    image: '/images/covers/field-operations.webp',
    imageAlt: 'Illustration of a route schedule and map with connected location pins',
    href: '/case-study/mahoney-environmental',
  },
  {
    slug: 'ai-implementation',
    title: 'AI Implementation',
    category: 'Deal screening · Document review',
    description: 'Two connected workflows that screen property deals, contact brokers, and check title documents, cutting review time by 80%.',
    tags: ['n8n', 'LangChain', 'Airtable'],
    image: '/images/covers/ai-implementation.webp',
    imageAlt: 'Illustration of a property document connected to two review steps',
    href: '/case-study/ai-implementation',
  },
  {
    slug: 'invoice-automation',
    title: 'Invoice Processing',
    category: 'Accounts payable · Back office',
    description: 'An invoice workflow that cut processing from 40 minutes to under 10, with seven in ten invoices handled hands-free.',
    tags: ['n8n', 'Vision OCR', 'Zoho Books'],
    image: '/images/invoice-automation-cover.webp',
    imageAlt: 'Illustration of an approved invoice moving through a workflow',
    href: '/case-study/invoice-automation',
  },
]

export const services = [
  { title: 'Executive & virtual assistance', text: 'Inbox and calendar management, travel, research, and follow-ups that protect your time.' },
  { title: 'Project coordination', text: 'Clear timelines, task boards, vendor handoffs, and status updates that keep delivery on track.' },
  { title: 'Lead generation', text: 'Targeted prospect research, verified lists, and personal outreach that fills your pipeline.' },
  { title: 'SEO & e-commerce', text: 'Store upkeep, technical SEO, product listings, and ad management that turn visits into sales.' },
  { title: 'Data & reporting', text: 'Clean spreadsheets, tidy CRMs, and simple dashboards, so decisions start from accurate numbers.' },
  { title: 'Workflow automation', text: 'Practical automations for repetitive tasks, used only where they genuinely save time.' },
]

export const engagements = [
  {
    name: 'Part-time',
    price: '$850',
    cadence: '/month',
    scope: 'About 20 hours a week. Inbox, calendar, research, project tracking and reporting.',
  },
  {
    name: 'Full-time',
    price: '$1,500',
    cadence: '/month',
    scope: 'About 35–40 hours a week. The same work, with full attention and same-day turnaround.',
  },
  {
    name: 'One-off projects',
    price: 'Quoted',
    cadence: 'per project',
    scope: 'Automations, data cleanups and builds, scoped and priced before we start.',
  },
]

export const stats = [
  { value: '98%', label: 'Projects delivered on time' },
  { value: '231', label: 'Qualified leads in 12 weeks' },
  { value: '+350%', label: 'Organic store traffic' },
  { value: '25%', label: 'Of a leader’s week reclaimed' },
]
