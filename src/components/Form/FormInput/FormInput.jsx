import PropTypes from 'prop-types'

import { FormInputWrapper, HelperTextWrapper, InputLabelWrapper, InputWrapper } from './style'

export const FormInput = ({ register, field, label, placeholder }) => {
  const { touched, errors, handleChange, values } = register
  return (
    <>
      <FormInputWrapper>
        <InputLabelWrapper shrink htmlFor={field}>
          {label}
        </InputLabelWrapper>
        {touched[field] && !!errors[field] && (
          <HelperTextWrapper>{errors[field]}</HelperTextWrapper>
        )}
      </FormInputWrapper>
      <InputWrapper
        id={field}
        name={field}
        value={values[field]}
        onChange={handleChange}
        placeholder={placeholder}
        error={touched[field] && !!errors[field]}
      />
    </>
  )
}

FormInput.propTypes = {
  field: PropTypes.string,
  label: PropTypes.string,
  register: PropTypes.object,
  placeholder: PropTypes.string,
}
