import { Trophy, Medal, Star, Award, Briefcase, Glasses, CheckCircle2, Globe } from 'lucide-react';

const Awards = () => {
  const allAwards = [
    {
      title: 'Outstanding Postdoctoral Fellow (Top 0.1%)',
      organization: 'Shenzhen Municipal Bureau of Human Resources and Social Security',
      icon: <Star className="w-5 h-5 text-yellow-500" />,
      highlight: true
    },
    {
      title: 'Annual Top 10 Most Contributive Data Teams & Most Valuable Datasets',
      organization: 'Chinese Society of Geodesy Photogrammetry and Cartography / National Earth Observation Data Center',
      icon: <Trophy className="w-5 h-5 text-blue-600" />,
    },
    {
      title: 'First Prize, National Competition on Space-Air-Ground Information Technology for Smart Cities',
      organization: 'Chinese Society for Geodesy Photogrammetry and Cartography',
      icon: <Medal className="w-5 h-5 text-orange-500" />,
    },
    {
      title: 'National Silver Award & Shenzhen Gold Award, Kunpeng Innovation Application Contest',
      organization: 'Huawei Technologies Co., Ltd.',
      icon: <Trophy className="w-5 h-5 text-slate-400" />,
    },
    {
      title: 'Nomination for Best Application of China High Performance Computing',
      organization: 'China Computer Federation (CCF)',
      icon: <Award className="w-5 h-5 text-purple-500" />,
    }
  ];

  const services = [
    {
      role: 'Executive Member',
      org: 'CCF Technical Committee on High Performance Computing (TCHPC)',
      period: '2024 - 2028',
      type: 'national'
    },
    {
      role: 'Session Chair',
      org: 'IJCAI 2024 (Jeju, South Korea)',
      period: '2024',
      type: 'intl'
    },
    {
      role: 'Session Chair',
      org: 'IGARSS 2022 (Kuala Lumpur, Malaysia)',
      period: '2022',
      type: 'intl'
    }
  ];

  const journals = [
    "CVPR", "IJCAI", "ECCV", "NeurIPS", 
    "International Journal of Digital Earth", 
    "Scientific Data", "Remote Sensing", "Journal of Remote Sensing"
  ];

  return (
    <section id="awards" className="py-16 bg-slate-50/50">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-10 w-2 bg-blue-600 rounded-full"></div>
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Awards & Academic Service</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Section 1: Awards & Honors */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <Trophy className="w-6 h-6 text-blue-700" />
              <h3 className="text-xl font-bold text-gray-800">Awards & Honors</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {allAwards.map((award, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-xl border transition-all duration-300 hover:shadow-md flex items-start gap-4 ${
                    award.highlight ? 'bg-blue-50 border-blue-100 ring-1 ring-blue-200' : 'bg-white border-gray-100'
                  }`}
                >
                  <div className="shrink-0 p-2 bg-white rounded-lg shadow-sm">
                    {award.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm leading-tight mb-1">{award.title}</h4>
                    <p className="text-xs text-gray-500 font-medium">{award.organization}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Academic Service */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="w-6 h-6 text-blue-700" />
              <h3 className="text-xl font-bold text-gray-800">Academic Service</h3>
            </div>
            
            <div className="space-y-4">
              {services.map((item, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-blue-100 py-1 hover:border-blue-400 transition-colors">
                  <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white border-2 border-blue-500"></div>
                  <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold mb-1 uppercase ${
                    item.type === 'intl' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {item.period}
                  </span>
                  <h4 className="text-sm font-bold text-gray-900">{item.org}</h4>
                  <p className="text-xs text-gray-600 flex items-center gap-1 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-blue-500" /> {item.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Reviewer (Full Width at Bottom) */}
          <div className="lg:col-span-3 mt-4">
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Glasses className="w-24 h-24" />
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center gap-6 relative z-10">
                <div className="shrink-0 flex items-center gap-3">
                  <div className="p-3 bg-slate-900 rounded-xl">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 leading-none">Journal & Conference Reviewer</h3>
                    <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider font-semibold">Peer Review Activities</p>
                  </div>
                </div>
                
                <div className="flex-1 flex flex-wrap gap-2">
                  {journals.map((name, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 bg-slate-50 text-slate-700 rounded-lg text-xs font-medium border border-slate-100 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all cursor-default"
                    >
                      {name}
                    </span>
                  ))}
                  <span className="px-3 py-1.5 text-slate-400 text-xs font-medium italic">
                    & more high-impact venues...
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Awards;
