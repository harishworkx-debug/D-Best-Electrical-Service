import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import { services, whyChooseUs, serviceProcess, serviceAreas, businessInfo } from '@/data/siteData';
import * as Icons from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Plug: Icons.Plug,
  Wrench: Icons.Wrench,
  Cable: Icons.Cable,
  LayoutGrid: Icons.LayoutGrid,
  ToggleLeft: Icons.ToggleLeft,
  PlugZap: Icons.PlugZap,
  Lightbulb: Icons.Lightbulb,
  Sun: Icons.Sun,
  Fan: Icons.Fan,
  ShieldCheck: Icons.ShieldCheck,
  MessageSquare: Icons.MessageSquare,
  Hammer: Icons.Hammer,
  MapPin: Icons.MapPin,
  Phone: Icons.Phone,
  ClipboardList: Icons.ClipboardList,
};

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Electrical Services in College Park, GA | D Best Electrical Service"
        description="Comprehensive residential electrical services in College Park, GA. Installation, repairs, wiring, panels, lighting, and safety inspections. Call 470-414-6473."
        canonicalPath="electrical-services"
      />
      <PageHero
        title="Electrical Services"
        subtitle="Professional, reliable, and code-compliant residential electrical services for homes in College Park and South Metro Atlanta."
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Services' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-navy-900 mb-6 leading-tight">
              Electrical Services in College Park, GA
            </h1>
            <p className="text-lg text-charcoal-600 leading-relaxed">
              Your home's electrical system is complex and critical to your family's safety and comfort. Whether you need a simple outlet repaired, a new ceiling fan installed, or a complete whole-home rewire, D Best Electrical Service provides the expertise and careful workmanship required to do the job right. We don't cut corners, and we don't guess—we diagnose, repair, and install according to the highest safety standards and the National Electrical Code.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Icons.Zap;
              // Creating a short unique description by taking first two sentences of the overview
              const descriptionSentences = service.overview.split('.');
              const shortDescription = (descriptionSentences[0] || '') + '.' + (descriptionSentences[1] ? descriptionSentences[1] + '.' : '');

              return (
                <div key={service.slug} className={`flex flex-col md:flex-row gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center`}>
                  <div className="w-full md:w-1/2">
                    <img
                      src={service.heroImage}
                      alt={service.heroAlt}
                      className="w-full h-64 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-electric-50 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-electric-600" />
                      </div>
                      <h2 className="font-display font-bold text-2xl text-navy-900">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-base text-charcoal-600 leading-relaxed mb-6">
                      {shortDescription}
                    </p>
                    <Link
                      to={`/${service.slug}`}
                      className="inline-flex items-center gap-2 text-electric-600 font-bold hover:text-electric-700 transition-colors group"
                    >
                      Learn more about {service.shortTitle}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-navy-50">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-900 mb-6 leading-tight">
              Why Choose D Best Electrical Service?
            </h2>
            <p className="text-lg text-charcoal-600 leading-relaxed">
              We know you have choices when it comes to hiring an electrician. Here is why homeowners throughout College Park trust us with their homes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason) => {
              const Icon = iconMap[reason.icon] || Icons.Zap;
              return (
                <div key={reason.title} className="bg-white p-8 rounded-2xl shadow-sm border border-charcoal-100/50 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-electric-50 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-electric-600" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-navy-900 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-charcoal-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-900 mb-6 leading-tight">
              Our Simple Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-electric-100 z-0"></div>
            {serviceProcess.map((step) => {
              const Icon = iconMap[step.icon] || Icons.Zap;
              return (
                <div key={step.title} className="relative z-10 text-center">
                  <div className="w-24 h-24 mx-auto bg-white rounded-full border-4 border-electric-50 flex items-center justify-center mb-6 shadow-sm">
                    <div className="w-16 h-16 bg-electric-500 rounded-full flex items-center justify-center text-white">
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>
                  <div className="text-sm font-bold text-electric-600 mb-2">STEP {step.step}</div>
                  <h3 className="font-display font-bold text-xl text-navy-900 mb-3">{step.title}</h3>
                  <p className="text-base text-charcoal-600 leading-relaxed px-4">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6 leading-tight">
                Areas We Serve
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                Based in College Park, GA, we provide reliable residential electrical services to homeowners throughout the South Metro Atlanta area.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {serviceAreas.map((area) => (
                  <Link
                    key={area.slug}
                    to={`/${area.slug}`}
                    className="flex items-center gap-2 text-sm text-electric-300 hover:text-white transition-colors"
                  >
                    <Icons.MapPin className="w-4 h-4" />
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="bg-navy-800 rounded-2xl p-8 border border-white/10">
              <h3 className="font-display font-bold text-2xl mb-4">Need Service Now?</h3>
              <p className="text-white/70 mb-6">Our team is ready to help with your electrical project or urgent repair.</p>
              <a
                href={businessInfo.phoneLink}
                className="btn-primary w-full justify-center text-lg"
              >
                Call {businessInfo.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
