import "./Welcome.css"

const Welcome = ({ prenom, date, zodiac }) => {
    return (
        <div className="container-welcome">
            <h2><span>Hello, </span>{prenom} !</h2>
            <div className="container-date-welcome">
                <h3>{`${date} - ${zodiac}`}</h3>
            </div>
        </div>
    )
}

export default Welcome