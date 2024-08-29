import { useEffect, useState } from "react";
import chveronUp from "../../assets/icons/chevron-up.svg";
import chveronDown from "../../assets/icons/chevron-down.svg";

const list = [
    { id: "N01761", name: "Phạm Thạch Thảo" },
    { id: "N01762", name: "Vũ Ngọc Đức" },
    { id: "N0178", name: "Phạm Minh Lân" },
    { id: "N0179", name: "Phạm Văn Công" },
    { id: "N01763", name: "Testing 1" },
    { id: "N01764", name: "Testing 2" },
    { id: "N01781", name: "Testing 3" },
    { id: "N01791", name: "Testing 4" },
];

const FindingStaff = ({ setSelectedStaffs, selectedStaffs }) => {
    const [showList, setShowList] = useState(false);
    const [firstTime, setFirstTime] = useState(true);
    const [staffInput, setStaffInput] = useState("");
    const [hintList, setHintList] = useState([]);

    console.log(selectedStaffs);

    const addStaff = (staffId) => {
        setSelectedStaffs((prev) => {
            if (prev.findIndex((staff) => staff.id === staffId) > -1) {
                // show error here
                return prev;
            }

            const targetedStaff = hintList.find(
                (staff) => staff.id === staffId
            );
            return [...prev, targetedStaff];
        });
    };

    const changeInputHandler = (e) => {
        setStaffInput(e.target.value);
    };

    const showListHandler = (e) => {
        e.stopPropagation();
        if (hintList.length > 0) {
            setShowList(true);
        }
    };

    const toggleList = (e) => {
        e.stopPropagation();
        setShowList((prev) => !prev);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            if (staffInput !== "") {
                const selectedList = list.filter((staff) =>
                    staff.id.includes(staffInput)
                );
                setHintList(selectedList);
                setShowList(true);
            } else {
                setHintList([]);
            }
            if (firstTime) {
                setShowList(false);
                setFirstTime(false);
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [staffInput, firstTime]);

    useEffect(() => {
        const closeList = () => setShowList(false);
        document.addEventListener("click", closeList);
        return () => document.removeEventListener("click", closeList);
    }, []);

    return (
        <div className="relative">
            <h2 className="text-xl font-bold">Mã nhân viên</h2>
            <div className="relative mt-2 bg-gray-300 flex items-center gap-2 px-2 rounded">
                <span className="py-2 px-4 inline-block relative after:block after:w-[2px] after:h-2/3 after:bg-darkBlue-600 after:absolute after:right-0 after:top-0 after:translate-y-1/4 text-2xl font-semibold">
                    N
                </span>
                <div className="flex-grow">
                    <input
                        type="text"
                        className="bg-transparent w-full text-lg py-2 px-4 outline-none font-semibold tracking-widest"
                        placeholder="Eg: 017"
                        value={staffInput}
                        onChange={changeInputHandler}
                        onClick={showListHandler}
                    />
                </div>
                <div
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                    onClick={toggleList}
                >
                    {showList ? (
                        <img
                            src={chveronUp}
                            alt="chveron up icon"
                            className="w-6"
                        />
                    ) : (
                        <img
                            src={chveronDown}
                            alt="down arrow icon"
                            className="w-6"
                        />
                    )}
                </div>
            </div>

            {showList && (
                <ul className="absolute z-10 rounded mt-px bg-gray-200 left-0 right-0 shadow-lg max-h-40 overflow-y-auto">
                    {hintList.length > 0 ? (
                        <>
                            {hintList.map((staff) => {
                                return (
                                    <li
                                        key={staff.id}
                                        className={`${
                                            selectedStaffs?.find(
                                                (staf) => staf.id === staff.id
                                            )
                                                ? "bg-blue-400/20 before:block before:absolute before:size-3 before:bg-darkBlue-400/70 before:rounded-full before:right-8 before:top-1/2 before:-translate-y-1/2"
                                                : ""
                                        } bg-gray-100 relative py-2 px-6 rounded my-[1px]`}
                                        onClick={() => addStaff(staff.id)}
                                    >
                                        {staff.id} - {staff.name}
                                    </li>
                                );
                            })}
                        </>
                    ) : (
                        <p className="py-4 px-8">
                            Không tìm thấy nhân viên phù hợp.
                        </p>
                    )}
                </ul>
            )}
        </div>
    );
};

export default FindingStaff;
