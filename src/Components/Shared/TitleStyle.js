import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
} from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const CustomizedTitle = styled(Typography)(({ theme, align }) => ({
    [theme.breakpoints.down('sm')]: {
      textAlign: "center",
    },
    [theme.breakpoints.up('md')]: {
      textAlign: "center",
    },
    [theme.breakpoints.up('md')]: {
        textAlign: align,
    },
    backgroundImage: "linear-gradient(-225deg, #231557 0%, #44107a 29%, #ff1361 67%, #fff800 100%)",
    backgroundSize: "auto auto",
    backgroundClip: "border-box",
    //backgroundSize: "200% auto",
    color: "#fff",
    backgroundClip: "text",
    textFillColor: "transparent",


    animation: "titleTransition 1.5s",
    "@keyframes titleTransition": {
        "from": {
            opacity: 0,
        },
        "to": {
            opacity: 1,
        }
    }
}));

export default function Title (props) {
    return (
        <ThemeProvider theme={theme}>
            <CustomizedTitle 
                variant={props.variant} 
                align={props.aligment}
                paragraph={true}
            >
                {props.title}
            </CustomizedTitle>
        </ThemeProvider>   
    )
}