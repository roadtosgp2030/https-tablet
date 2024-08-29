import { createContext, useContext } from "react";

export const TargetedStageContext = createContext({
    stageState: {
        redo: true,
        targetedStage: '', 
        equipments: {
            data: [],
            target: ''
        }
    },
    updateState: () => {},
    updateTargetedEquipment: () => {},
    setRedo: () => {}
})

export const useTargetedStageContext = () => {
    const ctx = useContext(TargetedStageContext)
    if (!ctx) {
        throw 'Targeted stage not provided.'
    }
    return ctx
}
