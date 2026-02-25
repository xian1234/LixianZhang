import { Cpu, Satellite, Image } from 'lucide-react';

const ResearchCn = () => {
  const researchAreas = [
    {
      title: '国产超算平台上的大模型预训练与并行优化',
      icon: <Cpu className="w-6 h-6" />,
      description: '面向遥感大模型（RS-LLM）构建预训练框架，支持 140TB 异构数据与 6 亿参数规模训练。围绕 Armv8 架构开展算子重构和并行优化，实现高效稳定的持续计算性能。',
      achievements: ['2024 鲲鹏应用创新大赛全国银奖、深圳金奖', '中国超算最佳应用奖提名', 'DAAD xAI Fellow'],
    },
    {
      title: '遥感与多模态数据融合',
      icon: <Satellite className="w-6 h-6" />,
      description: '提出 NTLSTM、DeepLight 等方法，实现夜光遥感 8 倍融合重建，并发布长期夜光数据集 PANDA-China。数据集浏览量和下载量长期位居相关平台前列。',
      achievements: ['成果发表于 Scientific Data、IJCAI', '1 篇 ESI 高被引论文', '2024 年度最具价值数据集 Top10'],
    },
    {
      title: '遥感图像可信超分辨率重建',
      icon: <Image className="w-6 h-6" />,
      description: '提出 SRSeg、SWCARE、Ref-Diff、RRSGAN 等框架，在多个基准上实现 0.2~0.8 dB 的 PSNR 提升，并保持低光谱失真，具备良好工程落地潜力。',
      achievements: ['发表于 IEEE TGRS、JAG、Remote Sensing、CVPR', '1 篇 ESI 高被引论文', '2023 空天地信息技术大赛一等奖'],
    },
  ];

  return (
    <section id="research" className="academic-section">
      <h2 className="section-title">研究方向与亮点</h2>
      <div className="space-y-6">
        {researchAreas.map((area, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-800">{area.icon}</div>
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

export default ResearchCn;
