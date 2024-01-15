import constate from "constate"
import { useState } from "react"

export enum AlertType { 
    SUCCESS = "SUCCESS",
    ERROR = "ERROR",
    INFO = "INFO",
    WARNING = "WARNING"
}

interface IAlertType {
    message: string;
    type?: keyof typeof AlertType;
} 

const emptyAlert: IAlertType = {message: ""}

const useAlertStore = () => {
    const [alert, setAlert] = useState<IAlertType>({message: ""})

    const setNewAlert = (newAlert: IAlertType) => {
        setAlert(newAlert)
        setTimeout(() => {
            setAlert(emptyAlert)
        }, 5000)
    }

    return {
        state: { alert },
        actions: { setNewAlert }
    }
}

export const [AlertProvider, useAlertContext] = constate(useAlertStore)

