import { Box, Container, Grid, Link, Typography } from '@mui/material'
import React from 'react'

export const MyProjects: React.FC = () => {
    return (
        <Box sx={{ mt: 5 }}>
            <Grid container spacing={2}>
                
                <Grid item xs={6} mt={10} sx={{ backgroundColor: 'rgb(14, 44, 55, .7)' }}>
                    <Typography variant='h4' p={1}><u>My Projects:</u></Typography>
                    <Typography variant='h5' mt={3} mb={1} p={1}><i>Grid Iron Pickem</i></Typography>
                    <Typography variant='body1' p={1}>
                        Grid Iron Pickem is a mobile first web application where users pick NFL game winners in a competition against their friends.
                        This app was designed to replace a process that was managed for over 15 years with spreadsheets sent over email.
                        <br/>
                        <br/>
                        <i>Coming Soon: Hosted online for the 2023 NFL Season</i>
                        <br/>
                        <br/>
                        For this project I gave myself the stretch-goal of learning and writing it in TypeScript.
                        <br/>
                        <br/>
                        Grid Iron Pickem is full stack, using the following technologies: React.js, TypeScript, Redux, Saga, Express, Node.js, Postico, PostgreSQL, Passport, Material UI, Nodemailer, and many others.
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <></>
                </Grid>
                <Grid item xs={6} height={180}>
                    <></>
                </Grid>
                <Grid item xs={6} height={180} mt={10} sx={{ backgroundColor: 'rgb(14, 44, 55, .7)' }}>
                    <></>
                </Grid>
                <Grid item xs={6}>
                    <></>
                </Grid>
            </Grid>
        </Box>
    )
}
