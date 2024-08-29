import Header from "../components/Header";
import factureImage from "../assets/icons/facture.svg";
import cameraImage from "../assets/icons/camera.svg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/')
    }, [navigate])

    return (
        <>
            <Header>Phần mềm quản lý sản xuất</Header>
            <section className="flex-grow">
                <div className="flex gap-4 p-20 justify-around">
                    <Link
                        to={'/scan/worker'}
                        className="flex flex-col gap-2 w-60 items-center justify-between"
                    >
                        <div className="p-8 rounded-full bg-darkBlue-600">
                            <img
                                src={factureImage}
                                alt="camera"
                                className="w-full aspect-square"
                            />
                        </div>
                        <span className="text-3xl text-darkBlue-400">
                            Sản xuất
                        </span>
                    </Link>
                    <Link
                        to={'/scan/qc'}
                        className="flex flex-col gap-2 w-60 items-center justify-between"
                    >
                        <div className="p-8 rounded-full bg-darkBlue-200">
                            <img
                                src={cameraImage}
                                alt="camera"
                                className="w-full aspect-square"
                            />
                        </div>
                        <span className="text-3xl text-darkBlue-400">QC</span>
                    </Link>
                </div>
            </section>
            <footer className="p-8 bg-darkBlue-600"></footer>
        </>
    );
};

export default Home;
