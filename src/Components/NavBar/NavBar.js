import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import NavBarButton from './ButtonStyle';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";

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
      },
      {
        title: "Contact",
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
                  <Grid 
                    key={`${title}${index}`}
                    item 
                    xs={2}
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
