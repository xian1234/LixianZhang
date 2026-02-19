import { Trophy, Medal, Star, Award } from 'lucide-react';

const Awards = () => {
  const awards2025 = [
    // {
    //   title: 'DAAD人工智能学者（AI_Net Fellow）',
    //   organization: '德国联邦政府',
    //   icon: <Award className="w-4 h-4" />
    // },
    {
      title: '优秀博士后（前0.1%）',
      organization: '深圳市人社局',
      icon: <Star className="w-4 h-4" />
    }
  ];

  const awards2024 = [
    {
      title: '年度十大最有贡献数据团队、最有价值数据集',
      organization: '中国遥感学会/国家对地观测中心',
      icon: <Trophy className="w-4 h-4" />
    },
    {
      title: '全国空天地信息技术赋能智慧城市大赛一等奖',
      organization: '中国测绘学会',
      icon: <Medal className="w-4 h-4" />
    },
    {
      title: '鲲鹏创新应用大赛全国银奖、深圳金奖',
      organization: '华为公司',
      icon: <Trophy className="w-4 h-4" />
    // },
    // {
    //   title: '中国超算年度最佳应用提名',
    //   organization: '中国计算机学会',
    //   icon: <Award className="w-4 h-4" />
    }
  ];

  const awards2022 = [
    {
      title: '中国超算最佳应用提名',
      organization: '中国计算机学会',
      icon: <Award className="w-4 h-4" />
    }
  ];

  return (
    <section id="awards" className="academic-section">
      <h2 className="section-title">奖项荣誉与学术兼职</h2>
      
      <div className="space-y-6">
        {/* 2025 Awards */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <span className="px-2 py-1 bg-blue-800 text-white text-sm rounded">2025</span>
          </h3>
          <div className="space-y-2">
            {awards2025.map((award, index) => (
              <div key={index} className="award-item">
                <span className="text-blue-800 mt-0.5">{award.icon}</span>
                <div>
                  <div className="font-medium text-gray-900">{award.title}</div>
                  <div className="text-sm text-gray-600">{award.organization}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2024 Awards */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <span className="px-2 py-1 bg-blue-800 text-white text-sm rounded">2024</span>
          </h3>
          <div className="space-y-2">
            {awards2024.map((award, index) => (
              <div key={index} className="award-item">
                <span className="text-blue-800 mt-0.5">{award.icon}</span>
                <div>
                  <div className="font-medium text-gray-900">{award.title}</div>
                  <div className="text-sm text-gray-600">{award.organization}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2023 Awards */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <span className="px-2 py-1 bg-blue-800 text-white text-sm rounded">2023</span>
          </h3>
          <div className="award-item">
            <span className="text-blue-800 mt-0.5"><Trophy className="w-4 h-4" /></span>
            <div>
              <div className="font-medium text-gray-900">最有贡献数据团队、最有价值数据集（完成人排序第1）</div>
              <div className="text-sm text-gray-600">中国遥感学会/国家对地观测中心</div>
            </div>
          </div>
        </div>

        {/* 2022 Awards */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <span className="px-2 py-1 bg-blue-800 text-white text-sm rounded">2022</span>
          </h3>
          <div className="space-y-2">
            {awards2022.map((award, index) => (
              <div key={index} className="award-item">
                <span className="text-blue-800 mt-0.5">{award.icon}</span>
                <div>
                  <div className="font-medium text-gray-900">{award.title}</div>
                  <div className="text-sm text-gray-600">{award.organization}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Academic Service */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">学术组织任职</h3>
        <div className="bg-gray-50 rounded-lg p-4 space-y-3">
          <div className="flex items-start gap-3">
            <span className="px-2 py-0.5 bg-blue-100 text-blue-800 text-xs font-medium rounded shrink-0">2024-2028</span>
            <div>
              <span className="font-medium text-gray-900">中国计算机学会CCF高性能专委会</span>
              <span className="text-gray-600"> - 执行委员</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="px-2 py-0.5 bg-green-100 text-green-800 text-xs font-medium rounded shrink-0">IJCAI 2024</span>
            <div>
              <span className="font-medium text-gray-900">韩国济州岛</span>
              <span className="text-gray-600"> - 分会主席</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="px-2 py-0.5 bg-green-100 text-green-800 text-xs font-medium rounded shrink-0">IGARSS 2022</span>
            <div>
              <span className="font-medium text-gray-900">马来西亚吉隆坡</span>
              <span className="text-gray-600"> - 分会主席</span>
            </div>
          </div>
        </div>
      </div>

      {/* Reviewer */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">期刊审稿人</h3>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <p className="text-gray-700 leading-relaxed">
            担任 <span className="font-medium text-blue-800">International Journal of Digital Earth</span>、
            <span className="font-medium text-blue-800"> Scientific Data</span>、
            <span className="font-medium text-blue-800"> Remote Sensing</span>、
            <span className="font-medium text-blue-800"> Scientific Report</span> 等十余本国际SCI收录刊物的审稿人
          </p>
        </div>
      </div>
    </section>
  );
};

export default Awards;
