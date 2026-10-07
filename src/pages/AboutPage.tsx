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
        description="Learn about D Best Electrical Service, a College Park, GA-based electrical service provider serving homeowners throughout south metro Atlanta. Call 404-397-9782."
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
                Your Local Electrician in College Park
              </h2>
              <p className="text-base text-charcoal-600 leading-relaxed mb-4">
                D Best Electrical Service is a residential electrical service provider based in
                College Park, Georgia. We serve homeowners throughout the south metro Atlanta
                area, handling everything from installing a single outlet to upgrading an
                electrical panel to rewiring an older home.
              </p>
              <p className="text-base text-charcoal-600 leading-relaxed mb-4">
                We believe electrical work should be done right the first time. That means making
                secure connections, using the correct wire sizes and breakers, testing every
                circuit before we leave, and following safe work practices on every job — from
                verifying power is off before touching a wire to checking grounding and
                protection devices.
              </p>
              <p className="text-base text-charcoal-600 leading-relaxed">
                We also believe in treating customers with respect. That means showing up when we
                say we will, explaining the work in plain language, and being honest about what
                needs to be done and what does not.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/10">
              <img
                src="https://images.pexels.com/photos/27928759/pexels-photo-27928759.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Focused technician using a drill on an electrical panel, showcasing expert workmanship"
                className="w-full h-[450px] object-cover"
              />
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
                Why It Matters
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-900 mt-2 mb-6 leading-tight">
                The Importance of Safe Electrical Work
              </h2>
              <p className="text-base text-charcoal-600 leading-relaxed mb-4">
                Electrical work is not something to cut corners on. Faulty wiring, overloaded
                circuits, and improper connections can create fire hazards and shock risks. That
                is why it matters who does the work — and how they do it.
              </p>
              <p className="text-base text-charcoal-600 leading-relaxed mb-6">
                At D Best Electrical Service, we take safety seriously. We use the correct wire
                sizes and breakers for each load, make sure grounding is solid, install GFCI and
                AFCI protection where code requires it, and test every circuit before we pack up.
                If we find a safety issue during a job, we tell you about it honestly.
              </p>
              <ul className="space-y-3">
                {[
                  'Proper wire sizing and breaker matching',
                  'Grounding and bonding verification',
                  'GFCI and AFCI protection where required',
                  'Testing of every circuit after installation or repair',
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
