import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import NavBarButton from './ButtonStyle';
import Logo from '../Shared/Logo'
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
//import MuiAppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AppBar from '@mui/material/AppBar';

const CustomizedAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "white",
  transition: "0.5s",
  opacity: 0.6,
  "&:hover": {
    opacity: 1,
  }
}));

export default function NavBar() {
  const  [
    titles = [
      {
        title: "About",
        selected: true,
      },
      {
        title: "Experience",
        selected: false,
      },
      {
        title: "Projects",
        selected: false,
      }
    ],
    setTitles
  ] = React.useState();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CustomizedAppBar position="static" color="transparent">
        <Toolbar>
          <Grid 
            container 
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            style={{textAlign: "center"}}
          >
            <Grid 
              item
              xs={12}
              md={1}
              lg={1}
            >
              <Logo title="BN"/>
            </Grid>
            {
              titles.map((title, index) => {
                return (
                  <Grid 
                    item
                    key={`${title}${index}`} 
                    md={2}
                    lg={2}
                  >
                    <NavBarButton 
                      text= {title.title} 
                      selected= {title.selected}
                      index={index}
                      titles={titles}
                      setSelected={(v) => {setTitles(v)}}
                    />
                  </Grid>
                )
              })
            }
          </Grid>
        </Toolbar>
      </CustomizedAppBar>
    </Box>
  );
}
