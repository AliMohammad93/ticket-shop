import React, {useState, ChangeEvent, Fragment} from "react";
import {Box, List, ListItem, Pagination, Card, Typography, CardContent, Grid} from "@mui/material";
import usePagination from "../../../../hooks/usePagination";
import {IEvent} from "../../interfaces/Events";
import useFormattedDate from "../../../../hooks/useFormattedDate";
import useFormattedTime from "../../../../hooks/useFormattedTime";
import CustomButton from "../../../../components/CustomButton";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import {useTranslation} from "react-i18next";
import CardActions from "@mui/material/CardActions";


interface ListProps {
    data: IEvent[];
}


const ListView: React.FC<ListProps> = ({data}) => {
    const {t} = useTranslation();
    let [page, setPage] = useState(1);
    const formatDate = useFormattedDate();
    const formatTime = useFormattedTime();
    const PER_PAGE = 8;
    const count = Math.ceil(data.length / PER_PAGE);
    const _DATA = usePagination(data, PER_PAGE);

    const handleChange = (e: ChangeEvent<unknown>, p: number) => {
        setPage(p);
        _DATA.jump(p);
    };

    return (
        <>
            {_DATA.currentData().map((event, index) => (
                <Fragment key={index}>
                    <Grid container sx={{
                        backgroundColor: index % 2 === 0 ? 'info.main' : 'secondary.main',
                        paddingY: 1,
                        paddingX: 2
                    }}>
                        <Grid item md={6} xs={12}>
                            <Box>
                                <Typography variant="body2" sx={{fontWeight: 'bold'}}>{event.title} </Typography>
                                <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                    <PlaceOutlinedIcon style={{fontSize: 14}}/>
                                    <Typography
                                        variant="body2">{event.address.streetAddress}, {event.address.addressLocality} </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: {xs: 'column', md: 'row'},
                                justifyContent: 'space-around'
                            }}>
                                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                                    <Typography variant="caption">{t('at')} {formatDate(event.startDate)}</Typography>
                                    <Typography variant="caption">{t('to')} {formatTime(event.startDate)}</Typography>
                                </Box>

                                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                                    <Typography variant="caption">{t('Tickets from')} </Typography>
                                    {event.priceFrom > 0 && (
                                        <>
                                            <Typography variant="caption"
                                                        sx={{fontWeight: 'bold'}}>{event.priceFrom} Euro</Typography>
                                        </>)}
                                </Box>
                                <CardActions sx={{
                                    justifyContent: {
                                        xs: 'center',
                                        md: 'flex-end'
                                    }
                                }}>
                                    <CustomButton shopUrl={event.shopUrl}/>
                                </CardActions>
                            </Box>
                        </Grid>
                    </Grid>
                </Fragment>))}
            {data.length > 8 && (
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2}}>
                    <Pagination size="small" onChange={handleChange} count={count} page={page} data-testid={'pagination'}/>
                </Box>
            )}
            {data.length === 0 && (
                <Box sx={{textAlign: 'center'}}>
                    <Typography>{t('There is no results')}</Typography>
                </Box>
            )}
        </>
    );
}

export default ListView;