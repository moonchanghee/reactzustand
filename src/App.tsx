import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./layout/Header";
import Main from "./page/main";
import Footer from './layout/Footer';
import Scrap from './page/scrap';

interface Theme {
    appMaxWidth: string;
}

const theme: Theme = {
    appMaxWidth: '560px',
};

function App(){
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

const StyledApp = styled.div`
  text-align: center;
  max-width: ${(props) => props.theme.appMaxWidth};
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
