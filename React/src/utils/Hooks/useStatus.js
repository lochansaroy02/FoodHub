import { useState } from "react"

const useStatus = () => {

    const [status, setStatus] = useState(true);
    addEventListener("offline", () => {
        setStatus(false)
    });
    addEventListener("online", () => {
        setStatus(false)
    });

    return status;
}

export default useStatus;