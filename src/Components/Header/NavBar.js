import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import NavBarButton from './ButtonStyle';
import Logo from '../Shared/Logo'
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Typography } from '@mui/material';

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  backgroundColor: "white",
  transition: "0.5s",
  opacity: 0.6,
  "&:hover": {
    opacity: 1,
  },
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: "0%",
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }), 
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const titles = [
    "About",
    "Experience",
    "Projects",
  ];
  const drawerWidth = 240;
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
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
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="static" open={open}>
        <Toolbar>
          {
            screenSize.width < 768 ?
            <>
              <IconButton
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                fontSize="large"
                sx={{ 
                  mr: 2, 
                  color: "#231557", 
                  "&:hover": {
                    color: "#ff1361",
                    backgroundColor: "#231557"
                  },
                  ...(open && { display: 'none' }) }}
              >
                <MenuIcon />
              </IconButton>
              <Logo title="BN"/>
              <Typography variant='h5' sx={{color: "#231557", marginLeft: 2}}>
                Software Developer
              </Typography>
            </>
            :
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="flex-start"
            >
              <Logo title="BN"/>
              <Typography variant='h5' sx={{color: "#231557", marginLeft: 2, marginRight: 15}}>
                Software Developer
              </Typography>
              {
                titles.map((title, index) => {
                  return (
                    <Grid 
                      item
                      key={`navbar${title}${index}`} 
                      md={2}
                      lg={2}
                    >
                      <NavBarButton 
                        title= {title} 
                        index={index}
                        setOpen={(v) => {setOpen(v)}}
                      />
                    </Grid>
                  )
                })
              }

            </Grid>
          }
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="temporary"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Grid
            container 
            direction="row"
            alignItems="center"
            justifyContent="flex-start"
            style={{textAlign: "center"}}
          >
            <Grid
              item
              xs={8}
              md={8}
              lg={8}
              paddingLeft={3}
            >
              <Logo title="BN" />
            </Grid>

            <Grid
              item
              xs={2}
              md={2}
              lg={2}
            >
              <IconButton 
                onClick={handleDrawerClose}
                sx={{ 
                  mr: 2, 
                  color: "#231557", 
                  "&:hover": {
                    color: "#ff1361",
                    backgroundColor: "#231557"
                  }
                }}
              >
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </Grid>
          </Grid>
          
          
        </DrawerHeader>
        <Divider />
        <Grid 
          container 
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          style={{textAlign: "center"}}
        >
          {
            titles.map((title, index) => {
              return (
                <Grid 
                  item
                  key={`${title}${index}`} 
                  xs={12}
                  md={12}
                  lg={12}
                  margin={2}
                >
                  <NavBarButton 
                    title= {title} 
                    index={index}
                    setOpen={(v) => {setOpen(v)}}
                  />
                </Grid>
              )
            })
          }
        </Grid>
      </Drawer>
    </Box>
  );
}