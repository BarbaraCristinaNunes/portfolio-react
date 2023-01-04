import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';
import personalInformations from '../../personalIformations.json';
import Text from './TextStyle';

export default function About() {
// console.log(personalInformations.experiences[0].technologies)

    return (
        <Box
            sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
                m: 1,
                width: "100%",
                height: "auto",
            },
            }}
        >
            <Paper
                elevation={7} 
                square={true} 
                sx={{padding: 10}}
                // variant="outlined"
            >
                <Grid 
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                    style={{textAlign: "center"}}    
                >
                    {
                        personalInformations.experiences.map((experience) => {
                            return(
                                <>
                                    <Grid
                                        item
                                        xs={3}
                                        sx={{padding: 5}}
                                    >
                                        <Text 
                                            title={experience.instituition}
                                            link={experience.link}
                                        />
                                        <Text 
                                            variant="overline"
                                            paragraph={`${experience.start} - ${experience.end}`}
                                            aligment="center"
                                            time={3}
                                        />
                                    </Grid>
                                    <Grid
                                        xs={9} 
                                        sx={{padding: 5}}
                                    >
                                        <Text
                                            fontWeight="bold"
                                            time={0}
                                            // fontSize={16}
                                            title={experience.title}
                                            aligment="center"
                                        />
                                        {
                                            experience.description.map((paragraph, index) =>{
                                                return (
                                                    <Text 
                                                        paragraph={paragraph} 
                                                        aligment="justify"
                                                        time={index}
                                                        fontWeight="regular"
                                                    />
                                                )
                                            })
                                        }
                                        <Text
                                            fontWeight="bold"
                                            time={0}
                                            fontSize={16}
                                            paragraph="Technologies learned"
                                            aligment="center"
                                        />
                                        {
                                            experience.technologies.map((technology, index) =>{
                                                if(technology.toLowerCase() === "material ui"){
                                                    return (
                                                        <img 
                                                            alt={technology.toLowerCase()} 
                                                            src={`img/skills/mui.png`}
                                                            style={{width: 50, margin: 10}}
                                                        />
                                                    )
                                                }
                                                return (
                                                        <img 
                                                            alt={technology.toLowerCase()} 
                                                            src={`img/skills/${technology.toLowerCase()}.png`}
                                                            style={{width: 50, margin: 10}}
                                                        />
                                                )
                                            })
                                        }
                                    </Grid>
                                </>
                            )
                        })
                    }
                </Grid>
            </Paper> 
        </Box>
    );
}