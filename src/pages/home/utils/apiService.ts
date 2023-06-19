import {IEvent} from "../interfaces/Events";

export const fetchData = async () : Promise<IEvent[]> => {
    try {
        const response = await fetch('https://gist.githubusercontent.com/ChristianFranke/557381ba18b979acd992a70fc08d31e0/raw/853953c4f0ccd2659cdbf1bbf38628e0b6dff640/bootshaus.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
