import { createUseStyles } from "react-jss";

export default createUseStyles({
    catWrapper: {
        border: '1px solid #80808082',
        padding: '15px',
        margin: '20px 8px 20px 0',
        borderRadius: '10px',
        color: 'black',
        width: "200px",
        textAlign: 'center',
        "&:hover": {
            boxShadow: '0 0 7px 0px #80808082'
        }
    },
    catImage: {
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        width: '200px',
        height: '200px',
        marginBottom: '15px',
    },
    name: {
        fontSize: '16px',
        fontWeight: 'bold',
        marginBottom: '5px',
    }
})