import { Typography, styled } from '@mui/material'

import iconChecked from '@/assets/images/icon-checkmark.svg'

export const AddonsControlWrapper = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isChecked',
})(({ theme, isChecked }) => ({
  border: '1px solid var(--color-light-gray)',
  borderRadius: '7px',
  backgroundColor: isChecked && 'var(--color-magnolia)',
  borderColor: isChecked && 'hsl(245, 34%, 45%)',
  width: '100%',
  display: 'flex',
  gap: 2,
  alignItems: 'center',
  [theme.breakpoints.up('xs')]: {
    padding: theme.spacing(1),
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(2),
  },
  '&:hover': {
    backgroundColor: 'var(--color-magnolia)',
    borderColor: 'hsl(245, 34%, 45%)',
  },
}))

export const AddonsCardTitle = styled(Typography)({
  fontSize: '0.9rem',
  fontWeight: 'var(--font-medium)',
})

export const AddonsCardDescription = styled(Typography)({
  fontSize: '0.8rem',
  fontWeight: 'var(--font-medium)',
  color: 'var(--color-cool-gray)',
})

export const AddonsCardCost = styled(Typography)({
  color: 'var(--color-purplish-blue)',
})

export const BpIcon = styled('span')({
  borderRadius: 3,
  border: '1px solid var(--color-cool-gray)',
  width: 20,
  height: 20,
  '.Mui-focusVisible &': {
    outline: '1px auto var(--color-cool-gray)',
    outlineOffset: 1,
  },
})

export const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: 'var(--color-purplish-blue)',
  backgroundImage: `url(${iconChecked})`,

  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50% 50%',

  transition: 'background 3s',
})
