import { motion } from 'motion/react';
import { Box, Container, Typography, Link, Divider } from '@mui/material';
import { useLanguage } from '../context/language-context';

export function Footer() {
  const { t } = useLanguage();

  return (
    <Box
      sx={{
        bgcolor: 'black',
        borderTop: '1px solid rgba(63, 63, 70, 1)',
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                color: 'white',
                mb: 1,
              }}
            >
              BARON <Box component="span" sx={{ color: '#dc2626' }}>PERFORMANCE</Box>
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#9ca3af',
              }}
            >
              {t('footer.subtitle')}
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 3,
              mb: 3,
            }}
          >
            <motion.div whileHover={{ y: -2 }}>
              <Link
                href="https://www.tiktok.com/@baron_performanze"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#9ca3af',
                  textDecoration: 'none',
                  transition: 'color 0.3s',
                  '&:hover': {
                    color: '#dc2626',
                  },
                }}
              >
                TikTok
              </Link>
            </motion.div>
          </Box>

          <Divider sx={{ borderColor: 'rgba(63, 63, 70, 1)', mb: 3 }} />

          <Typography
            variant="body2"
            sx={{
              color: '#6b7280',
              textAlign: 'center',
            }}
          >
            {t('footer.copyright')}
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
}