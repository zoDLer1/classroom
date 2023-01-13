import { useLocation, useNavigate, useParams } from "react-router-dom";
import React from "react";


export default ({children}) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
        <>
            {React.cloneElement(children, {router:{ location, navigate, params }})}
        </>
    );
}

