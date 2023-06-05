import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import SkillList from './SkillList';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

const BordedAccordion = styled(Accordion)(({ theme }) => ({
    boxShadow: `0 0 6px 0 rgba(157, 96, 212, 0.5)`,
    border: `solid 2px transparent`,
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(-225deg, #231557 0%, #44107a 29%, #ff1361 67%, #fff800 100%)`,
    backgroundOrigin: "border-box",
    backgroundClip: "content-box, border-box",
    boxShadow: "2px 1000px 1px #fff inset",    
    "&:hover": {
        border: `solid 3px transparent`,
    },
    animation: "moveTransition 2s",
    
    "@keyframes moveTransition": {
        "from":  {top: -30, opacity: 0},
        "to":  {top: 0, opacity: 1},

      }
}));

export default function CustomizedAccordion(props) {
    
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (

        <Grid
            item
            lg={3}
            md={5}
            xs={12}
            sx={{marginTop: 5}}
        >
            
            <BordedAccordion 
                expanded={expanded === props.panel} 
                onChange={handleChange(props.panel)}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon 
                        sx={{
                            color: "#231557",
                            backgroundColor: "#ff1361",
                            borderRadius: "50%",
                            fontSize: "1.875em"
                        }}
                    />}
                    aria-controls={`${props.panel}bh-content`}
                    id={`${props.panel}bh-header`}
                    
                >
                <Typography
                    fontWeight="bold"
                    variant="h6"
                    aligment="center"
                    sx={{color: "#231557"}}
                >
                    {props.title}
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <SkillList skills={props.skills}/>
                </AccordionDetails>
            </BordedAccordion>
        </Grid>
                   
    );
}