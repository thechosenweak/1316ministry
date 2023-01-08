import React from "react";

export default function Initializer({children}){

    React.useEffect(() => {
        // trigger initialize data
    },[])

    return (
        <>
            {children}
        </>
    )
}