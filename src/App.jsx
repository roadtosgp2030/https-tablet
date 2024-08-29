import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Scan from "./screens/Scan";
import Home from "./screens/Home";
import WorkerInfo from "./screens/WorkerInfo";
import QcInfo from "./screens/QcInfo";
import Camera from "./screens/Camera";
import Album from "./screens/Album";
import DetailImage from "./screens/DetailImage";
import PreviewImage from "./screens/PreviewImage";
import StageInfo from "./screens/StageInfo";
import Error from "./screens/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />
    },
    {
        path: "/scan/:whoScan",
        element: <Scan />,
    },
    {
        path: "/info/worker/:productId",
        children: [
            { index: true, element: <WorkerInfo /> },
            {
                path: "camera",
                children: [
                    { index: true, element: <Camera /> },
                    { path: "preview", element: <PreviewImage /> },
                ],
            },
            {
                path: "album",
                children: [
                    { index: true, element: <Album /> },
                    {
                        path: "camera",
                        children: [
                            { index: true, element: <Camera /> },
                            { path: "preview", element: <PreviewImage /> },
                        ],
                    },
                    { path: "detail-image", element: <DetailImage /> },
                ],
            },
            {
                path: ":stageId",
                children: [
                    { index: true, element: <StageInfo /> },
                    { path: "detail-image", element: <DetailImage /> },
                ],
            },
        ],
    },
    {
        path: "/info/qc/:productId",
        children: [
            { index: true, element: <QcInfo /> },
            {
                path: "camera",
                children: [
                    { index: true, element: <Camera /> },
                    { path: "preview", element: <PreviewImage /> },
                ],
            },
            {
                path: "album",
                children: [
                    { index: true, element: <Album /> },
                    { path: "detail-image", element: <DetailImage /> },
                ],
            },
        ],
    },
]);

function App() {
    return (
        <main className="min-h-screen flex flex-col">
            <RouterProvider router={router} />
        </main>
    );
}

export default App;
