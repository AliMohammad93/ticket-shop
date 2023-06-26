import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {useTranslation} from "react-i18next";
import {Typography, Button} from "@mui/material";

interface CustomButtonProps {
    shopUrl: string
}

const CustomButton: React.FC<CustomButtonProps> = ({shopUrl}) => {
    const {t} = useTranslation();
    const handelNavigateToTheShop = () => {
        // navigate to the shop url
    }
    return (
        <>
            <Button variant="contained"
                    endIcon={<ArrowForwardIosIcon style={{fontSize: 14}} onClick={handelNavigateToTheShop}/>}
                    sx={{paddingX: 6, pt: 1, border: 1, borderColor: 'primary.main', color: 'info.main', '&:hover': {
                    backgroundColor: 'secondary.main',
                    color: 'primary.main',
                    border: 1
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
