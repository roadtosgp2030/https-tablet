import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useDialogContext } from "../../contexts/dialog";
import Dropdown from "./Dropdown";
import { useTargetedStageContext } from "../../contexts/targetedStage";
import redReplayIcon from "../../assets/icons/red-replay.svg";
import EquipmentOptions from "./EquipmentOptions";
import FindingStaff from "./FindingStaff";
import ListStaff from "./ListStaff";
import { useStageStateContext } from "../../contexts/stageState";

const options = [
    { value: "volvo", label: "Volvo" },
    { value: "volvo2", label: "Volvo2" },
    { value: "volvo3", label: "Volvo3" },
    { value: "volvo4", label: "Volvo4" },
    { value: "volvo5", label: "Volvo5" },
    { value: "volvo6", label: "Volvo6" },
];

const BeginStage = () => {
    const dialogCtx = useDialogContext();
    const targetedStageCtx = useTargetedStageContext();
    const navigate = useNavigate();
    const [selectedStaffs, setSelectedStaffs] = useState([]);
    const { setStageState } = useStageStateContext();
    const { productId } = useParams()

    const removeStaff = (staffId) => {
        setSelectedStaffs((prev) =>
            prev.filter((staff) => staff.id !== staffId)
        );
    };

    const beginStage = () => {
        dialogCtx.showDialog({
            show: true,
            icon: "alarm",
            confirmInfo: {
                times: 1,
                current: 1,
                aimBtn: "confirm", // cancel | confirm
            },
            cancel: {
                content: "Hủy",
                callback: () => {},
            },
            confirm: {
                content: "Xác nhận",
                callback: () => {
                    setStageState("running");
                    // navigate("/scan/worker");
                },
            },
            html: (
                <div>
                    <h2 className="font-bold text-center text-xl mb-2 overflow-hidden break-words">
                        Công đoạn{" "}
                        <span className="text-red-700">Gia công Boss</span> sẽ
                        bắt đầu ngay bây giờ sau khi bạn xác nhận!
                    </h2>
                    <p className="text-center mb-8">
                        Hành động này không thể được hoàn tác. Bạn có chắc chắn
                        muốn tiếp tục không?
                    </p>
                </div>
            ),
        });
    };

    return (
        <>
            <div className="flex justify-between my-12 items-center relative">
                <div className="font-bold text-xl">
                    Công đoạn chuẩn bị thực hiện:
                </div>
                <Dropdown options={options} />
                {targetedStageCtx.stageState.redo && (
                    <img
                        src={redReplayIcon}
                        alt="replay icon"
                        className="absolute top-0 right-0 -translate-y-full"
                    />
                )}
            </div>

            {targetedStageCtx.stageState.equipments.data &&
                targetedStageCtx.stageState.equipments.data.length > 0 && (
                    <EquipmentOptions
                        equipments={targetedStageCtx.stageState.equipments}
                    />
                )}

            <FindingStaff selectedStaffs={selectedStaffs} setSelectedStaffs={setSelectedStaffs} />

            <ListStaff
                selectedStaffs={selectedStaffs}
                removeStaff={removeStaff}
            />

            <div className="mt-16">
                <div className="flex gap-16 *:basis-1/2 *:uppercase *:font-semibold *:p-3 *:rounded-lg *:text-lg">
                    <Link
                        to="/scan/worker"
                        className="text-center border-2 border-slate-400"
                    >
                        Hủy
                    </Link>
                    <button
                        className="text-white border bg-darkBlue-600 disabled:bg-slate-400"
                        disabled={selectedStaffs.length === 0}
                        onClick={beginStage}
                    >
                        Bắt đầu
                    </button>
                </div>
                <div className="mt-8">
                    <Link
                        to={`/info/worker/${productId}/album`}
                        className=" block text-center border-2 border-darkBlue-400 text-lg text-darkBlue-600 w-full p-3 rounded-lg uppercase font-semibold"
                    >
                        Thêm ảnh
                    </Link>
                </div>
            </div>
        </>
    );
};

export default BeginStage;
