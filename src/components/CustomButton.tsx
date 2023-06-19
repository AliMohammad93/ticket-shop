import React from 'react';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {useTranslation} from "react-i18next";
import {Typography, Box} from "@mui/material";

const CustomButton: React.FC = () => {
    const {t} = useTranslation();
    return (
        <>
            <Button variant="contained" endIcon={<ArrowForwardIosIcon style={{fontSize: 14}}/>} sx={{
                paddingX: 6,
                pt: 1,
                border:1 ,

                borderColor: 'primary.main',
                color:'info.main',
                '&:hover': {
                    backgroundColor: 'secondary.main',
                    color: 'primary.main',
                    border:1
                }
            }}>
                <Typography variant="caption">
                    {t('To the tickets')}
                </Typography>
            </Button>
        </>
    );
};
export default CustomButton;
