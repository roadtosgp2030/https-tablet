import { createContext, useContext } from "react";

export const StageStateContext = createContext()

export const useStageStateContext = () => {
    const ctx = useContext(StageStateContext)
    if (!ctx) {
        throw 'Stage state not exists.'
    }
    return ctx
}
