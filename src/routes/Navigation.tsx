import { BrowserRouter, Route, Routes } from "react-router-dom"
import { routes } from "./routes"

const Navigator = () => {
  return (
    <BrowserRouter>
      <Routes>
        { routes.map((route, index) => {
            return (
              <Route
                  key={index}
                  path={route.path}
                  element={
                    <route.layout>
                      <route.component />
                    </route.layout>
                  }
              />
            )
          })
        }   
      </Routes>
    </BrowserRouter>
  )
}

export default Navigator