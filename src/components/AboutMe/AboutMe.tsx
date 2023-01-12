import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Link, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';

export const AboutMe: React.FC = () => {

    const [expandedLevelOne, setExpandedLevelOne] = React.useState<string | false>(false);
    const [expandedLevelTwo, setExpandedLevelTwo] = React.useState<string | false>(false);

    const handleAccordionChangeLevelOne = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpandedLevelOne(newExpanded ? panel : false)
    };
    const handleAccordionChangeLevelTwo = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpandedLevelTwo(newExpanded ? panel : false)
    };


    return (
        <Box>
            <Grid container spacing={2} mt={12}>
                <Grid item xs={6} height={200} pb={2} sx={{ backgroundColor: 'rgb(1, 35, 80, .9)', p: 2 }} container={true} direction='column' justifyContent={'center'} borderRadius={2}>
                    <Typography variant='h4'>Josh Clemons</Typography>
                    <Typography variant='body2'><a href="mailto:mrjoshc@gmail.com?subject=Hi Josh" style={{ color: 'white' }}>mrjoshc@gmail.com</a></Typography>
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
                <Grid item xs={12} height={120}>
                    <></>
                </Grid>
                <Grid item xs={8} height={180}>
                    {/* <Box><Typography variant={'h6'}>“Choose the positive. You have a choice, you are master of your attitude, choose the positive, the constructive. Optimism is a faith that leads to success.” -Bruce Lee</Typography></Box> */}
                </Grid>
                <Grid item xs={4} height={180}>
                    <></>
                </Grid>
                <Grid item xs={6}>
                    <></>
                </Grid>
                <Grid item xs={6} height={400}>
                    <Box p={1} sx={{ backgroundColor: 'rgb(1, 35, 80, .7)' }}>
                        <Typography variant={'h4'} p={1}><u>About Me:</u></Typography>
                        {/* First Level Accordion */}
                        <Accordion expanded={expandedLevelOne === 'whySoftwareAccordion'} onChange={handleAccordionChangeLevelOne('whySoftwareAccordion')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                id="whySoftwareAccordion"
                                sx={{ backgroundColor: 'rgb(1, 35, 80, .9)', color: 'white' }}
                            >
                                <Typography variant="body1">Why Software</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ backgroundColor: 'rgb(1, 35, 80, .9)', color: 'white', maxHeight: 300, overflow: 'auto' }}>
                                <Typography variant={'body1'} p={1}>
                                    Like many folks, I came to the software field through an unconventional method. My career after high school started in the Marine Corps. It was great for providing many of the building blocks that make me a better person today.
                                    Beyond all of the important skills I learned there, the military gave me a path to a career in the software industry.
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
                            </AccordionDetails>
                        </Accordion>


                        {/* First Level Accordion: My Experience */}
                        <Accordion expanded={expandedLevelOne === 'myExperienceAccordion'} onChange={handleAccordionChangeLevelOne('myExperienceAccordion')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                id="myExperienceAccordion"
                                sx={{ backgroundColor: 'rgb(1, 35, 80, .9)', color: 'white' }}
                            >
                                <Typography variant="body1">Experience</Typography>
                            </AccordionSummary>

                            {/* Top level accordion details here */}
                            <AccordionDetails sx={{ backgroundColor: 'rgb(1, 35, 80, .9)', color: 'white', maxHeight: 400, overflow: 'auto' }}>

                                {/* second level accordion starts here */}
                                <Accordion expanded={expandedLevelTwo === 'jobOne'} onChange={handleAccordionChangeLevelTwo('jobOne')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                        id="jobOne"
                                        sx={{ backgroundColor: 'rgb(1, 35, 80,.85)', color: 'white' }}
                                    >
                                        <Box
                                            display={'flex'}
                                            flexDirection={'row'}
                                            width={'100%'}
                                        >
                                            <Typography variant="body1" sx={{ width: '60%' }}>Prime Digital Academy</Typography>
                                            <Typography variant="body1" textAlign={'right'} sx={{ width: '40%', color: 'secondary' }}> Sep 2022 - Present</Typography>
                                        </Box>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ backgroundColor: 'rgb(1, 35, 80,.85)', color: 'white' }}>
                                        <Typography variant='h6'>Full Stack Software Engineer Student</Typography>
                                        <br />
                                        <Typography variant='body1'>Prime Digital is a full-time immersive learning program designed to equip emerging engineers with the skills needed to make an immediate contribution.</Typography>
                                        <br />
                                        <Typography variant={'body1'} sx={{ mt: -2 }}>
                                            <ul>
                                                <li>Developed and deployed a number of projects during the course, including a full-stack mobile first web application called Grid Iron Pickem.</li>
                                                <li>Gained experience with agile development methodologies and version control systems such as Git</li>
                                                <li>Worked on a number of group projects and individual exercises, demonstrating strong problem-solving and collaboration skills.</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                {/* second level accordion*/}
                                <Accordion expanded={expandedLevelTwo === 'jobTwo'} onChange={handleAccordionChangeLevelTwo('jobTwo')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                        id="jobTwo"
                                        sx={{ backgroundColor: 'rgb(1, 35, 80,.85)', color: 'white' }}
                                    >
                                        <Box
                                            display={'flex'}
                                            flexDirection={'row'}
                                            width={'100%'}
                                        >
                                            <Typography variant="body1" sx={{ width: '60%' }}>Builders FirstSource</Typography>
                                            <Typography variant="body1" textAlign={'right'} sx={{ width: '40%', color: 'secondary' }}> Jul 2019 - Jun 2022</Typography>
                                        </Box>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ backgroundColor: 'rgb(1, 35, 80,.85)', color: 'white' }}>
                                        <Typography variant='h6'>Commercial Sales Manager - Windows </Typography>
                                        <br />
                                        <Typography variant={'body1'} sx={{ mt: -2 }}>
                                            <ul>
                                                <li>Managed windows sales for commercial multi-family properties, serving as the customer’s primary point of contact beginning before the bidding process and continuing through the warrant period.</li>
                                                <li>Built and maintained relationships with key clients, resulting in increased sales and repeat business.</li>
                                                <li>Consistently exceeded sales goals, taking a business doing one million annually to over three million.</li>
                                                <li>Developed sales tools to assist in the sales process and for reporting metrics to leadership.</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                {/* second level accordion*/}
                                <Accordion expanded={expandedLevelTwo === 'jobThree'} onChange={handleAccordionChangeLevelTwo('jobThree')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                        id="jobThree"
                                        sx={{ backgroundColor: 'rgb(1, 35, 80,.85)', color: 'white' }}
                                    >
                                        <Box
                                            display={'flex'}
                                            flexDirection={'row'}
                                            width={'100%'}
                                        >
                                            <Typography variant="body1" sx={{ width: '60%' }}>NatureWorks LLC</Typography>
                                            <Typography variant="body1" textAlign={'right'} sx={{ width: '40%', color: 'secondary' }}> Nov 2013 - Jul 2019 </Typography>
                                        </Box>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ backgroundColor: 'rgb(1, 35, 80,.85)', color: 'white' }}>
                                        <Typography variant='h6'>Senior Account Specialist </Typography>
                                        <br />
                                        <Typography variant={'body1'} sx={{ mt: -2 }}>
                                            <ul>
                                                <li>Responsible for intermodal export logistics to ship containerized cargo from the central US to the Asia-Pacific and Latin America regions</li>
                                                <li>Prepared shipping documents for several different shipment and payment methods</li>
                                                <li>Regularly communicated status updates to customers and found solutions when there was a delay in the shipping process</li>
                                                <li>Served as the primary administrator for SalesForce.com (Sales Cloud)
                                                    <ul>
                                                        <li>Trained new users</li>
                                                        <li>Created reporting dashboards for leadership</li>
                                                        <li>Managed and coordinated all improvements to the environment</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                {/* second level accordion*/}
                                <Accordion expanded={expandedLevelTwo === 'jobFour'} onChange={handleAccordionChangeLevelTwo('jobFour')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                        id="jobFour"
                                        sx={{ backgroundColor: 'rgb(1, 35, 80,.85)', color: 'white' }}
                                    >
                                        <Box
                                            display={'flex'}
                                            flexDirection={'row'}
                                            width={'100%'}
                                        >
                                            <Typography variant="body1" sx={{ width: '60%' }}>Best Buy for Business</Typography>
                                            <Typography variant="body1" sx={{ color: 'secondary', width: '40%', textAlign: 'right' }}> Oct 2010 - Feb 2013 </Typography>
                                        </Box>

                                    </AccordionSummary>
                                    <AccordionDetails sx={{ backgroundColor: 'rgb(1, 35, 80,.85)', color: 'white' }}>
                                        <Typography variant='h6'>Senior Logistics Specialist </Typography>
                                        <br />
                                        <Typography variant={'body1'} sx={{ mt: -2 }}>
                                            <ul>
                                                <li>Processed sales orders and maintained the backlog for business-to-business transactions</li>
                                                <li>Supported management by delivering reports outlining performance, ensuring service level agreements are met</li>
                                                <li>Communicated emergencies, weather delays, and carrier updates to stakeholders</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </AccordionDetails>
                        </Accordion>{/* End experience accordion here */}

                        {/* First Level Accordion: My Education */}
                        <Accordion expanded={expandedLevelOne === 'educationAccordion'} onChange={handleAccordionChangeLevelOne('educationAccordion')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                id="educationAccordion"
                                sx={{ backgroundColor: 'rgb(1, 35, 80, .9)', color: 'white' }}
                            >
                                <Typography variant="body1">Education</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ backgroundColor: 'rgb(1, 35, 80, .9)', color: 'white' }}>
                                {/* second level accordion starts here */}
                                <Accordion expanded={expandedLevelTwo === 'educationOne'} onChange={handleAccordionChangeLevelTwo('educationOne')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                        id="educationOne"
                                        sx={{ backgroundColor: 'rgb(1, 35, 80,.85)', color: 'white' }}
                                    >
                                        <Typography variant="body1" sx={{ width: '70%' }}>Prime Digital Academy</Typography>
                                        <Typography variant="body1" sx={{ color: 'secondary' }}> Feb 2023</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ backgroundColor: 'rgb(1, 35, 80,.85)', color: 'white' }}>
                                        <Typography variant='h6'>Full Stack Software Engineering Certification</Typography>
                                        <br />
                                        <Typography variant={'body1'} sx={{ mt: -2 }}>
                                            <ul>
                                                <li>Prime is a fully immersive software development program teaching many modern technologies, including React, JavaScript, Git, Node.js and many more. Additionally, Prime provides public speaking practice, professional skill development, diversity, equity, inclusion, and work on real world projects.</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                {/* second level accordion starts here */}
                                <Accordion expanded={expandedLevelTwo === 'educationTwo'} onChange={handleAccordionChangeLevelTwo('educationTwo')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                        id="educationTwo"
                                        sx={{ backgroundColor: 'rgb(1, 35, 80,.85)', color: 'white' }}
                                    >
                                        <Typography variant="body1" sx={{ width: '70%' }}>U of M, Carlson School of Management</Typography>
                                        <Typography variant="body1" sx={{ color: 'secondary' }}> Aug 2008 - May 2010</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ backgroundColor: 'rgb(1, 35, 80,.85)', color: 'white' }}>
                                        <Typography variant='h6'>Entrepreneurial Management</Typography>
                                        <br />
                                        <Typography variant={'body1'} sx={{ mt: -2 }}>
                                            <ul>
                                                <li>Completed two years of course-work towards a bachelor's degree.</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
