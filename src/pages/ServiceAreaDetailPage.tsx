import { useParams, Link, Navigate } from 'react-router-dom';
import { Phone, MapPin, ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react';
import SEO from '@/components/SEO';
import CallToAction from '@/components/CallToAction';
import FAQAccordion from '@/components/FAQAccordion';
import { serviceAreas, services, businessInfo } from '@/data/siteData';

export default function ServiceAreaDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const area = serviceAreas.find((a) => a.slug === slug);

  if (!area) return <Navigate to="/" replace />;

  const primaryService = services.find((s) => s.slug === area.primaryService);
  const otherServices = services.filter((s) => s.slug !== area.primaryService).slice(0, 6);

  return (
    <>
      <SEO
        title={area.metaTitle}
        description={area.metaDescription}
        canonicalPath={area.slug}
      />

      {/* Hero */}
      <section className="relative bg-navy-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/17842832/pexels-photo-17842832.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Engineer in safety gear working on an outdoor electrical panel"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/95 to-navy-900/70" />
        </div>
        <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <nav className="mb-4 flex items-center gap-2 text-xs text-white/50">
            <Link to="/" className="hover:text-electric-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">{area.name}</span>
          </nav>
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-electric-400 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-7 h-7 text-navy-900" />
            </div>
            <div>
              <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                Electrician in {area.name}
              </h1>
              <p className="mt-3 text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl">
                D Best Electrical Service provides residential electrical services to homeowners
                in {area.name}.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <a href={businessInfo.phoneLink} className="btn-primary">
              <Phone className="w-4 h-4" />
              Call {businessInfo.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy-900 mb-6 leading-tight">
                Electrical Services in {area.name}
              </h2>
              <p className="text-base text-charcoal-600 leading-relaxed mb-6">
                {area.description}
              </p>

              {primaryService && (
                <div className="card p-6 bg-navy-50 border-navy-100 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-electric-400 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-navy-900" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-navy-900 mb-2">
                        Featured Service in {area.name}
                      </h3>
                      <p className="text-sm text-charcoal-600 mb-3">
                        {primaryService.shortDescription}
                      </p>
                      <Link
                        to={`/${primaryService.slug}`}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-electric-600 hover:text-electric-700 transition-colors"
                      >
                        Explore {primaryService.shortTitle}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              <h3 className="font-display font-bold text-xl text-navy-900 mb-4">
                Other Services Available in {area.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {otherServices.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/${s.slug}`}
                    className="flex items-center gap-2 p-3 rounded-lg border border-charcoal-100 hover:border-electric-300 hover:bg-electric-50/30 transition-all group"
                  >
                    <CheckCircle className="w-4 h-4 text-electric-500 flex-shrink-0" />
                    <span className="text-sm text-navy-900 group-hover:text-navy-700 transition-colors">
                      {s.shortTitle}
                    </span>
                  </Link>
                ))}
              </div>

              <Link
                to={`/${services[0].slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-electric-600 hover:text-electric-700 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Explore More Electrical Services
              </Link>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="card p-6">
                  <h3 className="font-display font-bold text-lg text-navy-900 mb-4">
                    Serving {area.name}
                  </h3>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-electric-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-charcoal-600">{businessInfo.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-electric-500 flex-shrink-0" />
                      <a href={businessInfo.phoneLink} className="text-sm text-charcoal-600 hover:text-navy-900 transition-colors font-semibold">
                        {businessInfo.phoneDisplay}
                      </a>
                    </div>
                  </div>
                  <a href={businessInfo.phoneLink} className="btn-primary w-full">
                    <Phone className="w-4 h-4" />
                    Call {businessInfo.phoneDisplay}
                  </a>
                  <Link
                    to="/contact"
                    className="block text-center mt-3 text-sm font-semibold text-navy-700 hover:text-navy-900 transition-colors"
                  >
                    Send us a message
                  </Link>
                </div>

                <div className="rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src={businessInfo.googleMapsEmbed}
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${area.name}`}
                  />
                </div>

                <div className="card p-6">
                  <h3 className="font-display font-bold text-base text-navy-900 mb-3">
                    Nearby Service Areas
                  </h3>
                  <ul className="space-y-2">
                    {serviceAreas
                      .filter((a) => a.slug !== area.slug)
                      .slice(0, 5)
                      .map((a) => (
                        <li key={a.slug}>
                          <Link
                            to={`/${a.slug}`}
                            className="flex items-center gap-2 text-sm text-charcoal-600 hover:text-electric-600 transition-colors"
                          >
                            <MapPin className="w-3 h-3" />
                            {a.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        title={`Need an Electrician in ${area.name}?`}
        description={`Call D Best Electrical Service for residential electrical services in ${area.name}. We will arrange a visit at a time that works for you.`}
      />
    </>
  );
}
