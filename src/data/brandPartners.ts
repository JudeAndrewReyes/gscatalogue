export const brandPartners = [
  {
    id: 'stihl',
    name: 'STIHL',
    logo: '🟠',
    featured: true,
    since: '2018',
    category: 'Power Tools & Outdoor Equipment',
    description: 'World leader in chainsaws and outdoor power equipment',
    benefits: [
      'Authorized warranty service',
      'Genuine parts & accessories',
      'Bulk contractor pricing',
      'Technical support & training'
    ],
    products: [
      'Professional Chainsaws',
      'Trimmers & Brushcutters',
      'Blowers & Clearing Equipment',
      'Pole Saws & Tree Care',
      'Protective Equipment'
    ],
    totalValue: '₱50M+',
    status: 'Authorized Dealer'
  },
  {
    id: 'dewalt',
    name: 'DeWalt',
    logo: '🟡',
    featured: false,
    since: '2015',
    category: 'Power Tools & Construction',
    description: 'Professional power tools and construction equipment',
    products: [
      'Cordless Power Tools',
      'Construction Equipment',
      'Hand Tools',
      'Storage Solutions'
    ],
    status: 'Authorized Distributor'
  },
  {
    id: 'makita',
    name: 'Makita',
    logo: '🔵',
    featured: false,
    since: '2016',
    category: 'Power Tools & Equipment',
    description: 'Professional cordless and corded power tools',
    products: [
      'Cordless Tool Systems',
      'Industrial Equipment',
      'Outdoor Power Equipment',
      'Pneumatic Tools'
    ],
    status: 'Authorized Dealer'
  },
  {
    id: '3m',
    name: '3M',
    logo: '🔴',
    featured: false,
    since: '2014',
    category: 'Safety & Industrial',
    description: 'Safety equipment and industrial solutions',
    products: [
      'Personal Protection Equipment',
      'Industrial Tapes & Adhesives',
      'Safety & Security Systems',
      'Healthcare Products'
    ],
    status: 'Authorized Distributor'
  },
  {
    id: 'bosch',
    name: 'Bosch',
    logo: '🟢',
    featured: false,
    since: '2017',
    category: 'Tools & Technology',
    description: 'Professional tools and automotive equipment',
    products: [
      'Professional Power Tools',
      'Measuring Tools',
      'Automotive Equipment',
      'Security Systems'
    ],
    status: 'Authorized Dealer'
  },
  {
    id: 'milwaukee',
    name: 'Milwaukee',
    logo: '🔴',
    featured: false,
    since: '2019',
    category: 'Heavy Duty Tools',
    description: 'Heavy duty power tools and equipment',
    products: [
      'Heavy Duty Power Tools',
      'Professional Equipment',
      'Hand Tools',
      'Storage & Organization'
    ],
    status: 'Authorized Distributor'
  },
  {
    id: 'caterpillar',
    name: 'Caterpillar',
    logo: '🟡',
    featured: false,
    since: '2013',
    category: 'Heavy Equipment',
    description: 'Heavy machinery and industrial equipment',
    products: [
      'Construction Equipment',
      'Mining Equipment',
      'Power Systems',
      'Parts & Service'
    ],
    status: 'Authorized Dealer'
  },
  {
    id: 'toyota',
    name: 'Toyota',
    logo: '🔴',
    featured: false,
    since: '2012',
    category: 'Material Handling',
    description: 'Forklifts and material handling equipment',
    products: [
      'Forklifts & Lift Trucks',
      'Material Handling Equipment',
      'Warehouse Solutions',
      'Parts & Service'
    ],
    status: 'Authorized Dealer'
  },
  {
    id: 'schneider',
    name: 'Schneider Electric',
    logo: '🟢',
    featured: false,
    since: '2015',
    category: 'Electrical Systems',
    description: 'Electrical and automation solutions',
    products: [
      'Power Distribution',
      'Industrial Automation',
      'Building Management',
      'Data Centers'
    ],
    status: 'Authorized Partner'
  },
  {
    id: 'john-deere',
    name: 'John Deere',
    logo: '🟢',
    featured: false,
    since: '2016',
    category: 'Agricultural Equipment',
    description: 'Agricultural machinery and equipment',
    products: [
      'Tractors & Combines',
      'Agricultural Equipment',
      'Construction Equipment',
      'Parts & Service'
    ],
    status: 'Authorized Dealer'
  }
];

export const getFeaturedPartners = () => {
  return brandPartners.filter(partner => partner.featured);
};

export const getPartnersByCategory = (category: string) => {
  return brandPartners.filter(partner => 
    partner.category.toLowerCase().includes(category.toLowerCase())
  );
};

export const getPartnerById = (id: string) => {
  return brandPartners.find(partner => partner.id === id);
};