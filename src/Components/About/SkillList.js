import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Image from '../Shared/ImageStyle';
import Text from '../Shared/TextStyle';
import Title from '../Shared/TitleStyle';

export default function AlignItemsList(props) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {
            props.skills.map((skill) => {
                return(
                    <ListItem alignItems="center" key={`about${skill}`}>
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
                    </ListItem>
                )
            })
        }
    </List>
  );
}