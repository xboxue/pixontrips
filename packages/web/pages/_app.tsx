import App from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Footer } from "../components/Footer";
import { Layout } from "../components/Layout";
import { Nav } from "../components/Nav";
import { theme } from "../styles/theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${props => props.theme.colors.background};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }
`;

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <ThemeProvider theme={theme}>
          <>
            <Nav />
            <Layout pt="125px">
              <GlobalStyle />
              <Component {...pageProps} />
            </Layout>
            <Footer />
          </>
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;
