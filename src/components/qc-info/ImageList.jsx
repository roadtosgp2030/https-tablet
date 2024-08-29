import plusIcon from "../../assets/icons/plus.svg";

const ImageList = ({ imageList }) => {
    const remainingListLength = Math.max(imageList.length - 4, 0);

    return (
        <div className="flex gap-4 mt-2 *:basis-1/4">
            {imageList.length > 0 ? (
                imageList.map((imageSrc, idx) => {
                    if (idx <= 2) {
                        return (
                            <div key={idx}>
                                <img
                                    src={imageSrc}
                                    alt="image info 1"
                                    className="w-full"
                                />
                            </div>
                        );
                    }
                    if (idx === 3) {
                        return (
                            <div key={idx} className="relative">
                                <img
                                    src={imageSrc}
                                    alt="image info 4"
                                    className="w-full"
                                />
                                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-5xl">
                                    {remainingListLength > 0
                                        ? `+${remainingListLength}`
                                        : ""}
                                </span>
                            </div>
                        );
                    }
                    return;
                })
            ) : (
                <div className="w-full bg-gray-100 aspect-square flex items-center justify-center">
                    <img
                        src={plusIcon}
                        alt="image info 1"
                        className="size-16"
                    />
                </div>
            )}
        </div>
    );
};

export default ImageList;
