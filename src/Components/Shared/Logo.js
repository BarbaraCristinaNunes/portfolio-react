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

const CustomizedTitle = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
      textAlign: "left",
      verticalAlign: "text-bottom"
    },
    [theme.breakpoints.up('md')]: {
      textAlign: "left",
      verticalAlign: "text-bottom"
    },
    [theme.breakpoints.up('lg')]: {
        textAlign: "left",
        verticalAlign: "text-bottom"
    },
    backgroundImage: "linear-gradient(-225deg, #231557 0%, #44107a 29%, #ff1361 67%, #fff800 100%)",
    backgroundSize: "auto auto",
    backgroundClip: "border-box",
    color: "#fff",
    backgroundClip: "text",
    textFillColor: "transparent",
    paddingTop: 10
}));

export default function Title (props) {
    return (
        <ThemeProvider theme={theme}>
            <CustomizedTitle 
                variant="h3"
                paragraph={true}
            >
                {props.title}
            </CustomizedTitle>
        </ThemeProvider>   
    )
}