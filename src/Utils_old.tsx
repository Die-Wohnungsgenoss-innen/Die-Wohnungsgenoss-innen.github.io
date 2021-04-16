import { IApartment, IApartmentProperty, ISortArray } from './Interfaces';

export function descendingComparator(
  a: IApartment,
  b: IApartment,
  orderBy: IApartmentProperty
) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator(
  order: 'asc' | 'desc',
  orderBy: IApartmentProperty
) {
  return order === 'desc'
    ? (a: IApartment, b: IApartment) => descendingComparator(a, b, orderBy)
    : (a: IApartment, b: IApartment) => -descendingComparator(a, b, orderBy);
}

export function stableSort(
  array: IApartment[],
  comparator: (a: IApartment, b: IApartment) => number
) {
  const stabilizedThis: ISortArray[] = array.map(
    (el: IApartment, index: number) => [el, index]
  );
  stabilizedThis.sort((a: ISortArray, b: ISortArray) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el: ISortArray) => el[0]);
}
