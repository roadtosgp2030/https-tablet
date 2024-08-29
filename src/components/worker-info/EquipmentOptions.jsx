import { useTargetedStageContext } from "../../contexts/targetedStage";

const EquipmentOptions = ({ equipments }) => {
    const { updateTargetedEquipment } = useTargetedStageContext();

    return (
        <div className="mb-8">
            <h3 className="font-semibold mb-2">Thiết bị thực hiện:</h3>
            <div className="grid grid-cols-3 gap-4">
                {equipments.data.map((equipment, idx) => {
                    return (
                        <div
                            key={equipment}
                            className={`flex gap-3 items-center 
                              ${(idx + 1) % 2 === 0 ? "justify-self-center" : ""} 
                              ${(idx + 1) % 3 === 0 ? "justify-self-end" : ""}`}
                        >
                            <input
                                type="radio"
                                name="equipment"
                                id={equipment}
                                value={equipment}
                                onChange={() =>
                                    updateTargetedEquipment(equipment)
                                }
                                className="scale-150"
                            />
                            <label htmlFor={equipment}>{equipment}</label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default EquipmentOptions;
