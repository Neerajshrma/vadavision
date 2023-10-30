import '../src/app/globals.css';
import Head from 'next/head';
export default function App({ Component, pageProps }) {
    return(
      <main>  
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700|Marck+Script:400" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;800;900;1000&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css" rel="stylesheet" />
          <link rel="icon" href="/images/favicon.ico" sizes="any" />
          <script src="https://sales.vadavision.com/focus/1.js" type="text/javascript" charset="utf-8" async="async"></script>
        </Head>
         <Component {...pageProps} />
      </main>
    );
  }