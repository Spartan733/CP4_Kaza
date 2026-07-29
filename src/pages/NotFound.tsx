import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import '../styles/404.scss';

function Not_Found() {
    return (
        <>
            <NavBar />

            <main>
                <h1>Erreur 404, Page non trouver</h1>
            </main>

            <Footer />
            
        </>
    )
}

export default Not_Found