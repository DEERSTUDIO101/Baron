import { motion } from 'motion/react';
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useLanguage } from '../context/language-context';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const handleChange = (_event: React.MouseEvent<HTMLElement>, newLanguage: 'de' | 'en' | null) => {
    if (newLanguage !== null) {
      setLanguage(newLanguage);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Box
        sx={{
          position: 'fixed',
          top: 24,
          right: 24,
          zIndex: 1000,
        }}
      >
        <ToggleButtonGroup
          value={language}
          exclusive
          onChange={handleChange}
          sx={{
            bgcolor: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '50px',
            '& .MuiToggleButton-root': {
              color: 'rgba(255, 255, 255, 0.7)',
              border: 'none',
              px: 2.5,
              py: 1,
              fontSize: '0.9rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              transition: 'all 0.3s',
              '&:hover': {
                bgcolor: 'rgba(220, 38, 38, 0.1)',
                color: 'white',
              },
              '&.Mui-selected': {
                bgcolor: '#dc2626',
                color: 'white',
                '&:hover': {
                  bgcolor: '#b91c1c',
                },
              },
            },
          }}
        >
          <ToggleButton value="de">DE</ToggleButton>
          <ToggleButton value="en">EN</ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </motion.div>
  );
}
