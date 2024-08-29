import { useState } from "react";
import { StageStateContext } from ".";

export default function StageStateProvider({ children }) {
    const [stageState, setStageState] = useState('stop'); // begin | running | stop | complete

    return <StageStateContext.Provider value={{
        stageState, setStageState
    }}>
            {children}
        </StageStateContext.Provider>;
};
