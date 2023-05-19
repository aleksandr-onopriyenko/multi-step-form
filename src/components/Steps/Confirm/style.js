import { styled } from '@mui/material'

export const ConfirmWrapper = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    padding: '2rem 0',
  },
  [theme.breakpoints.up('md')]: {
    padding: '10rem 0',
  },
}))

export const ConfirmImageWrapper = styled('div')(({ theme }) => ({
  margin: 'auto',
  [theme.breakpoints.up('xs')]: {
    width: '60px',
    height: '60px',
  },
  [theme.breakpoints.up('md')]: {
    width: '100px',
    height: '100px',
  },
}))

export const ConfirmText = styled('div')({ textAlign: 'center' })

export const ConfirmTitle = styled('h2')(({ theme }) => ({
  fontWeight: 'var(--font-bold)',
  marginBottom: '1rem',
  [theme.breakpoints.up('xs')]: {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
}))
export const ConfirmDescription = styled('h3')({
  color: 'var(--color-cool-gray)',
  fontWeight: 'var(--font-regular)',
  fontSize: '1rem',
})
