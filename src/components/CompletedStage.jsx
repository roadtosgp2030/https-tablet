import { Link } from "react-router-dom";

import CardBox from "./ui/CardBox";
import { completedStageUrl } from "../utils/generateUrl";

const CompletedStage = ({ screen, stages }) => {
    return (
        <CardBox
            className={`${stages.length === 0 ? "flex justify-between" : ""}`}
        >
            <div className="font-bold">Công đoạn đã hoàn thành</div>
            <div className={`flex flex-row flex-wrap gap-4 ${stages.length > 0 ? 'mt-2 *:py-2 *:px-4 *:rounded' : ''}`}>
                {stages.length > 0 ? stages.map((stage) => (
                    <Link
                        key={stage.id}
                        to={
                            screen === "qc"
                                ? "#"
                                : completedStageUrl("12345", stage.id)
                        }
                        className={`${
                            screen === "qc"
                                ? "border border-gray-800 bg-transparent text-gray-800"
                                : "text-darkBlue-400 bg-darkBlue-200"
                        }`}
                    >
                        {stage.title}
                    </Link>
                )) : <div>-----</div>}
            </div>
        </CardBox>
    );
};

export default CompletedStage;
