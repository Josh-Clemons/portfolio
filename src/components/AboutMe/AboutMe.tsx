import { Box, Container, Grid, Link, Paper, Typography } from '@mui/material'
import React from 'react'

export const AboutMe: React.FC = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={6} height={200} mt={3} pb={2} sx={{ backgroundColor: 'rgba(79, 79, 79, 0.5)' }} container={true} direction='column' justifyContent={'center'} borderRadius={2}>
                    <Typography variant='h4'>Josh Clemons</Typography>
                    <Typography variant='body2'>mrjoshc@gmail.com</Typography>
                    <Typography variant='body2'>(763)-607-6719</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Typography variant='body2'>GitHub: </Typography>
                        <Link href='https://github.com/Josh-Clemons' target="_blank" sx={{ marginLeft: 1, color: 'white', '&:visited': { color: 'darkgrey' } }}>github.com/Josh-Clemons</Link>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Typography variant='body2'>LinkedIn: </Typography>
                        <Link href='https://www.linkedin.com/in/josh-clemons-442784198/' target="_blank" sx={{ marginLeft: 1, color: 'white', '&:visited': { color: 'darkgrey' } }}>www.linkedin.com/in/josh-clemons-442784198/</Link>
                    </Box>

                </Grid>
                <Grid item xs={6}>
                    <></>
                </Grid>
                <Grid item xs={6}>
                    <Paper>Test Item: 3</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper>Test Item: 4</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper>Test Item: 5</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper>Test Item: 6</Paper>
                </Grid>
            </Grid>
        </Container>
    )
}
