import { Mail, Phone, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="academic-section">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Profile Image */}
        <div className="shrink-0">
          <div className="w-48 h-60 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg shadow-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-blue-800 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                张
              </div>
              <p className="text-sm text-gray-600">张立贤</p>
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">张立贤 (Lixian Zhang)</h1>
          <p className="text-lg text-blue-800 mb-4">博士后研究员 | 遥感与人工智能</p>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-800 rounded-full text-sm">
              <Mail className="w-4 h-4" />
              zhanglx18@tsinghua.org.cn
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm">
              <Phone className="w-4 h-4" />
              152-5690-9685
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm">
              <MapPin className="w-4 h-4" />
              深圳，广东
            </span>
          </div>

          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              我是国家超级计算深圳中心的博士后研究员，合作导师为卢宇彤教授（万人学者）。
              我于2024年在清华大学地球系统科学系获得博士学位，导师为付昊桓教授（国家杰青）。
              博士期间，我曾在慕尼黑工业大学进行访问学者研究，师从Zhu教授（IEEE Fellow, 欧洲科学院院士）。
              我本科毕业于武汉大学测绘学院摄影测量与遥感专业。
            </p>
            <p className="text-gray-700 leading-relaxed">
              我的研究兴趣主要集中在遥感图像处理、多模态数据融合、深度学习以及高性能计算。
              我致力于开发面向国产超算的大模型预训练和并行优化技术，构建遥感大模型预训练框架，
              并开展遥感图像超分辨率重建等研究。我的研究成果发表在Scientific Data、IEEE TGRS、IJCAI、CVPR等高水平期刊和会议上。
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">遥感图像处理</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">深度学习</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">多模态融合</span>
            <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">高性能计算</span>
            <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">夜光遥感</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
