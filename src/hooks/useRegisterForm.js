import { useFormik } from 'formik'

import { validationSchema } from '@/consts/validationSchema'

export const useRegisterForm = (handleSubmit, activeStep) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      plan: {
        type: 'Arcade',
        cost: 9,
        isMonth: true,
      },
      addons: {
        onlineService: { checked: false, cost: 1 },
        largeStorage: { checked: false, cost: 2 },
        customProfile: { checked: false, cost: 2 },
      },
    },
    validationSchema: validationSchema[activeStep],
    onSubmit: () => {
      handleSubmit()
    },
  })

  return { formik }
}
