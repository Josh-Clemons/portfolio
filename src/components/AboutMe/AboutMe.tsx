import { Box, Container, Grid, Link, Typography } from '@mui/material'
import React from 'react'

export const AboutMe: React.FC = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={6} height={200} mt={12} pb={2} sx={{ backgroundColor: 'rgb(14, 44, 55, .7)' }} container={true} direction='column' justifyContent={'center'} borderRadius={2}>
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
                <Grid item xs={12} height={180}>
                    <></>
                </Grid>
                <Grid item xs={8} height={180}>
                    <Box><Typography variant={'h6'}>“Choose the positive. You have a choice, you are master of your attitude, choose the positive, the constructive. Optimism is a faith that leads to success.” -Bruce Lee</Typography></Box>
                </Grid>
                <Grid item xs={4} height={180}>
                    <></>
                </Grid>
                <Grid item xs={6} sx={{ backgroundColor: 'rgb(14, 44, 55, .7)' }}>
                    <Typography variant={'h4'}>About Me:</Typography>
                    <Typography variant={'body1'}>
                        Like many folks, I come to the software field through an unconventional method. My career after high school started in the Marine Corps. That was great for providing many of the building blocks that make me a better person today.
                        Beyond all of the important skills I learned, the military gave me a path to a career in the software industry.
                        <br />
                        <br />
                        I did not know I wanted to be a software engineer right after my service was completed, but during the ensuing years I always found a way to
                        incorporate some type of software design into my roles. Whether it was becoming the primary SalesForce admin at NatureWorks or building an automated order form during my window sales career. I have always found a lot of joy in using technology to improve
                        my life and the people's lives around me.
                        <br />
                        <br />
                        After ignoring the elephant in the room for many years, it dawned on me that the VETTEC program through the Veteran Affairs was an opportunity I could not pass up.
                        I am so thankful that with the VA's help I was able change careers into something that I both find really enjoyable and have a talent for.
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <></>
                </Grid>
            </Grid>
        </Container>
    )
}
