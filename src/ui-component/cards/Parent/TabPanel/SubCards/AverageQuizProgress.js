import { Box, Typography } from '@mui/material'
import React from 'react'
import CircularProgressBar from 'ui-component/Progress/CircularProgressBar'

const AverageQuizProgress = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap:2 }}>
        <CircularProgressBar value={75} size={120} color="#4640e0" />
        <Typography variant="h3" sx={{ color: 'rgba(0, 0, 0, 0.75)' }}>
            Success Rate
        </Typography>
    </Box>
  )
}

export default AverageQuizProgress