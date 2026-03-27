/* TEMPLATE: Update community name, phone number, and agent info for each community */
import { useState } from 'react';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    timeline: '',
    prequalified: '',
    message: '',
    smsOptIn: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.firstName.trim()) errs.firstName = 'First name is required';
    if (!formData.lastName.trim()) errs.lastName = 'Last name is required';
    if (!formData.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Valid email required';
    if (!formData.phone.trim()) errs.phone = 'Phone is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-md border ${
      errors[field] ? 'border-red-400 bg-red-50' : 'border-gray-300'
    } text-[#4A4A4A] text-sm focus:ring-2 focus:ring-[#D0021B]/20 focus:border-[#D0021B] outline-none transition-colors`;

  if (submitted) {
    return (
      <section id="contact" className="py-20 md:py-24 bg-[#F9F8F6]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-xl shadow-lg p-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] mb-4">
              Thank You, {formData.firstName}!
            </h2>
            <p className="text-[#4A4A4A] text-lg mb-6">
              Our Beaconwood sales team will be in touch shortly. In the meantime, feel free to schedule a self-guided tour.
            </p>
            <a
              href="https://cbhhomes.com/tour-now/"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-[#D0021B] text-white font-semibold px-8 py-4 rounded-md hover:bg-[#B00018] transition-colors"
            >
              Schedule a Tour
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 md:py-24 bg-[#F9F8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2D2D2D] mb-3">
              Ready to Make Beaconwood Home?
            </h2>
            <p className="text-lg text-[#4A4A4A] mb-8">
              Get in touch with our Eagle sales team. No pressure, just answers.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-[#2D2D2D] mb-1.5">First Name *</label>
                  <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className={inputClass('firstName')} placeholder="Your first name" />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-[#2D2D2D] mb-1.5">Last Name *</label>
                  <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className={inputClass('lastName')} placeholder="Your last name" />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#2D2D2D] mb-1.5">Email *</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={inputClass('email')} placeholder="you@example.com" />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#2D2D2D] mb-1.5">Phone Number *</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClass('phone')} placeholder="(208) 555-1234" />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-[#2D2D2D] mb-1.5">Move-in Timeline</label>
                  <select id="timeline" name="timeline" value={formData.timeline} onChange={handleChange} className={inputClass('timeline')}>
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="3-6">3–6 months</option>
                    <option value="6-12">6–12 months</option>
                    <option value="exploring">Just exploring</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="prequalified" className="block text-sm font-medium text-[#2D2D2D] mb-1.5">Pre-Qualified?</label>
                  <select id="prequalified" name="prequalified" value={formData.prequalified} onChange={handleChange} className={inputClass('prequalified')}>
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="not-yet">Not yet</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#2D2D2D] mb-1.5">Message (Optional)</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={3} className={inputClass('message')} placeholder="Tell us what you're looking for..." />
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" name="smsOptIn" checked={formData.smsOptIn} onChange={handleChange} className="mt-1 w-4 h-4 text-[#D0021B] border-gray-300 rounded focus:ring-[#D0021B]" />
                <span className="text-xs text-[#6B7280] leading-relaxed">
                  I don't want to miss out on my dream home! Please send me updates on CBH homes and communities. By checking this box, you consent to receive SMS messages. Message and data rates may apply.
                </span>
              </label>

              <button
                type="submit"
                className="w-full sm:w-auto bg-[#D0021B] text-white font-semibold px-10 py-4 rounded-md hover:bg-[#B00018] hover:scale-[1.02] transition-all duration-200 text-lg"
              >
                Send My Message
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Info */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-[#2D2D2D] mb-4">Other Ways to Connect</h3>
              <div className="space-y-4">
                <a href="tel:2083915545" className="flex items-center gap-3 text-[#4A4A4A] hover:text-[#D0021B] transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#D0021B]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#D0021B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <p className="font-semibold">(208) 391-5545</p>
                    <p className="text-xs text-[#6B7280]">Call or text us</p>
                  </div>
                </a>
                <a href="https://cbhhomes.com/home-loan-helper/" target="_blank" rel="noopener" className="flex items-center gap-3 text-[#4A4A4A] hover:text-[#D0021B] transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#D0021B]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#D0021B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <p className="font-semibold">Get Pre-Qualified</p>
                    <p className="text-xs text-[#6B7280]">See what you can afford</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Sales Team Preview */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-bold text-[#2D2D2D] mb-4">Your Sales Team</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&q=80" alt="Alexis Roemer - CBH Homes Sales Specialist" className="w-12 h-12 rounded-full object-cover" loading="lazy" />
                  <div>
                    <p className="font-semibold text-[#2D2D2D] text-sm">Alexis Roemer</p>
                    <p className="text-xs text-[#6B7280]">Senior Sales Specialist</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&q=80" alt="Nick Hafner - CBH Homes Sales Coach" className="w-12 h-12 rounded-full object-cover" loading="lazy" />
                  <div>
                    <p className="font-semibold text-[#2D2D2D] text-sm">Nick Hafner</p>
                    <p className="text-xs text-[#6B7280]">Sales Coach</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
