import { useState, useEffect } from "react";

import downArrow from "../../assets/icons/down-arrow.svg";
import { useDialogContext } from "../../contexts/dialog";
import { useTargetedStageContext } from "../../contexts/targetedStage";

const Dropdown = ({ options }) => {
    const [isShowList, setIsShowList] = useState(false);
    const dialogCtx = useDialogContext();
    const targetedStageCtx = useTargetedStageContext();

    useEffect(() => {
        const clearShowList = () => {
            setIsShowList(false);
        };
        document.addEventListener("click", clearShowList);
        document.addEventListener("scroll", clearShowList);
        return () => {
            window.removeEventListener("click", clearShowList);
            document.removeEventListener("scroll", clearShowList);
        };
    }, []);

    const toggleList = (e) => {
        e.stopPropagation();
        setIsShowList((prev) => !prev);
    };

    const selectOption = (e) => {
        e.stopPropagation();
        dialogCtx.showDialog({
            show: true,
            icon: "red-warning",
            confirmInfo: {
                times: 2,
                current: 1,
                aimBtn: "confirm", // cancel | confirm
            },
            cancel: {
                content: "Hủy",
                callback: () => {},
            },
            confirm: {
                content: "Xác nhận",
                callback: () =>
                    targetedStageCtx.updateState({
                        redo: false,
                        targetedStage: e.target.textContent,
                        equipments: {
                            data: [
                                "BOSS NC seibu",
                                "Boss TUE 1&2",
                                "Boss TSS & TSS-C",
                            ],
                            target: ""
                        },
                    }),
            },
            html: (
                <div>
                    <h2 className="font-bold text-center text-xl mb-2 overflow-hidden break-words">
                        Bạn có chắc chắn muốn đổi sang công đoạn{" "}
                        <span className="text-red-700">
                            {e.target.textContent}
                        </span>{" "}
                        không?
                    </h2>
                    <p className="text-center mb-8">
                        Hành động này không thể được hoàn tác. Bạn có chắc chắn
                        muốn tiếp tục không?
                    </p>
                </div>
            ),
        });
        setIsShowList(false);
    };

    return (
        <div className="relative w-60">
            <div
                className="text-orange-500 font-semibold py-2 px-4 border border-orange-500 rounded w-full relative truncate cursor-pointer select-none"
                onClick={toggleList}
            >
                {targetedStageCtx.stageState.targetedStage}{" "}
                <img
                    src={downArrow}
                    alt="down arrow"
                    className="absolute top-1/2 -translate-y-1/2 right-4"
                />
            </div>
            {isShowList && (
                <ul className="border border-orange-500 rounded-b absolute w-full z-10 bg-white max-h-36 overflow-y-scroll select-none">
                    {options.map((option) => (
                        <li
                            key={option.value}
                            className="active:bg-slate-100 p-2 truncate cursor-pointer"
                            onClick={selectOption}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
