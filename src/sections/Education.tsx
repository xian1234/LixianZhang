import { GraduationCap, Award, Plane } from 'lucide-react';

const Education = () => {
  const educations = [
    {
      date: '2024.1 - 至今',
      degree: '博士后',
      field: '高性能计算与人工智能',
      institution: '国家超级计算深圳中心',
      location: '广东深圳',
      advisor: '合作导师：卢宇彤教授（万人学者）',
      icon: <Award className="w-5 h-5" />
    },
    {
      date: '2018.9 - 2024.1',
      degree: '博士',
      field: '全球变化生态学',
      institution: '清华大学地球系统科学系',
      location: '北京',
      advisor: '导师：付昊桓教授（国家杰青）',
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      date: '2020.3 - 2021.4',
      degree: '访问学者',
      field: '信号处理·人工智能与对地观测',
      institution: '慕尼黑工业大学',
      location: '德国慕尼黑',
      advisor: '导师：Prof. Zhu（IEEE Fellow, 欧洲科学院院士）',
      icon: <Plane className="w-5 h-5" />
    },
    {
      date: '2014.9 - 2018.6',
      degree: '学士',
      field: '测绘工程·摄影测量与遥感',
      institution: '武汉大学测绘学院',
      location: '湖北武汉',
      advisor: '',
      icon: <GraduationCap className="w-5 h-5" />
    }
  ];

  return (
    <section id="education" className="academic-section">
      <h2 className="section-title">工作与教育背景</h2>
      
      <div className="space-y-0">
        {educations.map((edu, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-date">{edu.date}</div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-blue-800">{edu.icon}</span>
              <span className="timeline-title">{edu.degree}</span>
              <span className="text-gray-400">|</span>
              <span className="timeline-subtitle">{edu.field}</span>
            </div>
            <div className="text-gray-700 font-medium">{edu.institution}</div>
            <div className="timeline-location">{edu.location}</div>
            {edu.advisor && (
              <div className="text-sm text-gray-600 mt-1">{edu.advisor}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
