import { Mail, MapPin, GraduationCap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              联系方式
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>zhanglx18@tsinghua.org.cn</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>国家超级计算深圳中心，广东深圳</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">快速链接</h3>
            <div className="space-y-2 text-sm">
              <a href="#about" className="block hover:text-blue-400 transition-colors">关于我</a>
              <a href="#publications" className="block hover:text-blue-400 transition-colors">发表论文</a>
              <a href="#research" className="block hover:text-blue-400 transition-colors">研究方向</a>
              <a href="#awards" className="block hover:text-blue-400 transition-colors">奖项荣誉</a>
            </div>
          </div>

          {/* Research Interests */}
          <div>
            <h3 className="text-white font-semibold mb-4">研究领域</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-800 text-xs rounded">遥感图像处理</span>
              <span className="px-2 py-1 bg-gray-800 text-xs rounded">深度学习</span>
              <span className="px-2 py-1 bg-gray-800 text-xs rounded">多模态融合</span>
              <span className="px-2 py-1 bg-gray-800 text-xs rounded">高性能计算</span>
              <span className="px-2 py-1 bg-gray-800 text-xs rounded">夜光遥感</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} 张立贤 (Lixian Zhang). All rights reserved.</p>
          <p className="mt-2 text-gray-500">
            中国人民大学 | 国家超级计算深圳中心 | 清华大学 ｜ 慕尼黑工业大学 ｜ 武汉大学
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
