import { FC } from 'react'

import { Link } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

import { isStringArray } from '@/utils'
import Highlighted from '@/components/highlighted/Highlighted'

import '@/assets/styles/search.css'

export interface ISearchResultProps {
  results: string[] | unknown[] | unknown
  entity: string
  maxResults?: number
  search?: string
}

const EntityLink: FC<{ entity: string; children: any }> = ({ entity, children }) => (
  <Link to={`/${entity}`} style={{ textDecoration: 'none', color: 'var(--primary-main)' }}>
    {children}
  </Link>
)

const SearchResults: FC<ISearchResultProps> = ({ results, entity, maxResults = 3, search }) => {
  const resultsArray = results as string[]
  if (!isStringArray(resultsArray) || resultsArray.length === 0) {
    return null
  }

  return (
    <Container>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <EntityLink entity={entity}>
          <Typography variant='h6' sx={{ textTransform: 'capitalize', margin: '0.5rem 0' }}>
            {entity}
          </Typography>
        </EntityLink>
        <EntityLink entity={entity}>
          <IconButton sx={{ fontSize: 'small' }}>
            <MoreHorizIcon className='search-result-icon' />
          </IconButton>
        </EntityLink>
      </Box>
      <List>
        {resultsArray.slice(0, maxResults).map((result: string) => {
          const highlight = { text: result, search }

          return (
            <ListItem key={uuid()}>
              <ListItemText>
                <Highlighted highlight={highlight} />
              </ListItemText>
            </ListItem>
          )
        })}
      </List>
    </Container>
  )
}

export default SearchResults
