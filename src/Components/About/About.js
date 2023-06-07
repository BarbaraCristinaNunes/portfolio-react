import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import personalInformations from '../../personalIformations.json';
import Text from '../Shared/TextStyle';
import Title from '../Shared/TitleStyle';
import CustomizedAccordion from './Accordion';

export default function About() {

    return (
        <Box
            sx={{
                
                display: 'flex',
                flexWrap: 'wrap',
                marginTop: 10,
                '& > :not(style)': {
                    m: "auto",
                    width: "90%",
                    height: "auto",
                },
            }}
        >
            <Paper
                elevation={7} 
                square={true} 
                sx={{padding: 6}}
            >
                <Grid 
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    style={{textAlign: "center"}}    
                >
                    <Grid 
                        item 
                        lg={4}
                        md={12}
                        xs={12} 
                    >
                        <Title title={personalInformations.title} variant="h1" aligment="right"/>
                    </Grid>
                    <Grid 
                        item 
                        lg={7}
                        md={12}
                        xs={12} 
                    >
                        {
                            personalInformations.about.map((paragraph, index) => {
                                return (
                                    <Text
                                        key={`about${index}`}
                                        paragraph={paragraph}
                                        time={index}
                                        aligment="justify"
                                        fontWeight="bold"
                                    /> 
                                )
                            })
                        }
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                    style={{textAlign: "center", marginTop: 100}}
                >
                <Grid
                        item
                        lg={12}
                        md={12}
                        xs={12}
                    >
                        <Title
                            fontWeight="bold"
                            time={0}
                            title="Main technical skills"
                            variant="h4"
                            aligment="center"
                        />
                    </Grid>
                    <CustomizedAccordion 
                        title="Frontend" 
                        skills={personalInformations.frontendskills}
                        panel="panel1"
                    />
                    <CustomizedAccordion 
                        title="Backend" 
                        skills={personalInformations.backendskills}
                        panel="panel2"
                    />
                    <CustomizedAccordion 
                        title="Others" 
                        skills={personalInformations.othersskills}
                        panel="panel3"
                    />
                </Grid>
            </Paper> 
        </Box>
    );
}