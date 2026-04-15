import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import { useLanguage } from '../context/language-context';

export function HeroSection() {
  const { t } = useLanguage();
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        bgcolor: 'black',
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
        }}
      >
        <ImageWithFallback
          src="https://cdn.discordapp.com/attachments/1284188314714247231/1493990721722650827/ets2_20260405_212752_00.png?ex=69e0fac9&is=69dfa949&hm=b1d4868877718b7dc3d8a15e969cba96e692312cab5a2eee560c972909b1cd80&animated=true"
          alt="Baron Performance"
          className="w-full h-full object-cover opacity-40"
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4), rgba(0,0,0,1))',
          }}
        />
      </Box>

      {/* Content */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 10,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '3.5rem', md: '7rem' },
                  fontWeight: 'bold',
                  color: 'white',
                  mb: 1,
                  letterSpacing: '-0.02em',
                }}
              >
                {t('hero.title1')}
              </Typography>
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '3.5rem', md: '7rem' },
                  fontWeight: 'bold',
                  color: '#dc2626',
                  mb: 3,
                  letterSpacing: '-0.02em',
                }}
              >
                {t('hero.title2')}
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: '#d1d5db',
                  mb: 5,
                  maxWidth: '800px',
                  mx: 'auto',
                }}
              >
                {t('hero.subtitle')}
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                justifyContent="center"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="contained"
                    size="large"
                    href="https://www.tiktok.com/@baron_performanze"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      bgcolor: '#dc2626',
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      borderRadius: '50px',
                      textTransform: 'none',
                      fontWeight: 600,
                      '&:hover': {
                        bgcolor: '#b91c1c',
                      },
                    }}
                  >
                    {t('hero.followButton')}
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={scrollToContent}
                    sx={{
                      color: 'white',
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      borderRadius: '50px',
                      textTransform: 'none',
                      fontWeight: 600,
                      backdropFilter: 'blur(10px)',
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                      '&:hover': {
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                        bgcolor: 'rgba(255, 255, 255, 0.15)',
                      },
                    }}
                  >
                    {t('hero.learnMore')}
                  </Button>
                </motion.div>
              </Stack>
            </motion.div>
          </Box>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          style={{
            position: 'absolute',
            bottom: 32,
            cursor: 'pointer',
          }}
          onClick={scrollToContent}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <KeyboardArrowDown sx={{ fontSize: 48, color: 'rgba(255, 255, 255, 0.5)' }} />
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}