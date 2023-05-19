import { useEffect, useState } from 'react'

import PLANS from '@/consts/PLANS'

export const usePlanConfigurate = (plan, setFieldValue) => {
  const [isMonth, setIsMonth] = useState(plan.isMonth)
  const [currentPlan, setCurrentPlan] = useState(plan)

  useEffect(() => {
    setFieldValue('plan', {
      type: currentPlan.type,
      cost: currentPlan.cost,
      isMonth,
    })
  }, [currentPlan, setCurrentPlan])

  const handleChange = (e) => {
    const { cost, name } = PLANS.find((el) => el.name === e.target.value)

    setCurrentPlan(() => ({
      isMonth,
      type: name,
      cost: isMonth ? cost : cost * 10,
    }))
  }

  const handleSwitch = () => {
    setIsMonth((prev) => !prev)
    setCurrentPlan((prev) => ({
      ...prev,
      cost: !isMonth
        ? PLANS.find((e) => e.name === currentPlan.type).cost
        : PLANS.find((e) => e.name === currentPlan.type).cost * 10,
    }))
  }

  return { currentPlan, isMonth, handleChange, handleSwitch }
}
