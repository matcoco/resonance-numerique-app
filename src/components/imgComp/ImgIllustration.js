import './ImgComp.css'

const ImgIllustration = () => {
    const uri = process.env.REACT_APP_URI;    
    return (
        <div className="container-home">
            <img className="illustration-home" src={`${uri}/assets/illustration_.svg`} alt="background header" />
        </div>
    )
}

export default ImgIllustration