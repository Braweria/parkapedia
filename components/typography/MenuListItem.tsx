import Link from 'next/Link';
import type { ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

import { Text } from './Text';

const useStyles = createUseStyles<string, unknown, { [key: string]: string }>(
  (theme) => ({
    menuItemText: {
      fontSize: 20,
      lineHeight: 1.3,
      fontWeight: 600,
      textTransform: 'uppercase',
      color: 'black',
    },
    menuHref: {
      textDecoration: 'none',
      color: theme.creme,
      padding: '8px 20px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
    menuItem: {
      height: '100%',
    },
  })
);

export function MenuListItem({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}): JSX.Element {
  const classes = useStyles();

  return (
    <li className={classes.menuItem}>
      <Link href={href}>
        <a className={classes.menuHref}>
          <Text component="span" className={classes.menuItemText}>
            {children}
          </Text>
        </a>
      </Link>
    </li>
  );
}
