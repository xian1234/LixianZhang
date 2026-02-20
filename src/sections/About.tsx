import { Mail, Phone, MapPin, GraduationCap, Users, Sparkles, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          
          {/* Left Column: Profile Card */}
          <div className="w-full md:w-64 shrink-0 flex flex-col items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
              <div className="relative w-52 h-52 rounded-2xl overflow-hidden shadow-2xl border-4 border-white rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="zlx.jpeg" 
                  alt="Lixian Zhang" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/200?text=LZ'; }}
                />
              </div>
            </div>
            <div className="mt-6 text-center">
              <h2 className="text-xl font-bold text-gray-900">Lixian Zhang</h2>
              <p className="text-gray-500 text-sm font-medium">张立贤, Ph.D.</p>
            </div>
            
            {/* Contact Quick Links */}
            <div className="mt-6 w-full space-y-2">
              <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group">
                <Mail className="w-4 h-4 text-blue-600" />
                <span className="text-xs text-gray-600 truncate group-hover:text-blue-700">zhanglx18@tsinghua.org.cn</span>
              </div>
              <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-xs text-gray-600">Suzhou | Beijing | Shenzhen</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Recruitment */}
          <div className="flex-1">
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold tracking-wider uppercase mb-4">
              Assistant Professor @ AI4Urban
            </div>
            
            <h1 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Exploring the Synergy of HPC and <span className="text-blue-600 italic">Urban Intelligence</span>
            </h1>

            <div className="prose prose-blue max-w-none text-gray-700 space-y-4 text-justify">
              <p className="leading-relaxed">
                <Sparkles className="w-4 h-4 inline mr-2 text-yellow-500" />
                Welcome! I am an Assistant Professor deeply invested in the transformative power of computing. I earned my Ph.D. from <strong>Tsinghua University</strong> in 2024, advised by Prof. Haohuan Fu, and subsequently conducted postdoctoral research at the <strong>National Supercomputing Center in Shenzhen (NSCC-SZ)</strong> with Prof. Yutong Lu. My academic journey is fueled by a long-standing fascination with how massive computational scales can decipher the complexities of our planet.
              </p>
              
              <p className="leading-relaxed">
                My research resides at the vibrant intersection of <strong>Remote Sensing (RS), Artificial Intelligence (AI), and High-Performance Computing (HPC)</strong>. Currently, I am dedicated to architecting the next generation of Multimodality RS Models. By pushing the boundaries of multi-modal data fusion and sub-meter super-resolution, I aim to extract profound geographical insights from the vast sea of planetary pixels.
              </p>
            </div>

            {/* Research Keywords */}
            <div className="flex flex-wrap gap-2 mt-8">
              {['AI for Earth Science', 'Multimodal Fusion', 'Super-resolution', 'Time-series Modeling', 'HPC'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-semibold hover:bg-blue-600 hover:text-white transition-colors cursor-default">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Recruitment Card */}
            <div className="mt-10 relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white shadow-xl">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <Rocket className="w-6 h-6 text-yellow-300 animate-bounce" />
                  <h3 className="text-xl font-bold">Join Our Research Group!</h3>
                </div>
                <p className="text-blue-50 opacity-90 text-sm leading-relaxed mb-4">
                  We are looking for motivated talents passionate about the fusion of AI and Earth Science. Opportunities are open for:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 bg-white/10 p-3 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors">
                    <Users className="w-5 h-5 mt-1 text-blue-200" />
                    <div>
                      <p className="font-bold text-sm">Research Internships</p>
                      <p className="text-xs text-blue-100 mt-1">For students with strong coding skills and a drive to publish at top-tier venues (CVPR, AAAI, etc.).</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white/10 p-3 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors">
                    <GraduationCap className="w-5 h-5 mt-1 text-blue-200" />
                    <div>
                      <p className="font-bold text-sm">Graduate Admissions</p>
                      <p className="text-xs text-blue-100 mt-1">Prospective Master's students in Electronic Engineering & AI are welcome to apply for a journey into the frontiers of science.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative Circle */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
