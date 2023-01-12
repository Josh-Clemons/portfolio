import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Link, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';

export const MyProjects: React.FC = () => {
    const [expandedLevelOne, setExpandedLevelOne] = React.useState<string | false>(false);
    const [expandedLevelTwo, setExpandedLevelTwo] = React.useState<string | false>(false);

    const handleAccordionChangeLevelOne = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpandedLevelOne(newExpanded ? panel : false)
    };
    const handleAccordionChangeLevelTwo = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpandedLevelTwo(newExpanded ? panel : false)
    };

    return (
        <Box sx={{ mt: 35 }}>
            <Grid container spacing={2}>

                <Grid item xs={6} mt={10} sx={{ backgroundColor: 'rgb(1, 35, 80, .7)' }}>
                    <Box p={1}>
                        <Typography variant='h4' p={1}><u>My Projects:</u></Typography>
                        {/* First Level Accordion */}
                        <Accordion expanded={expandedLevelOne === 'gridIronAccordion'} onChange={handleAccordionChangeLevelOne('gridIronAccordion')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                id="gridIronAccordion"
                                sx={{ backgroundColor: 'rgb(1, 35, 80, .9)', color: 'white' }}
                            >
                                <Typography variant="body1">Grid Iron Pickem</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ backgroundColor: 'rgb(1, 35, 80, .9)', color: 'white', overflow: 'auto' }}>
                                <Typography variant={'body1'} p={1} mt={-2}>
                                    Grid Iron Pickem is a full-stack mobile first web application where users pick NFL game winners in a competition against their friends.
                                    This app was designed to replace a process that was managed for over 15 years with spreadsheets sent over email.
                                    <br />
                                </Typography>
                                {/* second level accordion starts here */}
                                <Accordion expanded={expandedLevelTwo === 'gridIronLinks'} onChange={handleAccordionChangeLevelTwo('gridIronLinks')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                        id="gridIronLinks"
                                        sx={{ backgroundColor: 'rgb(1, 35, 80,.85)', color: 'white' }}
                                    >
                                        <Typography variant="body1" sx={{ width: '70%' }}>Project Links</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ backgroundColor: 'rgb(1, 35, 80,.85)', color: 'white' }}>
                                        <Typography variant={'body1'} sx={{ mt: -2 }}>
                                            <ul>
                                                <li><i>Coming Soon: Hosted online for the 2023 NFL Season</i></li>
                                                <li><Link href='https://github.com/Josh-Clemons/GridIron-Pickem' sx={{ color: 'white', '&:visited': { color: 'darkgrey' } }}>GitHub Link</Link></li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                {/* second level accordion starts here */}
                                <Accordion expanded={expandedLevelTwo === 'gridIronTech'} onChange={handleAccordionChangeLevelTwo('gridIronTech')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                        id="gridIronTech"
                                        sx={{ backgroundColor: 'rgb(1, 35, 80,.85)', color: 'white' }}
                                    >
                                        <Typography variant="body1" sx={{ width: '70%' }}>Technologies Used</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ backgroundColor: 'rgb(1, 35, 80,.85)', color: 'white' }}>
                                        <Typography variant={'body1'} sx={{ mt: -2 }}>

                                            <ul>
                                                <li>React.js</li>
                                                <li>TypeScript</li>
                                                <li>Redux/Saga</li>
                                                <li>Express.js</li>
                                                <li>Node.js</li>
                                                <li>SQL</li>
                                                <li>Material UI</li>
                                                <li>NodeMailer</li>
                                                <li>and many more....</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                {/* second level accordion starts here */}
                                <Accordion expanded={expandedLevelTwo === 'gridIronCode'} onChange={handleAccordionChangeLevelTwo('gridIronCode')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                        id="gridIronCode"
                                        sx={{ backgroundColor: 'rgb(1, 35, 80,.85)', color: 'white' }}
                                    >
                                        <Typography variant="body1" sx={{ width: '70%' }}>Code Screenshot</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ backgroundColor: 'rgb(1, 35, 80,.85)', color: 'white' }}>
                                        <img src='src/assets/grid_iron_code_example.png' alt="Grid Iron Code Example" style={{ width: '93%' }} />
                                    </AccordionDetails>
                                </Accordion>
                            </AccordionDetails>
                        </Accordion>


                        {/* First Level Accordion */}
                        <Accordion expanded={expandedLevelOne === 'serverCalculatorAccordion'} onChange={handleAccordionChangeLevelOne('serverCalculatorAccordion')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                id="serverCalculatorAccordion"
                                sx={{ backgroundColor: 'rgb(1, 35, 80, .9)', color: 'white' }}
                            >
                                <Typography variant="body1">Getflix Movies</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ backgroundColor: 'rgb(1, 35, 80, .9)', color: 'white', maxHeight: 300, overflow: 'auto' }}>
                                <Typography variant={'body1'} p={1} mt={-2}>
                                    Getflix is an exercise to gain more familiarity with React-Redux and Redux-Sagas. The movie gallery uses a database to store information about films, then redux, saga, and REST APIs to get the information and display a detail page.
                                    <br />
                                </Typography>
                                {/* second level accordion starts here */}
                                <Accordion expanded={expandedLevelTwo === 'galleryLinks'} onChange={handleAccordionChangeLevelTwo('galleryLinks')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                        id="galleryLinks"
                                        sx={{ backgroundColor: 'rgb(1, 35, 80,.85)', color: 'white' }}
                                    >
                                        <Typography variant="body1" sx={{ width: '70%' }}>Project Links</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ backgroundColor: 'rgb(1, 35, 80,.85)', color: 'white' }}>
                                        <Typography variant={'body1'} sx={{ mt: -2 }}>
                                            <ul>
                                                <li><i>Coming Soon: Hosted online for the 2023 NFL Season</i></li>
                                                <li><Link href='https://github.com/Josh-Clemons/GridIron-Pickem' sx={{ color: 'white', '&:visited': { color: 'darkgrey' } }}>GitHub Link</Link></li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                {/* second level accordion starts here */}
                                <Accordion expanded={expandedLevelTwo === 'galleryTech'} onChange={handleAccordionChangeLevelTwo('galleryTech')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                        id="galleryTech"
                                        sx={{ backgroundColor: 'rgb(1, 35, 80,.85)', color: 'white' }}
                                    >
                                        <Typography variant="body1" sx={{ width: '70%' }}>Technologies Used</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ backgroundColor: 'rgb(1, 35, 80,.85)', color: 'white' }}>
                                        <Typography variant={'body1'} sx={{ mt: -2 }}>
                                            <ul>
                                                <li>React.js</li>
                                                <li>JavaScript</li>
                                                <li>Redux/Saga</li>
                                                <li>Express.js</li>
                                                <li>Node.js</li>
                                                <li>PostgreSQL</li>
                                                <li>and many more....</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                {/* second level accordion starts here */}
                                <Accordion expanded={expandedLevelTwo === 'galleryCode'} onChange={handleAccordionChangeLevelTwo('galleryCode')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                        id="galleryCode"
                                        sx={{ backgroundColor: 'rgb(1, 35, 80,.85)', color: 'white' }}
                                    >
                                        <Typography variant="body1" sx={{ width: '70%' }}>Code Screenshot</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ backgroundColor: 'rgb(1, 35, 80,.85)', color: 'white' }}>
                                        <img src='src/assets/grid_iron_code_example.png' alt="Grid Iron Code Example" style={{ width: '93%' }} />
                                    </AccordionDetails>
                                </Accordion>

                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <></>
                </Grid>
                <Grid item xs={6} height={180}>
                    <></>
                </Grid>
                <Grid item xs={6} mt={10} >
                    <Box>

                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <></>
                </Grid>
            </Grid>
        </Box>
    )
}
