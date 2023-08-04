import { FC, useMemo } from 'react'
import { useConfig } from './config'

type Props = {
  children: string
  pattern: string
}

const useHighlightedText = (text: string, pattern: string) =>
  useMemo(() => {
    const haystack = text.toLowerCase()
    const needle = pattern.toLowerCase()
    const startIndex = haystack.indexOf(needle)
    if (startIndex === -1) return text
    const endIndex = startIndex + pattern.length

    const head = text.slice(0, startIndex)
    const match = text.slice(startIndex, endIndex)
    const tail = text.slice(endIndex)

    return (
      <>
        {head}
        <span className="highlight">{match}</span>
        {tail}
      </>
    )
  }, [text, pattern])

const Highlighter: FC<Props> = ({ pattern, children: haystack }) => (
  <>{useHighlightedText(haystack, pattern)}</>
)

export default Highlighter
