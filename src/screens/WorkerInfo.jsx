import Header from "../components/Header";
import ReceiptList from "../assets/icons/receipt-list.svg";
import BeginStage from "../components/worker-info/BeginStage";
import RunningStage from "../components/worker-info/RunningStage";
import StopStage from "../components/worker-info/StopStage";
import { useStageStateContext } from "../contexts/stageState";
import CompletedStage from "../components/CompletedStage";
import ProductInfo from "../components/ProductInfo";
import greenCheck from '../assets/icons/green-check.svg';
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
// import EmployeeCodes from "../components/worker-info/EmployeeCodes";
import CompleteStage from "../components/worker-info/CompleteStage";

const WorkerInfo = () => {
    const { stageState } = useStageStateContext();
    const [isCompleted, setIsCompleted] = useState(false);
    const { productId } = useParams()

    return (
        <>
            <Header className="shadow-none border-b-2 border-slate-300 bg-white">
                <img src={ReceiptList} alt="receipt list" />
                Thông tin
            </Header>
            <section className="py-8 px-16 flex flex-col">
                {isCompleted && <div className="flex justify-center items-center gap-4 mb-4">
                    <img src={greenCheck} alt="check icon" className="w-16" />
                    <span className="text-3xl font-bold tracking-tight">{productId}</span>
                </div>}

                <ProductInfo time={126400000} />

                <CompletedStage stages={[
                    { id: 1, title: "造 型 - Tạo khuôn" },
                    { id: 2, title: "鋳込み - Đúc" },
                    { id: 3, title: "押湯切断 - Cắt Oshiyu" },
                    { id: 4, title: "ボス加工 - Gia công boss" },
                    { id: 5, title: "翼面加工 - Yokumen" },
                    { id: 6, title: "キー加工 - Gia công Key" },
                    { id: 7, title: "穴あけ加工 - Khoan, taro, lỗ cavi" },
                    { id: 8, title: "Shiage" },
                    { id: 9, title: "Arakenma" },
                    { id: 10, title: "完成検査 - Kiểm tra hoàn thiện" },
                    { id: 11, title: "KENMA" },
                    { id: 12, title: "梱包・出荷 - Đóng thùng, xuất hàng" },
                ]} />

                {stageState === 'begin' && <BeginStage />}
                {stageState === 'running' && <RunningStage />}
                {stageState === 'stop' && <StopStage />}
                {stageState === 'complete' && <CompleteStage />}
            </section>
        </>
    );
};

export default WorkerInfo;
