import { useNavigate } from "react-router-dom"

const ArrowBack = ({ link, back }) => {
    const navigate = useNavigate()

    const handleClickBack = () => {
        navigate(`/${link}`, { state: { back } })
    }

    return (
        <div>
            <span style={styles.arrow} onClick={handleClickBack}>&#8592;</span>
        </div>
    )
}

const styles = {
    arrow: {
        fontSize: "2rem"
    },
    link: {
        textDecoration: "none"
    }
}
export default ArrowBack