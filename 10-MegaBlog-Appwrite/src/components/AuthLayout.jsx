import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Protected({ children, authentication = true }) {

    const navigte = useNavigate();
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector((state) => state.auth.status);

    useEffect(() => {
        //TODO: make it more easy to understand

        // if (authStatus ===true){
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }

        //let authValue = authStatus === true ? true : false

        if (authentication && authStatus !== authentication) {
            navigte('/login');
        } else if (!authentication && authStatus !== authentication) {
            navigte('/');
        }
        setLoader(false);
    }, [authStatus, navigte, authentication])

    return loader ? <h1>Loading...</h1> : <>{children}</>
}