'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from './Gallery.module.css';

interface GalleryModalProps {
    isOpen: boolean;
    onClose: () => void;
    images: string[];
    initialIndex?: number;
}

const GalleryModal = ({ isOpen, onClose, images, initialIndex = 0 }: GalleryModalProps) => {
    const [index, setIndex] = useState(initialIndex);

    useEffect(() => {
        setIndex(initialIndex);
    }, [initialIndex]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') showPrev();
            if (e.key === 'ArrowRight') showNext();
        };

        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
            // Lock body scroll
            document.body.style.overflow = 'hidden';
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [isOpen, index]); // Re-bind if index changes not needed for simple nav, but good for completeness

    const showNext = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };

    const showPrev = () => {
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={styles.modalOverlay}
                    onClick={onClose}
                >
                    {/* Close Button */}
                    <button
                        className={styles.closeButton}
                        onClick={onClose}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={{ width: 32, height: 32 }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Image Container */}
                    <div
                        className={styles.modalContent}
                        onClick={(e) => e.stopPropagation()} // Prevent close on image click
                    >
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className={styles.slideContainer}
                        >
                            {/* We use standard img or Next Image. Next Image needs width/height or fill. Fill is best here. */}
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={images[index]}
                                    alt={`Gallery Image ${index + 1}`}
                                    fill
                                    className={styles.fullImage}
                                    sizes="100vw"
                                    priority
                                />
                            </div>
                        </motion.div>

                        {/* Navigation Buttons */}
                        {images.length > 1 && (
                            <>
                                <button
                                    className={`${styles.navButton} ${styles.prevButton}`}
                                    onClick={(e) => { e.stopPropagation(); showPrev(); }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={{ width: 32, height: 32 }}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                    </svg>
                                </button>
                                <button
                                    className={`${styles.navButton} ${styles.nextButton}`}
                                    onClick={(e) => { e.stopPropagation(); showNext(); }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={{ width: 32, height: 32 }}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </>
                        )}

                        {/* Counter */}
                        <div className={styles.counter}>
                            {index + 1} / {images.length}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default GalleryModal;
