import React, { useState } from 'react';
import { portfolioData } from './ProjectsData';
import { Tools, JournalText } from 'react-bootstrap-icons';

export const Portfolio = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openPopup = (photo) => {
    setSelectedPhoto(photo);
  };

  const closePopup = () => {
    setSelectedPhoto(null);
  };

  const renderSourceLinks = (source) => {
    return source.map((sourceString, index) => {
      const [displayText, link] = sourceString.split('@') || [];
      if (!link) {
        // Handle the case where there's no link
        return (
          <span key={index}>
            {index > 0 && ', '}
            {displayText}
          </span>
        );
      }
      // Render the link
      return (
        <span key={index}>
          {index > 0 && ', '}
          <a href={link} target="_blank" rel="noopener noreferrer" className='source-link'>
            {displayText}
          </a>
        </span>
      );
    });
  };

  return (
    <section className="portfolio" id="portfolio">
        <h2 className="portfolio-title">GIS Portfolio</h2>
        <span className="portfolio-subtitle">
          Check out my work in GIS mapping and spatial analysis.
        </span>
        <div className="portfolio-gallary">
          {portfolioData.map((photo) => (
            <div key={photo.id} className="portfolio-item" onClick={() => openPopup(photo)}>
              <img src={photo.image} alt={photo.title} />
              <div className="portfolio-overlay">
                <h3>{photo.title}</h3>
                <p>{photo.description}</p>
                <p>Tags: {photo.tags.join(', ')}</p>
                {photo.source.length > 0 && (
                  <p>
                    Sources: {renderSourceLinks(photo.source)}
                  </p>
                )}
              </div>
            </div>
          ))}
          {selectedPhoto && (
            <div className="portfolio-popup">
              <div className="portfolio-popup-content">
                <div className="scrollbar-wrapper">
                  <span className="portfolio-close-btn" onClick={closePopup}>
                    &times;
                  </span>
                  <img src={selectedPhoto.image} alt={selectedPhoto.title} />
                  <h3>{selectedPhoto.title}</h3>
                  <p>{selectedPhoto.description}</p>
                  <div className="portfolio-tools">
                    <p>
                      <span style={{ color: '#9EBC9E' }}><Tools size={18}/> Tools:</span> {selectedPhoto.tags.join(', ')}
                    </p>
                    {selectedPhoto.source.length > 0 && (
                      <p>
                        <span style={{ color: '#9EBC9E' }}><JournalText size={18}/> Sources:</span> {renderSourceLinks(selectedPhoto.source)}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
    </section>
  );
};