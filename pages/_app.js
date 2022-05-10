import "../styles/globals.css";
import "../styles/codeblocks.css";

// import type { AppProps } from 'next/app';
import PlausibleProvider from 'next-plausible';
import { ThemeProvider } from 'next-themes';
import { MDXRemote } from "next-mdx-remote";
// import { useSupabase } from '@/hooks/useSupabase';

function MyApp({ Component, pageProps}) {
  // const { session, supabaseClient } = useSupabase();
  return (
    <PlausibleProvider domain="braydoncoyer.dev" trackOutboundLinks={true}>
      {/* <ThemeProvider attribute="class"> */}
      <Component {...pageProps} />
        {/* <Component session={session} supabase={supabaseClient} {...pageProps} /> */}
      {/* </ThemeProvider> */}
    </PlausibleProvider>
  );
}

export default MyApp;