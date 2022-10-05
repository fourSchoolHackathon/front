import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useLayoutEffect, useState } from 'react'

import * as A from "./App.style"

import routes from './routes'

import NavBar from './common/navbar'

function App() {
  const location = useLocation();

  const [renderInfo,setRenderInfo] = useState({
    nav:true,
    footer:true
  })

  useLayoutEffect((element) => {
    console.log(location.pathname.split('/'))
    let temp = routes.find(element => element.path === location.pathname.split('/')[1])
    if(temp === undefined) {
        temp = routes.find(element => element.path === "*")
    }
    console.log(temp)
    setRenderInfo({nav:temp.nav,footer:temp.footer})
  },[location.pathname])

  return (
    <>
      <A.Core>
      <Routes>
        {
          routes.map(element => {
            return <Route 
              path={element.path}
              element={element.element}
              key={element.path}
            />
          })
        }
      </Routes>
    {renderInfo.nav && <NavBar/>}
    </A.Core>
    {/* {renderInfo.footer && <Footer/>} */}
    </>
  )
}

export default App
