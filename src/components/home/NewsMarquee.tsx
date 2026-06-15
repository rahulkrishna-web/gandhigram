'use client';
import { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import styles from './NewsMarquee.module.css';

const baseImages = [
    { src: '/images/newspaper/bodikammanvadi.webp', alt: 'Bodikammanvadi newsletter' },
    { src: '/images/newspaper/gri-2.webp', alt: 'GRI newsletter article' },
    { src: '/images/newspaper/gri.webp', alt: 'GRI newsletter clip' }
];

// Duplicate items to ensure smooth infinite marquee scroll
const marqueeItems = [...baseImages, ...baseImages, ...baseImages, ...baseImages];

const NewsMarquee = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (idx: number) => {
        // Map the index back to the base array (0-2)
        const baseIndex = idx % baseImages.length;
        setCurrentIndex(baseIndex);
        setIsOpen(true);
    };

    const closeLightbox = () => {
        setIsOpen(false);
    };

    const handlePrev = (e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + baseImages.length) % baseImages.length);
    };

    const handleNext = (e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % baseImages.length);
    };

    // Keyboard handlers
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'ArrowRight') handleNext();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.heading}>
                    In the <span className={styles.italicHighlight}>News</span>
                </h2>
                
                <div className={styles.marqueeWrapper}>
                    <div className={styles.marqueeTrack}>
                        {marqueeItems.map((item, idx) => (
                            <div 
                                key={idx} 
                                className={styles.marqueeCard}
                                onClick={() => openLightbox(idx)}
                            >
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        width={250}
                                        height={300}
                                        className={styles.image}
                                        priority={idx < 6}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Lightbox Overlay */}
            {isOpen && (
                <div className={styles.lightboxOverlay} onClick={closeLightbox}>
                    <button 
                        className={styles.closeButton} 
                        onClick={closeLightbox}
                        aria-label="Close popup"
                    >
                        <X size={32} />
                    </button>

                    <button 
                        className={`${styles.navButton} ${styles.prevButton}`} 
                        onClick={handlePrev}
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={48} />
                    </button>

                    <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.lightboxImageWrapper}>
                            <img
                                src={baseImages[currentIndex].src}
                                alt={baseImages[currentIndex].alt}
                                className={styles.lightboxImage}
                            />
                        </div>
                    </div>

                    <button 
                        className={`${styles.navButton} ${styles.nextButton}`} 
                        onClick={handleNext}
                        aria-label="Next image"
                    >
                        <ChevronRight size={48} />
                    </button>
                </div>
            )}
        </section>
    );
};

export default NewsMarquee;
