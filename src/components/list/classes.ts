import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme?: any) => ({
  listPaper: {
    backgroundColor: `${theme.palette.background.default} !important`,
    marginTop: '3.5rem !important'
  },
  listPaperTopBox: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  listPaperInnerBox: {
    display: 'flex'
  },

  listHeaderTitle: {
    color: theme.palette.primary.main,
    margin: '0.5rem !important'
  },
  listIconButton: {
    height: '2.5rem',
    margin: '0.5rem !important',
    width: '2.5rem'
  },

  listEntityTitle: {
    color: theme.palette.primary.light
  },
  listEntityIcon: {
    margin: '0.8rem 0 0 0.5rem'
  },
  listTableHeaderCell: {
    textAlign: 'right'
  }
}))

export default useStyles
