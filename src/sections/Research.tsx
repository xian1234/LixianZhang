import { Cpu, Satellite, Image } from 'lucide-react';

const Research = () => {
  const researchAreas = [
    {
      title: '面向国产超算的大模型预训练和并行优化',
      icon: <Cpu className="w-6 h-6" />,
      description: '构建遥感大模型预训练框架，开展140TB异构数据和6亿参数的预训练，并面向国产Armv8架构CPU开展关键算子重构与并行优化，从预处理、指令级、算子重构到并行策略等维度协同设计，达到437.56Pflops的持续计算性能，取得11Pflops的持续计算性能。',
      achievements: [
        '2024鲲鹏应用大赛全国银奖、深圳赛区金奖',
        '2024年HPC China最佳论文',
        '2022年中国超算最佳应用提名'
      ]
    },
    {
      title: '遥感与多模态数据融合',
      icon: <Satellite className="w-6 h-6" />,
      description: '提出NTLSTM和DeepLight方法实现8倍融合重建，基于此发布长时序夜光数据集PANDA-China，浏览量超32000次，下载量超9000次，长期位列国家科学数据中心热榜前十。',
      achievements: [
        '论文发表于Scientific Data和IJCAI',
        '1篇入选ESI高被引论文',
        '1篇入选IJCAI 2024 AI4Good分会Highlight',
        '2024年国家对地观测中心"最具价值数据集奖"',
        '"最有贡献数据团队奖"'
      ]
    },
    {
      title: '遥感图像可信超分',
      icon: <Image className="w-6 h-6" />,
      description: '提出面向遥感图像的SRSeg、SWCARE、Ref-Diff、RRSGAN方法，相较于现有方法峰值信噪比（PSNR）提高0.2到0.8 dB，且光谱畸变小于5%，表现出较强的实用性和广泛应用潜力。',
      achievements: [
        '论文发表于IEEE TGRS、JAG、Remote Sensing和CVPR（CCF-A类）',
        '1篇入选ESI高被引论文',
        '2023年智慧城市空天地信息技术大赛一等奖'
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
