/**
 * productsData.js — Enhanced Products inventory data
 *
 * ✏️ EDIT THIS FILE to add, remove or modify products.
 */

// Flagship products get a massive alternating layout
export const flagshipProducts = [
  {
    id: "ft-gps-pro",
    name: "FT GPS Pro Tracker",
    badge: "Bestseller",
    image: "/images/products/ft-gps-pro.webp",
    description: "The ultimate industrial-grade GPS tracking device. Engineered with sub-10 second refresh rates, a massive backup battery, and robust anti-tamper mechanisms to keep your fleet visible 24/7 in India's toughest conditions.",
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
    id: "ft-cfs-1000",
    name: "FT-CFS 1000 Fuel Sensor",
    badge: "Premium Accuracy",
    image: "/images/products/ft-cfs-1000.webp",
    description: "Stop fuel theft permanently. Our high-precision capacitive fuel sensor delivers incredibly accurate tank levels directly to your dashboard. Automatically detect minute drains, unauthorized siphoning, and verify every single refill.",
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
    description: "Your entire fleet operations unified in one powerful, blazing-fast dashboard. Monitor thousands of vehicles simultaneously, generate automated compliance reports, and visualize fuel theft with pinpoint accuracy.",
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
        id: "ais140-tracker",
        name: "AIS 140 Certified Tracker",
        badge: "RTO Approved",
        image: "/images/products/ais140-back.webp",
        description: "Govt. certified AIS 140 compliant GPS tracker with IRNSS support for commercial vehicles.",
        specs: [
          { label: "Compliance", value: "AIS-140 / CDAC" },
          { label: "SOS", value: "Panic Button Ready" },
        ],
      },
      {
        id: "fleet-dashcam",
        name: "HD Fleet Dashcam",
        badge: "Driver Safety",
        image: "/images/products/fleet-camera.png",
        description: "High-definition fleet camera for continuous driver monitoring and incident recording.",
        specs: [
          { label: "Resolution", value: "1080p Full HD" },
          { label: "Storage", value: "Up to 128GB SD" },
        ],
      },
      {
        id: "fttpl-device",
        name: "FTTPL Standard Device",
        badge: "Value Pick",
        image: "/images/products/fttpl-gps-device.png",
        description: "Highly reliable, cost-effective tracking device ideal for large-scale standard fleet deployment.",
        specs: [
          { label: "Installation", value: "Plug & Play 3-Wire" },
          { label: "Voltage", value: "9V-36V Supported" },
        ],
      },
      {
        id: "compact-gps",
        name: "Compact Tracker",
        badge: "Discreet",
        image: "/images/products/gps-device.png",
        description: "Miniature GPS tracker designed for easy, hidden installation in 2-wheelers or light vehicles.",
        specs: [
          { label: "Size", value: "Ultra-compact Design" },
          { label: "Alerts", value: "Anti-towing Alerts" },
        ],
      },
      {
        id: "capacitive-sensor",
        name: "Capacitive Fuel Probe",
        badge: "Heavy Duty",
        image: "/images/products/fuel-sensor.png",
        description: "Rugged fuel probe suitable for heavy duty trucks, mining equipment, and diesel generators.",
        specs: [
          { label: "Durability", value: "Industrial Grade" },
          { label: "Output", value: "RS232 / Analog" },
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
