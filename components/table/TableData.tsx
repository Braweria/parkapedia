import clsx from 'clsx';
import { createElement, forwardRef, HTMLAttributes, ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles<string, unknown, { [key: string]: string }>(
  (theme) => ({
    tableData: {
      color: 'rgba(0,0,0,0.7)',
      padding: 8,
      height: 40,
    },
  })
);

type TableDataProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLTableCellElement>;

export const TableData = forwardRef<HTMLTableCellElement, TableDataProps>(
  ({ children, className, ...tableData }, ref): JSX.Element => {
    const classes = useStyles();
    const classNames = clsx(classes.tableData, className);
    return createElement('td', { ref, ...tableData, className: classNames }, children);
  }
);

/*
<table>
    <thead>
        <tr>
            <th colspan="2">The table header</th>
        </tr>

    </thead>
    <tbody>
        <tr>
            <td>The table body</td>
            <td>with two columns</td>
        </tr>
    </tbody>
</table>

*/
