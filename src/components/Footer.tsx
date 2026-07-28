export default function Footer() {
    const actualDate = new Date().getFullYear();

    return(
        <footer className="footer">
            <div className="about">
                <h3>A propos de Kaza</h3>
                <ul className="About">
                    <li><a href="#">Notre histoire</a></li>
                    <li><a href="#">Equipe</a></li>
                    <li><a href="#">Carrières</a></li>
                    <li><a href="#">Presse</a></li>
                </ul>
            </div>

            <div className="support">
                <h3>Support</h3>
                <ul>
                    <li><a href="#">Centre d'aide</a></li>
                    <li><a href="#">Nous contacter</a></li>
                    <li><a href="#">Signaler un problème</a></li>
                    <li><a href="#">Page 404</a></li>
                </ul>
            </div>

            <div className="legal">
                <h3>Légal</h3>
                <ul>
                    <li><a href="#">Condition d'utilisation</a></li>
                    <li><a href="#">Politique de confidentialité</a></li>
                    <li><a href="#">Mentions légales</a></li>
                    <li><a href="#">Cookies</a></li>
                </ul>
            </div>

            <div>
                <p>
                    © {actualDate} Kaza. Tous droits réservés
                </p>
            </div>
        </footer>
    )
}