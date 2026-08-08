import { useState, useEffect, useRef, useCallback } from 'react';
import type { RefObject } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { Box, Container, Typography, Card, Chip, Stack, Grid } from '@mui/material';
import { Close, ChevronLeft, ChevronRight } from '@mui/icons-material';
import { useLanguage } from '../context/language-context';
import { galleryImages, categories } from '../data/gallery-images';
import { optimizeImage } from '../lib/optimize-image';

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref as RefObject<Element>, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let frame = 0;
    const totalFrames = 90;
    const id = setInterval(() => {
      frame++;
      setCount(Math.round(easeOutCubic(frame / totalFrames) * value));
      if (frame >= totalFrames) clearInterval(id);
    }, 1000 / 60);
    return () => clearInterval(id);
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const cardVariants = {
  rest: { y: 0, transition: { duration: 0.3 } },
  hover: { y: -10, transition: { duration: 0.3 } },
};

const overlayVariants = {
  rest: { opacity: 0, transition: { duration: 0.3 } },
  hover: { opacity: 1, transition: { duration: 0.3 } },
};

const imageVariants = {
  rest: { scale: 1, transition: { duration: 0.5 } },
  hover: { scale: 1.08, transition: { duration: 0.5 } },
};

export function GallerySection() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(() =>
    setLightboxIndex(i => i !== null ? (i - 1 + filteredImages.length) % filteredImages.length : null),
    [filteredImages.length]);
  const nextImage = useCallback(() =>
    setLightboxIndex(i => i !== null ? (i + 1) % filteredImages.length : null),
    [filteredImages.length]);

  useEffect(() => { setLightboxIndex(null); }, [selectedCategory]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxIndex, closeLightbox, prevImage, nextImage]);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIndex]);

  return (
    <Box sx={{ bgcolor: 'black', py: 10 }}>
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, fontWeight: 'bold', color: 'white', mb: 2 }}>
              {t('gallery.title')}
            </Typography>
            <Typography variant="h6" sx={{ color: '#9ca3af', maxWidth: '800px', mx: 'auto', mb: 5 }}>
              {t('gallery.subtitle')}
            </Typography>

            <Stack direction="row" spacing={2} sx={{ justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
              {categories.map((category) => (
                <motion.div key={category} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.94 }}>
                  <Chip
                    label={t(`gallery.filter.${category}`)}
                    onClick={() => setSelectedCategory(category)}
                    sx={{
                      bgcolor: selectedCategory === category ? '#dc2626' : 'rgba(39, 39, 42, 0.8)',
                      color: 'white',
                      border: selectedCategory === category ? '2px solid #dc2626' : '2px solid rgba(63, 63, 70, 1)',
                      px: 3, py: 2.5,
                      fontSize: '1rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      boxShadow: selectedCategory === category ? '0 0 20px rgba(220,38,38,0.4)' : 'none',
                      '&:hover': {
                        bgcolor: selectedCategory === category ? '#b91c1c' : 'rgba(39, 39, 42, 1)',
                        borderColor: '#dc2626',
                      },
                    }}
                  />
                </motion.div>
              ))}
            </Stack>
          </Box>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Grid container spacing={3}>
              {filteredImages.map((image, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
                  {/* Entrance animation wrapper */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.5) }}
                  >
                    {/* Hover animation wrapper - propagates variants to children */}
                    <motion.div
                      variants={cardVariants}
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      style={{ cursor: 'pointer' }}
                      onClick={() => setLightboxIndex(index)}
                    >
                      <Card
                        sx={{
                          position: 'relative',
                          overflow: 'hidden',
                          borderRadius: 2,
                          bgcolor: 'transparent',
                          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
                          border: '1px solid rgba(63, 63, 70, 0.5)',
                          transition: 'border-color 0.3s, box-shadow 0.3s',
                          '&:hover': {
                            boxShadow: '0 20px 60px rgba(220, 38, 38, 0.35)',
                            borderColor: 'rgba(220, 38, 38, 0.7)',
                          },
                        }}
                      >
                        {/* Image with scale on hover */}
                        <motion.div variants={imageVariants} style={{ overflow: 'hidden' }}>
                          <Box sx={{ position: 'relative', paddingTop: '75%' }}>
                            <ImageWithFallback
                              src={optimizeImage(image.url, 600)}
                              alt={image.alt}
                              loading={index < 4 ? 'eager' : 'lazy'}
                              style={{
                                position: 'absolute',
                                top: 0, left: 0,
                                width: '100%', height: '100%',
                                objectFit: 'cover',
                              }}
                            />
                          </Box>
                        </motion.div>

                        {/* Hover overlay - fades in via variant propagation */}
                        <motion.div
                          variants={overlayVariants}
                          style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-end',
                            padding: 14,
                            pointerEvents: 'none',
                          }}
                        >
                          <Typography variant="body2" sx={{ color: 'white', fontWeight: 600, mb: 0.5 }}>
                            {image.alt}
                          </Typography>
                          <Typography variant="caption" sx={{ color: 'rgba(220,38,38,0.9)', fontWeight: 500 }}>
                            Zum Vergrößern klicken ↗
                          </Typography>
                        </motion.div>
                      </Card>
                    </motion.div>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </AnimatePresence>

        {/* Animated Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Box
            sx={{
              mt: 10, p: 5,
              borderRadius: 3,
              background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.08), rgba(0,0,0,0.3))',
              border: '1px solid rgba(220, 38, 38, 0.2)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <Grid container spacing={4}>
              {[
                { value: galleryImages.length, suffix: '+', label: t('gallery.stats.images') },
                { value: 1000, suffix: '+', label: t('gallery.stats.kilometers') },
                { value: 50, suffix: '+', label: t('gallery.stats.tours') },
              ].map((stat, i) => (
                <Grid item xs={12} sm={4} key={i}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h3" sx={{ color: '#dc2626', fontWeight: 'bold', mb: 1 }}>
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#9ca3af' }}>
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </Container>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.97)',
              backdropFilter: 'blur(16px)',
              zIndex: 9998,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              whileHover={{ scale: 1.15, rotate: 90, backgroundColor: 'rgba(220,38,38,0.5)' }}
              whileTap={{ scale: 0.9 }}
              style={{
                position: 'absolute',
                top: 20,
                right: 20,
                width: 44,
                height: 44,
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.25)',
                background: 'rgba(255,255,255,0.08)',
                color: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999,
              }}
            >
              <Close sx={{ fontSize: 20 }} />
            </motion.button>

            {/* Prev */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              whileHover={{ scale: 1.1, x: -3, backgroundColor: 'rgba(220,38,38,0.4)' }}
              whileTap={{ scale: 0.9 }}
              style={{
                position: 'absolute',
                left: 16,
                width: 52,
                height: 52,
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.07)',
                color: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999,
              }}
            >
              <ChevronLeft sx={{ fontSize: 30 }} />
            </motion.button>

            {/* Image with crossfade */}
            <AnimatePresence mode="wait">
              <motion.img
                key={lightboxIndex}
                src={filteredImages[lightboxIndex].url}
                alt={filteredImages[lightboxIndex].alt}
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  maxWidth: '88vw',
                  maxHeight: '85vh',
                  objectFit: 'contain' as const,
                  borderRadius: 12,
                  boxShadow: '0 30px 100px rgba(0,0,0,0.95), 0 0 0 1px rgba(220,38,38,0.15)',
                  userSelect: 'none' as const,
                }}
              />
            </AnimatePresence>

            {/* Next */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              whileHover={{ scale: 1.1, x: 3, backgroundColor: 'rgba(220,38,38,0.4)' }}
              whileTap={{ scale: 0.9 }}
              style={{
                position: 'absolute',
                right: 16,
                width: 52,
                height: 52,
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.07)',
                color: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999,
              }}
            >
              <ChevronRight sx={{ fontSize: 30 }} />
            </motion.button>

            {/* Info bar */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              style={{
                position: 'absolute',
                bottom: 24,
                left: '50%',
                transform: 'translateX(-50%)',
                textAlign: 'center',
                pointerEvents: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem', marginBottom: 4 }}>
                {filteredImages[lightboxIndex].alt}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                {lightboxIndex + 1}
                <span style={{ color: '#dc2626', margin: '0 6px' }}>/</span>
                {filteredImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}
