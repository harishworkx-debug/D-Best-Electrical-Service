import { Link } from 'react-router-dom';
import {
  Phone,
  ArrowRight,
  Zap,
  MessageSquare,
  Hammer,
  ShieldCheck,
  MapPin,
  Clock,
  ClipboardList,
  Wrench,
  CheckCircle,
  Lightbulb,
  Plug,
  Cable,
  LayoutGrid,
  ToggleLeft,
  PlugZap,
  Sun,
  Fan,
} from 'lucide-react';
import SEO from '@/components/SEO';
import CallToAction from '@/components/CallToAction';
import FAQAccordion from '@/components/FAQAccordion';
import { ServiceCard } from '@/components/PageHero';
import Testimonials from '@/components/Testimonials';
import {
  services,
  serviceAreas,
  generalFaqs,
  whyChooseUs,
  serviceProcess,
  businessInfo,
} from '@/data/siteData';

const iconMap: Record<string, any> = {
  Plug,
  Wrench,
  Cable,
  LayoutGrid,
  ToggleLeft,
  PlugZap,
  Lightbulb,
  Sun,
  Fan,
  ShieldCheck,
  MessageSquare,
  Hammer,
  MapPin,
  Phone,
  ClipboardList,
  Clock,
};

export default function HomePage() {
  return (
    <>
      <SEO
        title="D Best Electrical Service | Electrician in College Park, GA"
        description="Professional residential electrical services in College Park, GA. Installation, repairs, wiring, panels, lighting, safety inspections. Call 404-397-9782."
      />

      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center bg-navy-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600"
            alt="Electrician working on a circuit breaker panel with colorful wires"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/95 to-navy-900/70" />
        </div>

        <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric-400/10 border border-electric-400/30 mb-6 animate-fade-in">
              <Zap className="w-4 h-4 text-electric-400" fill="currentColor" />
              <span className="text-xs font-semibold text-electric-400 uppercase tracking-wide">
                College Park, Georgia
              </span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 animate-fade-up">
              Reliable Electrical Service for Your Home
            </h1>

            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
              D Best Electrical Service provides professional electrical installation, repairs,
              wiring, panel services, and safety inspections to homeowners in College Park, GA
              and the surrounding communities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <a href={businessInfo.phoneLink} className="btn-primary">
                <Phone className="w-5 h-5" />
                Call {businessInfo.phoneDisplay}
              </a>
              <Link to="/electrical-installation-in-college-park-ga" className="btn-secondary">
                Explore Electrical Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              {whyChooseUs.slice(0, 3).map((item) => {
                const Icon = iconMap[item.icon] || ShieldCheck;
                return (
                  <div key={item.title} className="flex items-center gap-2">
                    <Icon className="w-5 h-5 text-electric-400" />
                    <span className="text-sm text-white/80 font-medium">{item.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Business Introduction */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-sm font-bold text-electric-600 uppercase tracking-wide">
                About D Best Electrical Service
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-900 mt-2 mb-6 leading-tight">
                Local Electrical Service You Can Trust
              </h2>
              <p className="text-base text-charcoal-600 leading-relaxed mb-4">
                D Best Electrical Service is a College Park, Georgia-based electrical service
                provider serving homeowners throughout the south metro Atlanta area. We handle
                everything from installing a single outlet to upgrading an electrical panel to
                rewiring an older home.
              </p>
              <p className="text-base text-charcoal-600 leading-relaxed mb-6">
                Our approach is straightforward: we listen to what you need, assess the situation
                in person, explain the work clearly, and do it carefully. No pressure, no
                exaggeration, and no cutting corners. Every connection is made up securely and
                every circuit is tested before we leave.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/about" className="btn-navy">
                  Learn About Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-charcoal-200 px-6 py-3 text-sm font-bold text-navy-900 transition-all hover:border-navy-300 hover:bg-charcoal-50">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/10">
                <img
                  src="https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Professional electrician using a drill on an indoor circuit breaker panel"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5 max-w-[240px] hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-electric-400 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-6 h-6 text-navy-900" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-navy-900">
                      Safety First
                    </div>
                    <div className="text-xs text-charcoal-500 mt-0.5">
                      Every circuit tested before we leave
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-bold text-electric-600 uppercase tracking-wide">
              What We Do
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-900 mt-2 mb-4 leading-tight">
              Electrical Services for Your Home
            </h2>
            <p className="text-base text-charcoal-600 leading-relaxed">
              From installations and repairs to panel upgrades and safety inspections, we cover
              the full range of residential electrical needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                title={service.shortTitle}
                shortDescription={service.shortDescription}
                icon={iconMap[service.icon] || Plug}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/electrical-repairs-troubleshooting-in-college-park-ga" className="btn-navy">
              Explore More Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-400 rounded-full blur-3xl" />
        </div>
        <div className="container-max relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-bold text-electric-400 uppercase tracking-wide">
              Why Choose Us
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-2 mb-4 leading-tight">
              The D Best Electrical Difference
            </h2>
            <p className="text-base text-white/60 leading-relaxed">
              We focus on the things that matter most: clear communication, careful workmanship,
              and safe electrical service on every job.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => {
              const Icon = iconMap[item.icon] || ShieldCheck;
              return (
                <div
                  key={item.title}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-electric-400 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-navy-900" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Residential Installation & Repair */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-sm font-bold text-electric-600 uppercase tracking-wide">
                Residential Electrical
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-900 mt-2 mb-6 leading-tight">
                Installation and Repair for Your Home
              </h2>
              <p className="text-base text-charcoal-600 leading-relaxed mb-6">
                Whether you are building a new room, upgrading your electrical panel, or dealing
                with an outlet that stopped working, we provide the full range of residential
                electrical installation and repair services. We work on homes of all ages — from
                new construction to older houses that need wiring updates.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'New wiring and circuit installation',
                  'Electrical panel upgrades and replacements',
                  'Outlet, switch, and GFCI installation',
                  'Indoor and outdoor lighting installation',
                  'Ceiling fan installation and replacement',
                  'Electrical safety inspections and diagnostics',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-electric-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/electrical-installation-in-college-park-ga" className="btn-navy">
                Explore Electrical Installation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/10">
                <img
                  src="https://images.pexels.com/photos/4981793/pexels-photo-4981793.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Electrician wearing safety gear installing wiring in a new building"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting & Safety */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/10">
                <img
                  src="https://images.pexels.com/photos/38292956/pexels-photo-38292956.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Close-up view of a multimeter and various tools on a workspace table"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
            <div>
              <span className="text-sm font-bold text-electric-600 uppercase tracking-wide">
                Troubleshooting & Safety
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-900 mt-2 mb-6 leading-tight">
                Finding and Fixing Electrical Problems
              </h2>
              <p className="text-base text-charcoal-600 leading-relaxed mb-6">
                Electrical problems can be disruptive and potentially unsafe. A dead outlet, a
                breaker that keeps tripping, or lights that flicker when you turn on an appliance
                are all signs that something in your system needs attention. We use a systematic
                troubleshooting process to find the actual cause — not just the symptom.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-electric-400/10 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-4 h-4 text-electric-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-navy-900">Safety Inspections</h4>
                    <p className="text-sm text-charcoal-600 mt-1">
                      Whole-home assessments to check wiring, panels, grounding, and protection
                      devices.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-electric-400/10 flex items-center justify-center flex-shrink-0">
                    <Wrench className="w-4 h-4 text-electric-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-navy-900">Expert Diagnostics</h4>
                    <p className="text-sm text-charcoal-600 mt-1">
                      We trace circuits and test connections to find the root cause of electrical
                      issues.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-electric-400/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-electric-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-navy-900">Durable Repairs</h4>
                    <p className="text-sm text-charcoal-600 mt-1">
                      We fix the actual problem, not just the symptom, and test the repair before
                      we leave.
                    </p>
                  </div>
                </div>
              </div>
              <Link to="/electrical-repairs-troubleshooting-in-college-park-ga" className="btn-navy">
                Explore Repairs & Troubleshooting
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-bold text-electric-600 uppercase tracking-wide">
              How It Works
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-900 mt-2 mb-4 leading-tight">
              Our Simple Service Process
            </h2>
            <p className="text-base text-charcoal-600 leading-relaxed">
              Getting electrical work done should not be complicated. Here is how we work with you
              from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceProcess.map((step, index) => {
              const Icon = iconMap[step.icon] || Phone;
              return (
                <div key={step.step} className="relative">
                  {index < serviceProcess.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-[60%] w-full h-[2px] bg-gradient-to-r from-electric-300 to-transparent" />
                  )}
                  <div className="text-center">
                    <div className="relative inline-flex">
                      <div className="w-24 h-24 rounded-2xl bg-navy-50 flex items-center justify-center">
                        <Icon className="w-10 h-10 text-navy-700" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-electric-400 flex items-center justify-center text-xs font-bold text-navy-900">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="font-display font-bold text-lg text-navy-900 mt-6 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-charcoal-600 leading-relaxed max-w-xs mx-auto">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Service Area */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-bold text-electric-600 uppercase tracking-wide">
              Where We Work
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-900 mt-2 mb-4 leading-tight">
              Serving College Park and Surrounding Areas
            </h2>
            <p className="text-base text-charcoal-600 leading-relaxed">
              Based in College Park, Georgia, we provide electrical services to homeowners
              throughout the south metro Atlanta area.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                to={`/${area.slug}`}
                className="card card-hover p-5 text-center group"
              >
                <MapPin className="w-6 h-6 text-electric-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold text-navy-900">{area.name}</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/college-park-ga" className="btn-navy">
              Explore Service Areas
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <span className="text-sm font-bold text-electric-600 uppercase tracking-wide">
                Questions & Answers
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-900 mt-2 mb-4 leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-base text-charcoal-600 leading-relaxed mb-6">
                Common questions about our electrical services, scheduling, and what to expect
                when you work with D Best Electrical Service.
              </p>
              <Link to="/faqs" className="inline-flex items-center gap-1 text-sm font-semibold text-electric-600 hover:text-electric-700 transition-colors">
                View All FAQs
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="lg:col-span-2">
              <FAQAccordion faqs={generalFaqs.slice(0, 5)} />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CallToAction
        title="Ready to Get Started?"
        description="Call D Best Electrical Service today to discuss your electrical needs. We will arrange a visit and take care of the work with care and professionalism."
      />
    </>
  );
}
