import PropTypes from 'prop-types'
import { Box, Typography } from '@mui/material'

import { ContentWrapper } from './style'

export const StepContent = ({ title, subtitle, children }) => {
  return (
    <ContentWrapper>
      {title && subtitle && (
        <Box>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="subtitle1">{subtitle}</Typography>
        </Box>
      )}
      {children}
    </ContentWrapper>
  )
}

StepContent.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.object,
}
