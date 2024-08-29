import { createContext, useContext } from "react";

export const TempImagesContext = createContext()

export const useTempImagesContext = () => {
    const ctx = useContext(TempImagesContext)
    if (!ctx) {
        throw 'temp images context not exists.'
    }
    return ctx
}
