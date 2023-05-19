import PropTypes from 'prop-types'

import { FormContentWrapper } from './style'

export const FormContent = ({ formik, children }) => {
  return (
    <FormContentWrapper component="form" onSubmit={formik.handleSubmit}>
      {children}
    </FormContentWrapper>
  )
}

FormContent.propTypes = {
  formik: PropTypes.object,
  children: PropTypes.object,
}
