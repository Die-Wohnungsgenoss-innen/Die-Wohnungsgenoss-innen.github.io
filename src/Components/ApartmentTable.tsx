import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@material-ui/core';
import React, { useState } from 'react';
import { getComparator, stableSort } from '../Utils_old';
import {
  IApartment,
  IApartmentProperty,
  ITableHeaderData,
} from '../Interfaces';

interface IProps {
  apartments: IApartment[];
  style: React.CSSProperties;
}

export const ApartmentTable = ({ apartments, style }: IProps) => {
  const [orderBy, setOrderBy] = useState<IApartmentProperty>('address');
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');

  const handleRequestSort = (property: IApartmentProperty) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const headerCells: ITableHeaderData[] = [
    { name: 'Adresse', property: 'address', align: 'left', sortable: true },
    { name: 'Größe', property: 'size', sortable: true },
    { name: 'Räume', property: 'rooms', sortable: true },
    { name: 'Miete', property: 'rent' },
    { name: 'Eigenmittel', property: 'deposit' },
    { name: 'Anbieter', property: 'source', sortable: true },
  ];

  const getTableHeaderCell = (headerData: ITableHeaderData) => {
    return (
      <TableCell
        key={headerData.property}
        sortDirection={orderBy === headerData.property ? order : false}
        align={headerData.align || 'center'}
      >
        {headerData.sortable && (
          <TableSortLabel
            active={orderBy === headerData.property}
            direction={orderBy === headerData.property ? order : 'asc'}
            onClick={() =>
              handleRequestSort(headerData.property as IApartmentProperty)
            }
          ></TableSortLabel>
        )}
        {headerData.name}
      </TableCell>
    );
  };

  const getTableContent = (apartment: IApartment, index: number) => {
    return (
      <TableRow key={index}>
        <TableCell align="left">
          <a
            style={{ color: 'black' }}
            href={apartment.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {apartment.address}
          </a>
        </TableCell>
        <TableCell align="center">{apartment.size}</TableCell>
        <TableCell align="center">{apartment.rooms}</TableCell>
        <TableCell align="center">{apartment.rent}</TableCell>
        <TableCell align="center">{apartment.deposit}</TableCell>
        <TableCell align="center">{apartment.source}</TableCell>
      </TableRow>
    );
  };

  return (
    <Table style={style}>
      <TableHead>
        <TableRow>
          {headerCells.map((headerCell) => getTableHeaderCell(headerCell))}
        </TableRow>
      </TableHead>
      <TableBody>
        {stableSort(
          apartments,
          getComparator(order, orderBy)
        ).map((apartment: IApartment, index: number) =>
          getTableContent(apartment, index)
        )}
      </TableBody>
    </Table>
  );
};
