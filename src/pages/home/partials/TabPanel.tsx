import React from 'react';
import {Box} from "@mui/material";
import {ITabPanelProps} from "../interfaces/Props";
const TabPanel: React.FC<ITabPanelProps> = ({children, selectedTap, index, ...other}) => {
    return (
        <div
            role="tabpanel"
            hidden={selectedTap !== index}
            style={{ width:'100%'}}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}>
            {selectedTap === index && (
                <Box sx={{mt:1 }}>
                    {children}
                </Box>
            )}
        </div>
    );
};
export default TabPanel;



