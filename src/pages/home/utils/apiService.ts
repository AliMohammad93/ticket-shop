import {IEvent} from "../interfaces/Events";
import {API_GET_EVENTS_URL} from "../../../constants/api";
export const fetchData = async () : Promise<IEvent[]> => {
    try {
        const response = await fetch(API_GET_EVENTS_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
}
