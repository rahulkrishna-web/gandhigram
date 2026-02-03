'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Hero.module.css';

const slides = [
    { id: 1, image: '/images/slideshow/slide1.jpg', alt: 'Gandhigram Community Service' },
    { id: 2, image: '/images/slideshow/slide2.jpg', alt: 'Rural Development' },
    { id: 3, image: '/images/slideshow/slide3.jpg', alt: 'Empowering Women' },
];

const Hero = () => {
    const [[currentSlide, direction], setCurrentSlide] = useState([0, 0]);

    // We only want to run the effect when we are not interacting? 
    // Or just let it run. Usually standard is to pause on hover, but user didn't ask.
    // I'll keep it simple: auto-play continues.
    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(timer);
    }, [currentSlide]); // Reset timer on slide change

    const paginate = (newDirection: number) => {
        let newIndex = currentSlide + newDirection;
        if (newIndex >= slides.length) newIndex = 0;
        if (newIndex < 0) newIndex = slides.length - 1;

        setCurrentSlide([newIndex, newDirection]);
    };

    const handleDotClick = (index: number) => {
        const newDirection = index > currentSlide ? 1 : -1;
        setCurrentSlide([index, newDirection]);
    };

    const titleText = "The best way to find yourself";
    const titleWords = titleText.split(" ");

    // Letter animation variants
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.2 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
            },
        },
    };

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '100%' : '-100%',
        }),
        center: {
            x: 0,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? '100%' : '-100%',
        }),
    };

    return (
        <section className={styles.hero}>
            {/* Background Slideshow */}
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
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = Math.abs(offset.x) * velocity.x;
                        if (swipe < -10000) {
                            paginate(1);
                        } else if (swipe > 10000) {
                            paginate(-1);
                        }
                    }}
                    style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
                >
                    <div className={styles.overlay} />
                </motion.div>
            </AnimatePresence>



            {/* Navigation Dots */}
            <div className={styles.dotsContainer}>
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
                        onClick={() => handleDotClick(index)}
                    />
                ))}
            </div>

            <div className={styles.content}>
                <motion.h1
                    className={styles.title}
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    {titleWords.map((word, index) => (
                        <motion.span key={index} className={styles.wordWrapper}>
                            {word.split("").map((letter, idx) => (
                                <motion.span variants={child} key={idx} className={styles.letter}>
                                    {letter}
                                </motion.span>
                            ))}
                            <span className={styles.space}>&nbsp;</span>
                        </motion.span>
                    ))}
                </motion.h1>

                <motion.p
                    className={styles.description}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                >
                    is to lose yourself in the service of others.
                    <br />
                    <span className={styles.author}>- Mahatma Gandhi</span>
                </motion.p>
            </div>
        </section>
    );
};

export default Hero;
