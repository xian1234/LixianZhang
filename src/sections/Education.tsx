import { GraduationCap, Award, Plane } from 'lucide-react';

const Education = () => {
  const educations = [
    {
      date: '2024.1 - 2026.3',
      degree: 'Postdoctoral Research Fellow',
      field: 'HPC for remote sensing foundation model',
      institution: 'National Super-computing Center in Shenzhen',
      location: 'Shenzhen, Guangdong',
      advisor: 'Working with Prof. Yutong Lu @Sun Yat-sen University, National Super-computing Center in Shenzhen, and National Super-computing Center in Guangdong',
      icon: <Award className="w-5 h-5" />
    },
    {
      date: '2018.9 - 2024.1',
      degree: 'Ph.D.',
      field: 'Earth system Science',
      institution: 'Tsinghua University',
      location: 'Beijing',
      advisor: 'Supervised by Prof. Haohuan Fu (Fellow, IEEE) @Tsinghua University, National Super-computing Center in Shenzhen, and National Super-computing Center in Wuxi',
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      date: '2020.3 - 2021.4',
      degree: 'Visiting Scholar',
      field: 'AI for earth observation',
      institution: 'Technische Universität München (Technical University of Munich)',
      location: 'Munich',
      advisor: 'Co-supervised by Prof. Xiaoxiang Zhu (Fellow, IEEE) @Technical University of Munich and DLR',
      icon: <Plane className="w-5 h-5" />
    },
    {
      date: '2014.9 - 2018.6',
      degree: 'Bachelor',
      field: 'photogrammetry',
      institution: 'Wuhan University',
      location: 'Wuhan',
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
