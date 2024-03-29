import { Avatar, Box, Card, Typography } from '@mui/material'
import React from 'react'
import avatarcourse from 'assets/images/avatarcourse.png'

const QuizLeaderboardCard = () => {
    return (
        <Card sx={{ borderRadius: '10px', border: '1px solid #E0E0E0', p: 2, my: 2, display: 'flex', alignItems: 'center', gap: 3 }}>
            {/* AVATAR  */}

            <Avatar sx={{ width: 60, height: 60 }} src={avatarcourse} />

            {/* Content  */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography variant="h4" sx={{ color: 'rgba(0, 0, 0, 0.75)' }}>Lucos Jones</Typography>
                <Typography variant="h5" sx={{ color: '#FF0000',fontSize:12 }}>All Over Score: 10%</Typography>
            </Box>
        </Card>
    )
}

export default QuizLeaderboardCard