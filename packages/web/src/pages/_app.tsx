import { ApolloProvider } from "@apollo/react-hooks";
import { MDXProvider } from "@mdx-js/react";
import { ApolloClient } from "apollo-boost";
import App from "next/app";
import { ThemeProvider } from "styled-components";
import { Footer } from "../components/Footer";
import { Layout } from "../components/Layout";
import { Nav } from "../components/Nav";
import withApollo from "../lib/withApollo";
import { GlobalStyle } from "../styles/GlobalStyle";
import { components } from "../styles/markdown";
import { theme } from "../styles/theme";

interface Props {
  apollo: ApolloClient<any>;
}

class MyApp extends App<Props> {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <>
        <ApolloProvider client={apollo}>
          <ThemeProvider theme={theme}>
            <MDXProvider components={components}>
              <>
                <Nav />
                <Layout pt="125px">
                  <GlobalStyle />
                  <Component {...pageProps} />
                </Layout>
                <Footer />
              </>
            </MDXProvider>
          </ThemeProvider>
        </ApolloProvider>
      </>
    );
  }
}

export default withApollo(MyApp);
