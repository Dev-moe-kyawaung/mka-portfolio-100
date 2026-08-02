import { useRef, useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import { galleryImages } from '../../data/portfolioData.js';
import { X } from 'lucide-react';

/**
 * Image lightbox gallery
 */
export default function Gallery() {
  const ref = useRef(null);
  const visible = useScrollReveal(ref);
  const [selected, setSelected] = useState(null);

  const openLightbox = (idx) => setSelected(idx);
  const closeLightbox = () => setSelected(null);

  return (
    <section ref={ref} className="gallery-section">
      <div className={`galleryGrid glass \${visible ? 'show' : ''}`}>
        <h2>Gallery</h2>
        
        <div className="galleryGrid-masonry">
          {galleryImages.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt={img.alt}
              className="gallery-item"
              onClick={() => openLightbox(idx)}
              loading="lazy"
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selected !== null && (
        <div className="lightbox" role="dialog" aria-modal="true">
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close gallery">
            <X />
          </button>
          <img
            src={galleryImages[selected].src}
            alt={galleryImages[selected].alt}
            className="lightbox-image"
          />
          <p className="lightbox-caption">{galleryImages[selected].alt}</p>
        </div>
      )}
    </section>
  );
}
