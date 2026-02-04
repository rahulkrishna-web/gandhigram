'use client';
import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

interface CountUpNumberProps {
    value: number;
    suffix?: string;
    duration?: number;
    repeat?: boolean;
}

const CountUpNumber = ({ value, suffix = '', duration = 1.5, repeat = false }: CountUpNumberProps) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 50,
        duration: duration * 1000
    });

    const isInView = useInView(ref, { once: !repeat, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        } else if (repeat) {
            motionValue.set(0);
        }
    }, [isInView, value, motionValue, repeat]);

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
