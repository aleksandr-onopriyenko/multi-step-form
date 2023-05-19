import { Typography, styled } from '@mui/material'

export const TotalAddonWrapper = styled('div')(({ theme: { spacing } }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  mb: spacing(1),
}))

export const TotalAddonText = styled(Typography)(({ theme: { breakpoints } }) => ({
  color: 'var(--color-cool-gray)',
  [breakpoints.up('xs')]: {
    fontSize: '0.9rem',
  },
  [breakpoints.up('md')]: {
    fontSize: '1rem',
  },
}))
