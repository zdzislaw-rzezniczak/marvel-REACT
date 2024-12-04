import {useEffect, useState} from "react";
import Modal from './Modal'
import {createPortal} from "react-dom";


export default function HeroCard(props) {

    const { selectedHero } = props;
    const [image, setImage] = useState(null);
    const url = selectedHero?.images?.sm
    const key = selectedHero?.slug

    const [showModal, setShowModal] = useState(false);


    // Funkcja do pobierania obrazu z internetu
    const fetchImage = async (key, url) => {


        try {
            const response = await fetch(url); // Pobierz obraz z podanego URL
            const blob = await response.blob(); // Konwertuj odpowiedź na obiekt Blob
            const reader = new FileReader();

            reader.onloadend = () => {
                const base64 = reader.result;
                // Zapisz obraz w LocalStorage
                sessionStorage?.setItem(key, base64);
                setImage(base64); // Ustaw obraz w stanie
            };

            reader.readAsDataURL(blob); // Konwertuj Blob na base64
        } catch (error) {
            console.error("Błąd podczas pobierania obrazu:", error);
        }
    };




    useEffect(() => {


        const savedImage = sessionStorage?.getItem(key);
        if (savedImage) {setImage(savedImage);
        } else {
            fetchImage(key, url)
        }



    },[selectedHero]);

    return (
        <div>

            <h1 className="button-modal-open">{selectedHero?.name}</h1>
            <button className="button-modal-open" onClick={() => setShowModal(true)}><img src={image}/></button>
            {showModal && createPortal(
                <Modal setOpenModal={setShowModal} onClose={() => setShowModal(false)}>
                    <div className="title">
                        <h1>{selectedHero.name}</h1>
                        <img src={image}/>
                    </div>

                    <div className="body">
                        <p><span className="description"> Publisher: </span> {selectedHero.biography.publisher}</p>
                    </div>
                    <div className="body">
                        <p><span className="description"> Occupation: </span> {selectedHero.work.occupation}</p>
                    </div>

                </Modal>,
                document.body
            )}

            <ul>
                <li>Inteligencja: {selectedHero?.powerstats?.intelligence}</li>
                <li>Siła: {selectedHero?.powerstats?.strength}</li>
                <li>Szybkość: {selectedHero?.powerstats?.speed}</li>
                <li>Wytrzymałość: {selectedHero?.powerstats?.durability}</li>
                <li>Moc: {selectedHero?.powerstats?.power}</li>
                <li>Walka: {selectedHero?.powerstats?.combat}</li>
            </ul>


        </div>

    )
};

