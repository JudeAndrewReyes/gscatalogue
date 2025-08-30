export const projectExamples = [
  {
    id: 1,
    title: 'Construction Project - Makati City',
    icon: '🏗️',
    location: 'Makati Business District',
    client: 'Major Construction Company',
    type: 'Commercial Construction',
    items: [
      '500+ Hard Hats & Safety Equipment',
      'STIHL Professional Chainsaws & Tools',
      'Scaffolding System (Complete Setup)',
      'Industrial Generators & Power Tools'
    ],
    value: '₱2.5M',
    delivery: '5 days',
    description: 'Complete safety and construction equipment package for high-rise building project',
    categories: ['safety', 'construction', 'electrical'],
    timeline: {
      ordered: '2024-01-15',
      delivered: '2024-01-20',
      completed: '2024-01-22'
    },
    specialRequirements: [
      'Rush delivery required',
      'On-site safety training included',
      'Equipment maintenance support'
    ],
    outcome: 'Project completed on time with zero safety incidents'
  },
  {
    id: 2,
    title: 'Manufacturing Facility - Laguna',
    icon: '🏭',
    location: 'Laguna Technopark',
    client: 'Electronics Manufacturing',
    type: 'Industrial Setup',
    items: [
      'Industrial Machinery & Equipment',
      'Material Handling Systems',
      'Safety & Security Systems',
      'Electrical & Power Distribution'
    ],
    value: '₱8.3M',
    delivery: '14 days',
    description: 'Complete manufacturing facility setup including machinery, safety systems, and infrastructure',
    categories: ['industrial', 'electrical', 'safety'],
    timeline: {
      ordered: '2024-02-01',
      delivered: '2024-02-15',
      completed: '2024-02-20'
    },
    specialRequirements: [
      'Technical installation support',
      'Staff training programs',
      'Preventive maintenance contracts'
    ],
    outcome: 'Facility operational 2 days ahead of schedule'
  },
  {
    id: 3,
    title: 'Agricultural Modernization - Nueva Ecija',
    icon: '🚜',
    location: 'Nueva Ecija Rice Farm',
    client: 'Agricultural Cooperative',
    type: 'Farm Equipment',
    items: [
      'Modern Tractors & Farm Equipment',
      'STIHL Outdoor Power Equipment',
      'Irrigation & Water Systems',
      'Grain Storage & Processing'
    ],
    value: '₱4.2M',
    delivery: '18 days',
    description: 'Farm modernization project including tractors, irrigation, and processing equipment',
    categories: ['agriculture', 'specialized'],
    timeline: {
      ordered: '2024-03-01',
      delivered: '2024-03-19',
      completed: '2024-03-25'
    },
    specialRequirements: [
      'Financing arrangements',
      'Operator training',
      'Local service support'
    ],
    outcome: '40% increase in farm productivity reported'
  },
  {
    id: 4,
    title: 'Corporate Office Setup - BGC',
    icon: '🏢',
    location: 'Bonifacio Global City',
    client: 'Multinational Corporation',
    type: 'Office & IT',
    items: [
      'Premium Office Furniture',
      'Conference & AV Systems',
      'IT & Network Equipment',
      'Security & Access Control'
    ],
    value: '₱3.5M',
    delivery: '10 days',
    description: 'Complete corporate office setup for multinational company expansion',
    categories: ['office', 'electrical', 'safety'],
    timeline: {
      ordered: '2024-04-05',
      delivered: '2024-04-15',
      completed: '2024-04-18'
    },
    specialRequirements: [
      'Weekend installation',
      'Minimal business disruption',
      'Premium finish requirements'
    ],
    outcome: 'Office ready for 500+ employees on schedule'
  },
  {
    id: 5,
    title: 'Resort Water Treatment - Palawan',
    icon: '🏖️',
    location: 'El Nido, Palawan',
    client: 'Luxury Resort',
    type: 'Specialized Systems',
    items: [
      'Water Treatment & Filtration',
      'Swimming Pool Equipment',
      'Pump & Distribution Systems',
      'Monitoring & Control Systems'
    ],
    value: '₱2.1M',
    delivery: '12 days',
    description: 'Complete water treatment and pool systems for luxury beachfront resort',
    categories: ['specialized', 'electrical'],
    timeline: {
      ordered: '2024-05-01',
      delivered: '2024-05-13',
      completed: '2024-05-16'
    },
    specialRequirements: [
      'Remote location logistics',
      'Saltwater compatibility',
      '24/7 system reliability'
    ],
    outcome: 'Crystal clear water systems operational before peak season'
  },
  {
    id: 6,
    title: 'Automotive Service Center - Cebu',
    icon: '🔧',
    location: 'Cebu Business Park',
    client: 'Automotive Dealership',
    type: 'Service Equipment',
    items: [
      'Automotive Diagnostic Equipment',
      'Lift & Service Equipment',
      'Tools & Workshop Setup',
      'Parts & Inventory Systems'
    ],
    value: '₱2.8M',
    delivery: '8 days',
    description: 'Complete automotive service center setup with modern diagnostic equipment',
    categories: ['automotive', 'construction'],
    timeline: {
      ordered: '2024-06-10',
      delivered: '2024-06-18',
      completed: '2024-06-22'
    },
    specialRequirements: [
      'Technical certification',
      'Technician training',
      'Warranty support'
    ],
    outcome: 'Service center certified and operational'
  }
];

export const getProjectsByCategory = (categoryId) => {
  return projectExamples.filter(project => 
    project.categories.includes(categoryId)
  );
};

export const getProjectsByValue = (minValue) => {
  return projectExamples.filter(project => {
    const value = parseFloat(project.value.replace(/[₱,M]/g, ''));
    return value >= minValue;
  });
};

export const getRecentProjects = (limit = 3) => {
  return projectExamples
    .sort((a, b) => new Date(b.timeline.ordered) - new Date(a.timeline.ordered))
    .slice(0, limit);
};