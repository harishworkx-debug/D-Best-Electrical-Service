import { Phone } from 'lucide-react';
import { businessInfo } from '@/data/siteData';

export default function CallToAction({
  title = 'Need an Electrician in College Park, GA?',
  description = 'Call D Best Electrical Service today. We will assess your electrical needs and arrange a visit at a time that works for you.',
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="section-padding bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-electric-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-electric-400 rounded-full blur-3xl" />
      </div>
      <div className="container-max relative z-10 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric-400/10 border border-electric-400/30 mb-6">
            <Phone className="w-4 h-4 text-electric-400" />
            <span className="text-xs font-semibold text-electric-400 uppercase tracking-wide">
              Available to Help
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-white/70 mb-8 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={businessInfo.phoneLink} className="btn-primary">
              <Phone className="w-5 h-5" />
              Call {businessInfo.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
