import { FC } from 'react'
import { styled } from '@mui/material'

import Home from '@/pages/home/Home'

const App: FC = () => {
  return (
    <Root>
      <Home />
    </Root>
  )
}

const Root = styled('div')`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');

  padding: 1% 2% 10vh 2%;
  width: 100%;
  min-height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;

  & a {
    text-decoration: none;
    color: ${({ theme: { palette } }) => (palette.mode === 'dark' ? palette.primary.dark : palette.primary.light)};
  }
`

export default App
