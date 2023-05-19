import { useEffect, useState } from 'react'

export const useAddons = (register) => {
  const [isMonth, setIsMonth] = useState(true)
  const [addons, setAddons] = useState(null)

  useEffect(() => {
    setIsMonth(() => register.values.plan.isMonth)
    setAddons(() => {
      const { customProfile, largeStorage, onlineService } = register.values.addons
      if (isMonth) {
        return {
          onlineService: { checked: onlineService.checked, cost: 1 },
          largeStorage: { checked: largeStorage.checked, cost: 2 },
          customProfile: { checked: customProfile.checked, cost: 2 },
        }
      }

      return {
        onlineService: { checked: onlineService.checked, cost: 10 },
        largeStorage: { checked: largeStorage.checked, cost: 20 },
        customProfile: { checked: customProfile.checked, cost: 20 },
      }
    })
  }, [])

  useEffect(() => {
    register.setFieldValue('addons', addons)
  }, [addons])

  const handleChange =
    (cost) =>
    ({ target }) => {
      setAddons((prev) => ({
        ...prev,
        [target.name]: { checked: target.checked, cost: isMonth ? cost : cost * 10 },
      }))
    }

  return { addons, isMonth, handleChange }
}
