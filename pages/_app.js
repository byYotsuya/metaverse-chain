import { MoralisProvider } from 'react-moralis';
import '../styles/globals.css';

console.log(process.env.NEXT_PUBLIC_APP_ID);

function MyApp ({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId='qiOjA7LmKBkqN5JgrWy0T0fMtD55rDGpEnDoGB6q'
      serverUrl='https://1cu5ib2apeyl.usemoralis.com:2053/server'

    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
