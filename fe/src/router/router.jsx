import styled from "styled-components";
import { useState, useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import modal from '../global/modal'
import { useRecoilState } from 'recoil';

import NavBar from '../common/NavBar'
import Footer from '../common/Footer'

import routes from './routes'

const Core = styled.div`
  margin-top: ${props => props.nav ? "50" : "0"}px;
  width: 100%;
  min-height: 100vh;
`
const Content = styled.div`
  display: flex;
`
const Modal = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
`
const Router = () => {
  const location = useLocation()
  const [renderInfo, setRenderInfo] = useState({
      nav: false,
      Footer: false
  })
  const [getModal, setModal] = useRecoilState(modal)
  useLayoutEffect((element) => {
      let temp = routes.find(element => element.path === location.pathname.split('/')[1])
      if(temp === undefined) {
          temp = routes.find(element => element.path === "*")
      }
      setRenderInfo(temp)
  }, [location.pathname])
  return (
    <>
      { getModal === null ? <></> : 
      <>
          <Modal/>
      </>}
      <Content>
          { renderInfo.nav ? <NavBar/> : null}
          <Core nav={renderInfo.nav}>
              <Routes>
                  {
                      routes.map(element => {
                          return <Route
                              path={element.path}
                              element={element.component}
                              key={element.path}/>
                      })
                  }
              </Routes>
          </Core>
      </Content>
      { renderInfo.nav ? <Footer/> : null}
    </>
  )
}

export default Router;