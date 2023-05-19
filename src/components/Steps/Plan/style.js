import { FormGroup, RadioGroup, Switch, Typography, styled } from '@mui/material'

export const Android12Switch = styled(Switch)({
  padding: 8,

  '&> .MuiButtonBase-root.Mui-checked ': {
    color: '#fff',
    '& + .MuiSwitch-track': {
      backgroundColor: 'var(--color-marine-blue)',
      opacity: 1,
    },
  },
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    backgroundColor: 'var(--color-marine-blue)',
    opacity: 1,
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16,
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    width: 16,
    height: 16,
    margin: 2,
  },
})

export const PlanListWrapper = styled(FormGroup)(({ theme: { breakpoints, spacing } }) => ({
  width: '100%',
  [breakpoints.up('xs')]: {
    marginBottom: spacing(2),
  },
  [breakpoints.up('md')]: {
    marginBottom: spacing(4),
  },
}))

export const PlanListItem = styled(RadioGroup)(({ theme: { breakpoints, spacing } }) => ({
  gap: spacing(2),
  [breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}))

export const PlanActions = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.5rem',
  gap: '1rem',
  backgroundColor: 'var(--color-magnolia)',
  borderRadius: '5px',
})

export const PlanActionsName = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isMonth',
})(({ isMonth }) => ({
  fontWeight: 'var(--font-bold)',
  color: !isMonth && 'var(--color-cool-gray)',
}))
