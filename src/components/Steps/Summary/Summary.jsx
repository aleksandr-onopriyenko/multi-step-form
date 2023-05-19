import PropTypes from 'prop-types'

import ADD_ONS from '@/consts/ADD-ONS.js'

import { useSummaryTotal } from './hooks'
import { SummaryInfo, TotalAddons, TotalSum } from './components'

export const Summary = ({ handleClick, register }) => {
  const plan = register.values.plan
  const addons = register.values.addons
  const { total } = useSummaryTotal({ addons, plan })

  return (
    <>
      <SummaryInfo handleClick={handleClick} plan={plan} addons={addons}>
        <TotalAddons addons={ADD_ONS} isMonth={plan.isMonth} currentAddons={addons} />
      </SummaryInfo>
      <TotalSum isMonth={plan.isMonth} total={total} />
    </>
  )
}

Summary.propTypes = {
  register: PropTypes.object,
  handleClick: PropTypes.func,
}
