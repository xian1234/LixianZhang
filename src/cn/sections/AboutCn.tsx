import { Mail, MapPin, GraduationCap, Users, Sparkles, Rocket, ExternalLink } from 'lucide-react';
import profileImage from '../../zlx.jpeg';

const AboutCn = () => {
  const keywords = ['地球科学智能', '多模态融合', '超分辨率重建', '时序建模', '高性能计算'];

  return (
    <section id="about" className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="w-full md:w-64 shrink-0 flex flex-col items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
              <div className="relative w-52 h-52 rounded-2xl overflow-hidden shadow-2xl border-4 border-white rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src={profileImage}
                  alt="张立贤"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/200?text=LZ';
                  }}
                />
              </div>
            </div>
            <div className="mt-6 text-center">
              <h2 className="text-xl font-bold text-gray-900">Lixian Zhang</h2>
              <p className="text-gray-500 text-sm font-medium">张立贤，博士</p>
            </div>

            <div className="mt-6 w-full space-y-2">
              <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group">
                <Mail className="w-4 h-4 text-blue-600" />
                <span className="text-xs text-gray-600 truncate group-hover:text-blue-700">zhanglx18@tsinghua.org.cn</span>
              </div>

              <a href="https://scholar.google.com/citations?user=wL_uBCQAAAAJ" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group">
                <GraduationCap className="w-4 h-4 text-blue-600" />
                <span className="text-xs text-gray-600 group-hover:text-blue-700 flex items-center gap-1">
                  Google Scholar <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </a>

              <a href="https://orcid.org/0000-0002-5285-1945" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors group">
                <img src="https://orcid.org/assets/vectors/orcid.logo.icon.svg" alt="ORCID" className="w-4 h-4" />
                <span className="text-xs text-gray-600 group-hover:text-emerald-700 flex items-center gap-1">
                  ORCID <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </a>

              <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-xs text-gray-600">苏州 | 北京 | 深圳</span>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold tracking-wider mb-4">
              AI4Urban 讲师
            </div>

            <h1 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              探索遥感与城市智能的 <br />
              <span className="text-blue-600 italic">深度协同</span>
            </h1>

            <div className="prose prose-blue max-w-none text-gray-700 space-y-4 text-justify">
              <p className="leading-relaxed">
                <Sparkles className="w-4 h-4 inline mr-2 text-yellow-500" />
                欢迎访问我的主页！我长期关注计算技术在地球科学中的变革潜力。2024 年毕业于清华大学并获得博士学位（导师：付昊桓教授），随后在国家超级计算深圳中心开展博士后研究（合作导师：卢宇彤教授）。我始终相信，超大规模计算能够帮助我们理解地球系统的复杂机制。
              </p>

              <p className="leading-relaxed">
                我的研究聚焦于<strong>遥感（RS）</strong>、<strong>人工智能（AI）</strong>与<strong>高性能计算（HPC）</strong>等学科交叉领域。目前主要围绕遥感基础模型构建，推动多模态数据融合与跨时空超分辨率重建方法发展，从海量像元中提取有价值的地理信息。
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {keywords.map((tag) => (
                <span key={tag} className="px-4 py-2 bg-white text-gray-600 rounded-xl text-xs font-bold border border-gray-100 shadow-sm hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200 cursor-default">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="mt-10 relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white shadow-xl">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <Rocket className="w-6 h-6 text-yellow-300 animate-bounce" />
                  <h3 className="text-xl font-bold">欢迎加入课题组！</h3>
                </div>
                <p className="text-blue-50 opacity-90 text-sm leading-relaxed mb-4">
                  We are looking for motivated talents passionate about the fusion of AI and Earth Science. Opportunities are open for:<br />
                  课题组招收秋季入学的硕士生，同时长期招收有兴趣一起科研合作的实习生、本科生，欢迎有兴趣的同学与我邮件联系！
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                    <Users className="w-5 h-5 mt-1 text-blue-200" />
                    <div>
                      <p className="font-bold text-sm">科研实习</p>
                      <p className="text-xs text-blue-100 mt-1">欢迎具有编程基础、愿意冲击高水平论文的同学联系。</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                    <GraduationCap className="w-5 h-5 mt-1 text-blue-200" />
                    <div>
                      <p className="font-bold text-sm">研究生招生</p>
                      <p className="text-xs text-blue-100 mt-1">遥感、电子信息与人工智能、计算机科学等相关方向硕士生欢迎报考与交流。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCn;
