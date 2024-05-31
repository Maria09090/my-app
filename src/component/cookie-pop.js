import React from "react";
import { useCookies } from "react-cookie";
import "./cookie-pop.css";

const CookiePop = ({ onAccept }) => {
    const [cookies, setCookie, removeCooie] = useCookies(["cookieAccept"]);

    const handleAcceptCookie = () => {
        const options = {
            path: "/", 
            sameSite: "lax", 
            secure: true,
            expires: new Date(Date.now() + 2592000000)
        };
        setCookie("cookieAccept", true, options);
        if (onAccept) {
            onAccept();
        }
    };

    if (cookies.cookieAccept) {
        return null;
    }

    return (
        <div className="body">
            <p className="text">dene siden bruker cookies</p>
            <button  className="buttopn" onClick={handleAcceptCookie} aria-label="Accept cookies">accept</button>
        </div>
    );
};

export default CookiePop;
