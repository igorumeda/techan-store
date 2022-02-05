import { createContext, useState } from "react";

export const ConfirmContext = createContext();

export const ConfirmProvider = ({ children }) => {

    let teste;

    const [confirm, setConfirm] = useState({titulo: '', pergunta: '', visivel: false, result: false});

    return (

        <ConfirmContext.Provider value={{ confirm, setConfirm, teste }}>
            { children }
        </ConfirmContext.Provider>

    )
}