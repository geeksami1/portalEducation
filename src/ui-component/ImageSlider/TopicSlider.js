import { Box } from '@mui/material'
import React from 'react'
import slider1 from '../../../src/assets/images/topic01.png'
// import slider2 from '../../../src/assets/images/topic02.png'
// import slider3 from '../../../src/assets/images/topic03.png'

const TopicSlider = () => {
  return (
    <Box>
        <img src={slider1} alt="slider1" style={{ width: "100%", height: "auto", borderRadius: '10px' }} />
    </Box>
  )
}

export default TopicSlider