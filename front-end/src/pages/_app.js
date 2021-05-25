import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Provider as UserProvider } from "../context/UserContext";
const GlobalStyle = createGlobalStyle`
  body {
    background-color:"#F3F3F3";
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a{
    text-decoration:none;
    color:black;
    font-weight:bold;
  }
`;

const theme = {
  colors: {
    text: "#5270f3",
    lightBlue: "#3498db",
    blue: "#85c1e9",
    pearl: "#f6f0cc",
    black: "#242424",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </ThemeProvider>
    </>
  );
}
