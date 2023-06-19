import React, {useEffect , useState, SyntheticEvent} from 'react';
import {Container, Box, Grid} from "@mui/material";
import HomeHeader from "./partials/HomeHeader";
import TapActions from "./partials/TapActions";
import TabPanel from "./partials/TabPanel";
import Cards from "./partials/views/Cards";
import List from './partials/views/List'
import Calendar from "./partials/views/Calender";
import {fetchData} from "./utils/apiService";
import {IEvent} from "./interfaces/Events";

const Home: React.FC = () => {
    const [value, setValue] = useState(0);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [data, setData] = useState<IEvent[]>([]);
    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    useEffect(() => {
        fetchData().then(fetchedData => setData(fetchedData));
    }, []);

    const filteredData = data.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );



    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container direction="column">
                    <Grid item xs={12} container justifyContent="center" alignItems="center">
                        <HomeHeader/>
                    </Grid>
                    <Grid item xs={12} container  >
                        <TapActions value={value} handleChange={handleChange} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                    </Grid>
                    <Grid item xs={12} container>
                        <TabPanel value={value} index={0} >
                            <Cards data={filteredData}/>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <List data={filteredData}/>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <Calendar/>
                        </TabPanel>
                    </Grid>
                </Grid>
            </Box>
        </Container>

    );
}
export default Home;
