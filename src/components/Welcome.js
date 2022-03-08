import "./Welcome.css"

const Welcome = ({ prenom, date }) => {
    return (
        <div className="container-welcome">
            <h2><span>Hello, </span>{prenom} !</h2>
            <h3>{date}</h3>
        </div>
    )
}

export default Welcome