import { Link } from 'react-router-dom';
import { Home, Phone, ArrowLeft } from 'lucide-react';
import SEO from '@/components/SEO';
import { businessInfo } from '@/data/siteData';

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found | D Best Electrical Service"
        description="The page you are looking for could not be found. Please visit our homepage or call 470-414-6473."
      />
      <section className="min-h-[60vh] flex items-center bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-electric-400 rounded-full blur-3xl" />
        </div>
        <div className="container-max relative z-10 px-4 text-center">
          <div className="text-6xl sm:text-8xl font-display font-extrabold text-electric-400 mb-4">
            404
          </div>
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-base text-white/60 mb-8 max-w-md mx-auto">
            The page you are looking for does not exist or has been moved. Please return to the
            homepage or contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary">
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <a href={businessInfo.phoneLink} className="btn-secondary">
              <Phone className="w-4 h-4" />
              Call {businessInfo.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
