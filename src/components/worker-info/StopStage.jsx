import TimingStage from "./TimingStage";
import CardBox from "../ui/CardBox";
import { useDialogContext } from "../../contexts/dialog";
import { Link, useNavigate } from "react-router-dom";
import FindingStaff from "./FindingStaff";
import { useState } from "react";
import ListStaff from "./ListStaff";
import { useStageStateContext } from "../../contexts/stageState";
import homeIcon from '../../assets/icons/blue-home.svg'

const StopStage = () => {
    const dialogCtx = useDialogContext();
    const navigate = useNavigate();
    const [selectedStaffs, setSelectedStaffs] = useState([
        { id: "N01761", name: "Phạm Thạch Thảo" },
        { id: "N01762", name: "Vũ Ngọc Đức" },
        { id: "N0178", name: "Phạm Minh Lân" },
    ]);
    const { setStageState } = useStageStateContext()

    const removeStaff = (staffId) => {
        setSelectedStaffs((prev) =>
            prev.filter((staff) => staff.id !== staffId)
        );
    };

    const runningStage = () => {
        dialogCtx.showDialog({
            show: true,
            icon: "blue-warning",
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
                    setStageState('running');
                    // navigate("/scan/worker");
                },
            },
            html: (
                <div>
                    <h2 className="font-bold text-center text-xl mb-2 overflow-hidden break-words">
                        Bạn có chắc chắn muốn{" "}
                        <span className="text-red-700">tiếp tục</span> công đoạn{" "}
                        <span className="text-red-700">Gia công Boss</span>{" "}
                        không?
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
            <TimingStage isStop={true} />

            <CardBox className="mt-8">
                <div className="flex justify-between mb-2">
                    <div className="font-bold">Công đoạn đang thực hiện:</div>
                    <div className="font-bold text-red-700">
                        ボス加工 - Gia công boss
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>Thiết bị đang thực hiện</div>
                    <div className="text-red-700">BOSS NC seibu</div>
                </div>
            </CardBox>

            <FindingStaff selectedStaffs={selectedStaffs} setSelectedStaffs={setSelectedStaffs} />

            <ListStaff
                selectedStaffs={selectedStaffs}
                removeStaff={removeStaff}
            />

            <div className="mt-8">
                <div className="mt-4">
                    <button
                        className="uppercase text-white text-xl py-3 w-full font-medium bg-darkBlue-600 rounded-lg disabled:brightness-75 disabled:bg-darkBlue-400"
                        disabled={selectedStaffs.length === 0}
                        onClick={runningStage}
                    >
                        Tiếp tục
                    </button>
                </div>
                <div className="mt-4 flex gap-8 *:basis-1/2">
                    <button
                        onClick={() => navigate('camera')}
                        className="uppercase disabled:text-gray-400 text-xl py-3 w-full border font-medium border-slate-400/50 rounded-lg text-darkBlue-600 border-darkBlue-600 text-center"
                        disabled
                    >
                        Thêm ảnh
                    </button>
                    <Link
                        className="uppercase disabled:text-gray-400 text-xl py-3 w-full border font-medium border-slate-400/50 rounded-lg flex gap-2 justify-center text-darkBlue-600 border-darkBlue-600"
                        to='/'
                    >
                        <img src={homeIcon} alt="home icon" />
                        HOME
                    </Link>
                </div>
            </div>
        </>
    );
};

export default StopStage;
