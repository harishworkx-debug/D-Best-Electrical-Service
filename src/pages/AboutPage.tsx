import { Link } from 'react-router-dom';
import { Phone, MapPin, ArrowRight, ShieldCheck, MessageSquare, Hammer, Zap, CheckCircle } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CallToAction from '@/components/CallToAction';
import { businessInfo } from '@/data/siteData';

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Us | D Best Electrical Service - College Park, GA"
        description="Learn about D Best Electrical Service, a College Park, GA-based electrical service provider serving homeowners throughout south metro Atlanta. Call 470-414-6473."
        canonicalPath="about"
      />
      <PageHero
        title="About D Best Electrical Service"
        subtitle="A local electrical service provider in College Park, Georgia, focused on safe work, clear communication, and careful workmanship."
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'About Us' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-sm font-bold text-electric-600 uppercase tracking-wide">
                Who We Are
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-900 mt-2 mb-6 leading-tight">
                Your Trusted Electrician in College Park, GA
              </h2>
              <p className="text-base text-charcoal-600 leading-relaxed mb-4">
                D Best Electrical Service is a locally operated, fully licensed, and insured electrical service provider based in College Park, Georgia. With over 15 years of dedicated residential experience, our team specializes in diagnosing complex electrical issues, performing whole-home rewires, and upgrading outdated electrical panels.
              </p>
              <p className="text-base text-charcoal-600 leading-relaxed mb-4">
                We know that inviting a contractor into your home requires trust. That is why our business is built on complete transparency. We provide upfront pricing, arrive on time in fully stocked vehicles, and treat your property with the utmost respect.
              </p>
              <ul className="space-y-3 mt-6 mb-8">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-electric-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-charcoal-700">Fully Licensed & Insured Electricians</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-electric-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-charcoal-700">Over 15 Years of Residential Experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-electric-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-charcoal-700">Serving College Park, East Point, Union City & South Metro Atlanta</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-xl h-64">
                <img
                  src="https://images.pexels.com/photos/27928759/pexels-photo-27928759.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Focused licensed electrician working on a residential panel"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl h-64 mt-8">
                <img
                  src="https://images.pexels.com/photos/38292956/pexels-photo-38292956.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Professional electrical testing equipment and tools"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-bold text-electric-600 uppercase tracking-wide">
              What We Value
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-900 mt-2 mb-4 leading-tight">
              Our Approach to Electrical Work
            </h2>
            <p className="text-base text-charcoal-600 leading-relaxed">
              Three principles guide everything we do on every job.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-navy-50 flex items-center justify-center mx-auto mb-5">
                <MessageSquare className="w-8 h-8 text-navy-700" />
              </div>
              <h3 className="font-display font-bold text-lg text-navy-900 mb-3">
                Clear Communication
              </h3>
              <p className="text-sm text-charcoal-600 leading-relaxed">
                We explain what we found, what needs to be done, and why — in plain language,
                without pressure or jargon. You will understand the work before we start.
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-navy-50 flex items-center justify-center mx-auto mb-5">
                <Hammer className="w-8 h-8 text-navy-700" />
              </div>
              <h3 className="font-display font-bold text-lg text-navy-900 mb-3">
                Careful Workmanship
              </h3>
              <p className="text-sm text-charcoal-600 leading-relaxed">
                Every connection is made up securely, every device is properly supported, and
                every circuit is tested before we leave. We take pride in clean, durable work.
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-navy-50 flex items-center justify-center mx-auto mb-5">
                <ShieldCheck className="w-8 h-8 text-navy-700" />
              </div>
              <h3 className="font-display font-bold text-lg text-navy-900 mb-3">
                Safety-Conscious Service
              </h3>
              <p className="text-sm text-charcoal-600 leading-relaxed">
                We follow safe work practices on every job, from verifying power is off before
                touching a wire to checking grounding and protection devices on every circuit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safe Electrical Work */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/10">
              <img
                src="https://images.pexels.com/photos/32497160/pexels-photo-32497160.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="An electrician carefully examines a residential fuse box indoors, ensuring electrical safety and compliance"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-sm font-bold text-electric-600 uppercase tracking-wide">
                Trust & Credentials
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-900 mt-2 mb-6 leading-tight">
                Safety and Compliance You Can Rely On
              </h2>
              <p className="text-base text-charcoal-600 leading-relaxed mb-4">
                Electrical work is inherently dangerous, and improper installations can create severe fire hazards. That is exactly why choosing a licensed and insured contractor is non-negotiable. We carry comprehensive liability insurance and hold all necessary state licenses to perform residential electrical work safely and legally.
              </p>
              <p className="text-base text-charcoal-600 leading-relaxed mb-6">
                Our team stays up-to-date with the latest National Electrical Code (NEC) updates. Whether we are pulling permits for a panel upgrade or executing a full home rewire, you can rest assured that our work passes inspection and protects your property.
              </p>
              <ul className="space-y-3">
                {[
                  'Strict adherence to National Electrical Code (NEC)',
                  'Fully permitted and inspected major projects',
                  'Comprehensive liability insurance to protect your home',
                  'Rigorous testing of every circuit after installation',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-electric-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Real Project Photos */}
      <section className="section-padding bg-navy-900">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-bold text-electric-400 uppercase tracking-wide">
              Our Work in Action
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-2 mb-4 leading-tight">
              Real Projects from Your Neighbors
            </h2>
            <p className="text-base text-white/60 leading-relaxed">
              We stand by the quality of our installations and repairs. Here are a few examples of our recent residential projects.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <img src="https://images.pexels.com/photos/28950842/pexels-photo-28950842.jpeg?auto=compress&cs=tinysrgb&h=400&w=400" alt="Completed electrical panel upgrade" className="w-full h-48 object-cover rounded-xl shadow-lg" />
            <img src="https://images.pexels.com/photos/5691494/pexels-photo-5691494.jpeg?auto=compress&cs=tinysrgb&h=400&w=400" alt="Modern GFCI outlet installation" className="w-full h-48 object-cover rounded-xl shadow-lg" />
            <img src="https://images.pexels.com/photos/7518747/pexels-photo-7518747.jpeg?auto=compress&cs=tinysrgb&h=400&w=400" alt="Elegant indoor lighting fixture setup" className="w-full h-48 object-cover rounded-xl shadow-lg" />
            <img src="https://images.pexels.com/photos/4981793/pexels-photo-4981793.jpeg?auto=compress&cs=tinysrgb&h=400&w=400" alt="New construction rough-in wiring" className="w-full h-48 object-cover rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* Service Area Quick Info */}
      <section className="section-padding bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-electric-400 rounded-full blur-3xl" />
        </div>
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-14 h-14 rounded-xl bg-electric-400 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-navy-900" />
              </div>
              <h3 className="font-display font-bold text-base text-white mb-2">Our Location</h3>
              <p className="text-sm text-white/60">{businessInfo.address}</p>
            </div>
            <div>
              <div className="w-14 h-14 rounded-xl bg-electric-400 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-navy-900" />
              </div>
              <h3 className="font-display font-bold text-base text-white mb-2">Call Us</h3>
              <a href={businessInfo.phoneLink} className="text-sm text-electric-400 font-semibold hover:text-electric-300 transition-colors">
                {businessInfo.phoneDisplay}
              </a>
            </div>
            <div>
              <div className="w-14 h-14 rounded-xl bg-electric-400 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-7 h-7 text-navy-900" fill="currentColor" />
              </div>
              <h3 className="font-display font-bold text-base text-white mb-2">Our Services</h3>
              <Link to="/electrical-installation-in-college-park-ga" className="text-sm text-electric-400 font-semibold hover:text-electric-300 transition-colors inline-flex items-center gap-1">
                Explore Services
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        title="Ready to Work With Us?"
        description="Call D Best Electrical Service to discuss your electrical needs. We serve College Park, GA and the surrounding communities."
      />
    </>
  );
}
