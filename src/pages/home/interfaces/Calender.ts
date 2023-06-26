import {IAddress} from "./Events";
export interface ICalenderEventData {
    title: string;
    start: string;
    end: string,
    imageUrl: string;
    shopUrl: string;
    address: IAddress;
    priceFrom: number;
};
