import { useNavigate } from "react-router-dom";
import leftArrow from "../assets/icons/left-arrow.svg";
import trashIcon from "../assets/icons/trash.svg";
import leftArrow2 from "../assets/icons/left-arrow2.svg";
import rightArrow from "../assets/icons/right-arrow.svg";
import { useDialogContext } from "../contexts/dialog";
import { useTempImagesContext } from "../contexts/tempImages";

const PreviewImage = () => {
    const navigate = useNavigate();

    const dialogCtx = useDialogContext();
    const { images, idxTargetImage, changeTargetedImage, removeImage } =
        useTempImagesContext();

    const removeImageAction = () => {
        dialogCtx.showDialog({
            show: true,
            icon: "red-warning",
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
                content: "Xóa",
                callback: removeImage,
            },
            html: (
                <div>
                    <h2 className="font-bold text-center text-xl mb-2 overflow-hidden break-words">
                        Bạn có chắc chắn muốn{" "}
                        <span className="text-red-700">xóa ảnh đang chọn</span>{" "}
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
        <div className="relative h-screen overflow-scroll">
            <div className="">
                <img
                    src={images[idxTargetImage]}
                    alt="detail image"
                    className="w-full"
                />
            </div>

            <header className="absolute top-0 left-0 right-0 p-8 flex justify-between">
                <button onClick={() => navigate("..")}>
                    <img src={leftArrow} alt="left arrow" className="w-12" />
                </button>
                <span className="text-3xl font-bold">
                    {idxTargetImage + 1}/{images.length}
                </span>
                <button onClick={removeImageAction}>
                    <img src={trashIcon} alt="trash icon" className="w-10" />
                </button>
            </header>

            <section className="fixed top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-4">
                <button onClick={() => changeTargetedImage("left")}>
                    <img src={leftArrow2} alt="left arrow" />
                </button>
                <button onClick={() => changeTargetedImage("right")}>
                    <img src={rightArrow} alt="right arrow" />
                </button>
            </section>
        </div>
    );
};

export default PreviewImage;
