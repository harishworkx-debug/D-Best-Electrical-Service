import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import FAQAccordion from '@/components/FAQAccordion';
import CallToAction from '@/components/CallToAction';
import { generalFaqs, businessInfo } from '@/data/siteData';

export default function FAQPage() {
  return (
    <>
      <SEO
        title="FAQs | D Best Electrical Service - College Park, GA"
        description="Frequently asked questions about electrical services, scheduling, service areas, and preparing for an electrician visit in College Park, GA. Call 470-414-6473."
        canonicalPath="faqs"
      />
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Common questions about our electrical services, scheduling, service areas, and what to expect when you work with D Best Electrical Service."
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'FAQs' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h2 className="font-display font-bold text-2xl text-navy-900 mb-4 leading-tight">
                  Have a Question?
                </h2>
                <p className="text-base text-charcoal-600 leading-relaxed mb-6">
                  Here are answers to some of the most common questions we hear. If your question
                  is not answered here, please call us.
                </p>
                <div className="card p-6 bg-navy-50 border-navy-100">
                  <p className="text-sm text-charcoal-600 mb-4">
                    Still have questions? We are happy to help.
                  </p>
                  <a href={businessInfo.phoneLink} className="btn-primary w-full">
                    <Phone className="w-4 h-4" />
                    Call {businessInfo.phoneDisplay}
                  </a>
                  <Link
                    to="/contact"
                    className="block text-center mt-3 text-sm font-semibold text-navy-700 hover:text-navy-900 transition-colors"
                  >
                    Send a message
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <FAQAccordion faqs={generalFaqs} />

              <div className="mt-10 p-6 rounded-2xl bg-charcoal-50 border border-charcoal-100">
                <h3 className="font-display font-bold text-lg text-navy-900 mb-3">
                  Service-Specific FAQs
                </h3>
                <p className="text-sm text-charcoal-600 mb-4 leading-relaxed">
                  Each of our service pages includes frequently asked questions specific to that
                  service. Explore our services to learn more.
                </p>
                <Link
                  to="/electrical-installation-in-college-park-ga"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-electric-600 hover:text-electric-700 transition-colors"
                >
                  Browse Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        title="Still Have Questions?"
        description="Call D Best Electrical Service and we will be happy to answer any questions you have about your electrical needs."
      />
    </>
  );
}
