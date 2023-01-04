import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';
import personalInformations from '../../personalIformations.json';
import ProjectCard from './ProjectCard';

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
                    justifyContent="space-around"
                    alignItems="flex-start"
                    style={{textAlign: "center"}}    
                >
                    {
                        personalInformations.projects.map((project) => {
                            return (
                                <Grid
                                    item
                                    xs={4}
                                >
                                    <ProjectCard 
                                        title={project.title}
                                        description={project.description}
                                        image={project.img}
                                        page={project.page}
                                        repository={project.repository}
                                        technologies={project.technologies}
                                    />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Paper> 
        </Box>
    );
}