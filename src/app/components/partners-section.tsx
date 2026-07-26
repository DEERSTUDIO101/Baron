import { motion } from 'motion/react';
import { Box, Container, Typography, Paper, Chip } from '@mui/material';
import { NewReleases } from '@mui/icons-material';
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
            <Chip
              icon={<NewReleases sx={{ color: '#dc2626 !important' }} />}
              label={t('partners.newBadge')}
              sx={{
                bgcolor: 'rgba(220, 38, 38, 0.12)',
                border: '1px solid rgba(220, 38, 38, 0.5)',
                color: 'white',
                fontWeight: 600,
                mb: 2,
                px: 1.5,
                py: 2.5,
                fontSize: '0.95rem',
              }}
            />
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
        </motion.div>
      </Container>
    </Box>
  );
}
