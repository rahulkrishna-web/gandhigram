'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ImageCarousel.module.css';

interface ImageCarouselProps {
    images: string[];
}

const ROWS = 4; // Number of rows in the grid
const COLS = 4; // Number of columns in the grid

const ImageCarousel = ({ images }: ImageCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(0); // Store previous to show underneath or as the "peeling" layer
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        // Start animation loop
        const interval = setInterval(() => {
            if (!isAnimating) {
                setPrevIndex(currentIndex);
                setCurrentIndex((prev) => (prev + 1) % images.length);
            }
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [currentIndex, isAnimating, images.length]);

    const handleAnimationComplete = () => {
        // Could reset state here if needed, but framer motion handles exit
    };

    // Generate grid tiles
    const tiles = [];
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            tiles.push({ r, c });
        }
    }

    return (
        <div className={styles.carouselContainer}>
            {/* Background Image (The "Next" Image) */}
            <div
                className={styles.backgroundImage}
                style={{ backgroundImage: `url(${images[currentIndex]})` }}
            />

            {/* Foreground Grid (The "Current/Old" Image peeling away) */}
            <AnimatePresence mode='popLayout'>
                <div key={prevIndex} className={styles.gridOverlay}> {/* Key change triggers re-render/animation */}
                    {/* Only render grid if current index has changed effectively */}
                    {images[prevIndex] && tiles.map((tile, i) => (
                        <motion.div
                            key={`${prevIndex}-${tile.r}-${tile.c}`}
                            className={styles.tile}
                            initial={{ opacity: 1, scale: 1 }}
                            animate={{ opacity: 1, scale: 1 }} // Stay visible initially
                            exit={{
                                opacity: 0,
                                scale: 0.5,
                                transition: {
                                    duration: 0.5,
                                    delay: (tile.r + tile.c) * 0.05 + Math.random() * 0.1 // Staggered diagonal + random
                                }
                            }}
                            style={{
                                backgroundImage: `url(${images[prevIndex]})`,
                                backgroundPosition: `${(tile.c / (COLS - 1)) * 100}% ${(tile.r / (ROWS - 1)) * 100}%`,
                                backgroundSize: `${COLS * 100}% ${ROWS * 100}%`,
                                width: `${100 / COLS}%`,
                                height: `${100 / ROWS}%`,
                                left: `${(tile.c / COLS) * 100}%`,
                                top: `${(tile.r / ROWS) * 100}%`,
                                position: 'absolute'
                            }}
                        />
                    ))}
                </div>
            </AnimatePresence>
        </div>
    );
};

export default ImageCarousel;
