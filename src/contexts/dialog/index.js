import { createContext, useContext } from "react";

export const DialogContext = createContext({
    dialogInfo: {
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
        html: ""
    },
    showDialog: () => {}
})

export const useDialogContext = () => {
    const ctx = useContext(DialogContext)
    if (!ctx) {
        throw 'Context doesn\'t exist.'
    }
    return ctx
}
