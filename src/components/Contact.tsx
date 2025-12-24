import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiry: 'employer',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        inquiry: 'employer',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      detail: 'hello@jobladder.com',
      link: 'mailto:hello@jobladder.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      detail: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Office',
      detail: '123 Business Ave, Suite 100',
      link: '#',
    },
  ];

  return (
    <div className="py-32 lg:py-40 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="text-[#0066CC] mb-6" style={{ fontWeight: '600', letterSpacing: '0.1em', fontSize: '13px' }}>
            GET IN TOUCH
          </div>
          <h2 className="text-black mb-6" style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: '700', lineHeight: '1.1', letterSpacing: '-0.03em' }}>
            Let's start a conversation
          </h2>
          <p className="text-gray-600" style={{ fontSize: '19px', lineHeight: '1.6' }}>
            Ready to transform your team or career? Book a free consultation and discover how we can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-black/5 rounded-[32px] p-10 lg:p-12">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-black mb-3" style={{ fontWeight: '600', fontSize: '15px' }}>
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-gray-50 border border-black/5 rounded-2xl focus:border-[#0066CC] focus:outline-none focus:bg-white transition-all"
                        placeholder="John Smith"
                        style={{ fontSize: '16px' }}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-black mb-3" style={{ fontWeight: '600', fontSize: '15px' }}>
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-gray-50 border border-black/5 rounded-2xl focus:border-[#0066CC] focus:outline-none focus:bg-white transition-all"
                        placeholder="john@company.com"
                        style={{ fontSize: '16px' }}
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-black mb-3" style={{ fontWeight: '600', fontSize: '15px' }}>
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-gray-50 border border-black/5 rounded-2xl focus:border-[#0066CC] focus:outline-none focus:bg-white transition-all"
                        placeholder="+1 (555) 123-4567"
                        style={{ fontSize: '16px' }}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-black mb-3" style={{ fontWeight: '600', fontSize: '15px' }}>
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-gray-50 border border-black/5 rounded-2xl focus:border-[#0066CC] focus:outline-none focus:bg-white transition-all"
                        placeholder="Your Company"
                        style={{ fontSize: '16px' }}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="inquiry" className="block text-black mb-3" style={{ fontWeight: '600', fontSize: '15px' }}>
                      I am a/an
                    </label>
                    <select
                      id="inquiry"
                      name="inquiry"
                      required
                      value={formData.inquiry}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-gray-50 border border-black/5 rounded-2xl focus:border-[#0066CC] focus:outline-none focus:bg-white transition-all"
                      style={{ fontSize: '16px' }}
                    >
                      <option value="employer">Employer / Hiring Manager</option>
                      <option value="candidate">Job Seeker / Candidate</option>
                      <option value="hr">HR Professional</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-black mb-3" style={{ fontWeight: '600', fontSize: '15px' }}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-gray-50 border border-black/5 rounded-2xl focus:border-[#0066CC] focus:outline-none focus:bg-white transition-all resize-none"
                      placeholder="Tell us about your needs..."
                      style={{ fontSize: '16px' }}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-black text-white px-8 py-5 rounded-full hover:bg-black/90 transition-all flex items-center justify-center gap-3"
                    style={{ fontWeight: '600', fontSize: '17px' }}
                  >
                    Send Message
                    <Send size={18} />
                  </button>
                </form>
              ) : (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-[#0066CC]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-[#0066CC]" size={40} />
                  </div>
                  <h3 className="text-black mb-4" style={{ fontSize: '28px', fontWeight: '700' }}>
                    Message Sent!
                  </h3>
                  <p className="text-gray-600" style={{ fontSize: '17px' }}>
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              )}
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, idx) => (
              <a
                key={idx}
                href={info.link}
                className="block bg-white border border-black/5 rounded-3xl p-8 hover:border-[#0066CC]/20 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-[#0066CC]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0066CC] group-hover:scale-110 transition-all">
                  <info.icon className="text-[#0066CC] group-hover:text-white transition-colors" size={22} />
                </div>
                <h3 className="text-black mb-2" style={{ fontWeight: '600', fontSize: '16px' }}>
                  {info.title}
                </h3>
                <p className="text-gray-600" style={{ fontSize: '15px' }}>
                  {info.detail}
                </p>
              </a>
            ))}
            
            {/* Business Hours */}
            <div className="bg-gradient-to-br from-[#0066CC] to-blue-600 rounded-3xl p-8 text-white">
              <h3 className="mb-6" style={{ fontWeight: '700', fontSize: '18px' }}>
                Business Hours
              </h3>
              <div className="space-y-3">
                {[
                  { day: 'Mon - Fri', time: '9:00 AM - 6:00 PM' },
                  { day: 'Saturday', time: '10:00 AM - 2:00 PM' },
                  { day: 'Sunday', time: 'Closed' },
                ].map((schedule, idx) => (
                  <div key={idx} className="flex justify-between items-center" style={{ fontSize: '15px' }}>
                    <span className="text-white/80">{schedule.day}</span>
                    <span style={{ fontWeight: '600' }}>{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
