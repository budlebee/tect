import '../styles/globals.css';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
      <title>tect.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav class="navbar">
        <span className="navbar-item">
          <Link href="/" as={ process.env.BACKEND_URL + '/'}>
            <a>TechTrees</a>
          </Link>
        </span>
        <span className="navbar-item">
          <Link href="/about" as={ process.env.BACKEND_URL + '/about'}>
            <a>About</a>
          </Link>
        </span>
        {/*<Link href="/">
            <a class="navbar-item">Articles</a>
          </Link>
          <Link href="/qna/main">
            <a class="navbar-item">QnA</a>
          </Link>*/}
      </nav>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
