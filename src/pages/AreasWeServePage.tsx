import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import { serviceAreas, businessInfo } from '@/data/siteData';

export default function AreasWeServePage() {
  return (
    <>
      <SEO
        title="Electrical Service Areas | D Best Electrical Service"
        description="D Best Electrical Service provides expert residential electrical services in College Park, East Point, Union City, Fairburn, and surrounding South Metro Atlanta areas."
        canonicalPath="areas-we-serve"
      />
      <PageHero
        title="Areas We Serve"
        subtitle="Proudly providing top-rated residential electrical services throughout South Metro Atlanta and beyond."
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Service Areas' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-navy-900 mb-6 leading-tight">
              Electrical Service Areas
            </h1>
            <p className="text-lg text-charcoal-600 leading-relaxed">
              Based in College Park, GA, D Best Electrical Service is your local, trusted electrician. We specialize in residential electrical installation, repair, and wiring for homeowners across the following communities. Whether you're dealing with an urgent electrical issue or planning a major home renovation, our licensed professionals are ready to help.
            </p>
          </div>

          <div className="space-y-12">
            {serviceAreas.map((area) => (
              <div key={area.slug} className="bg-navy-50 rounded-2xl p-8 border border-navy-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-electric-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-6 h-6 text-electric-600" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display font-bold text-2xl text-navy-900 mb-3">
                      Electrician in {area.name}
                    </h2>
                    <p className="text-base text-charcoal-600 leading-relaxed mb-6">
                      {area.description}
                    </p>
                    <Link
                      to={`/${area.slug}`}
                      className="inline-flex items-center gap-2 text-electric-600 font-bold hover:text-electric-700 transition-colors group"
                    >
                      View {area.name} Electrical Services
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6 leading-tight">
              Don't See Your City Listed?
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              We frequently travel throughout the South Metro Atlanta region to assist homeowners with their electrical needs. Give us a call to see if we service your specific neighborhood.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={businessInfo.phoneLink}
                className="btn-primary"
              >
                Call {businessInfo.phoneDisplay}
              </a>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-lg font-bold transition-colors bg-white/10 hover:bg-white/20 text-white"
              >
                Send a Message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
