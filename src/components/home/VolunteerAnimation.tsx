'use client';
import { motion } from 'framer-motion';
import styles from './Volunteer.module.css';

const VolunteerAnimation = () => {
    const heartPath = "M100 35 C 75 5 25 25 25 65 C 25 105 100 165 100 165 C 100 165 175 105 175 65 C 175 25 125 5 100 35 Z";

    const heartVariants = {
        initial: { scale: 1, opacity: 0.5 },
        animate: {
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut" as const
            }
        }
    };

    const rippleVariants = (delay: number) => ({
        initial: { scale: 0, opacity: 0 },
        animate: {
            scale: [0.8, 2.5], // Expanded scale for wider ripple
            opacity: [0.5, 0], // Smooth fade out
            transition: {
                duration: 3,
                repeat: Infinity,
                delay: delay,
                ease: "easeOut" as const
            }
        }
    });

    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '300px' }}>
            <svg className={styles.heartSvg} viewBox="-100 -100 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Heart-Shaped Ripples */}
                <motion.path d={heartPath} stroke="var(--accent-gold)" strokeWidth="1" variants={rippleVariants(0)} initial="initial" animate="animate" style={{ transformOrigin: "100px 80px" }} />
                <motion.path d={heartPath} stroke="var(--accent-gold)" strokeWidth="1" variants={rippleVariants(1)} initial="initial" animate="animate" style={{ transformOrigin: "100px 80px" }} />
                <motion.path d={heartPath} stroke="var(--accent-gold)" strokeWidth="1" variants={rippleVariants(2)} initial="initial" animate="animate" style={{ transformOrigin: "100px 80px" }} />

                {/* Main Heart Icon */}
                <motion.path
                    d={heartPath}
                    fill="var(--bg-primary)"
                    stroke="var(--accent-gold)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={heartVariants}
                    initial="initial"
                    animate="animate"
                    style={{ transformOrigin: "100px 80px" }}
                />
            </svg>
        </div>
    );
};

export default VolunteerAnimation;
