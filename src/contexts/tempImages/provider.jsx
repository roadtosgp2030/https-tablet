import { useCallback, useEffect, useState } from "react";
import { TempImagesContext } from ".";

export default function TempImagesContextProvider({ children }) {
    const [images, setImages] = useState([]);
    const [idxTargetImage, setIdxTargetImage] = useState(0);

    const addImage = (dataUrl) => {
        setImages((prev) => [...prev, dataUrl]);
    };

    const removeImage = () => {
        setImages((prev) => {
            prev.splice(idxTargetImage, 1)
            return prev
        });
    };

    const changeTargetedImage = useCallback(
        (direction) => {
            if (direction === "right") {
                setIdxTargetImage((prev) => {
                    if (prev === images.length - 1) return 0;
                    return prev + 1;
                });
            } else {
                setIdxTargetImage((prev) => {
                    if (prev === 0) return images.length - 1;
                    return prev - 1;
                });
            }
        },
        [images.length]
    );

    useEffect(() => {
        const listener = (e) => {
            if (e.key === "ArrowRight") changeTargetedImage("right");
            if (e.key === "ArrowLeft") changeTargetedImage("left");
        };
        document.addEventListener("keydown", listener);

        return () => document.removeEventListener("keydown", listener);
    }, [changeTargetedImage]);

    return (
        <TempImagesContext.Provider
            value={{
                images,
                addImage,
                removeImage,
                idxTargetImage,
                changeTargetedImage,
            }}
        >
            {children}
        </TempImagesContext.Provider>
    );
}
