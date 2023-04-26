import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme?: any) => ({
  container: {
    backgroundColor: theme.palette.secondary.main
  },
  dialogTitle: {
    color: `${theme.palette.primary.main} !important`
  },
  textField: {
    backgroundColor: `${theme.palette.secondary.main} !important`
  },

  mainBtn: {
    backgroundColor: `${theme.palette.success.main} !important`,
    color: `${theme.palette.success.contrastText} !important`,
    border: 'none !important',
    padding: '0.5rem 1.5rem !important',
    margin: '4px 0',
    borderRadius: '2rem !important',
    transitionDuration: '0.4s',
    '&:hover': {
      backgroundColor: `${theme.palette.success.light} !important`,
      border: 'none !important'
    }
  },

  cancelBtn: {
    backgroundColor: `${theme.palette.error.main} !important`,
    color: `${theme.palette.error.contrastText} !important`,
    border: 'none',
    padding: '0.5rem 1.5rem !important',
    margin: '4px 0',
    borderRadius: '2rem !important',
    transitionDuration: '0.4s',
    '&:hover': {
      backgroundColor: `${theme.palette.error.light} !important`,
      border: 'none !important'
    }
  }
}))

export default useStyles
