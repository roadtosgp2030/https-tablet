import StageItem from "./StageItem";

const StageList = ({ stagesInfo, changeState }) => {
    return (
        <nav className="w-1/4 bg-slate-300 px-3 font-bold text-slate-800 self-stretch h-full overflow-auto">
            <ul className="py-2">
                {stagesInfo.stages.map((step, idx) => (
                    <StageItem key={idx} stagesInfo={stagesInfo} changeState={changeState} idx={idx} step={step} />
                ))}
            </ul>
        </nav>
    );
};

export default StageList;
