import React, {useEffect, useState, SyntheticEvent} from 'react';
import {Container, Box, Grid, Typography} from "@mui/material";
import HomeHeader from "./partials/HomeHeader";
import TapActions from "./partials/TapActions";
import TabPanel from "./partials/TabPanel";
import Cards from "./partials/views/Cards";
import List from './partials/views/List'
import Calendar from "./partials/views/Calender";
import LinearProgress from "../../components/LinearProgress";
import {fetchData} from "./utils/apiService";
import {IEvent} from "./interfaces/Events";
import {useTranslation} from "react-i18next";

const Home: React.FC = () => {
    const {t} = useTranslation();
    const [selectedTap, setValue] = useState<number>(0);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [data, setData] = useState<IEvent[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false)
    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    useEffect(() => {
        fetchData()
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                setError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const filteredData = data.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <Container>
            <Box sx={{flexGrow: 1}}>
                <Grid container direction="column">
                    <Grid item xs={12} container justifyContent="center" alignItems="center">
                        <HomeHeader/>
                    </Grid>
                    <Grid item xs={12} container>
                        <TapActions selectedTap={selectedTap} handleChange={handleChange}
                                    setSearchTerm={setSearchTerm}/>
                    </Grid>
                    {isLoading ? (<LinearProgress/>) :
                        (
                            <>
                                {error ? (
                                    <Typography color="error" textAlign="center"
                                                mt={4}>{t('Network error, please try again')}</Typography>
                                ) : (
                                    <Grid item xs={12} container>
                                        <TabPanel selectedTap={selectedTap} index={0}>
                                            <Cards data={filteredData}/>
                                        </TabPanel>
                                        <TabPanel selectedTap={selectedTap} index={1}>
                                            <List data={filteredData}/>
                                        </TabPanel>
                                        <TabPanel selectedTap={selectedTap} index={2}>
                                            <Calendar data={data}/>
                                        </TabPanel>
                                    </Grid>
                                )}
                            </>
                        )
                    }
                </Grid>
            </Box>
        </Container>
    );
}
export default Home;
