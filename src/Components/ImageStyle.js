import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const CustomizedImage = styled(Box)(({ theme }) => ({
    width: 50, 
    margin: 10,
    animation: "titleTransition 1.7s",
    "@keyframes titleTransition": {
        "from": {
            opacity: 0,
        },
        "to": {
            opacity: 1,
        }
    }
}));

export default function Image (props) {
    // console.log("vixi", props.time)
    return (
        <CustomizedImage
            component="img"
            alt={props.alt} 
            src={props.src}
        />

    )
}