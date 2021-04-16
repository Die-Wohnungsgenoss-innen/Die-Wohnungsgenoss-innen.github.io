export interface IApartment {
    id: string;
    created_at: string;
    updated_at: string;
    url: string;
    source: string;
    size: number;
    rooms: number;
    deposit: number;
    rent: number;
    address: string;
    image_url: string;
    style?: React.CSSProperties;

}