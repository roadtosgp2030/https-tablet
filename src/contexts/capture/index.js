import { createContext, useContext } from "react";

export const CaptureContext = createContext()

export const useCaptureContext = () => {
    const ctx = useContext(CaptureContext)
    if (!ctx) throw 'Capture context not exists.'
    return ctx
}
