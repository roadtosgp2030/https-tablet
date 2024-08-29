import convertMsToTime from "../utils/convertMsToTime";
import CardBox from "./ui/CardBox";

const ProductInfo = ({ time }) => {
    let showTime
    if (time) showTime = convertMsToTime(time)

    return (
        <CardBox className="mb-2">
            <div className="flex justify-between">
                <div className="font-bold">NVC Product No.</div>
                <div>C000733</div>
            </div>
            <div className="flex justify-between">
                <div className="font-bold">Loại sản phẩm</div>
                <div>FPP</div>
            </div>
            <div className="flex justify-between">
                <div className="font-bold">Thời gian</div>
                {showTime ? <div>
                    <span className="font-bold">{showTime.dayTime.value}</span> {showTime.dayTime.text}{" "}
                    <span className="font-bold">{showTime.hourTime.value}</span> {showTime.hourTime.text}{" "}
                    <span className="font-bold">{showTime.minuteTime.value}</span> {showTime.minuteTime.text}
                </div> : <div>-----</div>}
            </div>
        </CardBox>
    );
};

export default ProductInfo;
