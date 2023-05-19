import PropTypes from 'prop-types'

import { LabelContent } from './components'
import { StepIcon, StepLabelWrapper, StepWrapper } from './style'

export const Step = ({ step, index, activeStep }) => {
  return (
    <StepWrapper>
      <StepLabelWrapper
        icon={
          <StepIcon index={index} activeStep={activeStep}>
            {index + 1}
          </StepIcon>
        }
      >
        <LabelContent description={step.description} label={step.label} />
      </StepLabelWrapper>
    </StepWrapper>
  )
}

Step.propTypes = {
  index: PropTypes.number,
  activeStep: PropTypes.number,

  step: PropTypes.shape({
    label: PropTypes.string,
    description: PropTypes.string,
  }),
}
