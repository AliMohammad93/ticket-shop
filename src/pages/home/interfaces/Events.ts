interface Address {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string | null;
    postalCode: string;
    addressCountry: string;
}

export interface IEvent {
    title: string;
    startDate: string;
    endDate: string;
    imageUrl: string;
    shopUrl: string;
    address: Address;
    priceFrom: number;
}
