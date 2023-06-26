import * as React from 'react';
import Stack from '@mui/material/Stack';
import Linear from '@mui/material/LinearProgress';

const LinearProgress: React.FC = () => {
    return (
        <Stack sx={{ width: '100%', color: 'grey.500', mt:4 }} spacing={2}>
            <Linear color="success" />
        </Stack>
    );
}
export default LinearProgress;
