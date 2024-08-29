import xIcon from "../../assets/icons/x-icon.svg";
import greenCheck from '../../assets/icons/dark-green-check.svg';
import redWarning from '../../assets/icons/red-warning.svg';
import nextIcon from '../../assets/icons/next.svg'
import { Link } from "react-router-dom";

const Popup = ({ type, closePopup, productId }) => {
    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    let iconSrc = redWarning
    if (type === 'complete') iconSrc = greenCheck

    let content = 'Không tìm thấy QR code!'
    if (type === 'complete') {
        content = `Sản phẩm có mã <span class="text-red-700">${productId}</span> đã hoàn thành quá trình sản xuất!`
    }

    return (
        <div id="popup">
            <div
                className="fixed top-0 left-0 right-0 bottom-0 bg-slate-900/30"
                onClick={closePopup}
            >
                <div
                    className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${type === 'complete' ? 'bg-emerald-50' : 'bg-red-100'} w-1/2 p-12 rounded-lg`}
                    onClick={stopPropagation}
                >
                    <img
                        src={xIcon}
                        alt="x icon"
                        className="absolute top-0 right-0 w-4 m-4"
                        onClick={closePopup}
                    />
                    <div className="flex justify-center mb-8">
                        <div className={`${type === 'complete' ? 'size-32 p-2 bg-green-200 rounded-full' : ''}`}>
                            <img
                                src={iconSrc}
                                alt="red warning icon"
                                className="w-32"
                            />
                        </div>
                    </div>
                    <p className="font-bold text-xl text-center" dangerouslySetInnerHTML={{__html: content}}></p>
                    {type === 'complete' && <p className="mt-4 flex justify-center">
                        <Link to={`/info/worker/${productId}`} className="size-16 rounded-full bg-darkBlue-400 flex items-center justify-center p-2">
                            <img src={nextIcon} alt="next icon" className="size-8" />
                        </Link>
                    </p>}
                </div>
            </div>
        </div>
    );
};

export default Popup;
