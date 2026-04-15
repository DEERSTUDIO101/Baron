import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, AnimatePresence } from 'motion/react';
import { Box, Container, Typography, Card, Chip, Stack, Grid } from '@mui/material';
import { useLanguage } from '../context/language-context';
import { galleryImages, categories } from '../data/gallery-images';

export function GallerySection() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);
  
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
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 'bold',
                color: 'white',
                mb: 2,
              }}
            >
              {t('gallery.title')}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#9ca3af',
                maxWidth: '800px',
                mx: 'auto',
                mb: 5,
              }}
            >
              {t('gallery.subtitle')}
            </Typography>

            {/* Filter Chips */}
            <Stack 
              direction="row" 
              spacing={2} 
              sx={{ 
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: 2,
              }}
            >
              {categories.map((category) => (
                <motion.div
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Chip
                    label={t(`gallery.filter.${category}`)}
                    onClick={() => setSelectedCategory(category)}
                    sx={{
                      bgcolor: selectedCategory === category ? '#dc2626' : 'rgba(39, 39, 42, 0.8)',
                      color: 'white',
                      border: selectedCategory === category 
                        ? '2px solid #dc2626' 
                        : '2px solid rgba(63, 63, 70, 1)',
                      px: 3,
                      py: 2.5,
                      fontSize: '1rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      '&:hover': {
                        bgcolor: selectedCategory === category ? '#b91c1c' : 'rgba(39, 39, 42, 1)',
                        borderColor: '#dc2626',
                        transform: 'translateY(-2px)',
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
            transition={{ duration: 0.5 }}
          >
            <Grid container spacing={3}>
              {filteredImages.map((image, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                  >
                    <Card
                      sx={{
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: 2,
                        bgcolor: 'transparent',
                        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
                        transition: 'all 0.3s ease',
                        border: '1px solid rgba(63, 63, 70, 0.5)',
                        '&:hover': {
                          boxShadow: '0 25px 60px rgba(220, 38, 38, 0.4)',
                          borderColor: '#dc2626',
                        },
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      >
                        <Box sx={{ position: 'relative', paddingTop: '75%' }}>
                          <ImageWithFallback
                            src={image.url}
                            alt={image.alt}
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                            }}
                          />
                        </Box>
                      </motion.div>
                      
                      {/* Overlay */}
                      <Box
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent 50%)',
                          opacity: 0,
                          transition: 'opacity 0.3s',
                          display: 'flex',
                          alignItems: 'flex-end',
                          p: 2,
                          '&:hover': {
                            opacity: 1,
                          },
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'white',
                            fontWeight: 500,
                          }}
                        >
                          {image.alt}
                        </Typography>
                      </Box>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Box
            sx={{
              mt: 10,
              p: 5,
              borderRadius: 3,
              background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.1), rgba(0, 0, 0, 0.3))',
              border: '1px solid rgba(220, 38, 38, 0.2)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <Grid container spacing={4}>
              <Grid item xs={12} sm={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h3"
                    sx={{
                      color: '#dc2626',
                      fontWeight: 'bold',
                      mb: 1,
                    }}
                  >
                    {galleryImages.length}+
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#9ca3af',
                    }}
                  >
                    {t('gallery.stats.images')}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h3"
                    sx={{
                      color: '#dc2626',
                      fontWeight: 'bold',
                      mb: 1,
                    }}
                  >
                    1000+
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#9ca3af',
                    }}
                  >
                    {t('gallery.stats.kilometers')}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h3"
                    sx={{
                      color: '#dc2626',
                      fontWeight: 'bold',
                      mb: 1,
                    }}
                  >
                    50+
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#9ca3af',
                    }}
                  >
                    {t('gallery.stats.tours')}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}