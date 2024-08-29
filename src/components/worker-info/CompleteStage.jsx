import { Link, useParams } from "react-router-dom";
import EmployeeCodes from "./EmployeeCodes";

const CompleteStage = () => {
    const { productId } = useParams();

    return (
        <>
            <EmployeeCodes />
            <div className="mt-16">
                <div className="flex gap-16 *:basis-1/2 *:uppercase *:font-semibold *:p-3 *:rounded-lg *:text-lg">
                    <Link
                        to="/scan/worker"
                        className="text-center border-2 border-slate-400"
                    >
                        Hủy
                    </Link>
                    <Link
                        to={`/info/worker/${productId}/album`}
                        className=" block text-center border-2 border-darkBlue-400 bg-darkBlue-400 text-lg text-white w-full p-3 rounded-lg uppercase font-semibold"
                    >
                        Thêm ảnh
                    </Link>
                </div>
            </div>
        </>
    );
};

export default CompleteStage;
