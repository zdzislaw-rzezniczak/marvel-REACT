
import TopThreeHeroes from "./components/TopThreeHeroes.jsx";
import {useState} from "react";
import HeroCard from "./components/HeroCard.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Filtering from "./components/Filtering.jsx";



function App() {
    const [selectedHero, setSelectedHero] = useState({});
    const [checked, setChecked] = useState(false);

    const handleChange = (e) => {
        setChecked(e.target.checked);
    };

  return (
    <>

        <div className="main-container">

            <div className="search-bar">
                <SearchBar setSelectedHero={setSelectedHero}/>
            </div>


            <div className="main-content">

                <div className="hero-card">
                    <HeroCard selectedHero={selectedHero}/>
                </div>


                <div className="top-three-heroes">
                    <TopThreeHeroes
                        setSelectedHero={setSelectedHero}
                        selectedHero={selectedHero}
                    />
                </div>
            </div>
            <label>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}
                />
                Filtering
            </label>

            {checked && < div className="filtering">
                <Filtering setSelectedHero={setSelectedHero}
                selectedHero={selectedHero}/>
                </div>}


        </div>
    </>
  )
}

export default App
