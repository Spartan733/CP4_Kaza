import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ListCard from "../components/ListCards";

import '../styles/Header.scss';
import '../styles/ListCard.scss';

function Home() {
    return (
        <>
            <NavBar />

            <main>
                <section className="find">
                    <h1>Trouvez votre logement idéal</h1>
                    <p>Découvrez des hébergements uniques et vivez comme un local partout dans le monde</p>
                </section>
            <ListCard />
                
            </main>
            <Footer />
        </>
    )
}

export default Home