import { ArrowUpRight, Sparkles } from 'lucide-react';

interface HeroProps {
  scrollToSection: (section: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <div className="pt-24 min-h-screen flex items-center bg-gradient-to-b from-gray-50 via-white to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-[#0066CC]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-32 relative">
        <div className="max-w-5xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-black/5 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <Sparkles size={16} className="text-[#0066CC]" />
            <span style={{ fontWeight: '500', fontSize: '14px' }} className="text-gray-700">
              Premium Recruitment & HR Solutions
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-black mb-8" style={{ fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: '700', lineHeight: '0.95', letterSpacing: '-0.04em' }}>
            Build teams that
            <br />
            <span className="text-[#0066CC]">move mountains</span>
          </h1>
          
          <p className="text-gray-600 mb-12 max-w-2xl" style={{ fontSize: '21px', lineHeight: '1.5', fontWeight: '400' }}>
            We connect ambitious talent with transformative opportunities. Strategic recruitment and HR consulting for companies that refuse to settle.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-20">
            <button
              onClick={() => scrollToSection('contact')}
              className="group bg-black text-white pl-8 pr-6 py-4 rounded-full hover:bg-black/90 transition-all flex items-center gap-3 hover:gap-4"
              style={{ fontWeight: '600', fontSize: '17px' }}
            >
              Get Started
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <ArrowUpRight size={16} />
              </div>
            </button>
            
            <button
              onClick={() => scrollToSection('services')}
              className="bg-gray-100 text-black px-8 py-4 rounded-full hover:bg-gray-200 transition-all"
              style={{ fontWeight: '600', fontSize: '17px' }}
            >
              Our Services
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl">
            {[
              { value: '500+', label: 'Successful Placements' },
              { value: '95%', label: 'Client Satisfaction' },
              { value: '10y', label: 'Industry Expertise' },
            ].map((stat, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0066CC]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-black mb-2" style={{ fontSize: '42px', fontWeight: '700', letterSpacing: '-0.02em' }}>
                    {stat.value}
                  </div>
                  <div className="text-gray-600" style={{ fontSize: '15px', fontWeight: '500' }}>
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating illustration */}
      <div className="absolute right-[8%] top-[50%] -translate-y-1/2 hidden xl:block opacity-10 pointer-events-none">
        <svg width="400" height="500" viewBox="0 0 400 500" fill="none">
          <rect x="140" y="50" width="16" height="400" fill="currentColor" className="text-[#0066CC]" rx="8"/>
          <rect x="244" y="50" width="16" height="400" fill="currentColor" className="text-[#0066CC]" rx="8"/>
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <rect key={i} x="156" y={100 + i * 55} width="88" height="12" fill="currentColor" className="text-[#0066CC]" rx="6"/>
          ))}
        </svg>
      </div>
    </div>
  );
}
