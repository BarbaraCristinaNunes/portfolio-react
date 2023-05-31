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

const CustomizedParagraph = styled(Typography)(({ seconds }) => ({
    animation: `paragraphTransition ${seconds + 1}s`,
    fontSize: 12.5,
    color: "#231557",
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
    return (
        <ThemeProvider theme={theme}>
            <CustomizedParagraph 
                align={props.aligment}
                paragraph={true}
                variant="overline"
                fontWeight={props.fontWeight}
                seconds={props.time}
            >
                {props.paragraph}
            </CustomizedParagraph>
        </ThemeProvider>
    )
}