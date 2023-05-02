import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme?: any) => ({
  search: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    textAlign: 'center'
  },
  searchResultsBox: {
    maxHeight: '70vh',
    overflow: 'auto'
  },
  emptyText: {
    display: 'flex',
    justifyContent: 'center',
    padding: '1rem'
  }
}))

export default useStyles
