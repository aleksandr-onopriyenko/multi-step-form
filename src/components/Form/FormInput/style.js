import { Box, FormHelperText, InputBase, InputLabel, styled } from '@mui/material'

export const InputWrapper = styled(InputBase)(({ theme }) => ({
  color: 'var(--color-marine-blue)',
  border: '1px solid var(--color-cool-gray)',
  'input::placeholder': {
    color: 'var(--color-cool-gray)',
    fontWeight: 'var(--font-medium)',
    opacity: 1,
  },
  '&:has(input:hover, input:focus, input:active)': {
    borderColor: 'var(--color-pastel-blue)',
  },
  '&.Mui-error, &.Mui-error:has(input:hover, input:focus, input:active)': {
    borderColor: 'var(--color-strawberry-red)',
  },
  [theme.breakpoints.up('xs')]: {
    borderRadius: '4px',
    padding: '4px 1rem',
  },
  [theme.breakpoints.up('md')]: {
    borderRadius: '7px',
    padding: '10px 1rem',
  },
}))

export const InputLabelWrapper = styled(InputLabel)({
  fontSize: '1.1rem',
  color: 'var(--color-marine-blue);',
})

export const HelperTextWrapper = styled(FormHelperText)({ color: 'var(--color-strawberry-red)' })

export const FormInputWrapper = styled(Box)({ display: 'flex', justifyContent: 'space-between' })
