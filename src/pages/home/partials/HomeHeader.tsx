import React from 'react';
import {Grid} from "@mui/material";
import logo from './../../../assets/logo.jpg'
const HomeHeader: React.FC = () => {
    return (
        <Grid xs={8} sm={5} paddingTop={8}>
            <img
                src={logo}
                alt="logo"
                style={{maxWidth: '80%', height: 'auto'}}
            />
        </Grid>
    );
};
export default HomeHeader;
