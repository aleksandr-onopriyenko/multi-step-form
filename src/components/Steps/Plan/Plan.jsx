import PropTypes from 'prop-types'

import PLANS from '@/consts/PLANS'

import {
  Android12Switch,
  PlanActions,
  PlanActionsName,
  PlanListItem,
  PlanListWrapper,
} from './style'
import { PlanCard } from './components'
import { usePlanConfigurate } from './hooks'

export const Plan = ({ register }) => {
  const { currentPlan, isMonth, handleChange, handleSwitch } = usePlanConfigurate(
    register.values.plan,
    register.setFieldValue
  )
  return (
    <>
      <PlanListWrapper>
        <PlanListItem name="plan" id="plan" value={currentPlan.type} onChange={handleChange}>
          {PLANS.map(({ name, cost, icon }) => (
            <PlanCard
              key={name}
              cost={cost}
              icon={icon}
              name={name}
              title={name}
              isMonth={isMonth}
              isActive={currentPlan.type === name}
            />
          ))}
        </PlanListItem>
      </PlanListWrapper>
      <PlanActions>
        <PlanActionsName isMonth={isMonth}>Monthly</PlanActionsName>
        <Android12Switch checked={!isMonth} onClick={handleSwitch} />
        <PlanActionsName isMonth={!isMonth}>Yearly</PlanActionsName>
      </PlanActions>
    </>
  )
}

Plan.propTypes = {
  register: PropTypes.object,
}
