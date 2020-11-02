import '../styles/globals.css';
import Link from 'next/link';
import Head from 'next/head';
import { AuthProvider } from '../auth';
import HtmlHeader from './components/htmlHeader';
import Navbar from './components/navbar';
import { useAuth } from '../auth';
import App from 'next/app';
import nookies from 'nookies';

function MyApp({ Component, pageProps }) {
  const { user } = useAuth();
  return (
    <>
      <AuthProvider>
        <Head>
          <title>tect.dev</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          ></meta>
        </Head>
        <nav className="navbar">
          <span className="navbar-item">
            <Link href="/" as={process.env.BACKEND_URL + '/'}>
              <a>TechTrees</a>
            </Link>
          </span>
          <span className="navbar-item">
            <Link
              href="/articles/main"
              as={process.env.BACKEND_URL + '/articles/main'}
            >
              <a>Articles</a>
            </Link>
          </span>
          <span className="navbar-item">
            <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
              <a>About</a>
            </Link>
          </span>
        </nav>

        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const { ctx } = appContext;
  const appProps = await App.getInitialProps(appContext);
  //console.log(appContext);
  return { ...appProps };
};
/*
MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const { ctx } = appContext;
  // Calls `getInitialProps` and fills `appProps.pageProps`
  let error;
  //const appProps = await App.getInitialProps(appContext);

  //const { firebaseToken } = nookies(ctx);

  // If token exists run Firebase validation on server side before rendering.
  if (firebaseToken) {
    try {
      const headers = {
        'Context-Type': 'application/json',
        Authorization: JSON.stringify({ token: firebaseToken }),
      };
      const result = await fetch(`${server}/api/validate`, {
        headers,
      }).then((res) => res.json());
      return { ...result, ...appProps };
    } catch (e) {
      console.log(e);
    }
  }

  return { ...appProps };
};
*/
export default MyApp;
