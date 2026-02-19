import React from 'react';
import { GraduationCap, Microscope, ShieldCheck, Globe, Calendar, Wallet } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: 'Research on Spatio-temporal Consistency Constrained Super-resolution Reconstruction for Global Long-term Nighttime Light Remote Sensing',
      role: 'Principal Investigator (PI)',
      category: 'National Level',
      type: 'National Natural Science Foundation of China (NSFC) - Youth Program',
      funding: '¥300,000',
      period: '2026.01 - 2028.12',
      color: 'bg-indigo-700', // 国家级：深蓝色
      icon: <Globe className="w-5 h-5" />
    },
    {
      name: 'Trusted Multi-source Spatio-temporal Remote Sensing Super-resolution Methods for the Guangdong-Hong Kong-Macao Greater Bay Area',
      role: 'Principal Investigator (PI)',
      category: 'Provincial Level',
      type: 'Guangdong Provincial Natural Science Foundation - General Program',
      funding: '¥100,000',
      period: '2026.01 - 2028.12',
      color: 'bg-emerald-700', // 省部级：翠绿色
      icon: <Microscope className="w-5 h-5" />
    },
    {
      name: 'Key Technology Construction of Remote Sensing Foundation Models for XXXXX Applications',
      role: 'Principal Investigator (PI)',
      category: 'Industrial/Horizontal',
      type: 'Classified Project, Aerospace Sector',
      funding: '¥200,000',
      period: '2024.10 - 2025.10',
      color: 'bg-slate-600', // 横向/涉密：石板灰
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      name: 'Million-core Scalable Kilometer-scale Sea-Land-Air Coupled Regional Climate Model and Prediction System',
      role: 'Co-Investigator (Co-I)',
      category: 'National Level',
      type: 'National Key R&D Program of China - Major Specialist Project',
      funding: '¥15,000,000',
      period: '2023.12 - 2026.11',
      color: 'bg-indigo-700', // 国家级
      icon: <GraduationCap className="w-5 h-5" />
    }
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto py-12 px-4 font-sans">
      <div className="flex items-center gap-3 mb-8 border-b border-gray-200 pb-4">
        <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Research Grants & Projects</h2>
      </div>
      
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg flex"
          >
            {/* 级别区分颜色条 */}
            <div className={`w-1.5 ${project.color} shrink-0`} />
            
            <div className="p-6 w-full">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="space-y-2 flex-1">
                  {/* 项目级别与角色标签 */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider text-white rounded ${project.color}`}>
                      {project.category}
                    </span>
                    <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider bg-gray-100 text-gray-600 rounded border border-gray-200">
                      {project.role}
                    </span>
                  </div>
                  
                  {/* 项目名称 (替代原Title) */}
                  <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-indigo-900 transition-colors">
                    {project.name}
                  </h3>
                </div>

                {/* 经费展示 */}
                <div className="flex items-center gap-1.5 text-gray-700 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                  <Wallet className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-semibold italic">{project.funding}</span>
                </div>
              </div>

              {/* 底部详情信息 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 mt-4 pt-4 border-t border-gray-50 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-gray-50 rounded text-indigo-600">
                    {project.icon}
                  </div>
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

export default Projects;
