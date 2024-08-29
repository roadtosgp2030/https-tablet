const NumberImage = ({ number, classNames }) => {
    return (
        <div
            className={`size-8 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white text-lg font-medium ${classNames}`}
        >
            <span className="relative bottom-[1px]">{number}</span>
        </div>
    );
};

export default NumberImage;
