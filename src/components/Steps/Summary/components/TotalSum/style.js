import { Typography, styled } from '@mui/material'

export const TotalSumWrapper = styled('div')(({ theme: { spacing } }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingInline: spacing(3),
}))

export const TotalText = styled(Typography)({ color: 'var(--color-cool-gray)' })
export const TotalCost = styled(Typography)({
  fontWeight: 'var(--font-bold)',
  color: 'var(--color-purplish-blue)',
})
