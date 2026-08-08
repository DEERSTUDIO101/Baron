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

          {/* BP & ZT Group unified card */}
          <Paper
            elevation={0}
            sx={{
              bgcolor: 'rgba(39, 39, 42, 0.5)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(63, 63, 70, 1)',
              borderRadius: 3,
              p: { xs: 3, md: 4 },
              maxWidth: '900px',
              mx: 'auto',
              textAlign: 'center',
            }}
          >
            {/* Main BP & ZT image */}
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
              sx={{ color: 'white', fontWeight: 'bold', mb: 1.5 }}
            >
              BP <Box component="span" sx={{ color: '#dc2626' }}>&</Box> ZT Group
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: '#9ca3af', mb: 3 }}
            >
              {t('partners.description')}
            </Typography>

            {/* Zehl Transporte images inside same card */}
            <Box
              sx={{
                pt: 3,
                borderTop: '1px solid rgba(63, 63, 70, 0.8)',
              }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: '#dc2626',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  fontSize: '0.75rem',
                  display: 'block',
                  mb: 2,
                }}
              >
                Zehl Transporte
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Box
                    component="img"
                    src="/bp-zh-1.jpg"
                    alt="BP & ZT Group – Zehl Transporte Fleet"
                    sx={{
                      width: '100%',
                      height: { xs: '160px', sm: '200px' },
                      objectFit: 'cover',
                      borderRadius: 2,
                      display: 'block',
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box
                    component="img"
                    src="/bp-zh-2.jpg"
                    alt="BP & ZT Group – Zehl Transporte"
                    sx={{
                      width: '100%',
                      height: { xs: '160px', sm: '200px' },
                      objectFit: 'cover',
                      borderRadius: 2,
                      display: 'block',
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}
