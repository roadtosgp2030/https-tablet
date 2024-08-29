import { Link, useNavigate, useParams } from "react-router-dom";

import TimingStage from "./TimingStage";
import CardBox from "../ui/CardBox";
import { useDialogContext } from "../../contexts/dialog";
import { useStageStateContext } from "../../contexts/stageState";
import { completedStageUrl, productCameraUrl } from "../../utils/generateUrl";
import bellIcon from "../../assets/icons/bell.svg";
import homeIcon from '../../assets/icons/blue-home.svg'
import EmployeeCodes from './EmployeeCodes';
import { useCaptureContext } from "../../contexts/capture";

const RunningStage = () => {
    const dialogCtx = useDialogContext();
    const navigate = useNavigate();
    const { setStageState } = useStageStateContext();
    const { productId } = useParams();
    const { isCapture } = useCaptureContext()

    const pauseStage = () => {
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
                    setStageState("stop");
                    // navigate("/scan/worker");s
                },
            },
            html: (
                <div>
                    <h2 className="font-bold text-center text-xl mb-2 overflow-hidden break-words">
                        Bạn có chắc chắn muốn{" "}
                        <span className="text-red-700">tạm dừng</span> công đoạn{" "}
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

    const overStage = () => {
        if (isCapture) {
            dialogCtx.showDialog({
                show: true,
                icon: "blue-warning",
                confirmInfo: {
                    times: 1,
                    current: 1,
                    aimBtn: "cancel", // cancel | confirm
                },
                cancel: {
                    content: "Hủy",
                    callback: () => {},
                },
                confirm: {
                    content: "Xác nhận",
                    callback: () => {
                        setStageState('begin')
                        navigate(completedStageUrl(productId, "123"));
                    },
                },
                html: (
                    <div className="mb-8">
                        <h2 className="font-bold text-center text-xl mb-4 overflow-hidden break-words">
                            Bạn có chắc chắn muốn{" "}
                            <span className="text-red-700">kết thúc</span> công
                            đoạn{" "}
                            <span className="text-red-700">Gia công Boss</span>{" "}
                            không?
                        </h2>
                        <p className="mt-4 text-center">
                            Hành động này không thể được hoàn tác. Bạn có chắc
                            chắn muốn tiếp tục không?
                        </p>
                    </div>
                ),
            });
        } else {
            dialogCtx.showDialog({
                show: true,
                icon: "camera",
                confirmInfo: {
                    times: 2,
                    current: 1,
                    aimBtn: "cancel", // cancel | confirm
                },
                cancel: {
                    content: "Hủy",
                    callback: () => {},
                },
                confirm: {
                    content: "Máy ảnh",
                    callback: () => {
                        navigate(productCameraUrl(productId));
                    },
                },
                html: (
                    <div>
                        <h2 className="font-bold text-center text-xl mb-8 overflow-hidden break-words">
                            Bạn cần chụp ảnh trước khi kết thúc công đoạn{" "}
                            <span className="text-red-700">Gia công Boss</span>
                        </h2>
                    </div>
                ),
            });
        }
    };

    return (
        <>
            <TimingStage />

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

            <EmployeeCodes />

            {isCapture && (
                <div className="my-4 text-green-700 flex gap-2 justify-center">
                    <img src={bellIcon} alt="bell" />
                    Đã chụp thành công 5 ảnh tại công đoạn{" "}
                    <span className="font-semibold">
                        {" "}
                        ボス加工 - Gia công boss
                    </span>
                    <Link
                        to="album?stage=3"
                        className="text-blue-800 font-semibold underline ml-2"
                    >
                        View
                    </Link>
                </div>
            )}

            <div className="mt-8">
                <div className="flex gap-16 justify-between *:basis-1/2 *:py-3 *:rounded-lg *:font-medium mb-4">
                    <button
                        className="uppercase text-white text-xl bg-darkBlue-600"
                        onClick={pauseStage}
                    >
                        Tạm dừng
                    </button>
                    <button
                        className="uppercase text-white text-xl bg-darkBlue-600"
                        onClick={overStage}
                    >
                        Kết thúc
                    </button>
                </div>
                <div className="flex gap-16 justify-between *:basis-1/2 *:py-3 *:rounded-lg *:font-medium text-darkBlue-600">
                    <Link
                        to='camera'
                        className="uppercase disabled:text-gray-400 text-xl py-3 border font-medium border-darkBlue-600 rounded-lg text-center"
                    >
                        Thêm ảnh
                    </Link>
                    <Link
                        to='/'
                        className="uppercase disabled:text-gray-400 text-xl py-3 border font-medium border-darkBlue-600 rounded-lg flex items-center justify-center gap-2"
                    >
                        <img src={homeIcon} alt="home icon" />
                        HOME
                    </Link>
                </div>
            </div>
        </>
    );
};

export default RunningStage;
