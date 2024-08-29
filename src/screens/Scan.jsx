import Header from "../components/Header";
import leftArrow from "../assets/icons/left-arrow.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Popup from "../components/ui/Popup";
import { Scanner, useDevices } from "@yudiel/react-qr-scanner";

const Scan = () => {
    const navigate = useNavigate();
    const { whoScan } = useParams();
    // const [isPaused, setisPaused] = useState(false);
    // const devices = useDevices();
    // console.log(devices);
    const [popupState, setPopupState] = useState({
        isShow: false,
        type: 'complete', // 'error' | 'complete'
        id: 'C033125'
    });

    const scanAndRedirect = useCallback(() => {
        // if (whoScan === 'worker') {
        //     setPopupState(prev => ({ ...prev, isShow: true }))
        // } else {
        // }
        if (whoScan === "worker") {
            navigate("/info/worker/12345");
        } else if (whoScan === "qc") {
            navigate("/info/qc/12345");
        } else {
            navigate("/");
        }

        // setError({
        //     isError: true,
        //     content: "Không tìm thấy QR code!",
        // });
    }, [navigate, whoScan])

    const closePopup = () => {
        setPopupState(prev => ({ ...prev, isShow: false }));
    };

    // useEffect(() => {
    //     scanAndRedirect()
    // }, [scanAndRedirect])

    return (
        <>
            <Header className="bg-white mb-20 shadow-none">
                <Link to={"/"} className="inline-flex gap-2 items-center">
                    <img src={leftArrow} alt="left arrow" />
                    Scan
                </Link>
            </Header>
            <section 
                className="flex flex-col gap-8 items-center mt-36 w-96 mx-auto" 
                onClick={scanAndRedirect}
            >
                <Scanner onScan={scanAndRedirect} />
            </section>
            {popupState.isShow &&
                createPortal(
                    <Popup type={popupState.type} productId={popupState.id} closePopup={closePopup} />,
                    document.querySelector("body")
                )}
        </>
    );
};

export default Scan;
