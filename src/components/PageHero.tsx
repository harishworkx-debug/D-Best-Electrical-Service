import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import { businessInfo } from '@/data/siteData';

export default function PageHero({
  title,
  subtitle,
  breadcrumb,
}: {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; path?: string }[];
}) {
  return (
    <section className="bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-electric-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-electric-400 rounded-full blur-3xl" />
      </div>
      <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {breadcrumb && (
          <nav className="mb-4 flex items-center gap-2 text-xs text-white/50">
            {breadcrumb.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {crumb.path ? (
                  <Link to={crumb.path} className="hover:text-electric-400 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/70">{crumb.label}</span>
                )}
                {i < breadcrumb.length - 1 && <span>/</span>}
              </span>
            ))}
          </nav>
        )}
        <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        )}
        <div className="mt-6">
          <a href={businessInfo.phoneLink} className="btn-primary">
            <Phone className="w-4 h-4" />
            Call {businessInfo.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}

export function ServiceCard({
  slug,
  title,
  shortDescription,
  icon: Icon,
}: {
  slug: string;
  title: string;
  shortDescription: string;
  icon: any;
}) {
  return (
    <Link
      to={`/${slug}`}
      className="card card-hover p-6 group block"
    >
      <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center mb-4 group-hover:bg-electric-400 transition-colors">
        <Icon className="w-6 h-6 text-navy-700 group-hover:text-navy-900 transition-colors" />
      </div>
      <h3 className="font-display font-bold text-lg text-navy-900 mb-2 group-hover:text-navy-700 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-charcoal-600 leading-relaxed mb-4">{shortDescription}</p>
      <span className="inline-flex items-center gap-1 text-sm font-semibold text-electric-600 group-hover:text-electric-700 transition-colors">
        Explore {title}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </span>
    </Link>
  );
}
