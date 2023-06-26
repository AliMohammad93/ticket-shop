import React from "react";
import {IEvent} from "./Events";

export interface ITapActionsProps {
    selectedTap: number,
    handleChange: (event: React.SyntheticEvent, value: number) => void;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export interface ITabPanelProps {
    children?: React.ReactNode;
    index: number;
    selectedTap: number;
}

export interface ICardsProps {
    data: IEvent[];
}

export interface IListProps {
    data: IEvent[];
}

export interface ICalendarProps {
    data: IEvent[];
}
