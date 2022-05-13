import "../src/fake-db";
import '../src/components/products/meia-query.css';
import ErrorBoundary from '../src/components/error';
import { Toaster } from 'react-hot-toast';
import Head from "next/head";
import Router from "next/router";
import "nprogress/nprogress.css";
import nProgress from "nprogress";
import MuiTheme from "theme/MuiTheme";
import "simplebar/dist/simplebar.min.css";
import OpenGraphTags from "utils/OpenGraphTags";
import React, { Fragment, useEffect } from "react";
import GoogleAnalytics from "utils/GoogleAnalytics";
import { AppProvider } from "contexts/app/AppContext";
import createEmotionCache from "../src/createEmotionCache";
import { CacheProvider } from "@emotion/react"; // Client-side cache, shared for the whole session of the user in the browser.
import { PersistGate } from 'redux-persist/integration/react';
import { Provider as ReduxProvider } from 'react-redux';
import { persistor, store } from 'redux-actions/store';
import {useRouter} from 'next/router';
import Script from 'next/script';
import * as gtag from '../lib/gtag';

const clientSideEmotionCache = createEmotionCache();
// export const cache = createCache({ key: 'css', prepend: true })
//Binding events.
Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done()); // small change

nProgress.configure({
  showSpinner: false
});

const App = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps
}) => {
  const router = useRouter();
  const Layout = Component.layout || Fragment;
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    
  }, []);

  useEffect(()=>{
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router?.events]);
  return <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        
        <GoogleAnalytics />
        <OpenGraphTags />
      </Head>
      <Script
         strategy="afterInteractive"
         src={`https://www.googletagmanager.com/gtag/js?id=G-ZGBN470D68`}
      />
      <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZGBN470D68', {
                page_path: window.location.pathname,
              });
            `,
          }}
      />
      <ErrorBoundary>
       <ReduxProvider store={store}>
        <PersistGate persistor={persistor}>
        <AppProvider>
        <MuiTheme>
          <Layout>
             <Toaster position="top-center" />
            <Component {...pageProps} />
          </Layout>
          </MuiTheme>
        </AppProvider>
       </PersistGate>
      </ReduxProvider>
      </ErrorBoundary>
      ,
    </CacheProvider>;
}; // Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// App.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//   return { ...appProps };
// };


export default App;