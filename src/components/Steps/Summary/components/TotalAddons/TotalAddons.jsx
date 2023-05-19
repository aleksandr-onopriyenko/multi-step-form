import PropTypes from 'prop-types'

import { TotalAddon } from './TotalAddon/TotalAddon'

export const TotalAddons = ({ currentAddons, addons, isMonth }) => {
  return (
    <>
      {Object.keys(currentAddons)
        .filter((addonType) => currentAddons[addonType].checked)
        .map((addonType) => {
          return (
            <TotalAddon
              key={addonType}
              type={addonType}
              addons={addons}
              isMonth={isMonth}
              cost={currentAddons[addonType].cost}
            />
          )
        })}
    </>
  )
}

TotalAddons.propTypes = {
  addons: PropTypes.array,
  isMonth: PropTypes.bool,
  currentAddons: PropTypes.object,
}
