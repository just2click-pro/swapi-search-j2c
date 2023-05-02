import { FC, useMemo } from 'react'
import styled from '@emotion/styled'

const MarkedText = styled.mark`
  background-color: ${({ theme: { palette } }) =>
    palette.mode === 'dark' ? palette.primary.light : palette.primary.dark};
  color: ${({ theme: { palette } }) => (palette.mode === 'dark' ? palette.primary.dark : palette.primary.light)};
`

interface IHighlighted {
  text?: string
  search?: string
}

const Highlighted: FC<{ highlight: IHighlighted }> = ({ highlight }) => {
  const { text = '', search = '' } = highlight

  const replace = useMemo(() => {
    const SPECIAL_CHARS = /([.?*+^?[\]\\(){}|-])/g
    const escapedSearch = search.replace(SPECIAL_CHARS, '\\$1')

    return new RegExp(`(${escapedSearch})`, 'i')
  }, [search])

  return (
    <span>
      {search === ''
        ? text
        : text
            .split(replace)
            .filter(part => part !== '')
            .map((part, index) => (replace.test(part) ? <MarkedText key={part + index}>{part}</MarkedText> : part))}
    </span>
  )
}

export default Highlighted
