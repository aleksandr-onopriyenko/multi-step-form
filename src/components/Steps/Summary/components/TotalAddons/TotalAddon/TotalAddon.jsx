import PropTypes from 'prop-types'
import { Typography } from '@mui/material'

import { TotalAddonText, TotalAddonWrapper } from './style'

export const TotalAddon = ({ addons, cost, isMonth, type }) => {
  const addonType = addons.find((a) => a.name === type).type

  return (
    <TotalAddonWrapper>
      <TotalAddonText>{addonType}</TotalAddonText>
      <Typography>
        +${cost}/{!isMonth ? 'yr' : 'mo'}
      </Typography>
    </TotalAddonWrapper>
  )
}

TotalAddon.propTypes = {
  cost: PropTypes.number,
  type: PropTypes.string,
  addons: PropTypes.array,
  isMonth: PropTypes.bool,
}
