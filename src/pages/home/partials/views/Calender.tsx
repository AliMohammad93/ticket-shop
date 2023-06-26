import React, {useEffect, useState} from 'react';
import {Box , Typography} from "@mui/material";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {useTranslation} from 'react-i18next';
import {ICalendarProps} from "../../interfaces/Props";
import {ICalenderEventData} from "../../interfaces/Calender";

const Calendar: React.FC<ICalendarProps> = ({data}) => {
    const {i18n} = useTranslation();
    const [calenderEventData, setCalenderEventData] = useState<ICalenderEventData[]>([]);
    const renderEventContent = (eventInfo: any) => (
        <Box title={eventInfo.event.title}>
            <Typography variant='caption' sx={{color: 'secondary.main'}}>{eventInfo.event.title}</Typography>
        </Box>
    );

    useEffect(() => {
        const modifiedData = data.map((item) => ({
            title: item.title,
            start: item.startDate.split("T")[0],
            end: item.startDate.split("T")[0],
            imageUrl: item.imageUrl,
            shopUrl: item.shopUrl,
            address: item.address,
            priceFrom: item.priceFrom,
        }));
        setCalenderEventData(modifiedData);
    }, [data]);

    return (
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={calenderEventData}
            headerToolbar={{
                right: 'dayGridMonth,timeGridWeek,timeGridDay',
                center: 'prev,title,next',
                left: ''
            }}
            eventContent={renderEventContent}
        />
    );
};

export default Calendar;
