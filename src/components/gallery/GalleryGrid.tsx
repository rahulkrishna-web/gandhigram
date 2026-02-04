'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import GalleryModal from './GalleryModal';
import styles from './Gallery.module.css';

interface Album {
    id: string;
    title: string;
    thumbnail: string;
    images: string[];
}

interface GalleryGridProps {
    albums: Album[];
    mobileCardWidth?: string;
}

const GalleryGrid = ({ albums, mobileCardWidth = '85vw' }: GalleryGridProps) => {
    const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);

    return (
        <>
            <div
                className={styles.grid}
                style={{
                    '--mobile-card-width': mobileCardWidth
                } as React.CSSProperties}
            >
                {albums.map((album) => (
                    <motion.div
                        key={album.id}
                        whileHover={{ y: -5 }}
                        className={styles.card}
                        onClick={() => setSelectedAlbum(album)}
                    >
                        <div className={styles.imageContainer}>
                            <Image
                                src={album.thumbnail}
                                alt={album.title}
                                fill
                                className={styles.thumbnail}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            />
                            {/* Overlay is handled by CSS hover on thumbnail directly or can be omitted for simple zoom */}

                            {/* Count Badge */}
                            <div className={styles.photoCount}>
                                {album.images.length} Photos
                            </div>
                        </div>
                        <h3 className={styles.title}>
                            {album.title}
                        </h3>
                    </motion.div>
                ))}
            </div>

            {selectedAlbum && (
                <GalleryModal
                    isOpen={!!selectedAlbum}
                    onClose={() => setSelectedAlbum(null)}
                    images={selectedAlbum.images}
                    initialIndex={0}
                />
            )}
        </>
    );
};

export default GalleryGrid;
