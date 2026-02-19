import { Mail, Phone, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="academic-section">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Profile Image */}
        <div className="shrink-0">
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-white">
            {/* 替换后的图片代码 */}
            <img 
              src="zlx.jpeg" 
              alt="Profile" 
              className="w-full h-full object-cover" 
            />
          </div>
          {/* 如果你想在照片下方保留姓名文字，可以保留下面的 p 标签 */}
          <p className="text-center mt-2 text-sm text-gray-600 font-medium">Lixian Zhang(张立贤)</p>
        </div>

        {/* Profile Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">张立贤 (Lixian Zhang)</h1>
          <p className="text-lg text-blue-800 mb-4">Assitant Professor | AI4Urban</p>
          
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
            {/* <p className="text-gray-700 leading-relaxed mb-4">
              I am an Assistant Professor at Renmin University of China (RUC).
            </p> */}
            <p className="text-gray-700 leading-relaxed mb-4">
              My academic journey has been driven by a fascination with how massive computing power can reshape our understanding of the Earth. 
              I received my Ph.D. from Tsinghua University in 2024, where I had the privilege of working with Prof. Haohuan Fu. 
              Following that, I pursued my postdoctoral research at the National Supercomputing Center in Shenzhen (NSCC-SZ), collaborating with Prof. Yutong Lu.
            </p>
            <p className="text-gray-700 leading-relaxed">
              My research lives at the vibrant intersection of High-Performance Computing (HPC), Remote Sensing (RS), and Artificial Intelligence (AI). Currently, I am dedicated to building the next generation of Remote Sensing Foundation Models, exploring the limits of Multi-modal Data Fusion, and pushing the boundaries of Super-resolution techniques.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">AI for Earth Science</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Multimodality data fusion</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Image super-resolution</span>
            <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">Time-series modeling</span>
            <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">High performance computing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
