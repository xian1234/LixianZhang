import { GraduationCap, Microscope, ShieldCheck, Globe, Calendar, Wallet } from 'lucide-react';

const ProjectsCn = () => {
  const projects = [
    {
      name: '国家自然科学基金青年项目（C类）',
      role: '项目负责人（PI）',
      category: '国家级',
      type: '遥感 | 多模态融合',
      funding: '30 万元',
      period: '2026.01 - 2028.12',
      color: 'bg-indigo-700',
      icon: <Globe className="w-5 h-5" />,
    },
    {
      name: '广东省自然科学基金面上项目',
      role: '项目负责人（PI）',
      category: '省部级',
      type: 'AI4Urban | 遥感智能',
      funding: '10 万元',
      period: '2026.01 - 2028.12',
      color: 'bg-emerald-700',
      icon: <Microscope className="w-5 h-5" />,
    },
    {
      name: '航天领域横向涉密项目',
      role: '项目负责人（PI）',
      category: '横向项目',
      type: '遥感基础模型 | 国产化优化',
      funding: '20 万元',
      period: '2024.10 - 2025.12',
      color: 'bg-slate-600',
      icon: <ShieldCheck className="w-5 h-5" />,
    },
    {
      name: '深圳市科技计划项目',
      role: '联合负责人（co-PI）',
      category: '省部级',
      type: '基础模型 | AI4S | 遥感',
      funding: '90 万元',
      period: '2026.01 - 2028.12',
      color: 'bg-emerald-700',
      icon: <Microscope className="w-5 h-5" />,
    },
    {
      name: '百万核可扩展公里级海陆空耦合区域气候模式与预测系统',
      role: '项目骨干',
      category: '国家级',
      type: '国家重点研发计划重大专项',
      funding: '1500 万元',
      period: '2023.12 - 2026.11',
      color: 'bg-indigo-700',
      icon: <GraduationCap className="w-5 h-5" />,
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto py-12 px-4 font-sans">
      <div className="flex items-center gap-3 mb-8 border-b border-gray-200 pb-4">
        <h2 className="text-2xl font-bold text-gray-800 tracking-tight">科研项目与经费</h2>
      </div>

      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div key={index} className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg flex">
            <div className={`w-1.5 ${project.color} shrink-0`} />
            <div className="p-6 w-full">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider text-white rounded ${project.color}`}>{project.category}</span>
                    <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider bg-gray-100 text-gray-600 rounded border border-gray-200">{project.role}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 leading-snug">{project.name}</h3>
                </div>

                <div className="flex items-center gap-1.5 text-gray-700 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                  <Wallet className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-semibold italic">{project.funding}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 mt-4 pt-4 border-t border-gray-50 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-gray-50 rounded text-indigo-600">{project.icon}</div>
                  <span className="font-medium">{project.type}</span>
                </div>
                <div className="flex items-center gap-2 md:justify-end">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="font-mono">{project.period}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsCn;
