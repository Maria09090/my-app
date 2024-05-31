import React from "react";
import { useCookies } from "react-cookie";
import CookieConsent from "./CookieConsent"; // Endre stien til riktig import for CookieConsent. til meg selv.


function App({ Component, pageProps }) {
    const [cookies] = useCookies(['cookieConsent']);
    
    return (
        <>
        <link rel="./istockphoto.jpg" href="./istockphoto.jpg" />
        <Component {...pageProps} />
        {!cookies.cookieConsent && <CookieConsent />}
        </>
    );
}

// App.getInitialProps = async () => {
//     // Logikk her hvis nødvendig for Next.js
// };

export default App;