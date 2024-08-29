import { useState } from "react";
import { createPortal } from "react-dom";

import { DialogContext } from ".";
import getDialogInfo from "../../utils/getDialogInfo";

const Dialog = ({ closeDialog, dialogInfo, setDialogInfo }) => {
    const dialogInf = getDialogInfo(dialogInfo.icon);

    const confirmHandler = () => {
        if (dialogInfo.confirmInfo.aimBtn === "confirm") {
            if (
                dialogInfo.confirmInfo.current >= dialogInfo.confirmInfo.times
            ) {
                dialogInfo.confirm.callback?.();
                closeDialog();
            } else {
                setDialogInfo((prev) => ({
                    ...prev,
                    confirmInfo: {
                        ...dialogInfo.confirmInfo,
                        current: dialogInfo.confirmInfo.current++,
                    },
                }));
            }
        } else {
            dialogInfo.confirm.callback?.();
            closeDialog();
        }
    };

    const closeHandler = () => {
        if (dialogInfo.confirmInfo.aimBtn === "cancel") {
            if (
                dialogInfo.confirmInfo.current >= dialogInfo.confirmInfo.times
            ) {
                dialogInfo.cancel.callback?.();
                closeDialog();
            } else {
                setDialogInfo((prev) => ({
                    ...prev,
                    confirmInfo: {
                        ...dialogInfo.confirmInfo,
                        current: dialogInfo.confirmInfo.current++,
                    },
                }));
            }
        } else {
            dialogInfo.cancel.callback?.();
            closeDialog();
        }
    };

    return (
        <div id="dialog">
            <div
                className="fixed top-0 left-0 bottom-0 right-0 bg-zinc-900/50"
                onClick={closeDialog}
            ></div>
            <div
                className={`fixed top-1/4 left-1/2 -translate-x-1/2 w-[450px] flex flex-col rounded-lg p-8 ${dialogInf.colors["bg-full"]}`}
            >
                <div className="flex justify-center mb-4">
                    <div
                        className={`p-4 rounded-full inline-block aspect-square shadow-lg mb-4 ${dialogInf.colors["bg-icon"]}`}
                    >
                        <img src={dialogInf.icon} alt={dialogInfo.icon} />
                    </div>
                </div>
                {dialogInfo.html}
                <div className="flex gap-8 justify-center *:rounded *:min-w-32 *:font-semibold">
                    <button
                        className="bg-slate-100 py-2 px-4"
                        onClick={closeHandler}
                    >
                        {dialogInfo.cancel.content}{" "}
                        {dialogInfo.confirmInfo.aimBtn === "cancel" &&
                        dialogInfo.confirmInfo.times > 1
                            ? `(${dialogInfo.confirmInfo.current})`
                            : ""}
                    </button>
                    <button
                        className={`text-white py-2 px-4 ${dialogInf.colors["bg-btn"]}`}
                        onClick={confirmHandler}
                    >
                        {dialogInfo.confirm.content}{" "}
                        {dialogInfo.confirmInfo.aimBtn === "confirm" &&
                        dialogInfo.confirmInfo.times > 1
                            ? `(${dialogInfo.confirmInfo.current})`
                            : ""}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default function DialogContextProvider({ children }) {
    const [dialogInfo, setDialogInfo] = useState({
        show: false,
        icon: "red-warning",
        confirmInfo: {
            times: 1,
            current: 1,
            aimBtn: "confirm", // cancel | confirm
        },
        cancel: {
            content: "Hủy",
            callback: () => {},
        },
        confirm: {
            content: "Xác nhận",
            callback: () => {},
        },
        html: "",
    });

    const showDialog = (dialogInfo) => {
        setDialogInfo(dialogInfo);
    };

    const closeDialog = () => {
        setDialogInfo((prev) => ({ ...prev, show: false }));
    };

    return (
        <DialogContext.Provider value={{ dialogInfo, showDialog }}>
            {dialogInfo.show &&
                createPortal(
                    <Dialog
                        closeDialog={closeDialog}
                        dialogInfo={dialogInfo}
                        setDialogInfo={setDialogInfo}
                    />,
                    document.querySelector("body")
                )}
            {children}
        </DialogContext.Provider>
    );
}
