import PropTypes from 'prop-types'
import { Box, Typography } from '@mui/material'

import { ContentWrapper } from './style'

export const StepContent = ({ title, subtitle, children }) => {
  return (
    <ContentWrapper component="section">
      {title && subtitle && (
        <Box component="header">
          <Typography component="h1" variant="h4">
            {title}
          </Typography>
          <Typography component="h2" variant="subtitle1">
            {subtitle}
          </Typography>
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
