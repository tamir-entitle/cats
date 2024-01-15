import { createUseStyles } from "react-jss";

export default createUseStyles({
    alertWrapper: {
        visibility: "visible",
        opacity: 1,
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#00a100",
        minWidth: "400px",
        padding: "20px",
        borderRadius: "10px",
        color: "black",
        zIndex: 1,
        boxShadow: '0 0 7px 0px #80808082',
        transition: "opacity 0.5s ease-in-out",
    },
    hideAlert: {
        opacity: 0,
        visibility: "hidden",
    },
    success: {
        backgroundColor: "#ddffdd",
    },
    warning: {
        backgroundColor: "#ffffcc",
    },
    error: {
        backgroundColor: "#ffdddd",
    },
    info: {
        backgroundColor: "#ddffff",
    },
})