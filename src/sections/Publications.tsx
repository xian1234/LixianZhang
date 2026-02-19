import { BookOpen } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: 'A prolonged artificial nighttime-light dataset of China (1984-2020)',
      authors: 'Zhang, L., Ren, Z., Chen, B., Gong, P., Xu, B., & Fu, H.',
      venue: 'Scientific Data, 11(1), 414, 2024',
      badges: ['JCR Q1', 'IF=9.8', 'ESI highly cited'],
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
      title: 'Swcare: Switchable learning and connectivity-aware refinement method for multi-city and diverse-scenario road mapping using remote sensing images',
      authors: 'Zhang, L., Yuan, S., Dong, R., Zheng, J., Gan, B., Fang, D., ... & Fu, H.',
      venue: 'International Journal of Applied Earth Observation and Geoinformation, 127: 103665, 2024',
      badges: ['JCR Q1', 'IF=7.5'],
      link: 'https://www.sciencedirect.com/science/article/pii/S1569843224000190'
    },
    {
      title: 'A2-MAE: A spatial-temporal-spectral unified remote sensing pre-training method based on anchor-aware masked autoencoder',
      authors: 'Zhang, L., Zhao, Y., Dong, R., Zhang, J., Yuan, S., Cao, S., ... & Fu, H.',
      venue: 'IEEE Transactions on Geoscience and Remote Sensing, 2026',
      badges: ['JCR Q1', 'IF=8.3'],
      link: 'https://ieeexplore.ieee.org/document/11396052'
    },
    {
      title: 'Making low-resolution satellite images reborn: a deep learning approach for super-resolution building extraction',
      authors: 'Zhang, L., Dong, R., Yuan, S., Li, W., Zheng, J., & Fu, H.',
      venue: 'Remote Sensing, 13(15), 2021',
      badges: ['中科院2区', 'IF=5.0'],
      link: 'https://www.mdpi.com/2072-4292/13/15/2872'
    },
    {
      title: 'Building Bridges across Spatial and Temporal Resolutions: Reference-Based Super-Resolution via Change Priors and Conditional Diffusion Model',
      authors: 'Dong, R., Yuan, S., Luo, B., Chen, M., Zhang, J., Zhang, L.*, & Fu, H.*',
      venue: 'CVPR 2024: 27684-27694',
      badges: ['CCF-A类'],
      link: '#'
    },
    {
      title: 'RRSGAN: Reference-based super-resolution for remote sensing image',
      authors: 'Dong, R., Zhang, L., & Fu, H.',
      venue: 'IEEE Transactions on Geoscience and Remote Sensing, 60: 1-17, 2021',
      badges: ['中科院1区', 'IF=7.5', 'ESI高被引'],
      link: '#'
    },
    {
      title: 'Relational Part-Aware Learning for Complex Composite Object Detection in High-Resolution Remote Sensing Images',
      authors: 'Yuan, S., Zhang, L., Dong, R., Xiong, J., Zheng, J., Fu, H., & Gong, P.',
      venue: 'IEEE Transactions on Cybernetics, 2024',
      badges: ['中科院1区', 'IF=11.8'],
      link: '#'
    },
    {
      title: 'An adaptive image fusion method for sentinel-2 images and high-resolution images with long-time intervals',
      authors: 'Dong, R., Zhang, L., Li, W., Yuan, S., Gan, L., Zheng, J., ... & Zhu, X. X.',
      venue: 'International Journal of Applied Earth Observation and Geoinformation, 121: 103381, 2023',
      badges: ['中科院1区', 'IF=7.5'],
      link: '#'
    },
    {
      title: 'Monitoring Daily Nighttime Light Based on Modis and Deep Learning: A Belgium Case Study',
      authors: 'Zhang, L., Ren, Z., Dong, R., Xu, B., & Fu, H.',
      venue: 'IGARSS 2021: 5032-5035',
      badges: ['EI收录'],
      link: '#'
    },
    {
      title: 'Srbuildingseg-E2: An Integrated Model for End-to-End Higher-Resolution Building Extraction',
      authors: 'Zhang, L., Dong, R., Yuan, S., & Fu, H.',
      venue: 'IGARSS 2022: 1356-1359',
      badges: ['EI收录'],
      link: '#'
    },
    {
      title: 'Unveiling Annual Dynamics in Large-Scale Road Networks Through a Connectivity-Aware Approach Utilizing Sentinel-2 Multi-Spectral Imagery',
      authors: 'Zhang, L., Du, K., Yuan, S., Dong, R., Zheng, J., & Fu, H.',
      venue: 'IGARSS 2024: 9535-9538',
      badges: ['EI收录'],
      link: '#'
    }
  ];

  return (
    <section id="publications" className="academic-section">
      <h2 className="section-title">代表论文成果</h2>
      
      <div className="space-y-4">
        {publications.map((pub, index) => (
          <div key={index} className="publication-item">
            <div className="publication-title flex items-start gap-2">
              <BookOpen className="w-5 h-5 mt-0.5 shrink-0" />
              <span>{pub.title}</span>
            </div>
            <div className="publication-authors ml-7">{pub.authors}</div>
            <div className="publication-venue ml-7">{pub.venue}</div>
            <div className="ml-7 mt-2 flex flex-wrap gap-2">
              {pub.badges.map((badge, idx) => (
                <span key={idx} className="publication-badge">{badge}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
