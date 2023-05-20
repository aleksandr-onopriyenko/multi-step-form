import { Stepper, styled } from '@mui/material'

import bg from '@/assets/images/bg-sidebar-desktop.svg'
import mobileBg from '@/assets/images/bg-sidebar-mobile.svg'

export const SideBarWrapper = styled(Stepper)(({ theme: { spacing, breakpoints } }) => ({
  '.MuiStepConnector-root': {
    display: 'none',
  },
  display: 'flex',
  height: '100%',
  flexShrink: 0,
  padding: spacing(5),
  gap: spacing(3),
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: '90% bottom',
  alignItems: 'flex-start',
  [breakpoints.up('xs')]: {
    width: '100%',
    backgroundImage: `url(${mobileBg})`,
    borderRadius: 0,
    paddingBottom: '110px',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  [breakpoints.up('md')]: {
    width: '300px',
    backgroundImage: `url(${bg})`,
    borderRadius: '10px',
    paddingBottom: spacing(5),
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
}))
