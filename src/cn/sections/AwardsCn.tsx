import { Trophy, Medal, Star, Award, Briefcase, Glasses, CheckCircle2, Globe } from 'lucide-react';

const AwardsCn = () => {
  const allAwards = [
    { title: '优秀博士后（前 0.1%）', organization: '深圳市人力资源和社会保障局', icon: <Star className="w-5 h-5 text-yellow-500" />, highlight: true },
    { title: '年度最具贡献数据团队 & 最具价值数据集 TOP10', organization: '中国测绘学会 / 国家地球系统科学数据中心', icon: <Trophy className="w-5 h-5 text-blue-600" /> },
    { title: '智慧城市空天地信息技术大赛一等奖', organization: '中国测绘学会', icon: <Medal className="w-5 h-5 text-orange-500" /> },
    { title: '鲲鹏应用创新大赛全国银奖 & 深圳金奖', organization: '华为技术有限公司', icon: <Trophy className="w-5 h-5 text-slate-400" /> },
    { title: '中国高性能计算最佳应用奖提名', organization: '中国计算机学会（CCF）', icon: <Award className="w-5 h-5 text-purple-500" /> },
  ];

  const services = [
    { role: '执行委员', org: 'CCF 高性能计算专委会（TCHPC）', period: '2024 - 2028', type: 'national' },
    { role: '分会主席', org: 'IJCAI 2024（韩国济州）', period: '2024', type: 'intl' },
    { role: '分会主席', org: 'IGARSS 2022（马来西亚吉隆坡）', period: '2022', type: 'intl' },
  ];

  const journals = ['CVPR', 'IJCAI', 'ECCV', 'NeurIPS', 'International Journal of Digital Earth', 'Scientific Data', 'Remote Sensing', 'Journal of Remote Sensing'];

  return (
    <section id="awards" className="py-16 bg-slate-50/50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-10 w-2 bg-blue-600 rounded-full"></div>
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">奖项荣誉与学术服务</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <Trophy className="w-6 h-6 text-blue-700" />
              <h3 className="text-xl font-bold text-gray-800">奖项荣誉</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {allAwards.map((award, index) => (
                <div key={index} className={`p-4 rounded-xl border transition-all duration-300 hover:shadow-md flex items-start gap-4 ${award.highlight ? 'bg-blue-50 border-blue-100 ring-1 ring-blue-200' : 'bg-white border-gray-100'}`}>
                  <div className="shrink-0 p-2 bg-white rounded-lg shadow-sm">{award.icon}</div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm leading-tight mb-1">{award.title}</h4>
                    <p className="text-xs text-gray-500 font-medium">{award.organization}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="w-6 h-6 text-blue-700" />
              <h3 className="text-xl font-bold text-gray-800">学术服务</h3>
            </div>
            <div className="space-y-4">
              {services.map((item, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-blue-100 py-1 hover:border-blue-400 transition-colors">
                  <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white border-2 border-blue-500"></div>
                  <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold mb-1 uppercase ${item.type === 'intl' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}`}>
                    {item.period}
                  </span>
                  <h4 className="text-sm font-bold text-gray-900">{item.org}</h4>
                  <p className="text-xs text-gray-600 flex items-center gap-1 mt-0.5"><CheckCircle2 className="w-3 h-3 text-blue-500" /> {item.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 mt-4">
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5"><Glasses className="w-24 h-24" /></div>
              <div className="flex flex-col md:flex-row md:items-center gap-6 relative z-10">
                <div className="shrink-0 flex items-center gap-3">
                  <div className="p-3 bg-slate-900 rounded-xl"><Globe className="w-6 h-6 text-white" /></div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 leading-none">期刊与会议审稿</h3>
                    <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider font-semibold">Peer Review Activities</p>
                  </div>
                </div>
                <div className="flex-1 flex flex-wrap gap-2">
                  {journals.map((name, i) => (
                    <span key={i} className="px-3 py-1.5 bg-slate-50 text-slate-700 rounded-lg text-xs font-medium border border-slate-100">{name}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsCn;
