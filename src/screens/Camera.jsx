// import { useEffect, useState } from "react";
import { useEffect, useRef, useState } from "react";
import {
    useLocation,
    // Link,
    useNavigate,
    useParams,
} from "react-router-dom";

import Header from "../components/Header";
import leftArrowWhite from "../assets/icons/left-arrow-white.svg";
import rotateCamera from "../assets/icons/rotate-camera.svg";
import imageIcon3 from "../assets/icons/image3.svg";
import checkIcon from "../assets/icons/check.svg";
import { useTempImagesContext } from "../contexts/tempImages";
import { useCaptureContext } from "../contexts/capture";

const Camera = () => {
    const videoRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();
    const [allowCamera, setAllowCamera] = useState(true);
    const canvasRef = useRef();
    const { images, addImage } = useTempImagesContext();
    const { setIsCapture } = useCaptureContext()

    useEffect(() => {
        const constraints = {
            video: {
                facingMode: { exact: 'environment'}
            },
            // width: 640,
            // height: 832
        };
        let localStream;
        navigator.mediaDevices
            .getUserMedia(constraints)
            .then((mediaStream) => {
                localStream = mediaStream;
                videoRef.current.srcObject = mediaStream;
            })
            .catch(() => {
                setAllowCamera(false);
            });

        return () => {
            if (localStream) {
                const tracks = localStream.getTracks();
                tracks.forEach((track) => track.stop());
            }
        };
    }, [navigate]);

    const saveImage = () => {
        // handle save images to database
        // navigate to scan screen
        if (location.pathname.includes("/info/worker")) {
            setIsCapture(true)
            navigate("..");
        } else {
            navigate("..");
        }
    };

    const navigatePreviewImage = () => {
        if (images.length === 0) return;
        navigate("preview");
    };

    const captureImage = () => {
        canvasRef.current.getContext("2d").drawImage(videoRef.current, 0, 0);
        let image_data_url = canvasRef.current.toDataURL("image/jpeg");
        addImage(image_data_url);
    };

    return (
        <div className="h-dvh flex flex-col relative">
            <Header className="text-white font-bold text-xl bg-slate-900 justify-between items-center">
                <button
                    onClick={() => navigate("..")}
                    className="flex gap-2 items-center text-2xl"
                >
                    <img src={leftArrowWhite} alt="left arrow" />
                    Camera
                </button>
                <img src={rotateCamera} alt="rotate camera" className="w-10" />
            </Header>

            <video ref={videoRef} autoPlay className="flex-grow object-cover w-full"></video>

            <canvas
                id="canvas"
                width="360"
                height="480"
                ref={canvasRef}
                className="hidden"
            ></canvas>

            <div className="absolute bottom-12 left-0 right-0 py-8 flex items-center">
                <button
                    className="flex gap-2 bg-darkBlue-200 py-2 px-4 rounded font-bold text-darkBlue-400 text-xl items-center absolute left-8 disabled:opacity-50"
                    onClick={navigatePreviewImage}
                    disabled={images.length === 0}
                >
                    <img src={imageIcon3} alt="image icon" />
                    View ({images.length})
                </button>
                <button
                    className="size-24 rounded-full absolute left-1/2 -translate-x-1/2 border-8 border-spacing- border-slate-100"
                    onClick={captureImage}
                >
                    <span className="size-16 bg-slate-100 rounded-full inline-block m-2"></span>
                </button>
                <button
                    className="rounded-full absolute right-8"
                    onClick={saveImage}
                >
                    <img
                        src={checkIcon}
                        alt="check icon"
                        className="rounded-full w-20"
                    />
                </button>
            </div>
        </div>
    );
};

export default Camera;
