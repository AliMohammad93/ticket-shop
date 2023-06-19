import React from 'react';
import {Grid,} from "@mui/material";
import logo from './../../../assets/logo.jpg'
import {useTranslation} from 'react-i18next';

const HomeHeader: React.FC = () => {
    // const { t, i18n } = useTranslation();
    //
    // const changeLanguage = (lng:string) => {
    //     i18n.changeLanguage(lng);
    // }
    return (

        <Grid xs={8} sm={5} paddingTop={8}>
            <img
                src={logo}
                alt="logo"
                style={{maxWidth: '80%', height: 'auto'}}
            />
            {/*<div>*/}
            {/*    <button onClick={() => changeLanguage('en')}>en</button>*/}
            {/*    <button onClick={() => changeLanguage('de')}>de</button>*/}
            {/*    <h2>{t('Welcome to React')}</h2>*/}
            {/*</div>*/}
        </Grid>
    );
};
export default HomeHeader;
