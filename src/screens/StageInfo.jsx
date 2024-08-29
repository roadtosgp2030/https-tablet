import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import xIcon from "../assets/icons/x-icon.svg";
import infoIcon from "../assets/icons/info-icon.svg";
import replayIcon from "../assets/icons/replay.svg";
import viewIcon from "../assets/icons/view-icon.svg";
import homeIcon from '../assets/icons/white-home.svg';
import { useDialogContext } from "../contexts/dialog";
import { useTargetedStageContext } from "../contexts/targetedStage";
import checkIcon from '../assets/icons/green-check.svg'

const StageInfo = () => {
    const { productId, stageId } = useParams();
    const dialogCtx = useDialogContext();
    const targetedStageCtx = useTargetedStageContext();
    const navigate = useNavigate();
    const params = useParams();
    const location = useLocation();

    const stageTitle = "鋳込み - Đúc";

    const startOver = () => {
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
                    targetedStageCtx.updateState({
                        redo: true,
                        targetedStage: "鋳込み - Đúc",
                        equipments: {
                            data: [],
                            target: "",
                        },
                    });
                    navigate(`/info/worker/${params.productId}`);
                },
            },
            html: (
                <div>
                    <h2 className="font-bold text-center text-xl mb-2 overflow-hidden break-words">
                        Bạn có chắc chắn muốn{" "}
                        <span className="text-red-700">thực hiện lại</span> công
                        đoạn <span className="text-red-700">{stageTitle}</span>{" "}
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

    const linkNavigateToClose = () => {
        if (location.search.includes("stage=complete")) {
            return "/scan/worker";
        } else {
            return `/info/worker/${productId}`;
        }
    };

    const navigateToAlbum = () => {
        navigate(`/info/worker/${productId}/album`);
    };

    return (
        <div className="relative px-20">
            <Link to={linkNavigateToClose()}>
                <img
                    src={xIcon}
                    alt="x icon"
                    className="absolute top-0 right-0 m-4 w-6"
                />
            </Link>

            <div className="pt-12 pb-6 flex flex-col h-full">
                <div className="flex justify-center">
                    <img src={checkIcon} alt="info icon" className="w-40 mb-6" />
                </div>

                <h2 className="font-bold text-2xl mb-12 text-center">
                    Hoàn thành công đoạn{" "}
                    <span className="text-red-700">{stageTitle}</span>
                </h2>

                <div className="border border-darkBlue-200 bg-darkBlue-100 px-8 py-4 flex flex-col gap-4 mb-8">
                    <div className="flex justify-between">
                        <span className="font-semibold">NVC Product No.</span>
                        <span>C000733</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold">Loại sản phẩm</span>
                        <span>FPP</span>
                    </div>
                </div>

                <div className="border border-darkBlue-200 bg-darkBlue-100 px-8 py-4 mb-auto">
                    <h1 className="text-red-700 text-4xl font-bold text-center mb-4">
                        鋳込み - Đúc
                    </h1>
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between">
                            <span className="font-semibold">
                                Thời gian bắt đầu
                            </span>
                            <span>13/07/2024</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-semibold">
                                Thời gian kết thúc
                            </span>
                            <span>14/07/2024</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-semibold">
                                Thiết bị đang thực hiện
                            </span>
                            <span>BOSS NC seibu</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-semibold">
                                Tổng thời gian
                            </span>
                            <span>16 hours</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-semibold">Nhân viên</span>
                            <ul className="*:text-right">
                                <li>
                                    N0177 - Phạm Văn Dũng{" "}
                                    <span className="font-bold">(8h)</span>
                                </li>
                                <li>
                                    N0179 - Phạm Văn Công{" "}
                                    <span className="font-bold">(16h)</span>
                                </li>
                                <li>
                                    N0178 - Phạm Minh Lân{" "}
                                    <span className="font-bold">(8h)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <section className="flex gap-4 flex-col mt-6">
                    <div className="flex gap-16">
                        <button
                            className="flex gap-2 p-4 border border-slate-900 rounded items-center basis-1/2 justify-center"
                            onClick={startOver}
                        >
                            <img src={replayIcon} alt="replay icon" />
                            Làm lại
                        </button>
                        <button
                            className="flex gap-2 px-4 py-2 bg-darkBlue-200 rounded items-center basis-1/2 justify-center text-darkBlue-400 font-semibold"
                            onClick={navigateToAlbum}
                        >
                            <img src={viewIcon} alt="replay icon" />
                            Xem ảnh
                        </button>
                    </div>
                    <div>
                        <Link className="flex items-center justify-center w-full p-4 bg-darkBlue-600 text-white font-bold gap-2" to='/'>
                            <img src={homeIcon} alt="home icon" />
                            HOME
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default StageInfo;
