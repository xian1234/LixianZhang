import { Cpu, Satellite, Image } from 'lucide-react';

const researchAreas = [
    {
      title: 'LLM Pre-training and Parallel Optimization for Domestic Supercomputing Platforms',
      icon: <Cpu className="w-6 h-6" />,
      description: 'Developed a pre-training framework for Remote Sensing Large Language Models (RS-LLMs), executing pre-training on 140TB of heterogeneous data with 600 million parameters. Conducted core operator reconstruction and parallel optimization for domestic Armv8-based CPUs. Through a synergistic design encompassing preprocessing, instruction-level optimization, operator refactoring, and parallel strategies, achieved a sustained computational performance of 437.56 Pflops (and a peak sustained performance of 11 Pflops in specific configurations).',
      achievements: [
        'National Silver Award & Shenzhen Gold Award, Kunpeng Application Innovation Contest 2024',
        'Finalist (Nomination) for China Supercomputing Best Application Award 2022',
        'Selected as DAAD xAI Fellow'
      ]
    },
    {
      title: 'Remote Sensing and Multimodal Data Fusion',
      icon: <Satellite className="w-6 h-6" />,
      description: 'Proposed the NTLSTM and DeepLight methodologies to achieve 8x fusion reconstruction. Based on these methods, released the long-term nighttime light dataset PANDA-China, which has surpassed 32,000 views and 9,000 downloads, consistently ranking among the top 10 on the National Space Science Data Center (NSSDC) trending list.',
      achievements: [
        'Publications in Scientific Data (Nature Portfolio) and IJCAI',
        '1 paper recognized as an ESI Highly Cited Paper',
        'Top 10 Most Valuable Dataset Award, 2024',
        'Top 10 Most Contributive Team Award, 2024'
      ]
    },
    {
      title: 'Trustworthy Super-Resolution for Remote Sensing Imagery',
      icon: <Image className="w-6 h-6" />,
      description: 'Introduced SRSeg, SWCARE, Ref-Diff, and RRSGAN frameworks tailored for remote sensing image super-resolution. These methods achieved a Peak Signal-to-Noise Ratio (PSNR) improvement of 0.2 to 0.8 dB over existing benchmarks, while maintaining spectral distortion below 5%, demonstrating significant practical utility and broad application potential.',
      achievements: [
        'Publications in IEEE TGRS, JAG, Remote Sensing, and CVPR (CCF-A)',
        '1 paper recognized as an ESI Highly Cited Paper',
        'First Prize, Smart City Air-Space-Ground Information Technology Competition 2023'
      ]
    }
  ];

  return (
    <section id="research" className="academic-section">
      <h2 className="section-title">研究方向与亮点</h2>
      
      <div className="space-y-6">
        {researchAreas.map((area, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-800">
                {area.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.achievements.map((achievement, idx) => (
                    <span key={idx} className="inline-flex items-center px-2.5 py-1 bg-yellow-50 text-yellow-800 text-xs font-medium rounded-full border border-yellow-200">
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Research;
