import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme?: any) => ({
  appHeader: {
    backgroundColor: theme.palette.primary.main
  },
  appHeaderToolbar: {
    color: theme.palette.primary.contrastText
  },
  appHeaderBrand: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  appHeaderLogo: {
    display: 'none',
    marginRight: '1rem',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  appHeaderTitle: {
    marginRight: '2rem',
    fontFamily: 'Montserrat',
    fontWeight: 700,
    letterSpacing: '0.3rem',
    textDecoration: 'none'
  },
  appHeaderToggle: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'flex-end'
  }
}))

export default useStyles
