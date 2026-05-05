// lib/data.ts — All static content for Accounting Square

export const TEAM_MEMBERS = [
  {
    id: 'ankur',
    name: 'Ankur Madanlal Jain',
    role: 'Managing Partner',
    linkedin: 'https://www.linkedin.com/in/ankur-m-jain-97070349/',
    photo: '/ankur.png',
    photoPosition: 'center top',
    quote:
      'Financial clarity isn\'t just about the numbers — it\'s about giving leadership the confidence to act decisively.',
    bio: 'Chartered Accountant (CA) with experience across management accounting, fractional finance, and strategic advisory for international businesses. Led finance functions for PE-backed companies across the UK, Singapore, and the Middle East.',
    stats: [{ label: 'Since 2015', value: 'Practice' }, { label: 'Chartered Accountant', highlight: true }],
    tags: [
      { label: 'Management Accounts', highlight: true },
      { label: 'Financial Strategy', highlight: true },
      { label: 'IFRS' },
      { label: 'Global Taxation' },
      { label: 'Board Reporting' },
      { label: 'FP&A' },
    ],
  },
  {
    id: 'dhwani',
    name: 'Dhwani Doshi',
    role: 'Controller Services Lead',
    linkedin: 'https://www.linkedin.com/in/dhwani-doshi-2b8928112/',
    photo: '/dhwani.png',
    photoPosition: 'center 30%',
    quote:
      'Numbers tell the story of a business — my job is to make sure that story is accurate, timely, and decision-ready.',
    bio: 'Chartered Accountant (CA) with experience across financial services and the Indian treasury sector. Previously at CitiCorp Services, Morgan Stanley, Tata Trusts, and Desai Haribhakti. Specialises in MIS dashboards, capital planning, tax compliance, and working with global CFO teams. Based in Mumbai.',
    stats: [{ label: 'Since 2015', value: 'Practice' }, { label: 'Chartered Accountant', highlight: true }],
    tags: [
      { label: 'Controller Services', highlight: true },
      { label: 'PE-backed Firms', highlight: true },
      { label: 'US GAAP' },
      { label: 'Tax Compliance' },
      { label: 'Real Estate' },
      { label: 'Audit Readiness' },
    ],
  },
]

export const STATS = [
  { eyebrow: 'Track record',  value: 2015, suffix: '',   label: 'In practice since', detail: 'Serving international clients for over a decade' },
  { eyebrow: 'Client base',   value: 40,   suffix: '+',  label: 'Global clients',    detail: 'Active across 12+ countries & 3 time zones' },
  { eyebrow: 'Sectors covered', value: 8,  suffix: '',   label: 'Industries served', detail: 'SaaS, real estate, PE, professional services & more' },
  { eyebrow: 'Client loyalty', value: 99,  suffix: '%',  label: 'Retention rate',    detail: 'Averaged over 5 years of continuous client relationships' },
]

// Updated to include the Malad, Mumbai focus
export const OFFICE_ADDRESS = {
  city: 'Mumbai',
  area: 'Malad',
  full: 'Malad, Mumbai, India'
}

export const TRUST_COUNTRIES = [
  { name: 'United Kingdom' },
  { name: 'India' },
  { name: 'UAE' },
  { name: 'Canada' },
  { name: 'Singapore' },
  { name: 'Australia' },
  { name: 'United States' },
  { name: 'New Zealand' },
  { name: 'Norway' },
  { name: 'China' },
]

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Discovery Call',
    tag: 'First contact',
    desc: 'A focused 30-minute conversation to understand your business, current setup, and goals. No agenda — just listening.',
    stats: ['30-min session', 'No obligation', 'Video or call'],
  },
  {
    step: '02',
    title: 'Tailored Proposal',
    tag: 'Within 48 hrs',
    desc: 'A clear, scope-specific proposal with transparent pricing, timelines, and deliverables — in plain language.',
    stats: ['Clearly scoped', 'Transparent pricing'],
  },
  {
    step: '03',
    title: 'Onboarding Sprint',
    tag: 'Weeks 1–2',
    desc: 'Structured onboarding sets up accounts, software access, chart of accounts, and reporting templates completely.',
    stats: ['System setup', 'Historical catch-up', '2-week sprint'],
  },
  {
    step: '04',
    title: 'Ongoing Delivery',
    tag: 'Every month',
    desc: 'Regular reporting, proactive insights, dedicated point of contact — on the same schedule, every month, without chasing.',
    stats: ['Monthly reporting', 'Partner oversight', 'Proactive insights'],
  },
]

export const PROMISES = [
  {
    num: '01',
    title: 'You will always have <em>senior</em> oversight',
    text: 'While work is executed by our skilled team, every report and strategy is personally reviewed and guided by <strong>Ankur or Dhwani</strong>.',
  },
  {
    num: '02',
    title: 'Your numbers will always be <em>ready</em>',
    text: 'Management accounts by day 5. Board packs by day 8. <strong>Fixed, reliable deadlines</strong> every month.',
  },
  {
    num: '03',
    title: 'Global Tax <em>Expertise</em>',
    text: 'We handle taxation for <strong>India, US, UK, Dubai, Norway, and China</strong>, including complex <strong>DTAA</strong> management.',
  },
]

export const TESTIMONIALS_INLINE = [
  {
    quote: 'Dhwani gave us CFO-level rigour without the cost. The confidence she built in our numbers is what got us through our Series A.',
    name: 'David R.',
    role: 'Founder, PropTech · Toronto',
    av: 'DR',
    cls: 'tav2',
    delay: 100,
  },
  {
    quote: 'Three time zones, zero missed deadlines. When I have a question I get an answer the same day.',
    name: 'Nadia K.',
    role: 'CFO, PE fund · Dubai',
    av: 'NK',
    cls: 'tav3',
    delay: 180,
  },
  {
    quote: 'They raised a cash-flow gap three weeks before it hit. That\'s not accounting. That\'s partnership.',
    name: 'James M.',
    role: 'MD, Real Estate · Singapore',
    av: 'JM',
    cls: 'tav1',
    delay: 260,
  },
]

export const FAQS = [
  {
    q: 'What is included in your management accounting service?',
    a: 'Every month you receive a complete management accounts pack — P&L, balance sheet, cash flow, and commentary in plain English. Benchmarked against prior periods, delivered by Day 5. No chasing, no surprises.',
  },
  {
    q: 'Do I work with a junior or a senior accountant?',
    a: 'Work is performed by our qualified team under the direct guidance and rigorous review of Ankur or Dhwani. You get partner-level strategy with dedicated execution.',
  },
  {
    q: 'Can you handle international taxation?',
    a: 'Yes. We specialize in tax handling for India, US, UK, Dubai, Norway, and China. We are also experts in DTAA (Double Taxation Avoidance Agreement) to ensure your global operations are tax-efficient.',
  },
  {
    q: 'How quickly do you respond to questions?',
    a: 'Same day — almost always. We don\'t use a ticket system. If you email on a working day, you hear back that day. For anything urgent, we\'re on a call within the hour.',
  },
  {
    q: 'What size of business do you typically work with?',
    a: 'Our sweet spot is founder-led and PE-backed businesses with turnover between $500k and $20m. We also work with startups needing clean books ahead of a raise.',
  },
  {
    q: 'How do engagements typically start?',
    a: 'A free 30-minute discovery call. We learn about your business and what\'s not working. If there\'s a fit, we send a clear proposal within 48 hours. Onboarding takes one to two weeks.',
  },
]

export const DIAL_CODES = [
  { flag: '🇬🇧', code: '+44',    min: 10, max: 10, label: '🇬🇧 +44' },
  { flag: '🇺🇸', code: '+1',     min: 10, max: 10, label: '🇺🇸 +1' },
  { flag: '🇮🇳', code: '+91',    min: 10, max: 10, label: '🇮🇳 +91' },
  { flag: '🇦🇪', code: '+971',   min: 9,  max: 9,  label: '🇦🇪 +971' },
  { flag: '🇸🇬', code: '+65',    min: 8,  max: 8,  label: '🇸🇬 +65' },
  { flag: '🇦🇺', code: '+61',    min: 9,  max: 9,  label: '🇦🇺 +61' },
  { flag: '🇨🇦', code: '+1-CA',  min: 10, max: 10, label: '🇨🇦 +1' },
]