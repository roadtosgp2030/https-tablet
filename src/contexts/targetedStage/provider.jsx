import { useState } from "react";
import { TargetedStageContext } from ".";

export default function TargetedStageProvider({ children }) {
    const [redo, setRedo] = useState(false);
    const [targetedStage, setTargetedStage] = useState("鋳込み - Đúc");
    const [equipments, setEquipments] = useState({
        data: [],
        target: ''
    });

    const updateState = (state) => {
        setRedo(state.redo);
        setTargetedStage(state.targetedStage);
        setEquipments(state.equipments);
    };

    const updateTargetedEquipment = (target) => {
        setEquipments(prev => {
            return {...prev, target }
        })
    }

    return (
        <TargetedStageContext.Provider
            value={{
                stageState: { redo, targetedStage, equipments },
                updateState,
                updateTargetedEquipment,
                setRedo
            }}
        >
            {children}
        </TargetedStageContext.Provider>
    );
}
