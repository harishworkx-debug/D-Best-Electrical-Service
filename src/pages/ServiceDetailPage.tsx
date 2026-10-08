import { useParams, Link, Navigate } from 'react-router-dom';
import { Phone, CheckCircle, ArrowRight, Plug, Wrench, Cable, LayoutGrid, ToggleLeft, PlugZap, Lightbulb, Sun, Fan, ShieldCheck, MapPin } from 'lucide-react';
import SEO from '@/components/SEO';
import CallToAction from '@/components/CallToAction';
import FAQAccordion from '@/components/FAQAccordion';
import { services, serviceAreas, businessInfo } from '@/data/siteData';
import { serviceSeoContent } from '@/data/seoData';

const iconMap: Record<string, any> = {
  Plug, Wrench, Cable, LayoutGrid, ToggleLeft, PlugZap, Lightbulb, Sun, Fan, ShieldCheck,
};

export default function ServiceDetailPage({ staticSlug }: { staticSlug?: string }) {
  const params = useParams<{ slug: string }>();
  const slug = staticSlug || params.slug;
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/" replace />;

  const relatedServices = service.relatedServices
    .map((rSlug) => services.find((s) => s.slug === rSlug))
    .filter(Boolean);

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        canonicalPath={service.slug}
        breadcrumbs={[
          { name: 'Home', url: 'https://dbestelectricalservice.com/' },
          { name: 'Electrical Services', url: 'https://dbestelectricalservice.com/#services' },
          { name: service.shortTitle, url: `https://dbestelectricalservice.com/${service.slug}` },
          { name: `${businessInfo.city}, GA`, url: `https://dbestelectricalservice.com/${service.slug}` }
        ]}
      />

      {/* Hero */}
      <section className="relative bg-navy-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.heroImage}
            alt={service.heroAlt}
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/95 to-navy-900/70" />
        </div>
        <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <nav className="mb-4 flex flex-wrap items-center gap-2 text-xs text-white/50">
            <Link to="/" className="hover:text-electric-400 transition-colors">Home</Link>
            <span className="text-[10px]">&gt;</span>
            <Link to="/#services" className="hover:text-electric-400 transition-colors">Electrical Services</Link>
            <span className="text-[10px]">&gt;</span>
            <span className="text-white/70">{service.shortTitle}</span>
            <span className="text-[10px]">&gt;</span>
            <span className="text-white/90 font-medium">{businessInfo.city}, GA</span>
          </nav>
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-electric-400 flex items-center justify-center flex-shrink-0">
              {(() => {
                const Icon = iconMap[service.icon] || Plug;
                return <Icon className="w-7 h-7 text-navy-900" />;
              })()}
            </div>
            <div>
              <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                {service.title} in {businessInfo.city}, GA
              </h1>
              <p className="mt-3 text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl">
                {service.shortDescription}
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

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy-900 mb-6 leading-tight">
                Professional {service.title} in {businessInfo.city}, GA
              </h2>
              <p className="text-base text-charcoal-600 leading-relaxed mb-6">
                {service.overview}
              </p>

              <h3 className="font-display font-bold text-xl text-navy-900 mb-4 mt-10">
                Common {service.title.toLowerCase().includes('installation') ? 'projects' : 'problems'} we handle
              </h3>
              <div className="space-y-6">
                {service.problems.map((problem) => (
                  <div key={problem.title} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-electric-400/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-5 h-5 text-electric-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-base text-navy-900 mb-1">{problem.title}</h4>
                      <p className="text-sm text-charcoal-600 leading-relaxed">{problem.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="card p-6">
                  <h3 className="font-display font-bold text-lg text-navy-900 mb-4">
                    Ready to Get Started?
                  </h3>
                  <p className="text-sm text-charcoal-600 mb-4 leading-relaxed">
                    Call us today to discuss your {service.title.toLowerCase()} needs. We will
                    arrange a visit and take care of the work.
                  </p>
                  <a href={businessInfo.phoneLink} className="btn-primary w-full">
                    <Phone className="w-4 h-4" />
                    Call {businessInfo.phoneDisplay}
                  </a>
                  <Link
                    to="/contact"
                    className="block text-center mt-3 text-sm font-semibold text-navy-700 hover:text-navy-900 transition-colors"
                  >
                    Or send us a message
                  </Link>
                </div>

                <div className="card p-6">
                  <h3 className="font-display font-bold text-base text-navy-900 mb-3">
                    Our Process
                  </h3>
                  <ol className="space-y-3">
                    {service.process.map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-navy-100 text-navy-700 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <div>
                          <div className="text-sm font-semibold text-navy-900">{step.title}</div>
                          <div className="text-xs text-charcoal-500 mt-0.5 leading-relaxed">
                            {step.description}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Gallery / Image */}
      {service.gallery && service.gallery.length > 0 ? (
        <section className="section-padding bg-charcoal-50">
          <div className="container-max">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy-900 mb-8 leading-tight text-center">
              Real Project Photos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.gallery.map((img, i) => (
                <div key={i} className="rounded-2xl overflow-hidden shadow-xl aspect-video">
                  <img src={img} alt={`${service.shortTitle} project photo ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-charcoal-50 py-12">
          <div className="container-max">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/10">
              <img
                src={service.heroImage}
                alt={service.heroAlt}
                className="w-full h-[300px] sm:h-[400px] object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <span className="text-sm font-bold text-electric-600 uppercase tracking-wide">
                Questions
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy-900 mt-2 mb-4 leading-tight">
                {service.shortTitle} FAQs
              </h2>
              <p className="text-base text-charcoal-600 leading-relaxed">
                Common questions about {service.title.toLowerCase()}. Have a question that is not
                answered here? Call us.
              </p>
            </div>
            <div className="lg:col-span-2">
              <FAQAccordion faqs={service.faqs} />
            </div>
          </div>

          {/* SEO Content Block */}
          <div className="mt-16 bg-navy-50 rounded-2xl p-8 lg:p-12 border border-navy-100">
            <h2 className="font-display font-bold text-2xl text-navy-900 mb-4">
              Why High-Quality {service.title} Matters
            </h2>
            <div className="prose prose-navy max-w-none text-charcoal-600 leading-relaxed space-y-4">
              {serviceSeoContent[service.slug]?.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              )) || (
                <>
                  <p>
                    Your home's electrical system is a complex and crucial component of your daily life. Opting for professional {service.title.toLowerCase()} not only ensures that your devices and appliances operate at peak efficiency, but it also safeguards your property against potential hazards like electrical fires or shocks.
                  </p>
                  <p>
                    Modern homes demand more power than ever before. Whether it's to support new smart home technologies, heavy-duty appliances, or a growing family, ensuring that your system can handle the load is paramount.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="section-padding bg-charcoal-50">
          <div className="container-max">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy-900 mb-8 leading-tight text-center">
              Related Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedServices.map((rs) => {
                if (!rs) return null;
                const Icon = iconMap[rs.icon] || Plug;
                return (
                  <Link
                    key={rs.slug}
                    to={`/${rs.slug}`}
                    className="card card-hover p-6 group block"
                  >
                    <div className="w-10 h-10 rounded-xl bg-navy-50 flex items-center justify-center mb-3 group-hover:bg-electric-400 transition-colors">
                      <Icon className="w-5 h-5 text-navy-700 group-hover:text-navy-900 transition-colors" />
                    </div>
                    <h3 className="font-semibold text-sm text-navy-900 mb-2">{rs.shortTitle}</h3>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-electric-600">
                      Learn more
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

        <section className="section-padding bg-charcoal-50">
          <div className="container-max">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy-900 mb-8 leading-tight text-center">
              Also Serving
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {serviceAreas.map((area) => (
                <Link
                  key={area.slug}
                  to={`/${area.slug}`}
                  className="flex items-center gap-2 p-3 rounded-lg bg-white shadow-sm border border-charcoal-100 hover:border-electric-300 hover:shadow-md transition-all"
                >
                  <MapPin className="w-4 h-4 text-electric-500 flex-shrink-0" />
                  <span className="text-sm font-semibold text-navy-900">{area.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

      <CallToAction
        title={`Need ${service.title.toLowerCase()}?`}
        description={`Call D Best Electrical Service to discuss your ${service.title.toLowerCase()} needs. We will arrange a visit and get the work done right.`}
      />
    </>
  );
}
