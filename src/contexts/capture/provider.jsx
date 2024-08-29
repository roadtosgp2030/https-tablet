import { useState } from "react";
import { CaptureContext } from ".";

export default function CaptureContextProvider({ children }) {
    const [isCapture, setIsCapture] = useState(false);

    return <CaptureContext.Provider value={{ isCapture, setIsCapture }}>
        {children}
    </CaptureContext.Provider>
}
