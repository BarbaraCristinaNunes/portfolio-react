import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const CustomizedTitle = styled(Typography)(({ theme }) => ({
    animation: "titleTransition 1.5s",
    "@keyframes titleTransition": {
        "from": {
            opacity: 0,
            transform: "translate3d(-50px, 0, 0)",
        },
        "to": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
        }
    }
}));

const CustomizedParagraph = styled(Typography)(({ seconds }) => ({
    animation: `paragraphTransition ${seconds + 1}s`,
    fontSize: 12.5,
    "@keyframes paragraphTransition": {
        "from": {
            opacity: 0,
        },
        "to": {
            opacity: 1,
        }
    }
}));

export default function Text (props) {
    // console.log("vixi", props.time)
    return (
        
        props.title?
            <CustomizedTitle 
            variant='h1' 
            align="right"
            paragraph="true"
            >
                {props.title}
            </CustomizedTitle>
        :
        props.paragraph?
            <CustomizedParagraph 
                align="justify"
                paragraph="true"
                variant="overline"
                fontWeight="bold"
                seconds={props.time}
            >
                {props.paragraph}
            </CustomizedParagraph>
        : ""
        
    )
}