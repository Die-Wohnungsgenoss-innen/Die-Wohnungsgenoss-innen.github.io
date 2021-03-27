import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@material-ui/core";
import React, { useState } from "react";
import { IApartment } from "../Interfaces";

function descendingComparator(a: any, b: any, orderBy: any) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order: any, orderBy: any) {
  return order === "desc"
    ? (a: any, b: any) => descendingComparator(a, b, orderBy)
    : (a: any, b: any) => -descendingComparator(a, b, orderBy);
}

function stableSort(array: any, comparator: any) {
  const stabilizedThis = array.map((el: any, index: any) => [el, index]);
  stabilizedThis.sort((a: any, b: any) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el: any) => el[0]);
}

interface IProps {
  apartments: IApartment[];
}

export const ApartmentTable = ({ apartments }: IProps) => {
  const [orderBy, setOrderBy] = useState();
  const [order, setOrder] = useState<"asc" | "desc">();

  const handleRequestSort = (property: any, event: any) => {
    console.log(property);

    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const headerCells = [
    { name: "Adresse", property: "address", align: "left" },
    { name: "Größe", property: "size", sortable: true },
    { name: "Räume", property: "rooms", sortable: true },
    { name: "Miete", property: "rent" },
    { name: "Eigenmittel", property: "deposit" },
  ];

  const getTableHeaderCell = (headerData: {
    name: string;
    property: string;
    sortable?: boolean;
    align?: "left" | "center" | "right" | "justify" | "inherit" | undefined
  }) => {
    return (
      <TableCell
        key={headerData.property}
        sortDirection={orderBy === headerData.property ? order : false}
        align={headerData.align || "center"}
      >
        {headerData.sortable && (
          <TableSortLabel
            active={orderBy === headerData.property}
            direction={orderBy === headerData.property ? order : "asc"}
            onClick={(event) => handleRequestSort(headerData.property, event)}
          ></TableSortLabel>
        )}
        {headerData.name}
      </TableCell>
    );
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          {headerCells.map(headerCell => getTableHeaderCell(headerCell))}
        </TableRow>
      </TableHead>
      <TableBody>
        {stableSort(apartments, getComparator(order, orderBy)).map(
          (apartment: IApartment, index: number) => {
            return (
              <TableRow key={index}>
                <TableCell align="left">{apartment.address}</TableCell>
                <TableCell align="center">{apartment.size}</TableCell>
                <TableCell align="center">{apartment.rooms}</TableCell>
                <TableCell align="center">{apartment.rent}</TableCell>
                <TableCell align="center">{apartment.deposit}</TableCell>
              </TableRow>
            );
          }
        )}
      </TableBody>
    </Table>
  );
};
