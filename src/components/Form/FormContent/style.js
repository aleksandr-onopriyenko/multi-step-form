import { Box, styled } from '@mui/material'

export const FormContentWrapper = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  paddingBlock: 0,
  [theme.breakpoints.up('xs')]: {
    backgroundColor: 'var(--color-magnolia)',
    maxWidth: '100%',
    marginInline: 0,
  },
  [theme.breakpoints.up('md')]: {
    backgroundColor: 'var(--color-white)',
    maxWidth: '600px',
    marginInline: 'auto',
    overflow: 'auto',
  },
}))
