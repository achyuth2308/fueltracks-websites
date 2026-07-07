import { Link } from "react-router-dom";
import {
  Fuel,
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
} from "lucide-react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { company, socials } from "../data/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-surface-950 text-surface-300">
      {/* Top CTA bar */}
      <div className="border-b border-surface-800">
        <div className="w-full max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white">
                Ready to track smarter?
              </h3>
              <p className="text-surface-400 mt-2 max-w-lg">
                Talk to our team about GPS tracking, fuel monitoring and
                end-to-end fleet visibility.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-600 text-white font-semibold hover:bg-primary-500 transition-colors shadow-lg shadow-primary-600/25"
              >
                Contact Us
                <ExternalLink size={16} />
              </Link>
              <a
                href={`https://wa.me/${company.whatsapp2}?text=${encodeURIComponent("Hello Fuel Tracks Team,\n\nI would like to know more about your GPS Tracking and Fleet Management solutions.\n\nPlease share the product details, pricing, and installation process.\n\nThank you.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-600 text-white font-semibold hover:bg-accent-500 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="w-full max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <Fuel size={18} className="text-white" />
              </div>
              <span className="font-bold text-lg text-white">
                {company.shortName}
              </span>
            </div>
            <p className="text-sm text-surface-400 leading-relaxed mb-6">
              {company.description}
            </p>
            <div className="flex items-center gap-4">
              <a href={socials.instagram || "#"} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-[#D9A94D] flex items-center justify-center text-surface-400 hover:text-white transition-colors">
                <FaInstagram size={16} />
              </a>
              <a href={socials.facebook || "#"} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-[#D9A94D] flex items-center justify-center text-surface-400 hover:text-white transition-colors">
                <FaFacebook size={16} />
              </a>
              <a href={socials.youtube || "#"} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-[#D9A94D] flex items-center justify-center text-surface-400 hover:text-white transition-colors">
                <FaYoutube size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-sm text-surface-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {socials.youtube && (
                <li>
                  <a
                    href={socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-surface-400 hover:text-white transition-colors"
                  >
                    YouTube Channel
                  </a>
                </li>
              )}
              {socials.playStore && (
                <li>
                  <a
                    href={socials.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-surface-400 hover:text-white transition-colors"
                  >
                    Android App
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Solutions
            </h4>
            <ul className="space-y-3">
              {[
                { label: "GPS Tracking Systems", href: "/services#live-gps-tracking" },
                { label: "AIS-140 VLTD Devices", href: "/services#ais-140-vltd-devices" },
                { label: "Fuel Level Sensors", href: "/services#fuel-level-sensors" },
                { label: "Fleet Management", href: "/services#fleet-management" },
                { label: "Dash Cameras", href: "/services#dash-cameras" },
                { label: "School Bus Tracking", href: "/services#school-bus-tracking" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-sm text-surface-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#D9A94D] mt-0.5 shrink-0" />
                <a
                  href={company.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-surface-400 hover:text-white transition-colors"
                >
                  {company.address}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="text-[#D9A94D] mt-0.5 shrink-0" />
                <div className="text-sm text-surface-400">
                  <a href={`tel:${company.phone}`} className="hover:text-white transition-colors block">
                    {company.phone}
                  </a>
                  <a href={`tel:${company.phone2}`} className="hover:text-white transition-colors block">
                    {company.phone2}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="text-[#D9A94D] mt-0.5 shrink-0" />
                <a
                  href={`mailto:${company.email}`}
                  className="text-sm text-surface-400 hover:text-white transition-colors"
                >
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={16} className="text-[#D9A94D] mt-0.5 shrink-0" />
                <span className="text-sm text-surface-400">{company.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-surface-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-surface-500">
            © {new Date().getFullYear()} {company.name} Pvt Ltd. All rights reserved.
          </p>
          <p className="text-sm text-surface-500">
            Drive Smarter. Track Better. Secure Every Journey.
          </p>
        </div>
      </div>
    </footer>
  );
}
