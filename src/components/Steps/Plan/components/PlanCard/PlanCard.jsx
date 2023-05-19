import PropTypes from 'prop-types'
import { FormControlLabel, Radio } from '@mui/material'

import {
  PlanCardContent,
  PlanCardCost,
  PlanCardHelperText,
  PlanCardImage,
  PlanCardTitle,
  PlanCardWrapper,
} from './style'

export const PlanCard = ({ title, cost, icon, isMonth, isActive, name }) => {
  return (
    <FormControlLabel
      sx={{ flex: 1, m: 0 }}
      control={
        <>
          <Radio value={name} sx={{ display: 'none' }} />
          <PlanCardWrapper isActive={isActive}>
            <PlanCardImage>
              <img src={icon} alt="plan icon" />
            </PlanCardImage>
            <PlanCardContent>
              <PlanCardTitle>{title}</PlanCardTitle>
              <PlanCardCost>
                ${isMonth ? cost : cost * 10}/{isMonth ? 'mo' : 'yr'}
              </PlanCardCost>
              {!isMonth && <PlanCardHelperText>2 months free</PlanCardHelperText>}
            </PlanCardContent>
          </PlanCardWrapper>
        </>
      }
    />
  )
}

PlanCard.propTypes = {
  name: PropTypes.string,
  cost: PropTypes.number,
  icon: PropTypes.string,
  isMonth: PropTypes.bool,
  title: PropTypes.string,
  isActive: PropTypes.bool,
}
