import { Link } from 'react-router-dom';
import { Phone, MapPin, Zap, Mail, Clock } from 'lucide-react';
import { businessInfo, services, serviceAreas } from '@/data/siteData';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-max px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-electric-400 flex items-center justify-center">
                <Zap className="w-6 h-6 text-navy-900" fill="currentColor" />
              </div>
              <div>
                <div className="font-display font-bold text-lg leading-tight">D Best</div>
                <div className="text-electric-400 text-xs font-medium tracking-wide uppercase">
                  Electrical Service
                </div>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              Residential electrical services in College Park, Georgia and the surrounding
              communities. Safe work, clear communication, and careful workmanship on every job.
            </p>
            <a
              href={businessInfo.phoneLink}
              className="inline-flex items-center gap-2 text-electric-400 font-bold hover:text-electric-300 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {businessInfo.phoneDisplay}
            </a>
          </div>

          <div>
            <h3 className="font-display font-semibold text-base mb-4">Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/${service.slug}`}
                    className="text-sm text-white/60 hover:text-electric-400 transition-colors"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to={`/${services[6]?.slug || 'electrical-panel-services-in-college-park-ga'}`}
                  className="text-sm text-electric-400 font-medium hover:text-electric-300 transition-colors"
                >
                  View More Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-base mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {serviceAreas.slice(0, 5).map((area) => (
                <li key={area.slug}>
                  <Link
                    to={`/${area.slug}`}
                    className="text-sm text-white/60 hover:text-electric-400 transition-colors"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to={`/${serviceAreas[5]?.slug || 'south-atlanta-ga'}`}
                  className="text-sm text-electric-400 font-medium hover:text-electric-300 transition-colors"
                >
                  View More Areas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-base mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/60">
                <MapPin className="w-4 h-4 text-electric-400 mt-0.5 flex-shrink-0" />
                <span>{businessInfo.address}</span>
              </li>
              <li>
                <a
                  href={businessInfo.phoneLink}
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-electric-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-electric-400 flex-shrink-0" />
                  {businessInfo.phoneDisplay}
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-electric-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-electric-400 flex-shrink-0" />
                  Contact Form
                </Link>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/60">
                <Clock className="w-4 h-4 text-electric-400 mt-0.5 flex-shrink-0" />
                <span>Call to schedule a visit</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 text-center sm:text-left">
            &copy; {new Date().getFullYear()} {businessInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/faqs" className="text-xs text-white/40 hover:text-white/60 transition-colors">
              FAQs
            </Link>
            <Link to="/contact" className="text-xs text-white/40 hover:text-white/60 transition-colors">
              Contact
            </Link>
            <Link to="/about" className="text-xs text-white/40 hover:text-white/60 transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
