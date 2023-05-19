import { Box, Typography, styled } from '@mui/material'

export const LabelContentWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
}))

export const LabelTitleWrapper = styled(Typography)({
  color: 'var(--color-pastel-blue)',
  fontSize: '0.85rem',
  lineHeight: 1,
})

export const LabelDescriptionWrapper = styled(Typography)({
  color: 'var(--color-alabaster)',
  fontSize: '1rem',
  fontWeight: 'var(--font-bold)',
  lineHeight: 1,
  letterSpacing: '1px',
})
