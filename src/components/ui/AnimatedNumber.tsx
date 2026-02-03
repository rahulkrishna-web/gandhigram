'use client';
import { useEffect, useState, useRef } from 'react';

interface AnimatedNumberProps {
    end: number;
    duration?: number;
    className?: string;
    suffix?: string;
}

const AnimatedNumber = ({ end, duration = 2000, className, suffix = '' }: AnimatedNumberProps) => {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLSpanElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    startAnimation();
                    setHasAnimated(true);
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, [end, duration, hasAnimated]);

    const startAnimation = () => {
        let startTime: number | null = null;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    return (
        <span ref={countRef} className={className}>
            {count}{suffix}
        </span>
    );
};

export default AnimatedNumber;
