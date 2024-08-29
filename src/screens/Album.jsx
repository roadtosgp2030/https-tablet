import { useParams, useNavigate, Link, useLocation, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "../components/Header";
import leftArrow from "../assets/icons/left-arrow.svg";
import bulletList from "../assets/icons/list.svg";
import cAddIcon from "../assets/icons/c-add.svg";
import numberCircle from "../assets/icons/number-circle.svg";
import imageInfo1 from "../assets/images/image-info-1.png";
import StageList from "../components/album/StageList";
import NumberImage from "../components/ui/NumberImage";

const steps = [
    { title: "造 型 - Tạo khuôn", process: true },
    { title: "鋳込み - Đúc", process: true },
    { title: "押湯切断 - Cắt Oshiyu", process: true },
    { title: "ボス加工 - Gia công boss", process: true },
    { title: "翼面加工 - Yokumen", process: false },
    { title: "キー加工 - Gia công Key", process: false },
    { title: "穴あけ加工 - Khoan, taro, lỗ cavi", process: true },
    { title: " Shiage", process: false },
    { title: "Arakenma", process: false },
    { title: "KENMA", process: false },
    { title: "完成検査 - Kiểm tra hoàn thiện", process: true },
    { title: "梱包・出荷 - Đóng thùng, xuất hàng", process: false },
];

const images = [
    imageInfo1,
    imageInfo1,
    imageInfo1,
    imageInfo1,
    imageInfo1,
    imageInfo1,
    imageInfo1,
    imageInfo1,
    imageInfo1,
    imageInfo1,
    imageInfo1,
    imageInfo1,
    imageInfo1,
    imageInfo1,
    imageInfo1,
    imageInfo1,
    imageInfo1,
    imageInfo1,
    imageInfo1,
    imageInfo1,
    imageInfo1,
    imageInfo1,
    imageInfo1,
    imageInfo1,
    imageInfo1,
    imageInfo1,
    imageInfo1,
    imageInfo1,
    imageInfo1,
    imageInfo1,
    imageInfo1,
    imageInfo1,
    imageInfo1,
    imageInfo1,
];

const Album = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const [stagesInfo, setStagesInfo] = useState({
        currentStage: 1,
        stages: steps
    });

    const changeState = (num) => {
        navigate(`?stage=${num}`);
        setStagesInfo((prev) => ({ ...prev, currentStage: num }));
    };

    useEffect(() => {
        const stage = +searchParams.get('stage')
        if (stage && steps[stage - 1].process) {
            setStagesInfo(prev => ({ ...prev, currentStage: stage }))
        } else {
            const queryParams = new URLSearchParams(location.search)
            if (queryParams.has('stage')) {
                queryParams.delete('stage')
                navigate(location.pathname)
            }
        }
    }, [location.pathname, location.search, navigate, searchParams])

    return (
        <div className="bg-darkBlue-200 h-screen flex flex-col overflow-hidden">
            <Header className="flex justify-between bg-white shadow-md">
                <button
                    onClick={() => navigate("..")}
                    className="flex gap-4 items-center"
                >
                    <img src={leftArrow} alt="left arrow" />
                    Xem ảnh và thêm ảnh
                </button>
                <div className="text-red-800">{productId}</div>
            </Header>
            <section className="flex gap-4 flex-grow h-[90%]">
                <StageList stagesInfo={stagesInfo} changeState={changeState} />

                <div className="flex flex-col w-3/4">
                    <div className="flex items-center px-4 py-2 bg-white mt-4 gap-4">
                        <div className="flex gap-2 w-3/4 items-center">
                            <img
                                src={bulletList}
                                alt="bullet list"
                                className="w-6 mr-2"
                            />
                            <span className="font-semibold text-darkBlue-400 text-xl">
                                Stage {stagesInfo.currentStage}: {stagesInfo.stages[stagesInfo.currentStage - 1].title}
                            </span>
                            <NumberImage number={22} />
                        </div>
                        <div className="flex-grow">
                            <Link
                                className="gap-2 bg-darkBlue-400 text-white items-center px-4 py-2 rounded-lg font-semibold inline-flex"
                                to='camera'
                            >
                                <img src={cAddIcon} alt="c add icon" />
                                Thêm ảnh
                            </Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 p-4 bg-white mt-4 flex-grow content-start overflow-scroll">
                        {images.map((imageSrc, id) => (
                            <div key={id}>
                                <Link to={`${location.pathname}/detail-image`}>
                                    <img
                                        src={imageSrc}
                                        alt="image info"
                                        className="aspect-square w-full"
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Album;
