import { createUseStyles } from "react-jss";

export default createUseStyles({
    editorWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    search: {
        marginBottom: '20px',
    },
    searchLabel: {
        marginRight: '7px',
    },
    searchInput: {
        fontSize: '16px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '10px',
        height: '25px',
        width: '400px',
    },
    loading: {
        backgroundColor: "#ffffff",
        backgroundImage: `url("https://i.gifer.com/ZZ5H.gif")`,
        backgroundSize: "25px 25px",
        backgroundPosition: "right 7px center",
        backgroundRepeat: "no-repeat"
    },
    catsListWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        margin: '0 auto',
    },
})