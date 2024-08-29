const TimingStage = ({ isStop }) => {
    return (
        <div className="flex justify-center gap-10 mt-12 relative">
            {isStop && <div className="absolute left-4 uppercase text-red-700 font-bold text-xl">Tạm dừng</div>}
            <div className="flex justify-center flex-col items-center gap-1 relative">
                <div className="uppercase text-lg text-center absolute -top-7">
                    days
                </div>
                <div className="bg-darkBlue-200 text-darkBlue-600 text-3xl font-bold rounded size-16 flex items-center justify-center">
                    01
                </div>
            </div>
            <div className="flex justify-center flex-col items-center gap-1 relative">
                <div className="uppercase text-lg text-center absolute -top-7">
                    hours
                </div>
                <div className="bg-darkBlue-200 text-darkBlue-600 text-3xl font-bold rounded size-16 flex items-center justify-center">
                    10
                </div>
            </div>
            <div className="flex justify-centser flex-col items-center gap-1 relative">
                <div className="uppercase text-lg text-center absolute -top-7">
                    minutes
                </div>
                <div className="bg-darkBlue-200 text-darkBlue-600 text-3xl font-bold rounded size-16 flex items-center justify-center">
                    09
                </div>
            </div>
            <div className="flex justify-center flex-col items-center gap-1 relative">
                <div className="uppercase text-lg text-center absolute -top-7">
                    seconds
                </div>
                <div className="bg-darkBlue-200 text-darkBlue-600 text-3xl font-bold rounded size-16 flex items-center justify-center">
                    09
                </div>
            </div>
        </div>
    );
};

export default TimingStage;
