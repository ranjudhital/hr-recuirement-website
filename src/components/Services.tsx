import { UserCheck, Briefcase, Users, LineChart, Shield, Target, ArrowUpRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      category: 'Recruitment',
      icon: UserCheck,
      description: 'Elite talent acquisition for organizations that demand excellence',
      items: [
        {
          icon: Briefcase,
          title: 'Executive Search',
          description: 'C-suite and senior leadership placements that transform organizations.',
        },
        {
          icon: Users,
          title: 'Permanent Placement',
          description: 'End-to-end recruitment for full-time positions at all levels.',
        },
        {
          icon: Target,
          title: 'Contract Staffing',
          description: 'Agile workforce solutions for project-based and temporary needs.',
        },
      ],
    },
    {
      category: 'HR Consulting',
      icon: LineChart,
      description: 'Strategic HR solutions that drive organizational excellence',
      items: [
        {
          icon: LineChart,
          title: 'Talent Strategy',
          description: 'Workforce planning aligned with business objectives and growth.',
        },
        {
          icon: Shield,
          title: 'HR Compliance',
          description: 'Navigate regulations and ensure best-practice implementation.',
        },
        {
          icon: Users,
          title: 'Org Development',
          description: 'Build stronger teams through culture and performance initiatives.',
        },
      ],
    },
  ];

  return (
    <div className="py-32 lg:py-40 bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0066CC] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="text-white/60 mb-6" style={{ fontWeight: '600', letterSpacing: '0.1em', fontSize: '13px' }}>
            WHAT WE DO
          </div>
          <h2 className="text-white mb-6" style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: '700', lineHeight: '1.1', letterSpacing: '-0.03em' }}>
            Full-spectrum talent solutions
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          {services.map((service, idx) => (
            <div key={idx} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-10 hover:border-white/20 transition-all">
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0066CC] transition-all">
                      <service.icon size={28} className="group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="mb-3" style={{ fontSize: '32px', fontWeight: '700', letterSpacing: '-0.02em' }}>
                      {service.category}
                    </h3>
                    <p className="text-white/60" style={{ fontSize: '16px', lineHeight: '1.5' }}>
                      {service.description}
                    </p>
                  </div>
                </div>
                
                {/* Items */}
                <div className="space-y-6">
                  {service.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex gap-5 group/item">
                      <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover/item:bg-white/10 transition-colors">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <h4 className="mb-2" style={{ fontWeight: '600', fontSize: '17px' }}>
                          {item.title}
                        </h4>
                        <p className="text-white/60" style={{ fontSize: '15px', lineHeight: '1.5' }}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-12">
          <h3 className="mb-12 text-center" style={{ fontSize: '36px', fontWeight: '700', letterSpacing: '-0.02em' }}>
            Our Process
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Discovery', desc: 'Deep-dive into your needs' },
              { num: '02', title: 'Strategy', desc: 'Tailored recruitment plan' },
              { num: '03', title: 'Execute', desc: 'Source top-tier talent' },
              { num: '04', title: 'Support', desc: 'Long-term partnership' },
            ].map((phase, idx) => (
              <div key={idx} className="relative group/phase">
                <div className="text-white/20 mb-4" style={{ fontSize: '56px', fontWeight: '700', letterSpacing: '-0.03em' }}>
                  {phase.num}
                </div>
                <h4 className="mb-2" style={{ fontWeight: '600', fontSize: '18px' }}>
                  {phase.title}
                </h4>
                <p className="text-white/60" style={{ fontSize: '15px' }}>
                  {phase.desc}
                </p>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-white/20 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
