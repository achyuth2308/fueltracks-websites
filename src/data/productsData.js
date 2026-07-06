/**
 * productsData.js — Enhanced Products inventory data
 *
 * ✏️ EDIT THIS FILE to add, remove or modify products.
 */

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
    detailedOverview: {
      title: "Built around how you actually use it.",
      subtitle: "A quick tour of the value this product brings to the road every day.",
      items: [
        { title: "What it does", desc: "Streams AIS-140 compliant GPS, SOS and driver telemetry over a 4G LTE network.", icon: "Shield" },
        { title: "How it helps", desc: "Live tracking, geo-fencing and harsh-driving alerts keep every trip under control.", icon: "Activity" },
        { title: "Why it matters", desc: "Mandatory AIS-140 compliance for commercial transport, with the speed of 4G.", icon: "CheckCircle" },
        { title: "Who it's for", desc: "Transporters, school buses, cabs, logistics and any AIS-140 mandated fleet.", icon: "Users" }
      ]
    },
    premiumFeatures: {
      title: "Engineered for everyday reliability.",
      subtitle: "Every capability fleet teams reach for — none of the bloat they don't.",
      items: [
        { title: "AIS-140 Certified", desc: "Fully compliant with India's mandatory commercial vehicle tracking standard.", icon: "Shield" },
        { title: "4G LTE Connectivity", desc: "Fast, low-latency data with seamless 2G fallback for total coverage.", icon: "Wifi" },
        { title: "Live GPS Tracking", desc: "High-precision multi-constellation GNSS with sub-10-second refresh.", icon: "MapPin" },
        { title: "Geo-Fencing", desc: "Polygon zones with entry, exit and dwell-time alerts.", icon: "Map" },
        { title: "SOS Button Support", desc: "Panic button triggers instant emergency alerts to control room and authorities.", icon: "AlertCircle" },
        { title: "Driver Behaviour Monitoring", desc: "Tracks harsh braking, sharp turns, harsh acceleration and over-speeding.", icon: "Activity" },
        { title: "Route Playback", desc: "Replay any trip second-by-second with stops, idling and speed overlays.", icon: "GitCommit" },
        { title: "Real-Time Alerts", desc: "Push, SMS and email notifications the moment an event happens.", icon: "Bell" }
      ]
    },
    technicalDetails: [
      { label: "Device Type", value: "Advanced Vehicle Location Tracking Device (VLTD)" },
      { label: "Connectivity", value: "4G LTE with 2G fallback capability" },
      { label: "Network", value: "Multi-constellation GNSS (GPS, GLONASS, GALILEO, BeiDou)" },
      { label: "GPS Accuracy", value: "< 2.5m (CEP)" },
      { label: "Power Supply", value: "9V-36V DC, suitable for light and heavy commercial vehicles" },
      { label: "Operating Voltage", value: "9-36V DC" },
      { label: "Installation Type", value: "Wired (Ignition, Power, Ground, SOS, External Relays)" },
      { label: "Platform Support", value: "FuelTracks Cloud, Android, iOS" },
      { label: "Warranty", value: "1 Year Standard Replacement Warranty" }
    ]
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
    detailedOverview: {
      title: "Built to stop fuel theft instantly.",
      subtitle: "A deep dive into how our sensors protect your bottom line.",
      items: [
        { title: "What it does", desc: "Measures fuel volume in the tank with 99.2% accuracy using advanced capacitive sensing technology.", icon: "Activity" },
        { title: "How it helps", desc: "Detects unauthorized fuel drains and verifies exact refill quantities in real-time, triggering instant alerts.", icon: "Shield" },
        { title: "Why it matters", desc: "Fuel accounts for over 40% of fleet operating costs. Stopping theft directly impacts profitability.", icon: "CheckCircle" },
        { title: "Who it's for", desc: "Heavy commercial vehicles, construction equipment, diesel generators, and long-haul logistics.", icon: "Users" }
      ]
    },
    premiumFeatures: {
      title: "Precision engineering for extreme conditions.",
      subtitle: "Designed to operate flawlessly in dusty, vibrating, and high-temperature environments.",
      items: [
        { title: "Aviation-Grade Aluminum", desc: "Constructed with robust materials to prevent corrosion and physical tampering.", icon: "Shield" },
        { title: "Cuttable & Calibratable", desc: "Sensor length can be cut and calibrated on-site to perfectly match any tank depth.", icon: "GitCommit" },
        { title: "No Moving Parts", desc: "Solid-state technology means zero mechanical wear and tear over years of use.", icon: "Activity" },
        { title: "Anti-Sabotage Head", desc: "Sealed sensor head prevents bypass attempts or deliberate damage.", icon: "AlertCircle" },
        { title: "Digital Output", desc: "RS485 and RS232 digital interfaces ensure noise-free data transmission to the tracker.", icon: "Wifi" },
        { title: "Temperature Compensation", desc: "Automatically adjusts readings for fuel volume expansion during hot weather.", icon: "CheckCircle" },
        { title: "Seamless Integration", desc: "Plugs directly into FuelTracks trackers and auto-syncs with the analytics dashboard.", icon: "MapPin" },
        { title: "Water Detection", desc: "Advanced algorithms help identify if water has been mixed into the diesel.", icon: "Bell" }
      ]
    },
    technicalDetails: [
      { label: "Device Type", value: "High-Precision Capacitive Fuel Level Sensor (CFS)" },
      { label: "Measurement Accuracy", value: "99.2% to 99.5%" },
      { label: "Output Signal", value: "RS232 / RS485 / Analog / Voltage" },
      { label: "Length Options", value: "700mm, 1000mm, up to 3000mm (Customizable on-site)" },
      { label: "Operating Voltage", value: "9V - 36V DC" },
      { label: "Ingress Protection", value: "IP67 (Dust and Water Resistant)" },
      { label: "Operating Temperature", value: "-40°C to +85°C" },
      { label: "Installation Method", value: "Flange mount with tamper-proof sealing" },
      { label: "Warranty", value: "1 Year Replacement Warranty" }
    ]
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
    detailedOverview: {
      title: "The command center for modern fleets.",
      subtitle: "Unify your tracking, telematics, and analytics into one blazing-fast web platform.",
      items: [
        { title: "What it does", desc: "Ingests millions of data points from your hardware and turns them into actionable fleet insights.", icon: "Activity" },
        { title: "How it helps", desc: "Reduces administrative overhead by automating reports, alerts, and compliance tracking.", icon: "Shield" },
        { title: "Why it matters", desc: "Data without a platform is useless. We provide the fastest interface to actually understand your fleet.", icon: "CheckCircle" },
        { title: "Who it's for", desc: "Fleet managers, transport owners, and enterprise logistics teams managing 10 to 10,000 vehicles.", icon: "Users" }
      ]
    },
    premiumFeatures: {
      title: "Enterprise software without the bloat.",
      subtitle: "Powerful features tucked behind a stunning, intuitive interface.",
      items: [
        { title: "Live Vehicle Clustering", desc: "Smoothly groups nearby vehicles on the map, allowing you to manage massive fleets without lag.", icon: "Map" },
        { title: "Automated Reporting", desc: "Schedule daily, weekly, or monthly reports to be delivered straight to your inbox.", icon: "GitCommit" },
        { title: "Advanced Geo-Fencing", desc: "Draw custom polygons on the map and receive alerts when vehicles enter, exit, or dwell.", icon: "MapPin" },
        { title: "Role-Based Access", desc: "Create sub-accounts for regional managers with restricted access to specific vehicles.", icon: "Users" },
        { title: "Fuel Theft Analytics", desc: "Dedicated modules that visually highlight exactly when and where fuel drops occurred.", icon: "Activity" },
        { title: "Driver Scorecards", desc: "Automatically grade drivers based on harsh braking, speeding, and idling behavior.", icon: "CheckCircle" },
        { title: "Trip Playback", desc: "Rewind time and watch vehicle routes replay second-by-second with speed overlays.", icon: "Wifi" },
        { title: "API Integrations", desc: "Connect FuelTracks data directly into your existing ERP or logistics software.", icon: "Box" }
      ]
    },
    technicalDetails: [
      { label: "Platform Type", value: "Cloud-based Software as a Service (SaaS)" },
      { label: "Hosting Infrastructure", value: "Amazon Web Services (AWS) Mumbai Region" },
      { label: "Data Retention", value: "90 days active history, 1 year archived (Customizable)" },
      { label: "Uptime SLA", value: "99.99% Guaranteed Availability" },
      { label: "Supported Devices", value: "All FuelTracks hardware + 300+ third-party protocols" },
      { label: "Mobile Apps", value: "Native iOS and Android applications available" },
      { label: "Security", value: "256-bit SSL encryption, SOC2 compliant data centers" },
      { label: "API Availability", value: "RESTful JSON API available for enterprise clients" },
      { label: "Support Level", value: "24/7 Priority Email & Phone Support" }
    ]
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
        description: "Reliable and cost-effective 2G tracking solution for standard logistics and compliance. Perfect for fleets operating in strong network zones.",
        specs: [
          { label: "Compliance", value: "AIS-140 / CDAC" },
          { label: "Voltage", value: "9V-36V Supported" },
        ],
        detailedOverview: {
          title: "The industry standard for compliance.",
          subtitle: "Cost-effective, reliable, and built to meet government tracking mandates.",
          items: [
            { title: "What it does", desc: "Provides continuous AIS-140 compliant GPS tracking using widely available 2G networks.", icon: "Activity" },
            { title: "How it helps", desc: "Ensures your commercial vehicles meet regulatory requirements without breaking the bank.", icon: "Shield" },
            { title: "Why it matters", desc: "Failing compliance checks halts operations. This device guarantees you stay on the road.", icon: "CheckCircle" },
            { title: "Who it's for", desc: "Standard logistics, state transport, and commercial fleets prioritizing cost-effective compliance.", icon: "Users" }
          ]
        },
        premiumFeatures: {
          title: "Solid, dependable tracking.",
          subtitle: "Everything you need for standard compliance, with zero unnecessary extras.",
          items: [
            { title: "AIS-140 Approved", desc: "Certified by testing agencies for commercial vehicle tracking across Indian states.", icon: "Shield" },
            { title: "2G Connectivity", desc: "Utilizes robust GSM/GPRS networks for consistent data transmission in most regions.", icon: "Wifi" },
            { title: "SOS Button Support", desc: "Includes wiring support for emergency panic buttons required in passenger vehicles.", icon: "AlertCircle" },
            { title: "Internal Battery", desc: "Backup battery keeps the device tracking even if the main vehicle battery is disconnected.", icon: "Activity" },
            { title: "Wide Voltage Range", desc: "Operates safely across 9V to 36V, suitable for both light and heavy vehicles.", icon: "CheckCircle" },
            { title: "Over-The-Air Updates", desc: "Firmware can be upgraded remotely without removing the device from the vehicle.", icon: "Wifi" },
            { title: "Offline Storage", desc: "Stores tracking data internally when out of network and uploads it automatically upon reconnection.", icon: "MapPin" },
            { title: "Ignition Detection", desc: "Accurately logs when the engine is turned on or off to track idling.", icon: "GitCommit" }
          ]
        },
        technicalDetails: [
          { label: "Device Type", value: "2G Vehicle Location Tracking Device (VLTD)" },
          { label: "Connectivity", value: "2G GSM/GPRS (850/900/1800/1900 MHz)" },
          { label: "Compliance", value: "AIS-140, CDAC Certified" },
          { label: "Location Technology", value: "GPS + GLONASS/IRNSS" },
          { label: "Operating Voltage", value: "9V - 36V DC" },
          { label: "Internal Battery", value: "800mAh Li-ion (Up to 12 hours backup)" },
          { label: "I/O Ports", value: "Ignition, SOS, Relay/Immobilizer, Analog Input" },
          { label: "Memory", value: "Up to 40,000 offline records" },
          { label: "Warranty", value: "1 Year Standard Warranty" }
        ]
      },
      {
        id: "basic-gps-device",
        name: "Basic GPS Device",
        badge: "Compact",
        image: "/images/products/basic device.jpeg",
        description: "Compact and discreet tracker for 2-wheelers and light vehicles. Easy plug and play installation with essential live tracking features.",
        specs: [
          { label: "Installation", value: "Plug & Play 3-Wire" },
          { label: "Size", value: "Ultra-compact Design" },
        ],
        detailedOverview: {
          title: "Simplicity meets security.",
          subtitle: "A discreet, easy-to-install tracker for essential live monitoring.",
          items: [
            { title: "What it does", desc: "Provides accurate live location tracking in an incredibly small form factor.", icon: "Activity" },
            { title: "How it helps", desc: "Helps you monitor vehicle movement and prevents theft without complex wiring.", icon: "Shield" },
            { title: "Why it matters", desc: "Not every vehicle needs enterprise telemetry. Sometimes you just need to know where it is.", icon: "CheckCircle" },
            { title: "Who it's for", desc: "Two-wheelers, private cars, small delivery vans, and rental fleets.", icon: "Users" }
          ]
        },
        premiumFeatures: {
          title: "Small size. Big peace of mind.",
          subtitle: "Essential tracking features packed into a device that fits in the palm of your hand.",
          items: [
            { title: "Ultra-Compact", desc: "Easily hidden within the dashboard or under the seat for discreet tracking.", icon: "Box" },
            { title: "3-Wire Installation", desc: "Extremely simple installation process requiring only power, ground, and ignition wires.", icon: "GitCommit" },
            { title: "Live Tracking", desc: "Monitor the vehicle's exact location in real-time via the mobile app.", icon: "MapPin" },
            { title: "Anti-Theft Engine Cut", desc: "Supports a relay to remotely disable the vehicle's engine in case of theft.", icon: "Shield" },
            { title: "Over-speed Alerts", desc: "Receive immediate notifications if the vehicle exceeds a pre-set speed limit.", icon: "Bell" },
            { title: "Power Cut Alarm", desc: "Alerts you instantly if a thief attempts to cut the device's wires.", icon: "AlertCircle" },
            { title: "Low Power Consumption", desc: "Smart sleep mode prevents the device from draining the vehicle's battery when parked.", icon: "Activity" },
            { title: "Geo-Fencing", desc: "Set up safe zones and get notified when the vehicle leaves the area.", icon: "Map" }
          ]
        },
        technicalDetails: [
          { label: "Device Type", value: "Basic 2G GPS Tracker" },
          { label: "Connectivity", value: "2G GSM/GPRS" },
          { label: "Size", value: "72mm x 30mm x 12mm (Ultra-compact)" },
          { label: "Weight", value: "Approx. 40g" },
          { label: "Operating Voltage", value: "9V - 90V DC (Wide range support)" },
          { label: "Installation", value: "Simple 3-wire (VCC, GND, ACC)" },
          { label: "Ignition Detection", value: "Supported (ACC wire)" },
          { label: "Engine Immobilizer", value: "Supported (Requires additional relay)" },
          { label: "Warranty", value: "1 Year Standard Warranty" }
        ]
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
        description: "Advanced analytics module focusing specifically on visualizing fuel consumption and drains. Turn complex sensor data into clear, actionable charts.",
        specs: [
          { label: "Reporting", value: "Automated Daily/Weekly" },
          { label: "Insights", value: "Drain vs Refill Graphs" },
        ],
        detailedOverview: {
          title: "Turn fuel data into fuel savings.",
          subtitle: "An advanced dashboard module that makes sense of complex sensor data.",
          items: [
            { title: "What it does", desc: "Transforms raw data from capacitive fuel sensors into easy-to-read charts and reports.", icon: "Activity" },
            { title: "How it helps", desc: "Visually isolates fuel theft incidents and calculates exact fuel efficiency metrics.", icon: "Shield" },
            { title: "Why it matters", desc: "Hardware alone isn't enough; you need smart software to interpret the data and highlight anomalies.", icon: "CheckCircle" },
            { title: "Who it's for", desc: "Fleet analysts, owners, and operators utilizing FuelTracks fuel level sensors.", icon: "Users" }
          ]
        },
        premiumFeatures: {
          title: "Insights that pay for themselves.",
          subtitle: "Spot inefficiencies and theft at a glance with purpose-built analytics.",
          items: [
            { title: "Visual Drain Detection", desc: "Advanced smoothing algorithms highlight sharp, unauthorized drops in fuel levels.", icon: "AlertCircle" },
            { title: "Refill Verification", desc: "Automatically logs the exact volume, location, and time of every fuel station visit.", icon: "CheckCircle" },
            { title: "Mileage Calculation", desc: "Correlates GPS distance with fuel consumption to calculate real-world vehicle mileage.", icon: "GitCommit" },
            { title: "Idling Cost Analysis", desc: "Shows exactly how much fuel is being wasted while vehicles are parked with the engine running.", icon: "Activity" },
            { title: "Automated Reports", desc: "Get a daily email summarizing all fuel events across your entire fleet.", icon: "Bell" },
            { title: "Historical Comparisons", desc: "Compare fuel consumption trends month-over-month to identify degrading engine performance.", icon: "Map" },
            { title: "Multi-Tank Support", desc: "Seamlessly handles data for heavy vehicles equipped with dual or multiple fuel tanks.", icon: "Box" },
            { title: "Excel & PDF Exports", desc: "Export any chart or data table for your accounting and operations teams.", icon: "Users" }
          ]
        },
        technicalDetails: [
          { label: "Module Type", value: "Software Add-on for FuelTracks Cloud Suite" },
          { label: "Hardware Requirement", value: "Requires FuelTracks Capacitive Fuel Sensor" },
          { label: "Data Processing", value: "Advanced AI Smoothing Algorithms" },
          { label: "Report Formats", value: "PDF, Excel (XLSX), CSV" },
          { label: "Alert Methods", value: "In-app, Push Notification, SMS, Email" },
          { label: "Data Granularity", value: "Second-by-second analysis" },
          { label: "Historical Data", value: "Depends on base Cloud Suite plan (up to 1 year)" },
          { label: "Access Control", value: "Can be restricted to specific manager roles" },
          { label: "Update Frequency", value: "Continuous cloud updates with new features" }
        ]
      },
    ],
  },
];

export const comparisonTableData = {
  headers: [
    { id: "vltd-4g-device", title: "VLTD 4G Device", subtitle: "FT-VLTD-4G" },
    { id: "vltd-2g-device", title: "VLTD 2G Device", subtitle: "FT-VLTD-2G" },
    { id: "basic-gps-device", title: "V5 Basic GPS Device", subtitle: "FT-V5-BASIC" },
    { id: "capacitive-fuel-sensor", title: "Capacitive Fuel Sensor", subtitle: "FT-CFS-1000" }
  ],
  rows: [
    { feature: "Connectivity", values: ["4G LTE + 2G fallback", "2G GSM/GPRS", "2G GSM/GPRS", "Wired to tracker"] },
    { feature: "Tracking Features", values: ["Live · SOS · Driver score", "Live · Route history", "Live · Ignition · Movement", "Fuel level · Theft alerts"] },
    { feature: "AIS-140 Compliance", values: [true, true, false, false] },
    { feature: "Fuel Monitoring", values: [false, false, false, true] },
    { feature: "Web Dashboard", values: [true, true, true, true] },
    { feature: "Mobile App", values: [true, true, true, true] },
    { feature: "Warranty", values: ["1 year", "1 year", "1 year", "1 year"] }
  ]
};
