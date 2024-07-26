import { useMemo, useReducer } from 'react'
import Router from './router.jsx'
import Provider from './context'
import { store } from '../Core/store.js'
import { Reducer } from '../Core/Reducer/index.js'

function App() {

     const [state, dispatch] = useReducer(Reducer, store)

     return (
          <Provider value={{ dispatch, state }}>
               <>
                    {useMemo(() => {
                         return (
                              <Router/>)
                    }, [])}
               </>
          </Provider >
     )

}

export default App
