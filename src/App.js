import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import Header from "./layout/Header";
import Main from "./page/MainContainer";
import Footer from './layout/Footer';
import Modal from './component/modal/Modal'

const theme = {
    appMaxWidth: '560px',
};

const StyledApp = styled.div`
  text-align: center;
  max-width: ${theme.appMaxWidth};
  margin: 0 auto;
  background-color: darkgray;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-radius: 10px; /* 둥근 사각형을 위한 border-radius 값 */
  box-sizing: content-box;
`;

function App() {
    return (
        <ThemeProvider theme={theme}>
            <StyledApp>
                <Header />
                <Main />
                <Modal />
                <Footer />
            </StyledApp>
        </ThemeProvider>
    );
}

export default App;
