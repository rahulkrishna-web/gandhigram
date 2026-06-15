'use client';
import { useState, useRef } from 'react';
import { Play } from 'lucide-react';
import styles from './VideoSection.module.css';

const VideoSection = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlayClick = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const handleVideoPause = () => {
        setIsPlaying(false);
    };

    const handleVideoPlay = () => {
        setIsPlaying(true);
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.videoWrapper}>
                    <video
                        ref={videoRef}
                        className={styles.video}
                        poster="/images/care-matters-poster.jpg"
                        controls={isPlaying}
                        onPlay={handleVideoPlay}
                        onPause={handleVideoPause}
                        preload="none"
                    >
                        <source src="/vid/care-matters.webm" type="video/webm" />
                        <source src="/vid/care-matters.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {!isPlaying && (
                        <button 
                            className={styles.playButton} 
                            onClick={handlePlayClick}
                            aria-label="Play video"
                        >
                            <Play className={styles.playIcon} fill="currentColor" />
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
