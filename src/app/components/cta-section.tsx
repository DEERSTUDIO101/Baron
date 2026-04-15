import { motion } from 'motion/react';
import { Box, Container, Typography, Button, Paper } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';
import { useLanguage } from '../context/language-context';

export function CTASection() {
  const { t } = useLanguage();

  return (
    <Box sx={{ bgcolor: '#18181b', py: 10 }}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <Paper
            elevation={0}
            sx={{
              background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
              borderRadius: 4,
              p: { xs: 6, md: 8 },
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(220, 38, 38, 0.4)',
            }}
          >
            {/* Animated background elements */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                position: 'absolute',
                top: '-50%',
                right: '-20%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
                borderRadius: '50%',
              }}
            />

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '2rem', md: '3rem' },
                  fontWeight: 'bold',
                  color: 'white',
                  mb: 3,
                  position: 'relative',
                }}
              >
                {t('cta.title')}
              </Typography>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: 'rgba(255, 255, 255, 0.95)',
                  mb: 4,
                  maxWidth: '700px',
                  mx: 'auto',
                  position: 'relative',
                }}
              >
                {t('cta.subtitle')}
              </Typography>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="contained"
                size="large"
                href="https://www.tiktok.com/@baron_performanze"
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<OpenInNew />}
                sx={{
                  bgcolor: 'white',
                  color: '#dc2626',
                  px: 5,
                  py: 2,
                  fontSize: '1.1rem',
                  borderRadius: '50px',
                  textTransform: 'none',
                  fontWeight: 700,
                  position: 'relative',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                  '&:hover': {
                    bgcolor: '#f3f4f6',
                    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.4)',
                  },
                }}
              >
                {t('cta.button')}
              </Button>
            </motion.div>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}