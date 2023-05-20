import PropTypes from 'prop-types'

import { FormInput } from '@/components/Form'

import { PersonalInfoInput } from './style'

export const PersonalInfo = ({ register }) => {
  return (
    <>
      <PersonalInfoInput>
        <FormInput register={register} field="name" label="Name" placeholder="e.g. Stephen King" />
      </PersonalInfoInput>

      <PersonalInfoInput>
        <FormInput
          register={register}
          field="email"
          label="Email Address"
          placeholder="e.g. e.g. stephenking@lorem.com"
        />
      </PersonalInfoInput>

      <PersonalInfoInput>
        <FormInput
          register={register}
          field="phone"
          label="Phone Number"
          placeholder="e.g. +1 234 567 890"
        />
      </PersonalInfoInput>
    </>
  )
}

PersonalInfo.propTypes = {
  register: PropTypes.object,
}
