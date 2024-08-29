import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "../components/Header";
import ReceiptList from "../assets/icons/receipt-list.svg";
import ImageIcon from "../assets/icons/image.svg";
import imageInfo1 from "../assets/images/image-info-1.png";
import imageInfo2 from "../assets/images/image-info-2.png";
import imageInfo3 from "../assets/images/image-info-3.png";
import imageInfo4 from "../assets/images/image-info-4.png";
import cameraIcon from "../assets/icons/camera2.png";
import CompletedStage from "../components/CompletedStage";
import ProductInfo from "../components/ProductInfo";
import ImageList from "../components/qc-info/ImageList";
import NumberImage from "../components/ui/NumberImage";

const QcInfo = () => {
    const [imageList, setImageList] = useState([]);
    const [completedStage, setCompletedStage] = useState([]);
    const [currentStage, setCurrentStage] = useState(null);
    const [time, setTime] = useState(null);

    useEffect(() => {
        setImageList([
            imageInfo1,
            imageInfo2,
            imageInfo3,
            imageInfo4,
            imageInfo1,
            imageInfo2,
        ]);

        setCompletedStage([
            { id: 1, title: "造 型 - Tạo khuôn" },
            { id: 2, title: "鋳込み - Đúc" },
            { id: 3, title: "押湯切断 - Cắt Oshiyu" }
        ]);

        setCurrentStage("ボス加工 - Gia công boss");

        setTime(99800000);
    }, []);

    return (
        <>
            <Header className="shadow-none border-b-2 border-slate-300 bg-white">
                <img src={ReceiptList} alt="receipt list" />
                Thông tin
            </Header>
            <section className="py-8 px-16">
                {<ProductInfo time={time} />}

                <CompletedStage screen="qc" stages={completedStage} />

                <div className="flex justify-between my-12 items-center">
                    <div className="font-bold text-xl">
                        Công đoạn đang thực hiện:
                    </div>
                    <button className="font-semibold py-2 px-4 border rounded border-gray-500">
                        {currentStage ? currentStage : <span className="font-bold">-------</span>}
                    </button>
                </div>

                <div>
                    <h2 className="flex gap-2 font-bold text-green-800 text-xl items-center relative">
                        <img src={ImageIcon} alt="image icon" />
                        Ảnh đã chụp của QC
                        <NumberImage number={imageList.length} classNames='relative bottom-2 ml-1' />
                    </h2>
                    <div className="px-12">
                        <div className="text-right">
                            <Link
                                to={imageList.length === 0 ? "#" : "album"}
                                className={`underline underline-offset-2 ${
                                    imageList.length > 0
                                        ? "text-green-800"
                                        : "text-gray-400"
                                }`}
                            >
                                Xem ảnh
                            </Link>
                        </div>
                        <ImageList imageList={imageList} />
                    </div>
                </div>

                <div>
                    <Link
                        to="camera"
                        className="w-full py-4 bg-darkBlue-600 mt-20 flex justify-center rounded uppercase gap-2 items-center font-bold text-white text-2xl"
                    >
                        <img src={cameraIcon} alt="camera icon" />
                        camera
                    </Link>
                    <Link
                        to="/scan/qc"
                        className="uppercase w-full py-4 border border-gray-400 text-gray-400 block text-center text-2xl mt-4 rounded"
                    >
                        Hủy
                    </Link>
                </div>
            </section>
        </>
    );
};

export default QcInfo;
