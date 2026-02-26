import { BookOpen, ExternalLink } from 'lucide-react';

const PublicationsCn = () => {
  const publications = [
    {
      title: 'A2-MAE: A spatial-temporal-spectral unified remote sensing pre-training method based on anchor-aware masked autoencoder',
      authors: 'Zhang, L., Zhao, Y., Dong, R., Zhang, J., Yuan, S., Cao, S., ... & Fu, H.',
      venue: 'IEEE Transactions on Geoscience and Remote Sensing, 2026',
      badges: ['Q1', 'IF=8.6'],
      link: 'https://ieeexplore.ieee.org/document/11396052'
    },
    {
      title: 'Swcare: Switchable learning and connectivity-aware refinement method for multi-city and diverse-scenario road mapping using remote sensing images',
      authors: 'Zhang, L., Yuan, S., Dong, R., Zheng, J., Gan, B., Fang, D., ... & Fu, H.',
      venue: 'International Journal of Applied Earth Observation and Geoinformation, 127: 103665, 2024',
      badges: ['Q1', 'IF=8.6'],
      link: 'https://www.sciencedirect.com/science/article/pii/S1569843224000190'
    },
    {
      title: 'A prolonged artificial nighttime-light dataset of China (1984-2020)',
      authors: 'Zhang, L., Ren, Z., Chen, B., Gong, P., Xu, B., & Fu, H.',
      venue: 'Scientific Data, 11(1), 414, 2024',
      badges: ['Q1', 'IF=6.9', 'ESI highly cited'],
      link: 'https://www.nature.com/articles/s41597-024-03223-1'
    },
    {
      title: 'DeepLight: Reconstructing High-Resolution Observations of Nighttime Light With Multi-Modal Remote Sensing Data',
      authors: 'Zhang, L., Dong, R., Yuan, S., Zhang, J., Chen, M., Zheng, J., & Fu, H.',
      venue: 'IJCAI 2024, 7563-7571',
      badges: ['CCF-A'],
      link: 'https://dl.acm.org/doi/10.24963/ijcai.2024/837'
    },
    {
      title: 'Making low-resolution satellite images reborn: a deep learning approach for super-resolution building extraction',
      authors: 'Zhang, L., Dong, R., Yuan, S., Li, W., Zheng, J., & Fu, H.',
      venue: 'Remote Sensing, 13(15), 2021',
      badges: ['Q2', 'IF=5.0'],
      link: 'https://www.mdpi.com/2072-4292/13/15/2872'
    },
    {
      title: 'Building Bridges across Spatial and Temporal Resolutions: Reference-Based Super-Resolution via Change Priors and Conditional Diffusion Model',
      authors: 'Dong, R., Yuan, S., Luo, B., Chen, M., Zhang, J., Zhang, L.*, & Fu, H.*',
      venue: 'CVPR 2024: 27684-27694',
      badges: ['CCF-A'],
      link: '#'
    },
    {
      title: 'RRSGAN: Reference-based super-resolution for remote sensing image',
      authors: 'Dong, R., Zhang, L., & Fu, H.',
      venue: 'IEEE Transactions on Geoscience and Remote Sensing, 60: 1-17, 2021',
      badges: ['Q1', 'IF=8.6', 'ESI highly cited'],
      link: 'https://ieeexplore.ieee.org/document/9328132'
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
