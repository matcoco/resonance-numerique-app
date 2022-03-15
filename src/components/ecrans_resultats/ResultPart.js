import { useNavigate } from "react-router-dom"

const ResultPart = ({ img, number, text, alt, type, classN, back }) => {
    const navigate = useNavigate();
    return (

        <div className={classN} onClick={() => navigate(`/resultats/${type}`, { state: { number, type, text, img, alt, back } })}>
            <div>
                <img src={img} alt={alt} />
            </div>
            <div>
                <h2 className="number-conjoncture">{number}</h2>
                <h3 className="text-conjoncture">{text}</h3>
            </div>
        </div>
    )
}


export default ResultPart