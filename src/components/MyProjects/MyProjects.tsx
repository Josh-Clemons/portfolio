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
                                <Typography variant="body1"><i>Solo Project: </i>Grid Iron Pickem</Typography>
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
                                                <li><Link href='https://github.com/Josh-Clemons/GridIron-Pickem' target="_blank" sx={{ color: 'white', '&:visited': { color: 'darkgrey' } }}>GitHub Link</Link></li>
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
                                                <li>and more....</li>
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
                        {/* <Accordion expanded={expandedLevelOne === 'clientAccordion'} onChange={handleAccordionChangeLevelOne('clientAccordion')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                id="clientAccordion"
                                sx={{ backgroundColor: 'rgb(1, 35, 80, .9)', color: 'white' }}
                            >
                                <Typography variant="body1"><i>Client Project: </i>Coming Soon</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ backgroundColor: 'rgb(1, 35, 80, .9)', color: 'white', overflow: 'auto' }}>
                                <Typography variant={'body1'} p={1} mt={-2}>
                                    Client Project Coming Soon
                                    <br />
                                </Typography> */}
                        {/* second level accordion starts here */}
                        {/* <Accordion expanded={expandedLevelTwo === 'gridIronLinks'} onChange={handleAccordionChangeLevelTwo('gridIronLinks')}>
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
                                                <li><Link href='https://github.com/Josh-Clemons/GridIron-Pickem' target="_blank" sx={{ color: 'white', '&:visited': { color: 'darkgrey' } }}>GitHub Link</Link></li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion> */}
                        {/* second level accordion starts here */}
                        {/* <Accordion expanded={expandedLevelTwo === 'gridIronTech'} onChange={handleAccordionChangeLevelTwo('gridIronTech')}>
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
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion> */}
                        {/* second level accordion starts here */}
                        {/* <Accordion expanded={expandedLevelTwo === 'gridIronCode'} onChange={handleAccordionChangeLevelTwo('gridIronCode')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                        id="gridIronCode"
                                        sx={{ backgroundColor: 'rgb(1, 35, 80,.85)', color: 'white' }}
                                    >
                                        <Typography variant="body1" sx={{ width: '70%' }}>Code Screenshot</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ backgroundColor: 'rgb(1, 35, 80,.85)', color: 'white' }}>
                                    </AccordionDetails>
                                </Accordion>
                            </AccordionDetails>
                        </Accordion> */}


                        {/* First Level Accordion */}
                        <Accordion expanded={expandedLevelOne === 'otherProjectsAccordion'} onChange={handleAccordionChangeLevelOne('otherProjectsAccordion')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                id="otherProjectsAccordion"
                                sx={{ backgroundColor: 'rgb(1, 35, 80, .9)', color: 'white' }}
                            >
                                <Typography variant="body1">Other Prime Projects</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ backgroundColor: 'rgb(1, 35, 80, .9)', color: 'white', overflow: 'auto' }}>
                                <Typography variant={'body1'} p={1} mt={-2}>
                                    These projects were completed in 2-day sprints (weekend challenges) with the intent of building/practicing skills required for a full-stack engineer.
                                    <br />
                                </Typography>
                                {/* second level accordion starts here */}
                                <Accordion expanded={expandedLevelTwo === 'serverCalculator'} onChange={handleAccordionChangeLevelTwo('serverCalculator')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                        id="serverCalculator"
                                        sx={{ backgroundColor: 'rgb(1, 35, 80,.85)', color: 'white' }}
                                    >
                                        <Typography variant="body1" sx={{ width: '70%' }}>Sever Side Calculator</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ backgroundColor: 'rgb(1, 35, 80,.85)', color: 'white' }}>
                                        <Typography variant={'body1'} sx={{ mt: -1 }}>
                                            Simple calculator program to practice REST APIs using:
                                            <br />
                                            <ul style={{ marginTop: -1, marginBottom: -1 }}>
                                                <li>jQuery</li>
                                                <li>Express</li>
                                                <li>Node</li>
                                                <li>HTML/CSS/JavaScript</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                {/* second level accordion starts here */}
                                <Accordion expanded={expandedLevelTwo === 'taskList'} onChange={handleAccordionChangeLevelTwo('taskList')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                        id="taskList"
                                        sx={{ backgroundColor: 'rgb(1, 35, 80,.85)', color: 'white' }}
                                    >
                                        <Typography variant="body1" sx={{ width: '70%' }}>Task List</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ backgroundColor: 'rgb(1, 35, 80,.85)', color: 'white' }}>
                                        <Typography variant={'body1'} sx={{ mt: -1 }}>
                                            Everyone's favorite task list exercise. This project holds a couple of milestones for me, the first to use a database and the first to be hosted online.
                                            <br />
                                            https://github.com/Josh-Clemons/weekend-sql-to-do-list
                                            <br />
                                            <ul style={{ marginTop: -1, marginBottom: -1 }}>
                                                <li>PostgreSQL</li>
                                                <li>Express</li>
                                                <li>Node</li>
                                                <li>Bootstrap</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                {/* second level accordion starts here */}
                                <Accordion expanded={expandedLevelTwo === 'reactGallery'} onChange={handleAccordionChangeLevelTwo('reactGallery')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                        id="reactGallery"
                                        sx={{ backgroundColor: 'rgb(1, 35, 80,.85)', color: 'white' }}
                                    >
                                        <Typography variant="body1" sx={{ width: '70%' }}>React Photo-Gallery</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ backgroundColor: 'rgb(1, 35, 80,.85)', color: 'white' }}>
                                        <Typography variant={'body1'} sx={{ mt: -1 }}>
                                            This photo gallery uses React.js and provides practice for local state, hooks, and a database to hold the information.
                                            <br />
                                            https://github.com/Josh-Clemons/weekend-react-gallery
                                            <br />
                                            <ul style={{ marginTop: -1, marginBottom: -1 }}>
                                                <li>React</li>
                                                <li>React-Router</li>
                                                <li>Express</li>
                                                <li>Node</li>
                                                <li>Material UI</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                {/* second level accordion starts here */}
                                <Accordion expanded={expandedLevelTwo === 'movieSaga'} onChange={handleAccordionChangeLevelTwo('movieSaga')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                        id="movieSaga"
                                        sx={{ backgroundColor: 'rgb(1, 35, 80,.85)', color: 'white' }}
                                    >
                                        <Typography variant="body1" sx={{ width: '70%' }}>Josh's Getflix</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ backgroundColor: 'rgb(1, 35, 80,.85)', color: 'white' }}>
                                        <Typography variant={'body1'} sx={{ mt: -1 }}>
                                            Getflix is a project designed to practice using React-Saga, the event-state-render cycle, and React-Router for detail page views.
                                            <br />
                                            <ul style={{ marginTop: -1, marginBottom: -1 }}>
                                                <li>React</li>
                                                <li>React-Router</li>
                                                <li>React-Saga</li>
                                                <li>Express</li>
                                                <li>Node</li>
                                                <li>Material UI</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </AccordionDetails>
                        </Accordion>


                        {/* First Level Accordion */}
                        <Accordion expanded={expandedLevelOne === 'personalProjectsAccordion'} onChange={handleAccordionChangeLevelOne('personalProjectsAccordion')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                id="personalProjectsAccordion"
                                sx={{ backgroundColor: 'rgb(1, 35, 80, .9)', color: 'white' }}
                            >
                                <Typography variant="body1">Personal Projects</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ backgroundColor: 'rgb(1, 35, 80, .9)', color: 'white', overflow: 'auto' }}>
                                <Typography variant={'body1'} p={1} mt={-2}>
                                    I just love to create stuff. From metal fabrication to cooking, it all brings me joy. Here are a few non-programming projects I have done.
                                    <br />
                                </Typography>
                                {/* second level accordion starts here */}
                                <Accordion expanded={expandedLevelTwo === 'tanya'} onChange={handleAccordionChangeLevelTwo('tanya')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                        id="tanya"
                                        sx={{ backgroundColor: 'rgb(1, 35, 80,.85)', color: 'white' }}
                                    >
                                        <Typography variant="body1" sx={{ width: '70%' }}>Rock Crawler Truck</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ backgroundColor: 'rgb(1, 35, 80,.85)', color: 'white' }}>
                                        <Typography variant={'body1'} sx={{ mt: -1 }}>
                                            A 1992 Geo Tracker that I'm turning into my next off-road truck. Complete custom frame, v-8 engine, and 40" tires.
                                            <br />
                                            A few cool items about the project:
                                            <ul style={{ marginTop: -1, marginBottom: -1 }}>
                                                <li>Chevy 5.3ls engine</li>
                                                <li>Front and rear steer axles</li>
                                                <li>Custom suspension design</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                {/* second level accordion starts here */}
                                <Accordion expanded={expandedLevelTwo === 'granBoard'} onChange={handleAccordionChangeLevelTwo('granBoard')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                        id="granBoard"
                                        sx={{ backgroundColor: 'rgb(1, 35, 80,.85)', color: 'white' }}
                                    >
                                        <Typography variant="body1" sx={{ width: '70%' }}>Custom Dartboard and Case</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ backgroundColor: 'rgb(1, 35, 80,.85)', color: 'white' }}>
                                        <Typography variant={'body1'} sx={{ mt: -1 }}>
                                            Custom walnut dartboard case that holds a GranBoard and tablet.
                                            <br />
                                            <ul style={{ marginTop: -1, marginBottom: -1 }}>
                                                <li>Laser etched tribute to my dog that passed away</li>
                                                <li>Custom Lighting</li>
                                                <li>Connects to web for playing against friends</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                {/* second level accordion starts here */}
                                <Accordion expanded={expandedLevelTwo === 'cornholeTables'} onChange={handleAccordionChangeLevelTwo('cornholeTables')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                        id="cornholeTables"
                                        sx={{ backgroundColor: 'rgb(1, 35, 80,.85)', color: 'white' }}
                                    >
                                        <Typography variant="body1" sx={{ width: '70%' }}>Cornhole Score Keeper</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ backgroundColor: 'rgb(1, 35, 80,.85)', color: 'white' }}>
                                        <Typography variant={'body1'} sx={{ mt: -1 }}>
                                            I built a pair of cornhole tables to keep score and hold your beverage while playing one of the best summer games there is.
                                            <br />
                                            <ul style={{ marginTop: -1, marginBottom: -1 }}>
                                                <li>Created with random scrap metal and parts from other broken things</li>
                                                <li>Custom Paint</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                {/* second level accordion starts here */}
                                <Accordion expanded={expandedLevelTwo === 'powerWheels'} onChange={handleAccordionChangeLevelTwo('powerWheels')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                        id="powerWheels"
                                        sx={{ backgroundColor: 'rgb(1, 35, 80,.85)', color: 'white' }}
                                    >
                                        <Typography variant="body1" sx={{ width: '70%' }}>Power Wheels</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ backgroundColor: 'rgb(1, 35, 80,.85)', color: 'white' }}>
                                        <Typography variant={'body1'} sx={{ mt: -1 }}>
                                            I get a kick out of building stuff for my son. We have gone through several iterations of his powerwheels and finally had to upgrade rear-axles.
                                            <br />
                                            <ul style={{ marginTop: -1, marginBottom: -1 }}>
                                                <li>Axle came from a mobility scooter</li>
                                                <li>Custom wiring to include four 12v batteries</li>
                                                <li>My son drives it year round, winter included</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <></>
                </Grid>
                <Grid item xs={6} height={1800}>
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
