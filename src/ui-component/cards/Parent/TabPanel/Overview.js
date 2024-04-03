import React from 'react'
import OverviewReport from './SubCards/OverviewReport'
import OverviewIntro from './SubCards/OverviewIntro'
import OverviewLineChart from './SubCards/OverviewLineChart'

const Overview = () => {
  return (
   <>
   <OverviewIntro/>
   <OverviewReport/>
   <OverviewLineChart/>
   </>
  )
}

export default Overview