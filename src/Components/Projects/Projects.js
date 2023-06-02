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
                sx={{padding: 10}}
                // variant="outlined"
            >
                <Grid 
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="flex-start"
                    style={{textAlign: "center"}} 
                    spacing={4}   
                >
                    {
                        personalInformations.projects.map((project, index) => {
                            return (
                                <Grid
                                    key={`${project}${index}`}
                                    item
                                    lg={4}
                                    md={4}
                                    xs={12}
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