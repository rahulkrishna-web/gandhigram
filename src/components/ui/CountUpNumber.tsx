'use client';
import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

interface CountUpNumberProps {
    value: number;
    suffix?: string;
    duration?: number;
}

const CountUpNumber = ({ value, suffix = '', duration = 1.5 }: CountUpNumberProps) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 50,
        duration: duration * 1000 // duration isn't directly used by spring, but stiffness/damping control speed. 
        // Actually, for a simple count up, animate() might be easier, but spring feels nicer. 
        // Let's just use spring parameters that feel good.
    });

    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            setDisplayValue(Math.round(latest));
        });
        return () => unsubscribe();
    }, [springValue]);

    return (
        <span ref={ref}>
            {displayValue}{suffix}
        </span>
    );
};

export default CountUpNumber;
