import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DialogContextProvider from "./contexts/dialog/provider.jsx";
import TargetedStageProvider from "./contexts/targetedStage/provider.jsx";
import StageStateProvider from "./contexts/stageState/provider.jsx";
import TempImagesContextProvider from "./contexts/tempImages/provider.jsx";
import CaptureContextProvider from "./contexts/capture/provider.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <CaptureContextProvider>
            <TempImagesContextProvider>
                <StageStateProvider>
                    <TargetedStageProvider>
                        <DialogContextProvider>
                            <App />
                        </DialogContextProvider>
                    </TargetedStageProvider>
                </StageStateProvider>
            </TempImagesContextProvider>
        </CaptureContextProvider>
    </StrictMode>
);
