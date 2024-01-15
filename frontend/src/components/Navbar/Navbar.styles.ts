import { createUseStyles } from "react-jss";

export default createUseStyles({
    navbarWrapper: {
        height: '55px',
        width: '100%',
        backgroundColor: "#3858ca",
        boxShadow: "0 4px 2px -2px grey"
    },
    navbarContent: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '100%',
        margin: '0 auto',
        padding: '0 20px',
        maxWidth: '1280px',
    },
    seperator: {
        width: '1px',
        height: '25px',
        backgroundColor: 'white',
        borderRadius: '5px',
    },
    navbarButton: {
        color: "white",
        margin: '0 10px',
    }

})