import { motion } from 'motion/react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { useLanguage } from '../context/language-context';

export function ZehlSection() {
  const { t } = useLanguage();

  return (
    <Box
      id="zehl"
      sx={{
        background: 'linear-gradient(to bottom, #18181b, #000000)',
        py: 10,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="overline"
              sx={{
                color: '#dc2626',
                fontWeight: 700,
                letterSpacing: '0.15em',
                fontSize: '0.85rem',
                mb: 1,
                display: 'block',
              }}
            >
              BP &amp; ZT Group
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.2rem', md: '3.5rem' },
                fontWeight: 'bold',
                color: 'white',
                mb: 2,
              }}
            >
              {t('zehl.title')}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#9ca3af',
                maxWidth: '700px',
                mx: 'auto',
                mb: 1,
              }}
            >
              {t('zehl.description')}
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={3} justifyContent="center">
          {['/bp-zh-1.jpg', '/bp-zh-2.jpg'].map((src, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
              >
                <Box
                  sx={{
                    borderRadius: 3,
                    overflow: 'hidden',
                    border: '1px solid rgba(220, 38, 38, 0.3)',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: '#dc2626',
                      boxShadow: '0 20px 60px rgba(220, 38, 38, 0.25)',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={src}
                    alt={`BP & ZT Group - Zehl Transporte ${index + 1}`}
                    sx={{
                      width: '100%',
                      height: { xs: '220px', sm: '260px', md: '300px' },
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
