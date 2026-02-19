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
              <p className="text-sm text-gray-600">Lixian Zhang (张立贤)</p>
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">张立贤 (Lixian Zhang)</h1>
          <p className="text-lg text-blue-800 mb-4">Postdoctoral Researcher Fellow | Remote Sensing, AI4Earth, and HPC</p>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-800 rounded-full text-sm">
              <Mail className="w-4 h-4" />
              zhanglx18@tsinghua.org.cn
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm">
              <Phone className="w-4 h-4" />
              152-xxxx-xxxx
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm">
              <MapPin className="w-4 h-4" />
              Based in Suzhou | Beijing | Shenzhen, China
            </span>
          </div>

          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              I received the Ph.D. degree from Tsinghua University, Beijing, China, supervised by Prof. Haohuan Fu, in 2024. 
              From 2024 to 2025, I was a Postdoctoral Researcher with the High-performance Computing Department, National Supercomputing Center in Shenzhen, China, working with Prof. Yutong Lu. 
              I am currently an Assistant Professor with Renmin University of China.
            </p>
            <p className="text-gray-700 leading-relaxed">
              My research sits at the intersection of High-Performance Computing (HPC), Remote Sensing (RS), and Artificial Intelligence (AI). 
              I am particularly interested in Foundation Models for Remote Sensing, Multi-modal Data Fusion, and Super-resolution.
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
