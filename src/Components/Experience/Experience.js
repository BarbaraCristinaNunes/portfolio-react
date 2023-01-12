import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import personalInformations from '../../personalIformations.json';
import Text from '../TextStyle';
import Image from '../ImageStyle';

export default function About() {

    return (
        <Box
            sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
                m: 1,
                width: "90%",
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
                    alignItems="baseline"
                    style={{textAlign: "center"}}    
                >
                    {
                        personalInformations.experiences.map((experience) => {
                            return(
                                <>
                                    <Grid
                                        item
                                        lg={3}
                                        // md={12}
                                        xs={12}
                                        // sx={{padding: 5}}
                                    >
                                        <Text 
                                            title={experience.instituition}
                                            link={experience.link}
                                            variant="h4"
                                        />
                                        <Text 
                                            variant="overline"
                                            paragraph={`${experience.start} - ${experience.end}`}
                                            aligment="center"
                                            time={3}
                                        />
                                    </Grid>
                                    <Grid
                                        lg={9} 
                                        // md={12}
                                        xs={12}
                                        sx={{paddingBottom: 5}}
                                    >
                                        <Text
                                            fontWeight="bold"
                                            time={0}
                                            title={experience.title}
                                            variant="h4"
                                            aligment="center"
                                        />
                                        {
                                            experience.description.map((paragraph, index) =>{
                                                return (
                                                    <Text 
                                                        key={`description${index}`}
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
                                                        <Image 
                                                            key={`technology${index}`}
                                                            alt={technology.toLowerCase()} 
                                                            src={`img/skills/mui.png`}
                                                        />
                                                    )
                                                }
                                                return (
                                                        <Image 
                                                            key={`technology${index}`}
                                                            alt={technology.toLowerCase()} 
                                                            src={`img/skills/${technology.toLowerCase()}.png`}
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