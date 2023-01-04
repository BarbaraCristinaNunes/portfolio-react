import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import NavBarButton from './ButtonStyle';
import { styled } from '@mui/material/styles';


const CustomizedAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "white",
  transition: "0.5s",
  opacity: 0.5,
  "&:hover": {
    opacity: 1,
  }
}));

export default function NavBar() {
  // console.log("teste1")
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
      },
      {
        title: "Contact Me",
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
            justifyContent="space-between"
            alignItems="center"
            style={{textAlign: "center"}}
          >
            {
              titles.map((title, index) => {
                return (
                  <Grid item xs={2}>
                    <NavBarButton 
                      key={`${title}${index}`}
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
