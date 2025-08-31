export const categories = [
  {
    id: 'safety',
    title: 'Safety & Security',
    icon: '🛡️',
    items: '150+ Items',
    leadTime: '3-7d',
    description: 'PPE Equipment, Safety Systems, Rescue Gear',
    details: {
      capabilities: [
        'Personal Protective Equipment (PPE)',
        'Safety Management Systems',
        'Emergency & Rescue Equipment',
        'Security & Surveillance Systems'
      ],
      brands: ['3M', 'MSA', 'Honeywell', 'DuPont', 'Bullard'],
      recentProjects: [
        'Construction Site Safety Package - Makati - ₱850K',
        'Industrial PPE Supply - Bataan - ₱1.2M',
        'Security System Installation - BGC - ₱680K'
      ]
    }
  },
  {
    id: 'industrial',
    title: 'Industrial Manufacturing',
    icon: '🏭',
    items: '245+ Items',
    leadTime: '7-14d',
    description: 'Heavy Machinery, Manufacturing Tools, Material Handling',
    details: {
      capabilities: [
        'Heavy Manufacturing Equipment',
        'Industrial Tools & Machinery',
        'Material Handling Systems',
        'Process & Quality Control Equipment'
      ],
      brands: ['Caterpillar', 'Komatsu', 'Toyota', 'Crown', 'Hyster'],
      recentProjects: [
        'Manufacturing Facility Setup - Laguna - ₱8.3M',
        'Material Handling System - Cavite - ₱2.1M',
        'Production Line Equipment - Bataan - ₱4.5M'
      ]
    }
  },
  {
    id: 'electrical',
    title: 'Electrical & Electronics',
    icon: '⚡',
    items: '180+ Items',
    leadTime: '5-10d',
    description: 'Power Systems, Generators, Lighting',
    details: {
      capabilities: [
        'Power Distribution Systems',
        'Industrial Generators & UPS',
        'Lighting Solutions & Controls',
        'Electrical Control Systems'
      ],
      brands: ['Schneider Electric', 'ABB', 'Siemens', 'GE', 'Eaton'],
      recentProjects: [
        'Power System Upgrade - BGC - ₱3.5M',
        'Generator Installation - Alabang - ₱950K',
        'Lighting System - Mall of Asia - ₱1.8M'
      ]
    }
  },
  {
    id: 'automotive',
    title: 'Automotive & Transport',
    icon: '🚗',
    items: '320+ Items',
    leadTime: '5-12d',
    description: 'Vehicle Parts, Engines, Lubricants, Tires/Batteries',
    details: {
      capabilities: [
        'Vehicle Parts & Components',
        'Engine & Transmission Systems',
        'Lubricants & Automotive Fluids',
        'Tires, Batteries & Accessories'
      ],
      brands: ['Toyota', 'Isuzu', 'Shell', 'Motolite', 'Bridgestone'],
      recentProjects: [
        'Fleet Maintenance Package - Cebu - ₱2.8M',
        'Heavy Truck Parts Supply - Davao - ₱1.5M',
        'Automotive Service Center Setup - ₱3.2M'
      ]
    }
  },
  {
    id: 'construction',
    title: 'Construction & Tools',
    icon: '🔨',
    items: '275+ Items',
    leadTime: '2-8d',
    description: 'Power Tools, Hand Tools, STIHL Equipment, Hardware',
    // featured: 'STIHL PARTNER',
    details: {
      capabilities: [
        'Power Tools & Equipment',
        'Hand Tools & Hardware',
        'Heavy Construction Equipment',
        'STIHL Professional Equipment'
      ],
      brands: ['STIHL', 'DeWalt', 'Makita', 'Bosch', 'Milwaukee'],
      stihlPartnership: {
        since: '2018',
        products: [
          'Chainsaws (MS 170 to MS 881 Professional)',
          'Trimmers & Brushcutters (FS series)',
          'Blowers & Clearing Equipment (BR series)',
          'Professional Pole Saws & Tree Care'
        ],
        benefits: [
          'Authorized warranty service',
          'Genuine parts & accessories',
          'Bulk pricing for contractors',
          'Technical support & training'
        ]
      },
      recentProjects: [
        'BGC Tower - Complete tool package - ₱3.2M',
        'STIHL Equipment for Ayala Land - ₱1.8M',
        'Industrial Maintenance Tools - Laguna - ₱950K'
      ]
    }
  },
  {
    id: 'agriculture',
    title: 'Agriculture & Heavy Equipment',
    icon: '🚜',
    items: '195+ Items',
    leadTime: '10-21d',
    description: 'Agricultural Machinery, Tractors, STIHL Outdoor, Farm Supply',
    featured: 'STIHL PARTNER',
    details: {
      capabilities: [
        'Agricultural Machinery & Equipment',
        'Tractors & Farm Vehicles',
        'STIHL Outdoor Power Equipment',
        'Farm Supply & Irrigation Systems'
      ],
      brands: ['STIHL', 'John Deere', 'Kubota', 'Yanmar', 'Mahindra'],
      recentProjects: [
        'Farm Modernization - Nueva Ecija - ₱4.2M',
        'STIHL Equipment Package - Bukidnon - ₱850K',
        'Irrigation System - Pangasinan - ₱2.3M'
      ]
    }
  },
  {
    id: 'laboratory',
    title: 'Laboratory & Scientific',
    icon: '🔬',
    items: '125+ Items',
    leadTime: '5-15d',
    description: 'Lab Equipment, Scientific Instruments, Environmental Monitoring',
    details: {
      capabilities: [
        'Laboratory Equipment & Instruments',
        'Scientific & Research Tools',
        'Environmental Monitoring Systems',
        'Quality Control & Testing Equipment'
      ],
      brands: ['Thermo Fisher', 'Agilent', 'Waters', 'PerkinElmer', 'Shimadzu'],
      recentProjects: [
        'University Lab Setup - UP Diliman - ₱2.8M',
        'Quality Control Lab - Food Manufacturing - ₱1.5M',
        'Environmental Testing Equipment - ₱980K'
      ]
    }
  },
  {
    id: 'office',
    title: 'Office & Residential',
    icon: '🏢',
    items: '160+ Items',
    leadTime: '3-10d',
    description: 'Office Supplies, Furniture, Appliances, Conference Equipment',
    details: {
      capabilities: [
        'Office Furniture & Supplies',
        'Home & Office Appliances',
        'Conference & AV Equipment',
        'IT & Communication Systems'
      ],
      brands: ['Herman Miller', 'Steelcase', 'Samsung', 'LG', 'Canon'],
      recentProjects: [
        'Corporate Office Setup - Ortigas - ₱3.5M',
        'Conference Room Systems - Makati - ₱1.2M',
        'Residential Appliances Package - ₱650K'
      ]
    }
  },
  {
    id: 'specialized',
    title: 'Specialized Systems',
    icon: '⚙️',
    items: '95+ Items',
    leadTime: '7-20d',
    description: 'Pump Systems, Pool Equipment, Weighing Systems',
    details: {
      capabilities: [
        'Industrial Pump Systems',
        'Swimming Pool Equipment',
        'Weighing & Measurement Systems',
        'Custom Specialized Equipment'
      ],
      brands: ['Grundfos', 'Pentair', 'Mettler Toledo', 'Ohaus', 'Hayward'],
      recentProjects: [
        'Water Treatment System - Resort - ₱2.1M',
        'Industrial Weighing System - ₱880K',
        'Pool Equipment - Hotel Chain - ₱1.5M'
      ]
    }
  }
];