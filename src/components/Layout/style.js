import { Box, styled } from '@mui/material'

export const LayoutWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  backgroundColor: 'var(--color-white)',
  position: 'fixed',
  top: '50%',
  left: '50%',
  overflow: 'auto',
  transform: 'translate(-50%, -50%)',
  boxShadow: '0 0 6px 0px var(--color-light-gray)',
  [theme.breakpoints.up('xs')]: {
    width: '100%',
    maxWidth: '100%',
    height: '100%',
    padding: 0,
    borderRadius: 0,
    flexDirection: 'column',
  },
  [theme.breakpoints.up('md')]: {
    width: '1000px',
    maxWidth: '70%',
    height: '75%',
    padding: theme.spacing(2),
    borderRadius: '1rem',
    flexDirection: 'row',
  },
}))
