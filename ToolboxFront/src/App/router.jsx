import { Suspense } from 'react'
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'
import useRoutes from '../Hooks/useRoutes'
import CustomRoute from '../Pages/CustomRoute'

const Router = () => {

     const routes = useRoutes()

     return (
          <BrowserRouter>
               <Suspense>
                    <Switch>
                         {
                              <Route>
                                   {routes.map((route) => (
                                        <Route
                                             key={route.name}
                                             path={route.path}
                                             element={<CustomRoute element={route.element} />}
                                        />
                                   ))}
                              </Route>

                         }
                    </Switch>
               </Suspense>
          </BrowserRouter>
     )
}

export default Router
