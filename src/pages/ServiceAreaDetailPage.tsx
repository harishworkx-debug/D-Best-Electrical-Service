import { useParams, Link, Navigate } from 'react-router-dom';
import { Phone, MapPin, ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react';
import SEO from '@/components/SEO';
import CallToAction from '@/components/CallToAction';
import FAQAccordion from '@/components/FAQAccordion';
import { serviceAreas, services, businessInfo } from '@/data/siteData';
import { areaSeoContent } from '@/data/seoData';

export default function ServiceAreaDetailPage({ staticSlug }: { staticSlug?: string }) {
  const params = useParams<{ slug: string }>();
  const slug = staticSlug || params.slug;
  const area = serviceAreas.find((a) => a.slug === slug);

  if (!area) return <Navigate to="/" replace />;

  const areaIndex = serviceAreas.findIndex((a) => a.slug === slug);
  const heroImages = [
    'https://images.pexels.com/photos/17842832/pexels-photo-17842832.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/3615735/pexels-photo-3615735.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/28950842/pexels-photo-28950842.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/27928760/pexels-photo-27928760.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/5691494/pexels-photo-5691494.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/7518747/pexels-photo-7518747.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/4933643/pexels-photo-4933643.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/6835102/pexels-photo-6835102.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  ];
  const heroImage = heroImages[areaIndex % heroImages.length];

  const primaryService = services.find((s) => s.slug === area.primaryService);
  const otherServices = services.filter((s) => s.slug !== area.primaryService);
  
  // Deterministically shuffle 'otherServices' to vary content across city pages
  const shuffledOtherServices = [...otherServices].sort((a, b) => {
    return (a.slug.length + areaIndex) % 2 === 0 ? 1 : -1;
  }).slice(0, 4);

  return (
    <>
      <SEO
        title={area.metaTitle}
        description={area.metaDescription}
        canonicalPath={area.slug}
        breadcrumbs={[
          { name: 'Home', url: 'https://dbestelectricalservice.com/' },
          { name: 'Areas We Serve', url: 'https://dbestelectricalservice.com/#areas' },
          { name: area.name, url: `https://dbestelectricalservice.com/${area.slug}` }
        ]}
      />

      {/* Hero */}
      <section className="relative bg-navy-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={`Electrician working on a project in ${area.name}`}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/95 to-navy-900/70" />
        </div>
        <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <nav className="mb-4 flex flex-wrap items-center gap-2 text-xs text-white/50">
            <Link to="/" className="hover:text-electric-400 transition-colors">Home</Link>
            <span className="text-[10px]">&gt;</span>
            <Link to="/#areas" className="hover:text-electric-400 transition-colors">Areas We Serve</Link>
            <span className="text-[10px]">&gt;</span>
            <span className="text-white/90 font-medium">{area.name}</span>
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
                Electrical Services in {area.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {shuffledOtherServices.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/${s.slug}`}
                    className="flex items-center gap-2 p-3 rounded-lg border border-charcoal-100 hover:border-electric-300 hover:bg-electric-50/30 transition-all group"
                  >
                    <CheckCircle className="w-4 h-4 text-electric-500 flex-shrink-0" />
                    <span className="text-sm text-navy-900 group-hover:text-navy-700 transition-colors">
                      {s.shortTitle} in {area.name}
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



                <div className="card p-6">
                  <h3 className="font-display font-bold text-base text-navy-900 mb-3">
                    Nearby Service Areas
                  </h3>
                  <ul className="space-y-2">
                    {serviceAreas
                      .filter((a) => a.slug !== area.slug)
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

          {/* SEO Content Block */}
          <div className="mt-16 bg-navy-50 rounded-2xl p-8 lg:p-12 border border-navy-100">
            <h2 className="font-display font-bold text-2xl text-navy-900 mb-4">
              Your Trusted Electrician in {area.name}
            </h2>
            <div className="prose prose-navy max-w-none text-charcoal-600 leading-relaxed space-y-4">
              {areaSeoContent[area.slug]?.map((paragraph, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
              )) || (
                <>
                  <p>
                    When it comes to maintaining a safe and efficient home in {area.name}, having a reliable local electrician is essential. At D Best Electrical Service, we understand the unique electrical needs of homes in this community.
                  </p>
                  <p>
                    Our comprehensive electrical solutions are designed to ensure your property remains up to code and fully functional. From upgrading outdated electrical panels to seamlessly installing modern indoor and outdoor lighting systems, we prioritize safety and efficiency.
                  </p>
                </>
              )}
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
