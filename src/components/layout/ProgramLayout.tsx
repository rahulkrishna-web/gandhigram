'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ProgramLayout.module.css';

interface ProgramLayoutProps {
    title: string;
    description: string;
    heroImage: string;
    heroImages?: string[];
    children: React.ReactNode;
}

const ProgramLayout = ({ title, description, heroImage, heroImages, children }: ProgramLayoutProps) => {
    const isSlider = heroImages && heroImages.length > 0;
    const slides = isSlider ? heroImages : [heroImage];
    const [[currentSlide, direction], setCurrentSlide] = useState([0, 0]);

    useEffect(() => {
        if (!isSlider || slides.length <= 1) return;
        const timer = setInterval(() => {
            const nextSlide = (currentSlide + 1) % slides.length;
            setCurrentSlide([nextSlide, 1]);
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(timer);
    }, [currentSlide, isSlider, slides.length]);

    const handleDotClick = (index: number) => {
        const newDirection = index > currentSlide ? 1 : -1;
        setCurrentSlide([index, newDirection]);
    };

    const slideVariants = {
        enter: (dir: number) => ({
            x: dir > 0 ? '100%' : '-100%',
        }),
        center: {
            x: 0,
        },
        exit: (dir: number) => ({
            x: dir < 0 ? '100%' : '-100%',
        }),
    };

    return (
        <article className={styles.wrapper}>
            <section className={`${styles.hero} ${isSlider ? styles.sliderHero : ''}`}>
                {isSlider ? (
                    <div className={styles.sliderContainer}>
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentSlide}
                                className={styles.bgImage}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "tween", ease: "easeInOut", duration: 0.8 },
                                    opacity: { duration: 0.2 }
                                }}
                                style={{ backgroundImage: `url(${slides[currentSlide]})` }}
                            >
                                <div className={styles.overlay} />
                            </motion.div>
                        </AnimatePresence>
                        
                        {/* Dot Navigation */}
                        {slides.length > 1 && (
                            <div className={styles.dotsContainer}>
                                {slides.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
                                        onClick={() => handleDotClick(index)}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                ) : (
                    <div 
                        className={styles.staticHeroBg}
                        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImage})` }}
                    />
                )}
                
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.description}>{description}</p>
                </div>
            </section>
            <div className={styles.container}>
                {children}
            </div>
        </article>
    );
};

export default ProgramLayout;
