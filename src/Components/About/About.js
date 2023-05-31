import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import personalInformations from '../../personalIformations.json';
import Text from '../Shared/TextStyle';
import Title from '../Shared/TitleStyle';

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
                        lg={3}
                        md={12}
                        xs={12} 
                    >
                        <Title title={personalInformations.title} variant="h1" aligment="right"/>
                    </Grid>
                    <Grid 
                        item 
                        lg={8}
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
            </Paper> 
        </Box>
    );
}