'use client'
import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

type State = [query: string, setQuery: Dispatch<SetStateAction<string>>]

const DEFAULT_STATE: State = ['', () => null]

const CONTEXT = createContext<State>(DEFAULT_STATE)

export const Provider: FC<PropsWithChildren> = ({ children }) => {
  const state = useState('')

  return <CONTEXT.Provider value={state}>{children}</CONTEXT.Provider>
}

export const useSearchQuery = () => useContext(CONTEXT)[0]
export const useSearch = () => useContext(CONTEXT)
