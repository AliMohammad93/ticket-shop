import { fetchData } from '../../utils/apiService';

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
        expect(global.fetch).toHaveBeenCalledWith('https://gist.githubusercontent.com/ChristianFranke/557381ba18b979acd992a70fc08d31e0/raw/853953c4f0ccd2659cdbf1bbf38628e0b6dff640/bootshaus.json');
    });

    it('should handle fetch error', async () => {
        (global.fetch as jest.Mock).mockRejectedValue(new Error('Network error'));
        await expect(fetchData()).rejects.toThrow('Network error');
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith('https://gist.githubusercontent.com/ChristianFranke/557381ba18b979acd992a70fc08d31e0/raw/853953c4f0ccd2659cdbf1bbf38628e0b6dff640/bootshaus.json');
    });
});
