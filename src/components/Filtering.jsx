import jsonData from "../assets/superheroes.json";
import { useState } from "react";

export default function MyComponent(props) {
    const [checkedGood, setCheckedGood] = useState(false);
    const [checkedBad, setCheckedBad] = useState(false);
    const [checkedPublishers, setCheckedPublishers] = useState({}); // Stan dla checkboxów wydawców

    const {setSelectedHero } = props

    // Pobierz unikalne wartości publisher
    const uniquePublishers = [...new Set(jsonData.map((item) => item.biography.publisher))].filter(Boolean);

    // Aktualizuj zaznaczenie dla wydawcy
    const handlePublisherChange = (publisher) => {
        setCheckedPublishers((prevState) => ({
            ...prevState,
            [publisher]: !prevState[publisher], // Przełącz zaznaczenie
        }));
    };

    // Funkcja filtrująca
    const getFilteredResults = () => {
        return jsonData.filter((item) => {
            // Filtrowanie według alignment (good/bad)
            const alignmentMatch =
                (checkedGood && item.biography.alignment === "good") ||
                (checkedBad && item.biography.alignment === "bad")


            // Filtrowanie według publisher
            const selectedPublishers = Object.keys(checkedPublishers).filter(
                (key) => checkedPublishers[key]
            );

            const publisherMatch =
                selectedPublishers.length === 0 || selectedPublishers.includes(item.biography.publisher);

            // Zwróć wynik, który pasuje do obu warunków
            return alignmentMatch && publisherMatch;
        });
    };

    const handleGood = (e) => {
        setCheckedGood(e.target.checked);
    };

    const handleBad = (e) => {
        setCheckedBad(e.target.checked);
    };

    const filteredList = getFilteredResults();

    return (
        <div className="filtered-results">
            {/* Filtr Good/Bad */}
            <label className="switch">
                <input
                    type="checkbox"
                    checked={checkedGood}
                    onChange={handleGood}
                />
                <span className="slider round"></span>
                <h3 className="slider-text">Good</h3>
            </label>

            <label className="switch">
                <input
                    type="checkbox"
                    checked={checkedBad}
                    onChange={handleBad}
                />
                <span className="slider round"></span>
                <h3 className="slider-text">Bad</h3>
            </label>

            {/* Filtr Publisher */}
            <div className="filter-by-publisher">
                <h3>Filter by Publisher:</h3>
                <div className="publisher-list">
                    {uniquePublishers.map((publisher) => (
                        <label key={publisher} className="publisher-checkbox">
                            <input
                                type="checkbox"
                                checked={checkedPublishers[publisher] || false}
                                onChange={() => handlePublisherChange(publisher)}
                            />
                            {publisher}
                        </label>
                    ))}
                </div>
            </div>

            {/* Wyświetlanie wyników */}
            <div className="filtered-results">
                {filteredList.map((item, index) => (
                    <ul key={index}>
                        <li className="filtering-results" onClick={() => setSelectedHero(item)}>{item.name} - {item.biography.publisher}</li>
                    </ul>
                ))}
            </div>
        </div>
    );
}
