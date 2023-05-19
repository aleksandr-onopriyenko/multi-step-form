import PropTypes from 'prop-types'

import { LabelContentWrapper, LabelDescriptionWrapper, LabelTitleWrapper } from './style'

export const LabelContent = ({ description, label }) => {
  return (
    <LabelContentWrapper>
      <LabelTitleWrapper variant="subtitle2">{label}</LabelTitleWrapper>
      <LabelDescriptionWrapper>{description}</LabelDescriptionWrapper>
    </LabelContentWrapper>
  )
}

LabelContent.propTypes = {
  label: PropTypes.string,
  description: PropTypes.string,
}
