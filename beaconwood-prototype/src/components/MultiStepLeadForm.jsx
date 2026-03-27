/* TEMPLATE: Update community name, slug, budget ranges, and interest options for each community */
import { useState } from 'react';

export default function MultiStepLeadForm({ communityName = 'Beaconwood', communitySlug = 'beaconwood-eagle' }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    interest: '',
    timeline: '',
    budget: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const interestOptions = ['Move-In Ready', 'Under Construction', 'Just Exploring', 'Investor'];
  const timelineOptions = ['ASAP', '1-3 Months', '3-6 Months', '6+ Months'];
  const budgetOptions = ['Under $700K', '$700K-$800K', '$800K-$900K', '$900K+'];

  const select = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (field === 'interest') {
      setTimeout(() => setStep(2), 200);
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.firstName.trim()) errs.firstName = 'First name is required';
    if (!formData.lastName.trim()) errs.lastName = 'Last name is required';
    if (!formData.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Please enter a valid email';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
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
    const payload = { ...formData, communitySlug };
    console.log('Lead form submission:', payload);
    setSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const ProgressBar = () => (
    <div className="mb-8">
      <div className="flex gap-2 mb-2">
        {[1, 2, 3].map(i => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
              i <= step ? 'bg-[#D0021B]' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
      <p className="text-sm text-[#9CA3AF]">Step {step} of 3</p>
    </div>
  );

  const SelectButton = ({ label, selected, onClick }) => (
    <button
      type="button"
      onClick={onClick}
      className={`w-full min-h-[48px] px-5 py-3.5 rounded-lg border-2 text-sm font-semibold transition-all duration-200 cursor-pointer ${
        selected
          ? 'bg-[#D0021B] border-[#D0021B] text-white shadow-sm'
          : 'bg-white border-gray-200 text-[#2D2D2D] hover:border-[#D0021B]/40 hover:bg-[#D0021B]/5'
      }`}
    >
      {label}
    </button>
  );

  if (submitted) {
    return (
      <section id="contact" className="py-20 md:py-24 bg-[#F9F8F6] font-body">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="bg-white rounded-xl shadow-lg p-10 sm:p-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] mb-3 font-display">
              Thank You for Your Interest
            </h2>
            <p className="text-[#4A4A4A] text-lg mb-6">
              Our {communityName} sales team will reach out shortly, {formData.firstName}. We're excited to help you find your perfect home.
            </p>
            <a
              href="https://cbhhomes.com/tour-now/"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-[#D0021B] text-white font-semibold px-8 py-4 rounded-md hover:bg-[#B00018] transition-colors min-h-[48px]"
            >
              Schedule a Tour
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 md:py-24 bg-[#F9F8F6] font-body">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] mb-2 font-display">
            Let's Find Your Home
          </h2>
          <p className="text-[#4A4A4A] mb-6">
            Answer a few quick questions so we can help you best.
          </p>

          <ProgressBar />

          {/* Step 1: Interest */}
          {step === 1 && (
            <div>
              <h3 className="text-lg font-semibold text-[#2D2D2D] mb-4">What brings you to {communityName}?</h3>
              <div className="grid grid-cols-1 gap-3">
                {interestOptions.map(option => (
                  <SelectButton
                    key={option}
                    label={option}
                    selected={formData.interest === option}
                    onClick={() => select('interest', option)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Timeline & Budget */}
          {step === 2 && (
            <div>
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-[#2D2D2D] mb-4">What's your timeline?</h3>
                <div className="grid grid-cols-2 gap-3">
                  {timelineOptions.map(option => (
                    <SelectButton
                      key={option}
                      label={option}
                      selected={formData.timeline === option}
                      onClick={() => select('timeline', option)}
                    />
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-[#2D2D2D] mb-4">What's your budget?</h3>
                <div className="grid grid-cols-2 gap-3">
                  {budgetOptions.map(option => (
                    <SelectButton
                      key={option}
                      label={option}
                      selected={formData.budget === option}
                      onClick={() => select('budget', option)}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-sm text-[#4A4A4A] hover:text-[#D0021B] transition-colors cursor-pointer"
                >
                  &larr; Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  disabled={!formData.timeline || !formData.budget}
                  className={`px-8 py-3 rounded-md font-semibold text-sm transition-all min-h-[48px] cursor-pointer ${
                    formData.timeline && formData.budget
                      ? 'bg-[#D0021B] text-white hover:bg-[#B00018]'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Contact Info */}
          {step === 3 && (
            <form onSubmit={handleSubmit}>
              <h3 className="text-lg font-semibold text-[#2D2D2D] mb-4">Almost there - how can we reach you?</h3>

              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-[#2D2D2D] mb-1.5">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-md border ${errors.firstName ? 'border-red-400 bg-red-50' : 'border-gray-300'} text-[#4A4A4A] text-sm focus:ring-2 focus:ring-[#D0021B]/20 focus:border-[#D0021B] outline-none transition-colors`}
                      placeholder="First name"
                    />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-[#2D2D2D] mb-1.5">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-md border ${errors.lastName ? 'border-red-400 bg-red-50' : 'border-gray-300'} text-[#4A4A4A] text-sm focus:ring-2 focus:ring-[#D0021B]/20 focus:border-[#D0021B] outline-none transition-colors`}
                      placeholder="Last name"
                    />
                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#2D2D2D] mb-1.5">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-md border ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-300'} text-[#4A4A4A] text-sm focus:ring-2 focus:ring-[#D0021B]/20 focus:border-[#D0021B] outline-none transition-colors`}
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#2D2D2D] mb-1.5">Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-md border ${errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-300'} text-[#4A4A4A] text-sm focus:ring-2 focus:ring-[#D0021B]/20 focus:border-[#D0021B] outline-none transition-colors`}
                    placeholder="(208) 555-1234"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#2D2D2D] mb-1.5">Message (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 text-[#4A4A4A] text-sm focus:ring-2 focus:ring-[#D0021B]/20 focus:border-[#D0021B] outline-none transition-colors"
                    placeholder="Tell us what you're looking for..."
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-6">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-sm text-[#4A4A4A] hover:text-[#D0021B] transition-colors cursor-pointer"
                >
                  &larr; Back
                </button>
                <button
                  type="submit"
                  className="flex-1 ml-4 bg-[#D0021B] text-white font-semibold py-3.5 rounded-md hover:bg-[#B00018] hover:scale-[1.01] transition-all min-h-[48px] text-base cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
