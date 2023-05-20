import { Box, Step, StepLabel, styled } from '@mui/material'

export const StepWrapper = styled(Step)(({ theme: { breakpoints } }) => ({
  display: 'flex',
  [breakpoints.up('xs')]: {
    padding: 0,
  },
}))

export const StepLabelWrapper = styled(StepLabel)({ '.MuiStepLabel-iconContainer': { padding: 0 } })

export const StepIcon = styled('span', {
  shouldForwardProp: (prop) => !['index', 'activeStep'].includes(prop),
})(({ theme: { spacing, breakpoints }, activeStep, index }) => ({
  width: 40,
  height: 40,
  display: 'flex',
  borderRadius: '50%',
  border: '1px solid',
  padding: spacing(2),
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'var(--font-bold);',
  backgroundColor: index === activeStep ? 'var(--color-light-blue)' : 'transparent',
  color: index === activeStep ? 'var(--color-marine-blue)' : 'var(--color-alabaster)',
  borderColor: index === activeStep ? 'var(--color-light-blue)' : 'var(--color-alabaster)',
  [breakpoints.up('xs')]: {
    marginRight: 0,
    fontSize: '0.85rem',
  },
  [breakpoints.up('md')]: {
    fontSize: '1rem',
    marginRight: spacing(2),
  },
}))
