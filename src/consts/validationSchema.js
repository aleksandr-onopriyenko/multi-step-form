import * as yup from 'yup'

export const validationSchema = [
  yup.object().shape({
    name: yup.string().required('This field is required'),
    email: yup.string().email('Email must be a valid').required('This field is required'),
    phone: yup.number().typeError('Phone number not valid').required('This field is required'),
  }),
]
