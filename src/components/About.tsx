import { Target, Users, Award, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Strategic Alignment',
      description: 'Every placement is a strategic decision that drives long-term success.',
    },
    {
      icon: Users,
      title: 'Human-Centric',
      description: 'Technology-enabled, human-led approach to talent acquisition.',
    },
    {
      icon: Award,
      title: 'Excellence Standard',
      description: 'We only work with candidates and clients who share our commitment to quality.',
    },
    {
      icon: TrendingUp,
      title: 'Growth Partner',
      description: 'Your success metrics are our success metrics. We grow together.',
    },
  ];

  return (
    <div className="py-32 lg:py-40 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div className="space-y-10">
            <div>
              <div className="text-[#0066CC] mb-6" style={{ fontWeight: '600', letterSpacing: '0.1em', fontSize: '13px' }}>
                WHO WE ARE
              </div>
              <h2 className="text-black mb-8" style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: '700', lineHeight: '1.1', letterSpacing: '-0.03em' }}>
                We don't just fill seats. We build legacies.
              </h2>
              <p className="text-gray-600 mb-6" style={{ fontSize: '19px', lineHeight: '1.6', fontWeight: '400' }}>
                JobLadder redefines recruitment. We're a strategic partner for companies building exceptional teams and professionals pursuing meaningful careers.
              </p>
              <p className="text-gray-600" style={{ fontSize: '19px', lineHeight: '1.6', fontWeight: '400' }}>
                Through deep industry expertise and a refined understanding of what makes teams thrive, we've successfully placed 500+ professionals across diverse sectors.
              </p>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0066CC]/20 to-blue-500/20 rounded-[32px] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="relative overflow-hidden rounded-[32px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzY0MTY1MjI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team collaboration"
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
          {values.map((value, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0066CC]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-white border border-black/5 rounded-3xl p-8 hover:border-[#0066CC]/20 transition-all">
                <div className="w-14 h-14 bg-[#0066CC]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0066CC] group-hover:scale-110 transition-all">
                  <value.icon className="text-[#0066CC] group-hover:text-white transition-colors" size={24} />
                </div>
                <h3 className="text-black mb-3" style={{ fontWeight: '600', fontSize: '18px' }}>
                  {value.title}
                </h3>
                <p className="text-gray-600" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
