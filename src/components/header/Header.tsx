import { FC } from 'react'

import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import SvgIcon from '@mui/material/SvgIcon'

import { ReactComponent as Logo } from '@/assets/images/planets.svg'
import DarkModeToggle from './DarkModeToggle'

import useStyles from './classes'

const Header: FC = () => {
  const classes = useStyles()

  return (
    <AppBar position='fixed' className={classes.appHeader}>
      <Container maxWidth='xl'>
        <Toolbar className={classes.appHeaderToolbar}>
          <SvgIcon className={classes.appHeaderLogo}>
            <Logo />
          </SvgIcon>
          <Typography variant='h6' noWrap component='a' href='/' className={classes.appHeaderTitle}>
            Star Wars Search
          </Typography>
          <Box className={classes.appHeaderToggle}>
            <DarkModeToggle />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
