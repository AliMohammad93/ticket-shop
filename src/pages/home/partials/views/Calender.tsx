import React, {useEffect, useState} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {IEvent} from '../../interfaces/Events';
import {useTranslation} from 'react-i18next';
import deLocale from '@fullcalendar/core/locales/de';
import enLocale from '@fullcalendar/core/locales/en-gb';
import {Typography} from "@mui/material";
import {Box} from "@mui/material";

interface ICalendarProps {
    data: IEvent[];
}

interface IAddress {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string | null;
    postalCode: string;
    addressCountry: string;
}

type ICalenderEventData = {
    title: string;
    start: string;
    end: string,
    imageUrl: string;
    shopUrl: string;
    address: IAddress;
    priceFrom: number;
};

function renderEventContent(eventInfo: any) {
    return (
        <Box title={eventInfo.event.title}>
            <Typography variant='caption' sx={{color: 'secondary.main'}}>{eventInfo.event.title}</Typography>
        </Box>
    )
}

const Calendar: React.FC<ICalendarProps> = ({data}) => {
    const {i18n} = useTranslation();
    const [calenderEventData, setCalenderEventData] = useState<ICalenderEventData[]>([]);

    useEffect(() => {
        const modifiedData = data.map((item) => {
            return {
                title: item.title,
                start: item.startDate.split("T")[0],
                end: item.startDate.split("T")[0],
                imageUrl: item.imageUrl,
                shopUrl: item.shopUrl,
                address: item.address,
                priceFrom: item.priceFrom,

            };
        });
        setCalenderEventData(modifiedData);
    }, []);

    return (
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={calenderEventData}
            locale={i18n.language === 'de' ? deLocale : enLocale}
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
