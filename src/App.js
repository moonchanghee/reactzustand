import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./layout/Header";
import Main from "./page/main";
import Footer from './layout/Footer';
import Scrap from './page/scrap';

function App() {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <StyledApp>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/scrap" element={<Scrap />} />
                    </Routes>
                    <Footer />
                </StyledApp>
            </ThemeProvider>
        </Router>
    );
}

const theme = {
    appMaxWidth: '560px',
};

const StyledApp = styled.div`
  text-align: center;
  max-width: ${theme.appMaxWidth};
  margin: 0 auto;
  background-color: #edeff3;
  height: 70vh;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-sizing: content-box;
  border: 2px solid black; /* 검정색 테두리 추가 */
`;

export default App;
