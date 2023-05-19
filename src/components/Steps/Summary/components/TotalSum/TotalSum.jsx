import PropTypes from 'prop-types'

import { TotalCost, TotalSumWrapper, TotalText } from './style'

export const TotalSum = ({ total, isMonth }) => {
  return (
    <TotalSumWrapper>
      <TotalText>Total({isMonth ? 'per month' : 'per year'})</TotalText>
      <TotalCost variant="h6">
        ${total}/{!isMonth ? 'yr' : 'mo'}
      </TotalCost>
    </TotalSumWrapper>
  )
}

TotalSum.propTypes = {
  total: PropTypes.number,
  isMonth: PropTypes.bool,
}
