import PropTypes from 'prop-types'

import { FormButton, FormButtonSubmit, FormControlsWrapper } from './style'

export const FormControls = ({ activeStep, handleBack, stepLength }) => {
  return (
    <FormControlsWrapper>
      <FormButton activeStep={activeStep} onClick={handleBack} disableRipple>
        Go Back
      </FormButton>
      <FormButtonSubmit
        stepLength={stepLength}
        activeStep={activeStep}
        variant="contained"
        type="submit"
        disableRipple
      >
        {activeStep === stepLength - 1 ? 'Confirm' : 'Next Step'}
      </FormButtonSubmit>
    </FormControlsWrapper>
  )
}

FormControls.propTypes = {
  handleBack: PropTypes.func,
  activeStep: PropTypes.number,
  stepLength: PropTypes.number,
}
