import { BookOpen, ExternalLink } from 'lucide-react';

const PublicationsCn = () => {
  const publications = [
    {
      title: 'A prolonged artificial nighttime-light dataset of China (1984-2020)',
      authors: 'Zhang, L., Ren, Z., Chen, B., Gong, P., Xu, B., & Fu, H.',
      venue: 'Scientific Data, 2024',
      badges: ['JCR Q1', 'IF=9.8', 'ESI 高被引'],
      link: 'https://www.nature.com/articles/s41597-024-03223-1',
    },
    {
      title: 'DeepLight: Reconstructing High-Resolution Observations of Nighttime Light With Multi-Modal Remote Sensing Data',
      authors: 'Zhang, L., Dong, R., Yuan, S., Zhang, J., Chen, M., Zheng, J., & Fu, H.',
      venue: 'IJCAI 2024',
      badges: ['CCF-A'],
      link: 'https://dl.acm.org/doi/10.24963/ijcai.2024/837',
    },
    {
      title: 'Swcare: Switchable learning and connectivity-aware refinement method for road mapping',
      authors: 'Zhang, L., Yuan, S., Dong, R., Zheng, J., Gan, B., Fang, D., ... & Fu, H.',
      venue: 'JAG, 2024',
      badges: ['JCR Q1', 'IF=7.5'],
      link: 'https://www.sciencedirect.com/science/article/pii/S1569843224000190',
    },
    {
      title: 'A2-MAE: A spatial-temporal-spectral unified remote sensing pre-training method',
      authors: 'Zhang, L., Zhao, Y., Dong, R., Zhang, J., Yuan, S., Cao, S., ... & Fu, H.',
      venue: 'IEEE TGRS, 2026',
      badges: ['JCR Q1', 'IF=8.3'],
      link: 'https://ieeexplore.ieee.org/document/11396052',
    },
  ];

  return (
    <section id="publications" className="academic-section">
      <h2 className="section-title">代表性论文</h2>
      <div className="space-y-6">
        {publications.map((pub, index) => (
          <div key={index} className="publication-item group">
            <div className="publication-title flex items-start gap-2">
              <BookOpen className="w-5 h-5 mt-1 shrink-0 text-blue-900" />
              <div className="flex flex-wrap items-center gap-x-2">
                <a href={pub.link} target="_blank" rel="noopener noreferrer" className="font-bold text-gray-900 hover:text-blue-700 hover:underline decoration-blue-300 underline-offset-4 flex items-center gap-1 inline-flex">
                  {pub.title}
                  <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
            <div className="publication-authors ml-7 text-gray-700 leading-relaxed italic">{pub.authors}</div>
            <div className="publication-venue ml-7 font-medium text-gray-600">{pub.venue}</div>
            <div className="ml-7 mt-2 flex flex-wrap gap-2">
              {pub.badges.map((badge, idx) => (
                <span key={idx} className="px-2 py-0.5 text-[11px] font-semibold border border-blue-100 bg-blue-50 text-blue-800 rounded shadow-sm">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PublicationsCn;
