import { useEffect, useState } from 'react'

export const useSummaryTotal = ({ addons, plan }) => {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(() => culcTotalAddons(addons) + plan.cost)
  }, [])

  const culcTotalAddons = (addons) => {
    const arr = Object.keys(addons)
    return arr
      .filter((addonType) => addons[addonType].checked)
      .reduce((acc, addonType) => {
        return acc + addons[addonType].cost
      }, 0)
  }

  return { total }
}
