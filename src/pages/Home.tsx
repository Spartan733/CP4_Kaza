import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ListCard from "../components/ListCards";

function Home() {
    return (
        <>
            <NavBar />

            <main>
                <h1>Trouvez votre logement idéal</h1>
                <p>Découvrez des hébergements uniques et vivez comme un local partout dans le monde</p>

            <ListCard />
                
            </main>
            <Footer />
        </>
    )
}

export default Home