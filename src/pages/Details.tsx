import { useParams, Navigate } from 'react-router-dom';

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel"
import Collapse from '../components/Collapse';

import logements from '../data/logements.json';

function Details() {
    const { id } = useParams();

    const logement = logements.find((logement) => logement.id === id);

    if(!logement) {
        return <Navigate to='../pages/NotFound.tsx' />
    }

    return (
        <>
            <NavBar />

            <main className='detail_main'>
                <Carousel pictures={logement.pictures} />

                <section className='infos'>
                    <div className='title'>
                        <h1>{logement.title}</h1>
                        <p>{logement.location}</p>
                    

                        <div className="tags">
                            {logement.tags.map((tag) => (
                                <span key={tag}>{tag}</span>
                            ))}
                        </div>
                    </div>

                    <div className='host'>
                        <div className='info_host'>
                            <p>{logement.host.name}</p>

                            <img 
                                src={logement.host.picture}
                                alt={logement.host.name}
                            />
                        </div>

                        <p>⭐ {logement.rating} / 5</p>
                    </div>

                </section>

                <section className='collapse'>
                    <Collapse 
                        title='Description'
                        content={logement.description}
                    />

                    <Collapse 
                        title='Equipement'
                        content={logement.equipments.join(", ")}
                    />
                </section>

            </main>
            

            <Footer />
        </>
    )
}

export default Details