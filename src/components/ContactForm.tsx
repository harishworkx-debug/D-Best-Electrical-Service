import { useState } from 'react';
import { Phone, User, Mail, MessageSquare, Wrench, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { services, businessInfo } from '@/data/siteData';
import { supabase } from '@/lib/supabase';

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.phone.trim()) e.phone = 'Please enter your phone number';
    else if (form.phone.replace(/[^0-9]/g, '').length < 10) e.phone = 'Please enter a valid phone number';
    if (!form.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email address';
    if (!form.service) e.service = 'Please select a service';
    if (!form.message.trim()) e.message = 'Please tell us about your electrical needs';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    try {
      const { error } = await supabase.from('contact_submissions').insert({
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        service: form.service,
        message: form.message.trim(),
      });
      if (error) throw error;
      setStatus('success');
      setForm({ name: '', phone: '', email: '', service: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  if (status === 'success') {
    return (
      <div className="card p-8 text-center animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-display font-bold text-xl text-navy-900 mb-2">
          Thank you for reaching out
        </h3>
        <p className="text-sm text-charcoal-600 mb-6 max-w-md mx-auto">
          Your message has been received. We will get back to you as soon as possible. For urgent
          needs, please call us directly.
        </p>
        <a href={businessInfo.phoneLink} className="btn-primary">
          <Phone className="w-4 h-4" />
          Call {businessInfo.phoneDisplay}
        </a>
        <button
          onClick={() => setStatus('idle')}
          className="block mx-auto mt-4 text-sm text-charcoal-500 hover:text-navy-900 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 sm:p-8 space-y-5">
      {status === 'error' && (
        <div className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-200">
          <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-red-800">Something went wrong</p>
            <p className="text-sm text-red-600 mt-1">
              Your message could not be sent at this time. Please try calling us at{' '}
              <a href={businessInfo.phoneLink} className="font-semibold underline">
                {businessInfo.phoneDisplay}
              </a>
              .
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-navy-900 mb-1.5">
            Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400" />
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className={`input-field pl-10 ${errors.name ? 'border-red-400' : ''}`}
              placeholder="Your full name"
            />
          </div>
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-navy-900 mb-1.5">
            Phone <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400" />
            <input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className={`input-field pl-10 ${errors.phone ? 'border-red-400' : ''}`}
              placeholder="404-000-0000"
            />
          </div>
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-navy-900 mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400" />
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className={`input-field pl-10 ${errors.email ? 'border-red-400' : ''}`}
              placeholder="you@example.com"
            />
          </div>
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-semibold text-navy-900 mb-1.5">
            Service Needed <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Wrench className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400" />
            <select
              id="service"
              value={form.service}
              onChange={(e) => handleChange('service', e.target.value)}
              className={`input-field pl-10 appearance-none ${errors.service ? 'border-red-400' : ''}`}
            >
              <option value="">Select a service</option>
              {services.map((s) => (
                <option key={s.slug} value={s.title}>
                  {s.shortTitle}
                </option>
              ))}
              <option value="Other">Other / Not sure</option>
            </select>
          </div>
          {errors.service && <p className="mt-1 text-xs text-red-600">{errors.service}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-navy-900 mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-charcoal-400" />
          <textarea
            id="message"
            value={form.message}
            onChange={(e) => handleChange('message', e.target.value)}
            rows={4}
            className={`input-field pl-10 resize-none ${errors.message ? 'border-red-400' : ''}`}
            placeholder="Tell us about your electrical needs — what you are experiencing, what you need installed, or any questions you have."
          />
        </div>
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>

      <p className="text-xs text-charcoal-400 text-center">
        By submitting this form, you agree to be contacted about your electrical service request.
      </p>
    </form>
  );
}
