import { Building2, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ForEmployersProps {
  scrollToSection: (section: string) => void;
}

export default function ForEmployers({ scrollToSection }: ForEmployersProps) {
  const benefits = [
    'Pre-vetted, qualified candidates',
    'Reduced time-to-hire',
    'Industry expertise & insights',
    'Flexible hiring solutions',
    'Confidential executive search',
    'Employer branding support',
    'Salary benchmarking',
    'Post-placement guarantee',
  ];

  return (
    <div className="py-32 lg:py-40 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 bg-[#0066CC]/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Building2 size={16} className="text-[#0066CC]" />
              <span className="text-[#0066CC]" style={{ fontWeight: '600', fontSize: '14px' }}>
                FOR EMPLOYERS
              </span>
            </div>
            
            <h2 className="text-black" style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: '700', lineHeight: '1.1', letterSpacing: '-0.03em' }}>
              Hire talent that
              <br />
              <span className="text-[#0066CC]">moves the needle</span>
            </h2>
            
            <p className="text-gray-600" style={{ fontSize: '19px', lineHeight: '1.6', fontWeight: '400' }}>
              Stop settling for good enough. Partner with JobLadder to access exceptional talent that transforms your business from the inside out.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#0066CC] flex-shrink-0" size={20} />
                  <span className="text-gray-700" style={{ fontSize: '16px', fontWeight: '500' }}>
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="group bg-black text-white pl-8 pr-6 py-4 rounded-full hover:bg-black/90 transition-all flex items-center gap-3"
                style={{ fontWeight: '600', fontSize: '17px' }}
              >
                Start Hiring
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <ArrowUpRight size={16} />
                </div>
              </button>
              
              <button
                onClick={() => scrollToSection('services')}
                className="bg-gray-100 text-black px-8 py-4 rounded-full hover:bg-gray-200 transition-all"
                style={{ fontWeight: '600', fontSize: '17px' }}
              >
                View Services
              </button>
            </div>
          </div>
          
          {/* Stat Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0066CC]/20 to-blue-500/20 rounded-[32px] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="relative bg-white border border-black/5 rounded-[32px] p-12 hover:border-[#0066CC]/20 transition-all">
              <div className="text-[#0066CC] mb-4" style={{ fontSize: '80px', fontWeight: '700', letterSpacing: '-0.04em', lineHeight: '1' }}>
                14
              </div>
              <div className="text-black mb-6" style={{ fontSize: '24px', fontWeight: '600', letterSpacing: '-0.01em' }}>
                Average days to placement
              </div>
              <p className="text-gray-600" style={{ fontSize: '17px', lineHeight: '1.5' }}>
                Our streamlined process gets you the right talent, fast. Most clients see qualified candidates within the first week.
              </p>
              
              <div className="mt-12 pt-8 border-t border-black/5 grid grid-cols-2 gap-6">
                <div>
                  <div className="text-black mb-1" style={{ fontSize: '32px', fontWeight: '700' }}>200+</div>
                  <div className="text-gray-600" style={{ fontSize: '14px' }}>Partner Companies</div>
                </div>
                <div>
                  <div className="text-black mb-1" style={{ fontSize: '32px', fontWeight: '700' }}>98%</div>
                  <div className="text-gray-600" style={{ fontSize: '14px' }}>Retention Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
