import { Link } from "react-router-dom";

const Error = () => {
    return <div className="flex items-center flex-col gap-4 my-auto">
        <h1 className="text-2xl font-bold">Trang không tồn tại!</h1>
        <p>Quay về <Link to='/' className="underline text-darkBlue-600">Trang chủ</Link></p>
    </div>;
};

export default Error;
