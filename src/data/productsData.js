/**
 * productsData.js — Enhanced Products inventory data
 *
 * ✏️ EDIT THIS FILE to add, remove or modify products.
 */

// Flagship products get a massive alternating layout
export const flagshipProducts = [
  {
    id: "vltd-4g-device",
    name: "VLTD 4G Device",
    badge: "Premium",
    image: "/images/products/VLTD 4g device.jpeg",
    description: "High-speed 4G tracking device with fallback support, ideal for real-time commercial fleet monitoring. Built for intense Indian conditions with robust casing.",
    specs: [
      { label: "Network", value: "4G LTE / 2G Fallback" },
      { label: "Battery", value: "48 Hours Backup" },
      { label: "Casing", value: "IP67 Water & Dust Proof" },
    ],
    features: [
      "Sub-10 second real-time tracking",
      "Remote engine immobilizer support",
      "Harsh braking & acceleration detection",
      "Internal memory for offline storage",
    ],
  },
  {
    id: "capacitive-fuel-sensor",
    name: "Capacitive Fuel Sensor",
    badge: "High Accuracy",
    image: "/images/products/fuel-sensor.png",
    description: "Stop fuel theft permanently. Our high-precision capacitive fuel sensor delivers incredibly accurate tank levels directly to your dashboard. Verify every single refill.",
    specs: [
      { label: "Accuracy", value: "99.2% Precision" },
      { label: "Material", value: "Aviation-grade Aluminum" },
      { label: "Length", value: "Customizable up to 3m" },
    ],
    features: [
      "Real-time drain and refill alerts",
      "Tamper-proof sealed head design",
      "No moving parts for zero wear and tear",
      "Seamless integration with GPS trackers",
    ],
  },
  {
    id: "ft-cloud-suite",
    name: "Fuel Tracks Cloud Suite",
    badge: "Enterprise Platform",
    image: "/images/products/ft-cloud-suite.webp",
    description: "Your entire fleet operations unified in one powerful, blazing-fast dashboard. Monitor thousands of vehicles simultaneously, generate automated compliance reports.",
    specs: [
      { label: "Uptime", value: "99.99% SLA" },
      { label: "Hosting", value: "AWS Secure Cloud" },
      { label: "Scale", value: "Supports 10,000+ Vehicles" },
    ],
    features: [
      "Live maps with vehicle clustering",
      "Automated mileage & fuel reports",
      "Geo-fence creation & management",
      "Role-based access control for teams",
    ],
  },
];

// Catalog categories get the denser grid layout
export const catalogCategories = [
  {
    id: "hardware",
    name: "Standard Hardware",
    description: "Reliable tracking devices and dashcams for standard fleet requirements.",
    products: [
      {
        id: "vltd-2g-device",
        name: "VLTD 2G Device",
        badge: "Bestseller",
        image: "/images/products/VLTD 2G.jpeg",
        description: "Reliable and cost-effective 2G tracking solution for standard logistics and compliance.",
        specs: [
          { label: "Compliance", value: "AIS-140 / CDAC" },
          { label: "Voltage", value: "9V-36V Supported" },
        ],
      },
      {
        id: "basic-gps-device",
        name: "Basic GPS Device",
        badge: "Compact",
        image: "/images/products/basic device.jpeg",
        description: "Compact and discreet tracker for 2-wheelers and light vehicles. Easy plug and play.",
        specs: [
          { label: "Installation", value: "Plug & Play 3-Wire" },
          { label: "Size", value: "Ultra-compact Design" },
        ],
      },
    ],
  },
  {
    id: "software-modules",
    name: "Analytics Modules",
    description: "Deep dive into your data with specialized reporting modules.",
    products: [
      {
        id: "fuel-analytics",
        name: "Fuel Analytics Dashboard",
        badge: "Add-on Module",
        image: "/images/products/fuel-theft-chart.png",
        description: "Advanced analytics module focusing specifically on visualizing fuel consumption and drains.",
        specs: [
          { label: "Reporting", value: "Automated Daily/Weekly" },
          { label: "Insights", value: "Drain vs Refill Graphs" },
        ],
      },
    ],
  },
];
