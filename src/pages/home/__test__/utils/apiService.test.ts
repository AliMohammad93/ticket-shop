import { fetchData } from '../../utils/apiService';
import {API_GET_EVENTS_URL} from "../../../../constants/api";
describe('apiService', () => {
    const originalFetch = global.fetch;

    beforeEach(() => {
        global.fetch = jest.fn();
    });

    afterEach(() => {
        global.fetch = originalFetch;
    });

    it('fetch data successfully', async () => {
        (global.fetch as jest.Mock).mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue([{ event: 'Event 1' }, { event: 'Event 2' }])
        });

        const data = await fetchData();

        expect(data).toEqual([{ event: 'Event 1' }, { event: 'Event 2' }]);
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith(API_GET_EVENTS_URL);
    });

    it('should handle fetch error', async () => {
        (global.fetch as jest.Mock).mockRejectedValue(new Error('Network error'));
        await expect(fetchData()).rejects.toThrow('Network error');
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith(API_GET_EVENTS_URL);
    });
});
