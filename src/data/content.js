// Replace these URLs with your actual product images
export const images = {
  logo: 'https://via.placeholder.com/150x50/1a365d/ffffff?text=Vinay+Enterprises',
  hero: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200',
  solarPanel: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400',
  inverter: 'https://media.istockphoto.com/id/1828698828/photo/close-up-view-of-home-battery-storage-system-on-building-facade.webp?a=1&b=1&s=612x612&w=0&k=20&c=sZamggQDQ7C3NCY68U_HcfCvJaVwXCo9nhqIXywrl-0=',
  battery1:'https://media.istockphoto.com/id/1369165686/photo/lithium-nmc-rechargeable-battery-module-inside-metal-enclosure.jpg?s=612x612&w=0&k=20&c=EBUhhkU5FTDrd0DYiVIEdsvGxC1TDVm1OJC8-G_KLMs=',
  battery:'https://media.istockphoto.com/id/1620576275/photo/close-up-view-of-home-battery-storage-system-on-building-facade.webp?a=1&b=1&s=612x612&w=0&k=20&c=DyF3nv0bpqJMkAQqrKuVjc9PxGY8uthctcHRft2aMjY=',
  onGrid: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=400',
  hybrid: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=400',
  offGrid: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400'
};

export const products = [
  {
    id: 1,
    title: 'Solar Panels',
    image: 'solarPanel',
    description: 'High-efficiency monocrystalline and polycrystalline solar panels with 25+ years warranty',
    features: ['Tier 1 brands', 'Up to 22% efficiency', 'Weather resistant']
  },
  {
    id: 2,
    title: 'Solar Inverters',
    image: 'inverter',
    description: 'Advanced MPPT inverters for maximum power generation and system efficiency',
    features: ['String & Micro inverters', 'Smart monitoring', '2-3 year warranty']
  },
  {
    id: 3,
    title: 'Inverter Batteries',
    image: 'battery1',
    description: 'Deep cycle lithium-ion and lead-acid batteries for reliable energy storage',
    features: ['Long cycle life', 'Fast charging', 'Low maintenance']
  },
  {
    id: 4,
    title: 'Automotive Batteries',
    image: 'battery',
    description: 'Premium batteries for cars, tractors, and trucks with superior performance',
    features: ['Car batteries', 'Tractor batteries', 'Truck batteries']
  }
];

export const systems = [
  {
    id: 1,
    title: 'On-Grid System',
    image: 'onGrid',
    features: [
      'Connected to utility grid',
      'Net metering benefits',
      'Lower electricity bills',
      'No battery required',
      'ROI in 3-4 years'
    ],
    featured: false
  },
  {
    id: 2,
    title: 'Hybrid System',
    image: 'hybrid',
    features: [
      'Grid + Battery backup',
      'Best of both worlds',
      'Uninterrupted power supply',
      'Maximum savings',
      'Smart energy management'
    ],
    featured: true
  },
  {
    id: 3,
    title: 'Off-Grid System',
    image: 'offGrid',
    features: [
      'Complete independence',
      'Battery storage included',
      'Perfect for remote areas',
      'Zero electricity bills',
      'Eco-friendly solution'
    ],
    featured: false
  }
];

export const contactInfo = {
  address: 'Near Jio Office, Rath Road\nOrai, Jalaun - 285001',
  phone: ['+91 9451317257', '+91 9506600706'],
  email: ['vinayenterprises2126@gmail.com', 'vinayenterprises2126@gmail.com'],
  hours: 'Mon - Sat: 9:00 AM - 7:00 PM\nSunday: 10:00 AM - 5:00 PM'
};

export const subsidyData = [
  { size: '1 kW', cost: '₹65,000 – ₹75,000', subsidy: '₹30,000', final: '₹35,000 – ₹45,000' },
  { size: '2 kW', cost: '₹1,30,000 – ₹1,50,000', subsidy: '₹60,000', final: '₹70,000 – ₹90,000' },
  { size: '3 kW', cost: '₹1,90,000 – ₹2,20,000', subsidy: '₹78,000', final: '₹1,10,000 – ₹1,40,000' },
  { size: '5 kW', cost: '₹3,20,000 – ₹3,60,000', subsidy: '₹78,000', final: '₹2,40,000 – ₹2,80,000' },
  { size: '10 kW', cost: '₹6,00,000 – ₹7,00,000', subsidy: '₹78,000', final: '₹5,20,000 – ₹6,20,000' }
];

export const galleryImages = {
  panels: [
    'YOUR_PANEL_IMAGE_URL_1',
    'YOUR_PANEL_IMAGE_URL_2',
    'YOUR_PANEL_IMAGE_URL_3',
    'YOUR_PANEL_IMAGE_URL_4'
  ],
  inverters: [
    'YOUR_INVERTER_IMAGE_URL_1',
    'YOUR_INVERTER_IMAGE_URL_2',
    'YOUR_INVERTER_IMAGE_URL_3',
    'YOUR_INVERTER_IMAGE_URL_4'
  ],
  batteries: [
    'YOUR_BATTERY_IMAGE_URL_1',
    'YOUR_BATTERY_IMAGE_URL_2',
    'YOUR_BATTERY_IMAGE_URL_3',
    'YOUR_BATTERY_IMAGE_URL_4'
  ],
  automotive: [
    'YOUR_CAR_BATTERY_IMAGE_URL_1',
    'YOUR_TRACTOR_BATTERY_IMAGE_URL_1',
    'YOUR_TRUCK_BATTERY_IMAGE_URL_1',
    'YOUR_AUTOMOTIVE_BATTERY_IMAGE_URL_2'
  ]
};
