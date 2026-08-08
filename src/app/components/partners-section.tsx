import { motion } from 'motion/react';
import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import { useLanguage } from '../context/language-context';

export function PartnersSection() {
  const { t } = useLanguage();

  return (
    <Box
      id="partners"
      sx={{
        bgcolor: '#000000',
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
              variant="h2"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 'bold',
                color: 'white',
                mb: 2,
              }}
            >
              {t('partners.title')}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#9ca3af',
                maxWidth: '800px',
                mx: 'auto',
              }}
            >
              {t('partners.subtitle')}
            </Typography>
          </Box>

          {/* BP & ZT Group main card */}
          <Paper
            elevation={0}
            sx={{
              bgcolor: 'rgba(39, 39, 42, 0.5)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(63, 63, 70, 1)',
              borderRadius: 3,
              p: { xs: 3, md: 5 },
              maxWidth: '900px',
              mx: 'auto',
              textAlign: 'center',
              mb: 6,
            }}
          >
            <Box
              component="img"
              src="/bp-zt-partnership.png"
              alt="BP & ZT Group - Baron Performanze x Zehl Transporte"
              sx={{
                width: '100%',
                maxWidth: '500px',
                borderRadius: 2,
                mb: 3,
              }}
            />
            <Typography
              variant="h5"
              sx={{
                color: 'white',
                fontWeight: 'bold',
                mb: 1.5,
              }}
            >
              BP <Box component="span" sx={{ color: '#dc2626' }}>&</Box> ZT Group
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#9ca3af',
              }}
            >
              {t('partners.description')}
            </Typography>
          </Paper>

          {/* Zehl Transporte extra section */}
          <Box sx={{ maxWidth: '900px', mx: 'auto' }}>
            <Typography
              variant="overline"
              sx={{
                color: '#dc2626',
                fontWeight: 700,
                letterSpacing: '0.15em',
                fontSize: '0.8rem',
                display: 'block',
                textAlign: 'center',
                mb: 1,
              }}
            >
              Zehl Transporte
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -4 }}
                >
                  <Box
                    sx={{
                      borderRadius: 3,
                      overflow: 'hidden',
                      border: '1px solid rgba(220, 38, 38, 0.3)',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: '#dc2626',
                        boxShadow: '0 16px 50px rgba(220, 38, 38, 0.2)',
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src="/bp-zh-1.jpg"
                      alt="BP & ZT Group – Zehl Transporte Fleet"
                      sx={{
                        width: '100%',
                        height: { xs: '180px', sm: '220px' },
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                  </Box>
                </motion.div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <Box
                    sx={{
                      borderRadius: 3,
                      overflow: 'hidden',
                      border: '1px solid rgba(220, 38, 38, 0.3)',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: '#dc2626',
                        boxShadow: '0 16px 50px rgba(220, 38, 38, 0.2)',
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src="/bp-zh-2.jpg"
                      alt="BP & ZT Group – Zehl Transporte"
                      sx={{
                        width: '100%',
                        height: { xs: '180px', sm: '220px' },
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
