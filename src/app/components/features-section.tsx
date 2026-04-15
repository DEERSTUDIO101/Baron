import { motion } from 'motion/react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { LocalShipping, Route, Videocam, Speed } from '@mui/icons-material';
import { useLanguage } from '../context/language-context';

const features = [
  {
    icon: LocalShipping,
    titleKey: 'features.realistic.title',
    descKey: 'features.realistic.desc',
  },
  {
    icon: Route,
    titleKey: 'features.routes.title',
    descKey: 'features.routes.desc',
  },
  {
    icon: Videocam,
    titleKey: 'features.content.title',
    descKey: 'features.content.desc',
  },
  {
    icon: Speed,
    titleKey: 'features.skill.title',
    descKey: 'features.skill.desc',
  }
];

export function FeaturesSection() {
  const { t } = useLanguage();
  return (
    <Box
      sx={{
        background: 'linear-gradient(to bottom, #000000, #18181b)',
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
              {t('features.title')}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#9ca3af',
                maxWidth: '800px',
                mx: 'auto',
              }}
            >
              {t('features.subtitle')}
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={3}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      bgcolor: 'rgba(39, 39, 42, 0.5)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(63, 63, 70, 1)',
                      borderRadius: 3,
                      p: 4,
                      height: '100%',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: 'rgba(39, 39, 42, 0.8)',
                        borderColor: 'rgba(220, 38, 38, 0.5)',
                        boxShadow: '0 10px 40px rgba(220, 38, 38, 0.2)',
                      },
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: 'spring' }}
                    >
                      <Box
                        sx={{
                          bgcolor: 'rgba(220, 38, 38, 0.1)',
                          width: 64,
                          height: 64,
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 3,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            bgcolor: 'rgba(220, 38, 38, 0.2)',
                            transform: 'rotate(5deg)',
                          },
                        }}
                      >
                        <Icon sx={{ fontSize: 32, color: '#dc2626' }} />
                      </Box>
                    </motion.div>

                    <Typography
                      variant="h6"
                      sx={{
                        color: 'white',
                        fontWeight: 'bold',
                        mb: 1.5,
                      }}
                    >
                      {t(feature.titleKey)}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: '#9ca3af',
                      }}
                    >
                      {t(feature.descKey)}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}