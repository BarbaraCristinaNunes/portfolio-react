import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';
import personalInformations from '../../personalIformations.json';
import Text from './TextStyle';
import Project from './Project';
import { height, padding } from '@mui/system';
export default function Projects() {
console.log(personalInformations.projects)

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
                    {
                        personalInformations.projects.map((project) => {
                            return (
                                <>
                                    <Grid
                                        item
                                        xs={3}
                                        sx={{
                                            marginBottom: 5,
                                            padding: 3
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            sx={{
                                                width: "100%",
                                                height: "auto",
                                            }}
                                            alt={project.title}
                                            src={project.img}
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        xs={3}
                                        sx={{
                                            marginBottom: 5,
                                            padding: 3
                                        }} 
                                    >
                                        <Text 
                                            title={project.title}
                                        />
                                        <Text 
                                            paragraph={project.description}
                                            aligment="justify"
                                            time={1}
                                            fontWeight="regular"
                                        />
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