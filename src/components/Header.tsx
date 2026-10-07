import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown, Zap } from 'lucide-react';
import { services, serviceAreas, businessInfo } from '@/data/siteData';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setAreasOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-900/95 backdrop-blur-md shadow-lg shadow-navy-950/20'
          : 'bg-navy-900'
      }`}
    >
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-electric-400 flex items-center justify-center transition-transform group-hover:scale-105">
                <Zap className="w-6 h-6 text-navy-900" fill="currentColor" />
              </div>
              <div className="absolute inset-0 rounded-lg bg-electric-400 blur-md opacity-30 group-hover:opacity-50 transition-opacity" />
            </div>
            <div className="text-white">
              <div className="font-display font-bold text-base sm:text-lg leading-tight">
                D Best
              </div>
              <div className="text-electric-400 text-[10px] sm:text-xs font-medium tracking-wide uppercase">
                Electrical Service
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-md"
            >
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-md"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 w-80 pt-2 animate-slide-down">
                  <div className="bg-white rounded-xl shadow-2xl border border-charcoal-100 overflow-hidden">
                    <div className="max-h-[28rem] overflow-y-auto">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          to={`/${service.slug}`}
                          className="block px-5 py-2.5 text-sm text-charcoal-700 hover:bg-navy-50 hover:text-navy-900 transition-colors"
                        >
                          {service.shortTitle}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setAreasOpen(true)}
              onMouseLeave={() => setAreasOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-md"
              >
                Service Areas
                <ChevronDown className={`w-4 h-4 transition-transform ${areasOpen ? 'rotate-180' : ''}`} />
              </button>
              {areasOpen && (
                <div className="absolute top-full left-0 w-64 pt-2 animate-slide-down">
                  <div className="bg-white rounded-xl shadow-2xl border border-charcoal-100 overflow-hidden">
                    <div className="max-h-80 overflow-y-auto">
                      {serviceAreas.map((area) => (
                        <Link
                          key={area.slug}
                          to={`/${area.slug}`}
                          className="block px-5 py-2.5 text-sm text-charcoal-700 hover:bg-navy-50 hover:text-navy-900 transition-colors"
                        >
                          {area.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-md"
            >
              About Us
            </Link>
            <Link
              to="/faqs"
              className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-md"
            >
              FAQs
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-md"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center">
            <a
              href={businessInfo.phoneLink}
              className="btn-primary"
            >
              <Phone className="w-4 h-4" />
              {businessInfo.phoneDisplay}
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="lg:hidden bg-navy-900 border-t border-white/10 animate-slide-down max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            <Link
              to="/"
              className="block px-4 py-3 text-sm font-medium text-white/90 hover:bg-white/5 rounded-lg"
            >
              Home
            </Link>

            <div>
              <div className="block px-4 py-3 text-sm font-medium text-white/90">
                Services
              </div>
              <div className="ml-4 border-l border-white/10">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/${service.slug}`}
                    className="block px-4 py-2.5 text-sm text-white/60 hover:text-white hover:bg-white/5"
                  >
                    {service.shortTitle}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="block px-4 py-3 text-sm font-medium text-white/90">
                Service Areas
              </div>
              <div className="ml-4 border-l border-white/10">
                {serviceAreas.map((area) => (
                  <Link
                    key={area.slug}
                    to={`/${area.slug}`}
                    className="block px-4 py-2.5 text-sm text-white/60 hover:text-white hover:bg-white/5"
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/about"
              className="block px-4 py-3 text-sm font-medium text-white/90 hover:bg-white/5 rounded-lg"
            >
              About Us
            </Link>
            <Link
              to="/faqs"
              className="block px-4 py-3 text-sm font-medium text-white/90 hover:bg-white/5 rounded-lg"
            >
              FAQs
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-3 text-sm font-medium text-white/90 hover:bg-white/5 rounded-lg"
            >
              Contact
            </Link>

            <a
              href={businessInfo.phoneLink}
              className="btn-primary w-full mt-4"
            >
              <Phone className="w-4 h-4" />
              Call {businessInfo.phoneDisplay}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
