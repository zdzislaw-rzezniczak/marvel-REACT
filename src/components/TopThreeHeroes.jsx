import {useEffect, useState} from "react";
import superheroJson from "../assets/superheroes.json";


export default function TopThreeHeroes(props){

    const [threeHeroes, setThreeHeroes] = useState([]);
    const {setSelectedHero} = props;

    function getRandomHeroes() {
        let heroes = []
        for (let i = 0; i < 3 ; i++) {
            let randomHero1id = Math.floor(Math.random() * 730)
            let hero = superheroJson[randomHero1id + 1]
            if (hero===undefined) {
                --i
            } else {
                heroes.push(hero);
            }
        }
            setThreeHeroes(heroes);
            setSelectedHero(heroes[0]);

    }

    useEffect(() => {
        getRandomHeroes()

    },[]);

    return (
    <div>
            {threeHeroes.map((item) => (
                <div className="top-three-heroes" key={item.id}>
                    <button className="button-modal-open" onClick={() => setSelectedHero(item)}>
                        <img src={item.images.xs} border="0"/>
                    </button>
                    <p>{item.name}</p>


                </div>))}
    </div>
    )

}