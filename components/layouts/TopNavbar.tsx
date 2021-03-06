import Link from 'next/Link';
import { useTranslation } from 'react-i18next';
import { createUseStyles } from 'react-jss';

import { maxWidth } from '../../utils/breakpoints';
import { topNavigations } from '../../utils/topNavigation';
import { MenuListItem } from '../typography/MenuListItem';

const useStyles = createUseStyles({
  topNavigation: {
    backgroundColor: 'inherit',
    height: 60,
  },
  topNavigationList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: maxWidth,
    margin: 'auto',
    height: '100%',

    '& > li': {
      listStyle: 'none',
    },
  },
});

export function TopNavbar(): JSX.Element {
  const { t } = useTranslation('common');

  const classes = useStyles();

  return (
    <nav className={classes.topNavigation}>
      <ul className={classes.topNavigationList}>
        {topNavigations.map((navigation) => {
          return (
            <MenuListItem href={navigation.href} key={`${navigation.name}`}>
              {t(navigation.name)}
            </MenuListItem>
          );
        })}
      </ul>
    </nav>
  );
}
