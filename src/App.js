import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import Header from "./layout/Header";
import Main from "./page/MainContainer";
import Footer from './layout/Footer';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <StyledApp>
                <Header />
                <Main />
                <Footer />
            </StyledApp>
        </ThemeProvider>
    );
}


const theme = {
    appMaxWidth: '560px',
};

const StyledApp = styled.div`
  text-align: center;
  max-width: ${theme.appMaxWidth};
  margin: 0 auto;
  background-color: darkgray;
  height: 70vh;
  display: flex;
  flex-direction: column;
  border-radius: 10px; 
  box-sizing: content-box;
`;

export default App;
