import PropTypes from 'prop-types'

import {
  SummaryInfoWrapper,
  SummaryPlanWrapper,
  SummaryPlan,
  SummaryPlanChange,
  SummaryPlanText,
} from './style'

export const SummaryInfo = ({ children, plan: { type, isMonth, cost }, addons, handleClick }) => {
  const isCheckedAddons = Object.keys(addons).some((el) => addons[el].checked)
  return (
    <SummaryInfoWrapper>
      <SummaryPlanWrapper isCheckedAddons={isCheckedAddons}>
        <SummaryPlan>
          <SummaryPlanText>
            {type} ({isMonth ? 'Monthly' : 'Yearly'})
          </SummaryPlanText>
          <SummaryPlanChange underline="always" onClick={handleClick}>
            Change
          </SummaryPlanChange>
        </SummaryPlan>
        <SummaryPlanText>
          ${cost}/{!isMonth ? 'yr' : 'mo'}
        </SummaryPlanText>
      </SummaryPlanWrapper>
      {children}
    </SummaryInfoWrapper>
  )
}

SummaryInfo.propTypes = {
  addons: PropTypes.object,
  children: PropTypes.object,
  handleClick: PropTypes.func,

  plan: PropTypes.shape({
    type: PropTypes.string,
    cost: PropTypes.number,
    isMonth: PropTypes.bool,
  }),
}
