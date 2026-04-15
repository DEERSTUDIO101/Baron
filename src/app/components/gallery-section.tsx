import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Box, Container, Typography, Grid, Card } from '@mui/material';
import { useLanguage } from '../context/language-context';

const images = [
  {
    url: "https://cdn.discordapp.com/attachments/1284188314714247231/1493990466537132162/20260311193232_1.jpg?ex=69e0fa8c&is=69dfa90c&hm=440a11519ba06859f2db626454f7739f0cbc0825020c5caaa80905e2cb4b0a14&",
    alt: "Gaming Setup 1"
  },
  {
    url: "https://cdn.discordapp.com/attachments/1284188314714247231/1493990619671171292/SPOILER_20260414220131_1.jpg?ex=69e0fab0&is=69dfa930&hm=26dbcdd58a8d5cdfd6fe381d89abeb555560f4267f7f3d81474b9a0607056a5b&",
    alt: "Gaming Setup 2"
  },
  {
    url: "https://cdn.discordapp.com/attachments/1284188314714247231/1493990721722650827/ets2_20260405_212752_00.png?ex=69e0fac9&is=69dfa949&hm=b1d4868877718b7dc3d8a15e969cba96e692312cab5a2eee560c972909b1cd80&animated=true",
    alt: "Gaming Experience"
  }
];

export function GallerySection() {
  const { t } = useLanguage();
  
  return (
    <Box sx={{ bgcolor: 'black', py: 10 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
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
              }}
            >
              {t('gallery.subtitle')}
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={3}>
          {images.map((image, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
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
                    '&:hover': {
                      boxShadow: '0 25px 60px rgba(220, 38, 38, 0.3)',
                    },
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
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
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
                      opacity: 0,
                      transition: 'opacity 0.3s',
                      '&:hover': {
                        opacity: 1,
                      },
                    }}
                  />
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}