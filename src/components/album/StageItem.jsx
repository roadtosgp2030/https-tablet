const StageItem = ({ stagesInfo, changeState, idx, step }) => {
    const changeStage = (process, id) => {
        if (process) changeState(id);
    };

    return (
        <li
            onClick={() => changeStage(step.process, idx + 1)}
            className={`p-2 my-2 cursor-pointer select-none ${
                stagesInfo.currentStage === idx + 1
                    ? "bg-darkBlue-400/50"
                    : step.process
                    ? "bg-slate-100"
                    : "text-zinc-600 bg-zinc-400/60 cursor-not-allowed"
            } rounded-lg`}
            disabled={!step.process}
        >
            <span className="font-medium">{idx + 1}.</span> {step.title}
        </li>
    );
};

export default StageItem;
