import { Phone, MapPin, Clock, ExternalLink } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import { businessInfo } from '@/data/siteData';

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact D Best Electrical Service | College Park, GA Electrician"
        description="Contact D Best Electrical Service in College Park, GA. Call 404-397-9782 or send us a message. Located at 1102 Dayna Dr, College Park, GA 30349."
        canonicalPath="contact"
      />
      <PageHero
        title="Contact Us"
        subtitle="Call us directly or send a message using the form below. We serve homeowners in College Park, GA and the surrounding communities."
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Contact' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy-900 mb-6 leading-tight">
                Get in Touch
              </h2>
              <p className="text-base text-charcoal-600 leading-relaxed mb-8">
                The fastest way to reach us is by phone. Call us to discuss your electrical needs
                and we will arrange a visit at a time that works for you. You can also send a
                message using the contact form.
              </p>

              <div className="space-y-5">
                <a
                  href={businessInfo.phoneLink}
                  className="flex items-center gap-4 p-5 rounded-xl bg-navy-50 hover:bg-navy-100 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-electric-400 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-navy-900" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-electric-600 uppercase tracking-wide mb-1">
                      Call Us
                    </div>
                    <div className="text-lg font-bold text-navy-900 group-hover:text-navy-700 transition-colors">
                      {businessInfo.phoneDisplay}
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 rounded-xl border border-charcoal-100">
                  <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-navy-700" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-electric-600 uppercase tracking-wide mb-1">
                      Our Address
                    </div>
                    <div className="text-sm font-semibold text-navy-900 mb-1">
                      {businessInfo.address}
                    </div>
                    <a
                      href={businessInfo.googleMapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-electric-600 hover:text-electric-700 transition-colors font-medium"
                    >
                      Open in Google Maps
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl border border-charcoal-100">
                  <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-navy-700" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-electric-600 uppercase tracking-wide mb-1">
                      Schedule a Visit
                    </div>
                    <div className="text-sm text-charcoal-600">
                      Call to arrange a time that works for you. For urgent safety concerns, call
                      us right away.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src={businessInfo.googleMapsEmbed}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="D Best Electrical Service location map"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy-900 mb-6 leading-tight">
                Send Us a Message
              </h2>
              <p className="text-base text-charcoal-600 leading-relaxed mb-6">
                Fill out the form below with your contact information and a description of your
                electrical needs. We will get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
