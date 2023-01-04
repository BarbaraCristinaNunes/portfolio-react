import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Text from './TextStyle';
import LinkIcon from '@mui/icons-material/Link';
import { Grid } from '@mui/material';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;})(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }
    ),
}));

  
export default function ProjectCard(props) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 345 }} elevation={24}>
            <CardHeader
                disableTypography={false}
                titleTypographyProps={{variant: "overline", fontWeight: "bold", fontSize: 16}}
                title={props.title}
            />
            <CardMedia
                component="img"
                // width="10px"
                // height="auto"
                image={props.image}
                alt={props.title}
            />
            <CardActions disableSpacing>
            <IconButton aria-label="GitHub" href={props.repository} target="_blank" rel="noopener noreferrer">
                <img alt="github" src="img/github.png" width="20"/>
            </IconButton>
            {   props.page? 
                    <IconButton aria-label={`${props.title} page`} href={props.page} target="_blank" rel="noopener noreferrer">
                        <LinkIcon color="secondary"/>
                    </IconButton>
                : ""
            }
            <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
            >
                <ExpandMoreIcon />
            </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="flex-start"
                    style={{textAlign: "center"}}
                >
                    <Grid
                        item
                        xs={12}
                    >
                        <Text 
                            paragraph={props.description}
                            aligment="justify"
                            // time={1}
                            fontWeight="regular"
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                    >
                        <Text 
                            paragraph="Technologies used:"
                            aligment="justify"
                            // time={1}
                            fontWeight="bold"
                        />
                    </Grid>
                    {
                        props.technologies.map((technology) => {
                            return (
                                <Grid
                                    item
                                    xs={2}
                                >
                                    <img 
                                        alt={technology.toLowerCase()} 
                                        src={`img/skills/${technology.toLowerCase()}.png`}
                                        width={50}
                                    />
                                </Grid>
                            )
                        })
                    }
                </Grid>
                
            </CardContent>
            </Collapse>
        </Card>
    );
}
