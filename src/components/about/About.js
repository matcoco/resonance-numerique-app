import ImgIllustration from "../imgComp/ImgIllustration"
import "./About.css"

const About = () => {
    return (
        <>
            <ImgIllustration />
            <div className="container container-about">
                <div className="container-infos-about p-4">
                    <h1 className="h1 container-title-methode text-center">A propos du site</h1>
                    <p className="text">Le but de ce site est de vous faciliter le calcul de votre conjoncture et à vous divertir.</p>
                    <p className="text">Cependant, les significations associées aux nombres de votre conjoncture restent généralistes.</p>
                    <p className="text">Pour avoir des précisions sur votre propre cas, merci de vous rapprocher de Cyril depuis son site web <a className="href-link" target="_blank" rel="noreferrer" href="https://www.archedusavoir.com/numero">https://www.archedusavoir.com/numero</a></p>
                </div>
            </div>
        </>
    )
}

export default About