import { createContext } from 'react'

export const Context = createContext({ state: {}, dispatch: () => { } })

const Provider = ({ value, children }) => <Context.Provider value={value}>{children}</Context.Provider>

export { Context as CONTEXT }
export default Provider