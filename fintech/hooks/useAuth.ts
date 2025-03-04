import { useState } from "react";
const useAuth = () => {
    const [isSignedIn, setisSignedIn]  = useState(false);
    return {
        isSignedIn,
        setisSignedIn
    }
}

export default useAuth;
