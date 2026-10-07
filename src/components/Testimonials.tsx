import { Star, Quote } from 'lucide-react';
import { reviews } from '@/data/reviews';

export default function Testimonials() {
  return (
    <section className="section-padding bg-charcoal-50">
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-navy-900 leading-tight mb-4">
            What Our <span className="text-electric-600">Customers</span> Say
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed">
            Don't just take our word for it. Read what your neighbors in the community have to say about our electrical services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="card p-6 sm:p-8 flex flex-col h-full bg-white shadow-sm hover:shadow-md transition-shadow relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-electric-100 rotate-180" />
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-electric-500 text-electric-500" />
                ))}
              </div>
              <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed mb-6 flex-grow italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-navy-100 flex items-center justify-center font-display font-bold text-navy-900">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-navy-900">{review.author}</div>
                  <div className="text-xs text-charcoal-500">Verified Customer</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
