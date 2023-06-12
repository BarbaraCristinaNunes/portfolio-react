import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Image from '../Shared/ImageStyle';
import Text from '../Shared/TextStyle';
import { Grid } from '@mui/material';

export default function AlignItemsList(props) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {
            props.skills.map((skill) => {
                return(
                    <ListItem alignItems="center" key={`about${skill}`}>
                        <Grid
                            container
                            direction="row"
                        >
                            <Grid 
                                item
                                lg={6}
                                md={6}
                                xs={12}
                            >
                                <ListItemAvatar sx={{marginRight: 5}}>
                                    {
                                        skill.toLowerCase() === "material ui" ?
                                            <Image 
                                                alt={skill} 
                                                src={`img/skills/mui.png`}
                                                variant="square"
                                            />
                                        :
                                            <Image 
                                                alt={skill} 
                                                src={`img/skills/${skill.toLowerCase()}.png`}
                                                variant="square"
                                            />
                                    }
                                </ListItemAvatar>
                            </Grid>
                            <Grid 
                                item
                                lg={6}
                                md={6}
                                xs={12}
                            >
                                <ListItemText
                                    primary={
                                        skill === "Rails" ?
                                            <React.Fragment>
                                                <Text
                                                    paragraph="Ruby on Rails"
                                                    aligment="justify"
                                                    fontWeight="bold"
                                                    time={0}
                                                /> 
                                            </React.Fragment>
                                        :
                                            <React.Fragment>
                                                <Text
                                                    paragraph={skill}
                                                    aligment="justify"
                                                    fontWeight="bold"
                                                    time={0}
                                                /> 
                                            </React.Fragment>
                                    }
                                /> 
                            </Grid>
                        </Grid>
                    </ListItem>
                )
            })
        }
    </List>
  );
}