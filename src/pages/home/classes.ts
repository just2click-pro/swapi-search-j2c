import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme?: any) => ({
  fade: {
    '&.fade-enter': {
      opacity: 0
    },
    '&.fade-enter-active': {
      opacity: 1,
      transition: 'opacity 300ms ease-in'
    },
    '&:fade-exit': {
      opacity: 1
    },
    '&.fade-exit-active': {
      opacity: 0,
      transition: 'opacity 300ms ease-in'
    }
  }
}))

export default useStyles