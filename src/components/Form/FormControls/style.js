import { Box, Button, styled } from '@mui/material'

export const FormControlsWrapper = styled(Box)(({ theme }) => ({
  marginTop: 'auto',
  backgroundColor: 'var(--color-white)',
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.up('xs')]: {
    padding: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    padding: '0 40px',
  },
}))

export const FormButton = styled(Button, { shouldForwardProp: (prop) => prop !== 'activeStep' })(
  ({ activeStep }) => ({
    marginTop: '1rem',
    marginLeft: '1rem',
    opacity: activeStep === 0 ? 0 : 1,
    visibility: activeStep === 0 ? 'hidden' : 'visible',
    color: 'var(--color-cool-gray)',
    fontWeight: 'var(--font-bold)',
    textTransform: 'none',
    '&:hover, &:focus': {
      color: 'var(--color-marine-blue)',
      background: 'none',
    },
  })
)

export const FormButtonSubmit = styled(Button, {
  shouldForwardProp: (prop) => !['activeStep', 'stepLength'].includes(prop),
})(({ activeStep, stepLength }) => ({
  backgroundColor:
    activeStep !== stepLength - 1 ? 'var(--color-marine-blue)' : 'var(--color-purplish-blue)',
  textTransform: 'none',
  '&:hover,&:focus': {
    backgroundColor: activeStep !== stepLength - 1 ? '#17498D' : '#938CFD',
  },
}))
