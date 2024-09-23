import styled from "styled-components";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./pages/DefaultLayout";
import Inicio from "./pages/Inicio";
import Favoritos from "./pages/Favoritos";
import { Suspense } from "react";

const StyledApp = styled.div`
    width: 100vw;
    height: 100vh;
`

function App() {
  return (
    <StyledApp>
      <BrowserRouter>
        <RecoilRoot>
          <Suspense fallback="Está carregando">
            <Routes>
              <Route path="/" element={<DefaultLayout />}>
                <Route index element={<Inicio />} />
                <Route path="favoritos" element={<Favoritos />} />
                <Route path="categorias" element={<></>} />
                <Route path="estante" element={<></>} />
              </Route>
            </Routes>
          </Suspense>
        </RecoilRoot>
      </BrowserRouter>
    </StyledApp>
  )
}

export default App

