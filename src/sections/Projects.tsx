import { Briefcase, FlaskConical, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: '时空一致性约束的全球长时序夜光遥感超分重建方法研究',
      role: '主持',
      type: '国自然青年科学基金项目（C类）',
      funding: '30万元',
      period: '2026.01 - 2028.12',
      icon: <FlaskConical className="w-5 h-5" />
    },
    {
      title: '粤港澳大湾区可信多源时空遥感超分方法研究',
      role: '主持',
      type: '广东省自然科学基金面上项目',
      funding: '10万元',
      period: '2026.01 - 2028.12',
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      title: '面向xxxxx遥感大模型关键技术构建',
      role: '主持',
      type: '涉密，航天口',
      funding: '20万元',
      period: '2024.10 - 2025.10',
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      title: '千万核可扩展公里级海陆气耦合区域气候模式及预测系统',
      role: '参与',
      type: '国家重点研发计划重点专项',
      funding: '1500万元',
      period: '2023.12 - 2026.11',
      icon: <Users className="w-5 h-5" />
    }
  ];

  return (
    <section id="projects" className="academic-section">
      <h2 className="section-title">主持/参与课题</h2>
      
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-blue-800">{project.icon}</span>
                <span className={`px-2 py-0.5 text-xs font-medium rounded ${
                  project.role === '主持' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-green-100 text-green-800'
                }`}>
                  {project.role}
                </span>
              </div>
              <span className="text-sm font-semibold text-gray-900">{project.funding}</span>
            </div>
            
            <h3 className="text-base font-semibold text-gray-900 mb-2">{project.title}</h3>
            
            <div className="space-y-1 text-sm">
              <div className="text-gray-600">{project.type}</div>
              <div className="text-gray-500 flex items-center gap-1">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                {project.period}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
