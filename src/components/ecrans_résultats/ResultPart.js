import { useNavigate } from "react-router-dom"

const ResultPart = ({ img, number, text, alt, type, classN, back }) => {
    const navigate = useNavigate();
    return (

        <div className={classN} onClick={() => navigate(`/resultats/${type}`, { state: { number, type, text, img, alt, back } })}>
            <div>
                <img src={img} alt={alt} />
            </div>
            <div>
                <h2>{number}</h2>
                <h3>{text}</h3>
            </div>
        </div>
    )
}

export default ResultPart