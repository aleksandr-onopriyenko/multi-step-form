import { FormControlLabel, FormGroup } from '@mui/material'

import PropTypes from 'prop-types'

import ADD_ONS from '@/consts/ADD-ONS'
import { useAddons } from './hooks/useAddons'
import { AddonsControl } from './components'

export const Addons = ({ register }) => {
  const { addons, handleChange, isMonth } = useAddons(register)

  return (
    addons && (
      <FormGroup sx={{ gap: 2 }}>
        {ADD_ONS.map((addon) => {
          return (
            <FormControlLabel
              sx={{ m: 0 }}
              key={addon.type}
              control={
                <AddonsControl
                  isMonth={isMonth}
                  name={addon.name}
                  title={addon.type}
                  serviceCost={addon.cost}
                  description={addon.description}
                  handleChange={handleChange(addon.cost)}
                  isChecked={addons[addon.name].checked}
                />
              }
            />
          )
        })}
      </FormGroup>
    )
  )
}

Addons.propTypes = {
  register: PropTypes.object,
}
