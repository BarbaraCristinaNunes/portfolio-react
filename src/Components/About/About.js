import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';
import personalInformations from '../../personalIformations.json';
import Text from './TextStyle';

export default function About() {
    // let data = require("../../../public");
    // console.log("ola", personalInformations.title)
    // const title = Object.assign([], personalInformations.title.split(''));

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
                    alignItems="center"
                    style={{textAlign: "center"}}    
                >
                    <Grid 
                        item 
                        xs={3} 
                        // sx={{backgroundColor: "blue"}}
                    >
                        <Text title={personalInformations.title} />
                    </Grid>
                    <Grid 
                        item 
                        xs={8} 
                        sx={{padding: 5}}
                    >
                        {
                            personalInformations.about.map((paragraph, index) => {
                                return (
                                    <Text 
                                        key={`paragraph${index}`} 
                                        paragraph={paragraph}
                                        time={index}
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