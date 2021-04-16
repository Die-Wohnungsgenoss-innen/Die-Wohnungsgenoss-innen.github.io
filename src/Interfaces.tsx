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

export type IApartmentProperty =
  | 'url'
  | 'size'
  | 'rooms'
  | 'rent'
  | 'deposit'
  | 'address'
  | 'source';

export type ISortArray = [IApartment, number];

export interface ITableHeaderData {
  name: string;
  property: string;
  sortable?: boolean;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit' | undefined;
}
