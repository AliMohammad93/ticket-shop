import {styled} from "@mui/system";
import {Tabs , Tab} from "@mui/material";

export const CustomTabs = styled(Tabs)({
    '& .MuiTabs-indicator': {
        display: 'none',
    },
});
export const CustomTab = styled(Tab)(({theme}) => ({
    minWidth: 30,
    minHeight: 10,
    padding: '6px 8px',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.secondary.main,
    '& .MuiSvgIcon-root': {
        color: theme.palette.primary.main,
    },
    '&.Mui-selected': {
        backgroundColor: theme.palette.primary.main,
        borderRadius: 10,
        '& .MuiSvgIcon-root': {
            color: 'white',
        },
    },
}));
