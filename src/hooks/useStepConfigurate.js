import { useState } from 'react'

export const useStepConfigurate = () => {
  const [activeStep, setActiveStep] = useState(0)

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handlePlanChange = () => {
    setActiveStep(() => 1)
  }

  const handleSubmit = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  return { handleBack, handlePlanChange, handleSubmit, activeStep, setActiveStep }
}
