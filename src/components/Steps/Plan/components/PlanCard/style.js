import { Typography, styled } from '@mui/material'

export const PlanCardWrapper = styled('div', { shouldForwardProp: (prop) => prop !== 'isActive' })(
  ({ theme, isActive }) => ({
    width: '100%',
    borderRadius: '7px',
    gap: theme.spacing(2),
    border: '1px solid var(--color-light-gray)',
    borderColor: isActive && 'hsl(245, 34%, 45%)',
    backgroundColor: isActive && 'var(--color-magnolia)',
    '&:hover': {
      backgroundColor: 'var(--color-magnolia)',
      borderColor: 'hsl(245, 34%, 45%)',
    },
    [theme.breakpoints.up('xs')]: {
      padding: theme.spacing(1),
      display: 'flex',
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2),
      display: 'block',
    },
  })
)

export const PlanCardImage = styled('div')(({ theme }) => ({
  width: '45px',
  height: '45px',
  [theme.breakpoints.up('xs')]: {
    marginBottom: theme.spacing(0),
  },
  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(4),
  },
}))

export const PlanCardContent = styled('div')({})

export const PlanCardTitle = styled(Typography)({
  fontSize: '1rem',
  fontWeight: 'var(--font-medium)',
})

export const PlanCardCost = styled(Typography)({
  color: 'var(--color-cool-gray)',
})

export const PlanCardHelperText = styled(Typography)({
  color: 'var(--color-marine-blue)',
})

PlanCardHelperText.defaultProps = {
  variant: 'caption',
}
