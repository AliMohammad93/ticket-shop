import React from 'react';
import {Box, Grid, IconButton, Typography, InputBase, Paper} from "@mui/material";
import {useTranslation} from "react-i18next";
import {ITapActionsProps} from "../interfaces/Props";
import {CustomTabs, CustomTab} from "../../../config/material-ui/customTap";
import SearchIcon from "@mui/icons-material/Search";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

const CALENDAR_VIEW = 2;
const TapActions: React.FC<ITapActionsProps> = ({selectedTap, handleChange, setSearchTerm}) => {
    const {t} = useTranslation();
    return (
        <>
            <Grid item xs={12} md={6}>
                {selectedTap === CALENDAR_VIEW ? null : (
                    <Box sx={{textAlign: {xs: 'center', md: 'left'}, mb: {xs: 2, md: 0}}}>
                        <Typography variant='body1' sx={{fontWeight: 'bold'}}>{t('Tickets for Bootshaus')}</Typography>
                    </Box>)}
            </Grid>
            <Grid item xs={12} md={6}>
                <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-end" gap={1}>
                    {selectedTap === 2 ? null : (
                        <Paper component="form" sx={{
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
                    <Box display="flex" flexDirection="row" alignItems="center" justifyContent={'flex-end'} gap={1}>
                        <Typography variant='body2'>{t('view')}</Typography>
                        <CustomTabs value={selectedTap} onChange={handleChange} sx={{ display:'flex', alignItems:'center'}}>
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
