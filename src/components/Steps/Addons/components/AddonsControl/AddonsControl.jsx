import { Box, Checkbox } from '@mui/material'
import PropTypes from 'prop-types'

import {
  BpIcon,
  BpCheckedIcon,
  AddonsCardCost,
  AddonsCardTitle,
  AddonsControlWrapper,
  AddonsCardDescription,
} from './style'

export const AddonsControl = ({
  serviceCost,
  title,
  description,
  handleChange,
  name,
  isChecked = false,
  isMonth = true,
}) => {
  return (
    <AddonsControlWrapper isChecked={isChecked}>
      <Checkbox
        name={name}
        disableRipple
        color="default"
        icon={<BpIcon />}
        checked={isChecked}
        onChange={handleChange}
        checkedIcon={<BpCheckedIcon />}
      />
      <Box flexGrow={1}>
        <AddonsCardTitle>{title}</AddonsCardTitle>
        <AddonsCardDescription>{description}</AddonsCardDescription>
      </Box>
      <Box>
        {isMonth ? (
          <AddonsCardCost variant="caption">+${serviceCost}/mo</AddonsCardCost>
        ) : (
          <AddonsCardCost variant="caption">+${serviceCost * 10}/yr</AddonsCardCost>
        )}
      </Box>
    </AddonsControlWrapper>
  )
}

AddonsControl.propTypes = {
  name: PropTypes.string,
  isMonth: PropTypes.bool,
  title: PropTypes.string,
  isChecked: PropTypes.bool,
  handleChange: PropTypes.func,
  serviceCost: PropTypes.number,
  description: PropTypes.string,
}
