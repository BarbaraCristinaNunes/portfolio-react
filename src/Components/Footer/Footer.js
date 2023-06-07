import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import { Button, Grid, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Obfuscate from 'react-obfuscate';

export default function FixedBottomNavigation() {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    function getCurrentDimension(){
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }
    
    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);
    
    
        return(() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, [screenSize])

    return (
        <Box sx={{ display: 'flex', marginTop: 10 }}>
            <CssBaseline />
            <Paper 
                sx={{ position: 'static', width: "100%", height: "auto", padding: 2}} 
                elevation={7} 
                square={true} 
            
            >
                <Grid
                    container
                    direction="row"
                    alignItems="baseline"
                    justifyContent="space-between"
                >
                    
                    <Grid
                        item
                        lg={1}
                        md={6}
                        xs={12}
                        sx={{marginTop: 2}}
                    >
                        
                        <Typography 
                            variant='h3' 
                            sx={{
                                backgroundImage: "linear-gradient(-225deg, #231557 0%, #44107a 29%, #ff1361 67%, #fff800 100%)",
                                backgroundSize: "auto auto",
                                color: "#fff",
                                backgroundClip: "text",
                                textFillColor: "transparent",
                                marginRight: 2,
                                ...(screenSize.width > 899? {textAlign: "right"} : {textAlign: "center"}),                                
                            }}
                        >
                            BN
                        </Typography>
                    </Grid>                  
                    
                    <Grid
                        item
                        lg={2}
                        md={6}
                        xs={12}
                        sx={{marginTop: 2}}
                    >
                        <Typography 
                            variant='h6' 
                            sx={{
                                color: "#231557", 
                                ...(screenSize.width  > 899 ? {textAlign: "left"} : {textAlign: "center"}),
                            }}
                        >
                            Software Web Developer
                        </Typography>
                    </Grid>  
                    <Grid
                        item
                        lg={4}
                        md={6}
                        xs={12}
                        sx={{marginTop: 2}}
                    />
                    <Grid
                        item
                        lg={4}
                        md={12}
                        xs={12}
                        sx={{marginTop: 2}}
                    >
                        <List>
                            <ListItem sx={{justifyContent: "center"}}>
                                
                                <Button
                                    sx={{
                                        color: "#231557",
                                        cursor: "text",
                                        fontSize: "1em",
                                        fontWeight: "bold",
                                        "&:hover": {
                                            backgroundColor: "transparent"
                                        }}
                                    }
                                    size="large"
                                >
                                    Find me at
                                </Button>
                            </ListItem>
                            <ListItem sx={{justifyContent: "center"}}>
                                <IconButton
                                    href="https://www.linkedin.com/in/barbara-cristina-nunes-40b57063/"
                                    target="_blan"
                                >
                                    <Avatar 
                                        alt="Linkedin" 
                                        src={`img/linkedIn_logo_initials.png`}
                                        variant="square"
                                        sx={{ width: 24, height: 24 }}
                                    />
                                </IconButton >
                                <IconButton
                                    href="https://github.com/BarbaraCristinaNunes"
                                    target="_blan"
                                >
                                    <Avatar 
                                        alt="GitHub" 
                                        src={`img/github.png`}
                                        variant="square"
                                        sx={{ width: 24, height: 24 }}
                                    />
                                </IconButton >
                                
                                <IconButton>
                                    <Obfuscate
                                        email="nunes.barbarac@gmail.com"
                                    >
                                    <MailOutlineIcon 
                                        alt="email"
                                        headers={{
                                            subject: "",
                                            body: ""
                                        }} 
                                        sx={{ color: "#231557", fontSize: "1.2em" }}
                                    />
                                    </Obfuscate>
                                </IconButton >
                                
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid
                        item
                        lg={12}
                        md={12}
                        xs={12}
                    >
                        <Divider sx={{color: "#231557", marginBottom: 2}} />
                        <Typography
                            sx={{color: "#231557"}}
                        >
                            Barbara Nunes © 2023. All rights reserved.
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}