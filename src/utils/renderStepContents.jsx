import { StepContent, Plan, Addons, PersonalInfo, Summary } from '@/components'

export const renderStepContent = (step, formik, handlePlanChange) => {
  switch (step) {
    case 0:
      return (
        <StepContent
          title="Personal info"
          subtitle="Please provide your name, email address, and phone number."
        >
          <PersonalInfo register={formik} />
        </StepContent>
      )
    case 1:
      return (
        <StepContent
          title="Select your plan"
          subtitle="You have the option of monthly or yearly billing."
        >
          <Plan register={formik} />
        </StepContent>
      )
    case 2:
      return (
        <StepContent title="Pick add-ons" subtitle="Add-ons help enhance your gaming experience.">
          <Addons register={formik} />
        </StepContent>
      )
    case 3:
      return (
        <StepContent
          title="Finishing up"
          subtitle="Double-check everything looks OK before confirming."
        >
          <Summary register={formik} handleClick={handlePlanChange} />
        </StepContent>
      )
    default:
      return <h1>Default</h1>
  }
}
