import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';
import personalInformations from '../../personalIformations.json';
import Text from './TextStyle';

export default function Project(props){

    return (
        <Grid
            container
        >
            <Grid
                item
                xs={12}
                
            >
                {props.title}
            </Grid>
            <Grid
                item
                xs={12}
            >
                {props.description}
            </Grid>
        </Grid>

    )
}