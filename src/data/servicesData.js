/**
 * servicesData.js — All services / features
 *
 * ✏️  EDIT THIS FILE to add, remove or modify services.
 *
 * Each service supports:
 *  - icon: Lucide icon name (string) or React element
 *  - image: path to image in src/assets/images/
 *  - video: path to video in src/assets/videos/
 *  - badge: optional tag above the title
 */

export const aboutStats = [
  {
    title: "Real-time GPS Tracking",
    value: "98%",
    description: "Sub-10-second location updates with full route history.",
  },
  {
    title: "Fuel Monitoring",
    value: "95%",
    description: "Capacitive sensors detect every refill, drain and theft event.",
  },
  {
    title: "Theft Protection",
    value: "92%",
    description: "Engine immobilizer, geo-fence breach and SOS alerts.",
  },
  {
    title: "Fleet Analytics",
    value: "90%",
    description: "Mileage, idling, harsh braking and driver scorecards.",
  },
];

export const services = [
  {
    title: "Live GPS Tracking",
    description: "Pinpoint vehicle location with sub-10-second refresh.",
    icon: "MapPin",
    image: "/images/homepagecards/livegpstracking.png",
  },
  {
    title: "Fuel Monitoring",
    description: "Capacitive sensor data straight to your dashboard.",
    icon: "Fuel",
    image: "/images/fuelmoniteringcard.png",
  },
  {
    title: "RFID Tracking",
    description: "Driver, asset and trip identification at scale.",
    icon: "ScanLine",
    image: "/images/homepagecards/rfidcardimage.png",
  },
  {
    title: "School Bus Tracking",
    description: "Parent app, route adherence and child safety.",
    icon: "School",
    image: "/images/homepagecards/schoolbustrackingcard.png",
  },
  {
    title: "Fleet Analytics",
    description: "Mileage, idling, utilization and cost reports.",
    icon: "BarChart3",
    image: "/images/homepagecards/fleetmanagementcard.png",
  },
  {
    title: "Driver Monitoring",
    description: "Behaviour scoring with harsh-event detection.",
    icon: "UserCheck",
    image: "/images/homepagecards/driverperformancecard.png",
  },
  {
    title: "Geo-fencing",
    description: "Polygon zones with entry, exit and dwell alerts.",
    icon: "Fence",
    image: "/images/homepagecards/geofencecardimage.png",
  },
  {
    title: "Engine On/Off Alerts",
    description: "Ignition events with optional remote immobilizer.",
    icon: "Power",
    image: "/images/homepagecards/enginealerts.png",
  },
  {
    title: "Fuel Theft Detection",
    description: "Instant SMS, email and push on suspicious drops.",
    icon: "ShieldAlert",
    image: "/images/homepagecards/fueltheftdetctioncardimage.png",
  },
  {
    title: "Mobile App Tracking",
    description: "Native iOS & Android apps for owners and drivers.",
    icon: "Smartphone",
    image: "/images/homepagecards/mobileapptrcacking cardimage.png",
  },
];

export const premiumFeatures = [
  {
    badge: "REAL-TIME",
    title: "Track every vehicle, every second.",
    description:
      "Sub-10-second GPS refresh with route playback, geo-fence alerts and ETA prediction. Built on redundant SIM and tower-fallback architecture for uninterrupted visibility.",
    bullets: [
      "Live map with neon route paths",
      "Speed & idle reporting",
      "Trip history up to 365 days",
    ],
    image: "/images/trackeveryvehicleevrymile.png",
    // video: "/videos/feature-realtime.mp4",
  },
  {
    badge: "FUEL INTELLIGENCE",
    title: "Stop fuel theft before it happens.",
    description:
      "Capacitive fuel sensors measure tank levels in real time and instantly flag drains, refills and discrepancies — with verified-litre reports for billing.",
    bullets: [
      "Refill & drain detection",
      "Mileage per trip",
      "Tamper-proof sensor",
    ],
    image: "/images/stopfueltheftbeforeithappens.png",
    // video: "/videos/feature-fuel.mp4",
  },
];
