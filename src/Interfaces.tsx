export interface IApartment {
  url: string;
  size: number;
  rooms: number;
  rent: number;
  deposit: number;
  address: string;
  source: string;
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
