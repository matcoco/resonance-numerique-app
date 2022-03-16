import ImgIllustration from "../imgComp/ImgIllustration"
import './MentionLegale.css'

const MentionLegal = () => {
    return (
        <>
                <ImgIllustration />
                <div className="container container-mentions-legales">
                    <h1 className="mb-5">LES MENTIONS LÉGALES</h1>
                    <div className="mention-text">
                        <h2>IDENTITÉ</h2>
                        <p>Nom du site web : Résonance Numérique</p>
                        <p>Adresse :  https://matcoco.github.io/resonance-numerique-app/</p>
                        <p>Propriétaire : Mathieu GAUBAL-VATILINGON - Développeur Web</p>
                        <p>Conception et réalisation : Mathieu GAUBAL-VATILINGON</p>
                        <p>Hébergement : Github</p>
                    </div>
                    <div className="mention-text">
                        <h2>CONDITIONS D’UTILISATION</h2>
                        <p>L'utilisation de ce site est entièrement gratuite.</p>
                    </div>
                    <div className="mention-text">
                        <h2>INFORMATIONS</h2>
                        <p>Le propriétaire du site n'est pas l'auteur de la théorie de la Résonance Numérique.</p>
                        <p>Les informations et documents du site sont présentés à titre indicatif, n’ont pas de caractère exhaustif, et ne peuvent engager la responsabilité du propriétaire du site.</p>
                        <p>Le propriétaire du site ne peut être tenu responsable des dommages directs et indirects consécutifs à l’accès au site.</p>
                    </div>
                    <div className="mention-text">
                        <h2>INTERACTIVITÉ</h2>
                        <p>Les utilisateurs peuvent simplement utiliser le calculateur et générer des nombres liés à leur date de naissance. Les significations associées sont à buts informatifs.</p>
                    </div>
                    <div className="mention-text">
                        <h2>LIENS</h2>
                        <h3>Liens sortants</h3>
                        <p>Le propriétaire du site décline toute responsabilité et n’est pas engagé par le référencement via des liens hypertextes, de ressources tierces présentes sur le réseau Internet, tant en ce qui concerne leur contenu que leur pertinence.</p>
                        <h3>Liens entrants</h3>
                    </div>
                    <div className="mention-text">
                        <h2>CONFIDENTIALITÉ</h2>
                        <p>Le site ne recueille pas d’informations personnelles, et n’est pas assujetti à déclaration à la CNIL.</p>
                        <p>Lors de l'enregistrement de la conjoncture via la rubrique "archives", les données sont stockées dans votre navigateur.</p>
                    </div>
                </div>
        </>


    )
}

export default MentionLegal

