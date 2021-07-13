import { createUseStyles } from 'react-jss';
import { Text } from '../typography/Text';
import Link from 'next/Link';
import { useTranslation } from 'react-i18next';

const useStyles = createUseStyles({
  footer: {
    height: 30,
    display: 'flex',
    justifyContent: 'center',
  },
  footerItem: {
    margin: '0 8px',
    textDecoration: 'none',
    color: 'black',
  },
});

export function Footer(): JSX.Element {
  const classes = useStyles();

  const { t } = useTranslation('common');

  return (
    <footer className={classes.footer}>
      <Link href="/impressum" passHref>
        <Text component="a" className={classes.footerItem}>
          Impressum, aber in Englisch NICHT VERGESSEN
        </Text>
      </Link>
      <Link href="/datenschutz" passHref>
        <Text component="a" className={classes.footerItem}>
          {t('privacyPolicy')}
        </Text>
      </Link>
    </footer>
  );
}
