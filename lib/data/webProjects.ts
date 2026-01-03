export interface WebProject {
  id: string;
  title: string;
  category: string;
  projectType: string; // E-commerce, Restaurant, Real Estate, Automotive, Business, B2B
  tools: string[];
  results: string;
  description: string;
  url: string;
}

export const webProjects: WebProject[] = [
  {
    id: 'cmc-auto',
    title: 'CMC Auto - Automotive Website',
    category: 'web',
    projectType: 'Automotive',
    tools: ['WordPress', 'PHP', 'JavaScript', 'CSS', 'WooCommerce'],
    results: 'Delivered a modern, fully responsive automotive website that significantly improved user engagement and conversion rates. The platform features seamless navigation, fast loading times, and an intuitive interface that showcases vehicles effectively.',
    description: 'WordPress website for CMC Auto, a leading automotive dealership in the UAE. Features modern responsive design, vehicle inventory system, and booking functionality.',
    url: 'https://cmcauto.ae'
  },
  {
    id: 'benex',
    title: 'Benex - Oil & Gas Solutions',
    category: 'web',
    projectType: 'B2B',
    tools: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
    results: 'Created a professional B2B website that effectively showcases oil & gas solutions and electrical supplies. The platform features intuitive navigation, comprehensive product catalogs, and streamlined inquiry systems that facilitate business communications.',
    description: 'Professional WordPress website for Benex, a worldwide provider of oil and gas solutions and electrical supplies. Features product catalogs, company information, and inquiry system.',
    url: 'https://benex.ae'
  },
  {
    id: 'avion-realty',
    title: 'Avion Realty - Real Estate Platform',
    category: 'web',
    projectType: 'Real Estate',
    tools: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
    results: 'Built a modern real estate platform with advanced property search and filtering capabilities. The website enables users to easily browse listings, view property details, and contact agents, resulting in improved lead generation and user satisfaction.',
    description: 'WordPress real estate website for Avion Realty. Features property listings, advanced search with filters, image galleries, and contact forms.',
    url: 'https://avionrealty.ae'
  },
  {
    id: 'nahar-typing',
    title: 'Nahar Al Madina Typing - Business Services',
    category: 'web',
    projectType: 'Business',
    tools: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
    results: 'Delivered a clean, professional website that clearly presents business services and facilitates client inquiries. The streamlined design and easy navigation have improved client engagement and inquiry rates.',
    description: 'WordPress website for Nahar Al Madina Typing, a business services provider. Features clean design, service descriptions, and contact forms.',
    url: 'https://naharalmadinatyping.com'
  },
  {
    id: 'eagle-restaurant',
    title: 'Eagle Restaurant - Food & Dining',
    category: 'web',
    projectType: 'Restaurant',
    tools: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
    results: 'Created an appetizing restaurant website that effectively showcases the menu and cuisine. The platform features beautiful food photography, easy menu navigation, and reservation functionality that has increased online bookings and customer engagement.',
    description: 'WordPress website for Eagle Restaurant, showcasing authentic Indian, Pakistani, and Bangladeshi cuisine. Features food photography, menu system, and reservation functionality.',
    url: 'https://eaglerestaurant.ae'
  },
  {
    id: 'shobkichu',
    title: 'Shobkichu - E-commerce Platform',
    category: 'web',
    projectType: 'E-commerce',
    tools: ['WordPress', 'WooCommerce', 'PHP', 'JavaScript', 'CSS'],
    results: 'Built a full-featured e-commerce platform that handles high traffic and provides seamless shopping experiences. The platform includes secure payment processing, user account management, and efficient order processing, resulting in increased sales and customer satisfaction.',
    description: 'WordPress e-commerce website for Shobkichu, an online electronics and gadgets store in Bangladesh. Built with WooCommerce, featuring product catalog, shopping cart, and secure checkout.',
    url: 'https://shobkichu.com.bd'
  },
  {
    id: 'eva-furniture',
    title: 'Eva Furniture - Furniture E-commerce',
    category: 'web',
    projectType: 'E-commerce',
    tools: ['WordPress', 'WooCommerce', 'PHP', 'JavaScript', 'CSS'],
    results: 'Delivered a modern furniture e-commerce platform with excellent product presentation and user experience. The website features intuitive navigation, detailed product pages, and seamless checkout, leading to increased online sales and customer satisfaction.',
    description: 'WordPress e-commerce website for Eva Furniture, optimized for furniture shopping in the UAE. Features product catalog, shopping cart, wishlist, and checkout.',
    url: 'https://evafurniture.ae'
  },
  {
    id: 'proscience-nutra',
    title: 'ProScience Nutra - Supplement Store',
    category: 'web',
    projectType: 'E-commerce',
    tools: ['WordPress', 'WooCommerce', 'PHP', 'JavaScript', 'CSS'],
    results: 'Developed a high-performing supplement e-commerce platform with goal-based product organization. The website features intuitive navigation, promotional campaigns, and efficient shopping experience, resulting in increased sales and improved customer engagement.',
    description: 'WordPress e-commerce website for ProScience Nutra, a nutrition and supplement store. Features goal-based product organization, shopping cart, wishlist, and promotional campaigns.',
    url: 'https://prosciencenutra.com'
  },
  {
    id: 'omnex',
    title: 'OMNEX - Oil & Gas Solutions',
    category: 'web',
    projectType: 'B2B',
    tools: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    results: 'Built a modern, high-performance B2B website showcasing global energy solutions. The platform features comprehensive product catalogs, ISO-certified quality standards presentation, and streamlined inquiry systems that facilitate international business communications and lead generation.',
    description: 'Next.js website for OMNEX, a global provider of oil & gas solutions and electrical supplies. Features product catalogs, technical specifications, global reach information, and comprehensive service offerings for upstream, midstream, and downstream operations.',
    url: 'https://omnex-five.vercel.app'
  },
  {
    id: 'bridge',
    title: 'BRIDGE - Business Development & Advisory',
    category: 'web',
    projectType: 'Business',
    tools: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    results: 'Created a professional business advisory website that effectively communicates services and builds trust with potential clients. The platform features clear service descriptions, client success stories, and streamlined consultation booking, resulting in increased inquiries and client engagement.',
    description: 'Next.js website for BRIDGE, a business development and advisory firm in Dubai. Features service offerings, market entry strategies, business setup guidance, client testimonials, and consultation booking functionality.',
    url: 'https://bridge-seven-delta.vercel.app'
  },
  {
    id: 'jnk-inventory',
    title: 'JNK Nutrition - Sales & Inventory System',
    category: 'web',
    projectType: 'Business',
    tools: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    results: 'Developed a comprehensive sales and inventory management system that streamlines operations and improves efficiency. The platform enables real-time tracking, sales management, and inventory control, resulting in improved operational efficiency and data accuracy.',
    description: 'Next.js application for JNK Nutrition sales and inventory management. Features sales tracking, inventory management, product catalog, and comprehensive reporting capabilities for nutrition product distribution.',
    url: 'https://inventory-app-brown-two.vercel.app'
  },
  {
    id: 'xotools',
    title: 'XOTools - Online Utility Tools',
    category: 'web',
    projectType: 'Business',
    tools: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    results: 'Built a fast and efficient online tools platform that provides instant access to utility tools without installation. The platform features image converters, QR code generators, PDF utilities, and more, resulting in high user engagement and tool usage.',
    description: 'Next.js platform offering a suite of fast and free online tools accessible directly from the browser. Features image converters, QR code generators, PDF utilities, and various productivity tools for instant use.',
    url: 'https://xotools.vercel.app'
  },
  {
    id: 'proscience-nutra-nextjs',
    title: 'ProScience Nutra - Next.js Platform',
    category: 'web',
    projectType: 'E-commerce',
    tools: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    results: 'Developed a modern, high-performance supplement e-commerce platform built with Next.js. The website features fast loading times, optimized product presentation, and seamless shopping experience, resulting in improved user engagement and conversion rates.',
    description: 'Next.js e-commerce website for ProScience Nutra, featuring premium science-backed supplements. Built with modern web technologies for optimal performance, featuring product catalogs, shopping functionality, and wellness-focused design.',
    url: 'https://prosciencenutra.vercel.app'
  },
];

export function getWebProjectBySlug(slug: string): WebProject | undefined {
  return webProjects.find(project => project.id === slug);
}

export function getAllWebProjectSlugs(): string[] {
  return webProjects.map(project => project.id);
}

