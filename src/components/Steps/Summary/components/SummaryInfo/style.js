import { Link, Typography, styled } from '@mui/material'

export const SummaryInfoWrapper = styled('div')(({ theme: { spacing } }) => ({
  padding: spacing(3),
  borderRadius: '10px',
  marginBottom: spacing(3),
  backgroundColor: 'var(--color-magnolia)',
}))

export const SummaryPlanWrapper = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isCheckedAddons',
})(({ theme: { spacing }, isCheckedAddons }) => ({
  paddingBottom: spacing(3),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: isCheckedAddons && spacing(3),
  borderBottom: isCheckedAddons && '1px solid var(--color-cool-gray)',
}))

export const SummaryPlan = styled('div')({})

export const SummaryPlanText = styled(Typography)({ fontWeight: 'var(--font-bold)' })

export const SummaryPlanChange = styled(Link)({
  cursor: 'pointer',
  color: 'var(--color-cool-gray)',
  '&:hover': { color: 'var(--color-purplish-blue)' },
})
