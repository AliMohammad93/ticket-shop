import React from 'react';
import {Box, Grid, IconButton, Tabs, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import {styled} from "@mui/system";
import Tab from "@mui/material/Tab";
import {useTranslation} from "react-i18next";

const CustomTabs = styled(Tabs)({
    '& .MuiTabs-indicator': {
        display: 'none',
    },
});
const CustomTab = styled(Tab)(({theme}) => ({
    minWidth: 30,
    minHeight: 10,
    padding: '6px 8px',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.secondary.main,
    '& .MuiSvgIcon-root': {
        color: theme.palette.primary.main,
    },
    '&.Mui-selected': {
        backgroundColor: theme.palette.primary.main,
        borderRadius: 10,
        '& .MuiSvgIcon-root': {
            color: 'white',
        },
    },
}));

interface TapActionsProps {
    value: number,
    handleChange: (event: React.SyntheticEvent, value: number) => void;
    searchTerm: string,
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const TapActions: React.FC<TapActionsProps> = ({value, handleChange, searchTerm, setSearchTerm}) => {
    const {t} = useTranslation();
    return (
        <>
            <Grid item xs={12} md={6}>
                {value === 2 ? null : (
                    <Box sx={{textAlign: {xs: 'center', md: 'left'}, mb: {xs: 2, md: 0}}}>
                        <Typography variant='body1' sx={{fontWeight: 'bold'}}>{t('Tickets for Bootshaus')}</Typography>
                    </Box>)}
            </Grid>
            <Grid item xs={12} md={6}>
                <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-end" gap={1}>
                    {value === 2 ? null : (
                        <Paper
                            component="form"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                backgroundColor: 'info.main',
                                width: '40%',
                                height: '30%',
                                boxShadow: 0
                            }}>
                            <IconButton type="button" aria-label="search">
                                <SearchIcon fontSize='small'/>
                            </IconButton>
                            <InputBase onChange={event => setSearchTerm(event.target.value)}/>
                        </Paper>)}
                    <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
                        <Typography variant='caption'>{t('view')}</Typography>
                        <CustomTabs value={value} onChange={handleChange}>
                            <CustomTab icon={<GridViewOutlinedIcon fontSize='small'/>} aria-label="cards"/>
                            <CustomTab icon={<ListOutlinedIcon fontSize='small'/>} aria-label="list"/>
                            <CustomTab icon={<CalendarMonthOutlinedIcon fontSize='small'/>} aria-label="person"/>
                        </CustomTabs>
                    </Box>
                </Box>
            </Grid>
        </>
    );
};
export default TapActions;
