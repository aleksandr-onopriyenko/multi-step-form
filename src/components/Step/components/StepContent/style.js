import { Box, styled } from '@mui/material'

export const ContentWrapper = styled(Box)(({ theme }) => ({
  marginInline: theme.spacing(2),
  marginBottom: theme.spacing(2),
  padding: '1.5rem',
  backgroundColor: '#fff',
  borderRadius: '10px',
  [theme.breakpoints.up('xs')]: {
    boxShadow: '0 1px 2px 0px var(--color-light-gray)',
    marginTop: '-80px',
  },
  [theme.breakpoints.up('md')]: {
    boxShadow: 'none',
    marginTop: 0,
  },
  '& > .MuiBox-root': {
    [theme.breakpoints.up('xs')]: {
      marginBottom: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(4),
    },
    '& > .MuiTypography-root': {
      '&.MuiTypography-h4': {
        fontWeight: 'var(--font-bold)',
        [theme.breakpoints.up('xs')]: {
          fontSize: '1.5rem',
        },
        [theme.breakpoints.up('md')]: {
          fontSize: '2rem',
        },
      },
      '&.MuiTypography-subtitle1': {
        color: 'var(--color-cool-gray)',
      },
    },
  },
}))
