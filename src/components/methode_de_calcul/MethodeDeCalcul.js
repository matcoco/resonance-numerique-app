
import ImgIllustration from "../imgComp/ImgIllustration"
import "./MethodeDeCalcul.css"

const MethodeDeCalcul = () => {
    return (
        <>
            <ImgIllustration classN={"container-img-methode"}>
                <div className="container-title-methode">
                    <h1>La méthode de calcul</h1>
                </div>
            </ImgIllustration>
            <div className="container container-methode">
                <div className="container-cheminDeVie-methode pb-3">
                    <h2>Calcul du chemin de vie</h2>
                    <p>Pour calculer le chemin de vie, prenez pour exemple la date de naissance suivante :</p>
                    <p>{`20/04/1980 => 2 + 0 + 0 + 4 + 1 + 9 + 8 + 0 = `} <span className="resultat-calcul">24</span></p>
                    <p>{`24 => 2 + 4 => `}<span className="resultat-calcul">6</span></p>
                    <p>Votre chemin de vie est le nombre 6</p>
                    <p className="text-muted">- Si vous trouvez les nombres 11 - 22 - 33, il ne faudra pas les réduire. Ces nombres ont une significations -</p>
                </div>

                <div className="container-conjoncture-methode pb-3">
                    <h2>Calcul de la conjoncture</h2>
                    <p>Pour calculer votre conjoncture, prenez pour exemple la date de naissance suivante :</p>
                    <p>20/04/1980</p>
                    <div className="section-calcul">
                        <h5 className="pt-3">JOUR</h5>
                        <p>{`Le jour correspond à la lune. Il s'agit de savoir comment je pense.`}</p>
                        <p>{`20 => 2 + 0 = `}<span className="resultat-calcul">2</span></p>
                    </div>
                    <div className="section-calcul">
                        <h5 className="pt-3">MOIS</h5>
                        <p>{`Le mois correspond au soleil. Il s'agit de savoir comment je suis.`}</p>
                        <p>{`04 => 0 + 4 = `}<span className="resultat-calcul">4</span></p>
                    </div>
                    <div className="section-calcul">
                        <h5 className="pt-3">ANNEE</h5>
                        <p>{`L'année correspond à la terre. Il s'agit de savoir comment je fais.`}</p>
                        <p>{`1980 => 1 + 9 + 8 + 0 = 18 => 1 + 8 = `}<span className="resultat-calcul">9</span></p>
                    </div>

                </div>

                <div className="container-resultat-finale-methode pb-3">
                    <h2>RESULTAT</h2>
                    <p>Ma conjoncture est finalement calculée</p>
                    <p>Lune <span className="resultat-calcul">2</span> - Soleil <span className="resultat-calcul">4</span> - Terre <span className="resultat-calcul">9</span></p>
                    <p>Les coordonnées "GPS" de ma position selon l'univers m'indique comment je dois être sur Terre. Attention à ne pas prendre la signification trop à coeur. Soyez juste vous même 😉</p>
                    <p>Pour en savoir davantage, rendez-vous le site de Cyril : <a target="_blank" rel="noreferrer" href="https://www.archedusavoir.com/numero">https://www.archedusavoir.com/</a></p>
                    <p>Pour d'amples explications sur la résonance numérique, vous pouvez vous rendre sur le site de NUREA TV : <a target="_blank" rel="noreferrer" href="https://nurea.tv/?s=cyril">lien de la vidéo youtube</a></p>
                </div>
            </div>
        </>
    )
}

export default MethodeDeCalcul