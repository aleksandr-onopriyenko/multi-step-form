import STEPS from '@/consts/STEPS'
import { useRegisterForm, useStepConfigurate } from '@/hooks'
import { renderStepContent } from '@/utils/renderStepContents'
import { FormContent, FormControls, StepContent, Confirm, Step, Sidebar } from '@/components'

import { LayoutWrapper } from './style'

export const Layout = () => {
  const { activeStep, handleBack, handlePlanChange, handleSubmit } = useStepConfigurate()
  const { formik } = useRegisterForm(handleSubmit, activeStep)

  return (
    <LayoutWrapper>
      <Sidebar>
        {STEPS.map((step, index) => (
          <Step activeStep={activeStep} step={step} index={index} key={step.label} />
        ))}
      </Sidebar>

      <FormContent activeStep={activeStep} formik={formik}>
        {activeStep === STEPS.length ? (
          <StepContent>
            <Confirm />
          </StepContent>
        ) : (
          <>
            {renderStepContent(activeStep, formik, handlePlanChange)}
            <FormControls
              stepLength={STEPS.length}
              activeStep={activeStep}
              handleBack={handleBack}
            />
          </>
        )}
      </FormContent>
    </LayoutWrapper>
  )
}
