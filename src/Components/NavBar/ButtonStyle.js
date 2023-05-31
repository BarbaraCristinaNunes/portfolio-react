import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const CustomizedButton = styled(Button)(({ theme }) => ({
    color: "black",
    transition: "0.2s",
    paddingBottom: 0,
    opacity: 0.6,
    "&:hover": {
        paddingBottom: 5,
        boxShadow: `0 0 6px 0 rgba(157, 96, 212, 0.5)`,
        border: `solid 3px transparent`,
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(-225deg, #231557 0%, #44107a 29%, #ff1361 67%, #fff800 100%)`,
        backgroundOrigin: "border-box",
        backgroundClip: "content-box, border-box",
        boxShadow: "2px 1000px 1px #fff inset",
        opacity: 1,
    }
}));

const SelectedButton = styled(Button)(({ theme }) => ({
    color: "black",
    transition: "0.2s",
    paddingBottom: 0,
    boxShadow: `0 0 6px 0 rgba(157, 96, 212, 0.5)`,
    borderBlockEnd: `solid 3px transparent`,
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(-225deg, #231557 0%, #44107a 29%, #ff1361 67%, #fff800 100%)`,
    backgroundOrigin: "border-box",
    backgroundClip: "content-box, border-box",
    boxShadow: "2px 1000px 1px #fff inset",
    "&:hover": {
        border: `solid 3px transparent`,
        paddingBottom: 5,
    }
}));

export default function NavBarButton (props) {

    return (
        props.selected? 
            <SelectedButton> 
                {props.text} 
            </SelectedButton>
        :
            <CustomizedButton
                onClick={(v) => {
                    let selectedStatusChanged = props.titles.map((title) => {
                        if(title.selected === true){
                            title.selected = false;
                        }
                        return title;
                    })
                    selectedStatusChanged[props.index].selected = true;
                    props.setSelected(selectedStatusChanged);
                }}
            > {props.text} </CustomizedButton>
    )
}