import { createUseStyles } from "react-jss";

export default createUseStyles({
    catPageWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
    },
    catImage: {
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        width: '250px',
        height: '250px',
        marginBottom: '15px',
        borderRadius: '50%',
    },
    catName: {
        fontSize: "20px",
        fontWeight: "bold",
        marginBottom: "15px",
    },
    catDescription: {
        fontSize: "16px",
        fontWeight: "normal",
        marginBottom: "40px",
    },
    mouseWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    mouseName: {
        marginBottom: "20px",
    },
    mouseImage: {
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        width: '200px',
        height: '200px',
        borderRadius: '10px',
    }
})