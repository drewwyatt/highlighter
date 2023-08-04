import { FC, PropsWithChildren, createContext, useContext } from 'react'

export type Config = {
  className: string
}

const DEFAULT_CONFIG: Config = {
  className: 'highlighter',
}

const CONTEXT = createContext<Config>(DEFAULT_CONFIG)

export const ConfigProvider: FC<
  PropsWithChildren<{
    config: Config
  }>
> = ({ children, config }) => (
  <CONTEXT.Provider value={config}>{children}</CONTEXT.Provider>
)

export const useConfig = () => useContext(CONTEXT)
