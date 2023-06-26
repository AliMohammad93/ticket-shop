import {IEvent} from "../../interfaces/Events";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Typography, Grid, Box} from '@mui/material';
import useFormattedDate from "../../../../hooks/useFormattedDate";
import useFormattedTime from "../../../../hooks/useFormattedTime";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import {useTranslation} from "react-i18next";
import CustomButton from "../../../../components/CustomButton";

interface CardsProps {
    data: IEvent[];
}

const Cards: React.FC<CardsProps> = ({data}) => {
    const {t} = useTranslation();
    const formatDate = useFormattedDate();
    const formatTime = useFormattedTime();
    return (
        <Grid container spacing={4} mb={4} title={'cards'}>
            {data?.map((event, index) => (
                <Grid item xs={12} key={index}>
                    <Card elevation={0}>
                        <Grid container direction="row">
                            <Grid item xs={12} md={4}>
                                <CardMedia
                                    component="img"
                                    height="175"
                                    image={event.imageUrl}
                                    alt={event.title}
                                    sx={{borderRadius: 2, objectFit: 'cover', mb: {xs: 4, md: 0}}}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <CardContent sx={{py: 0, display: 'flex', flexDirection: 'column'}}>
                                    <Box sx={{width: '75%'}}>
                                        <Typography variant="body1" sx={{fontWeight: 'bold'}} display="block"
                                                    gutterBottom>{event.title}</Typography>
                                    </Box>
                                    <Box sx={{display: 'flex', flexDirection: 'row'}} gap={2}>
                                        <Box sx={{display: 'flex', flexDirection: 'row'}} gap={1}>
                                            <CalendarMonthOutlinedIcon fontSize='small'/>
                                            <Typography variant="caption"
                                                        gutterBottom>{formatDate(event.startDate)}</Typography>
                                        </Box>
                                        <Box sx={{display: 'flex', flexDirection: 'row'}}>
                                            <WatchLaterOutlinedIcon fontSize='small' sx={{mr: 0.5}}/>
                                            <Typography variant="caption"
                                                        gutterBottom>{formatTime(event.startDate)}</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{display: 'flex', flexDirection: 'row'}} gap={1}>
                                        <PlaceOutlinedIcon fontSize='small'/>
                                        <Typography variant="caption"
                                                    gutterBottom>{event.address.streetAddress}, {event.address.addressLocality}</Typography>
                                    </Box>
                                    {event.priceFrom > 0 && (
                                        <Box sx={{display: 'flex', flexDirection: 'row'}} gap={1}>
                                            <ConfirmationNumberOutlinedIcon fontSize='small'/>
                                            <Typography variant="caption"
                                                        gutterBottom>{t('Tickets from')} {event.priceFrom}€</Typography>
                                        </Box>
                                    )}
                                </CardContent>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <CardActions sx={{justifyContent: {xs: 'center', md: 'flex-end'}}}>
                                    <CustomButton shopUrl={event.shopUrl}/>
                                </CardActions>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            ))}
            {data.length === 0 && (
                <Box sx={{textAlign: 'center', width: '100%', mt: 4}}>
                    <Typography>{t('There is no results')}</Typography>
                </Box>
            )}
        </Grid>
    );
};
export default Cards;
