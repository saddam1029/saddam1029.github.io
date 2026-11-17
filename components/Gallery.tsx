'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IconChevronLeft, IconChevronRight, IconClose } from './Icons';

type GalleryProps = {
  images: string[];
  title: string;
};

export function Gallery({ images, title }: GalleryProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const updateFromScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const items = track.querySelectorAll<HTMLElement>('.gallery-item');
    if (!items.length) return;

    const trackRect = track.getBoundingClientRect();
    const centerX = trackRect.left + trackRect.width / 2;
    let closest = 0;
    let min = Infinity;

    items.forEach((item, i) => {
      const rect = item.getBoundingClientRect();
      const distance = Math.abs(centerX - (rect.left + rect.width / 2));
      if (distance < min) {
        min = distance;
        closest = i;
      }
    });

    setCurrent(closest);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let timeout: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(updateFromScroll, 30);
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      clearTimeout(timeout);
      track.removeEventListener('scroll', onScroll);
    };
  }, [updateFromScroll]);

  const goTo = (index: number) => {
    const next = Math.max(0, Math.min(images.length - 1, index));
    setCurrent(next);
    const track = trackRef.current;
    if (!track) return;
    const item = track.querySelectorAll<HTMLElement>('.gallery-item')[next];
    if (!item) return;
    const scrollToPos = item.offsetLeft - (track.clientWidth - item.offsetWidth) / 2;
    track.scrollTo({ left: scrollToPos, behavior: 'smooth' });
  };

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowLeft') setLightbox((v) => (v === null ? v : (v - 1 + images.length) % images.length));
      if (e.key === 'ArrowRight') setLightbox((v) => (v === null ? v : (v + 1) % images.length));
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [lightbox, images.length]);

  if (images.length === 0) {
    return (
      <div className="gallery-section">
        <div className="gallery-placeholder">
          <p>No screenshots added yet.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="gallery-section">
        <div className="gallery-desktop">
          <div className="gallery-viewport">
            <div className="gallery-track snap" ref={trackRef}>
              {images.map((src, i) => (
                <button
                  type="button"
                  className="gallery-item"
                  key={src}
                  data-index={i}
                  onClick={() => setLightbox(i)}
                  aria-label={`Open ${title} screenshot ${i + 1}`}
                >
                  <Image
                    src={`/${src.replace(/^\//, '')}`}
                    alt={`${title} screenshot ${i + 1}`}
                    width={540}
                    height={960}
                    priority={i < 3}
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="gallery-controls">
            <button className="gallery-btn" onClick={() => goTo(current - 1)} disabled={current === 0} aria-label="Previous screenshot">
              <IconChevronLeft />
            </button>
            <div className="gallery-dots">
              {images.map((src, i) => (
                <button
                  type="button"
                  key={src}
                  className={`gallery-dot${i === current ? ' active' : ''}`}
                  aria-label={`Go to screenshot ${i + 1}`}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
            <button className="gallery-btn" onClick={() => goTo(current + 1)} disabled={current === images.length - 1} aria-label="Next screenshot">
              <IconChevronRight />
            </button>
            <span className="gallery-counter">
              {current + 1} / {images.length}
            </span>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="lightbox open"
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setLightbox(null);
            }}
          >
            <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close">
              <IconClose />
            </button>
            <button
              className="lightbox-btn prev"
              onClick={() => setLightbox((v) => (v === null ? v : (v - 1 + images.length) % images.length))}
              aria-label="Previous image"
            >
              <IconChevronLeft />
            </button>
            <motion.img
              key={lightbox}
              className="lightbox-img"
              src={`/${images[lightbox].replace(/^\//, '')}`}
              alt={`${title} screenshot ${lightbox + 1}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
            />
            <button
              className="lightbox-btn next"
              onClick={() => setLightbox((v) => (v === null ? v : (v + 1) % images.length))}
              aria-label="Next image"
            >
              <IconChevronRight />
            </button>
            <div className="lightbox-counter">
              {lightbox + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
