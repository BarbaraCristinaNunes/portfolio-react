import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const CustomizedButton = styled(Button)(({ theme }) => ({
    color: "#231557",
    transition: "0.2s",
    paddingBottom: 0,
    opacity: 0.6,
    paddingBottom: 5,
    "&:hover": {
        boxShadow: `0 0 6px 0 rgba(157, 96, 212, 0.5)`,
        border: `solid 3px transparent`,
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(-225deg, #231557 0%, #44107a 29%, #ff1361 67%, #fff800 100%)`,
        backgroundOrigin: "border-box",
        backgroundClip: "content-box, border-box",
        boxShadow: "2px 1000px 1px #fff inset",
        opacity: 1,
    }
}));

export default function NavBarButton (props) {
    const navigate = useNavigate();
    return (
        <CustomizedButton
            onClick={(v) => {
                navigate(`/${props.title.toLowerCase()}`);
                props.setOpen(false)
            }}
        > 
            {props.title} 
        </CustomizedButton>
    )
}