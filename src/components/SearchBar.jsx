import jsonData from "../assets/superheroes.json";
import {useState} from "react";



export default function SearchBar(props) {

    const {setSelectedHero} = props;

    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    // Handle the search button click
    const handleSearch = () => {
        const filteredResults = jsonData.filter(item =>
            item.name.toLowerCase().startsWith(searchInput.toLowerCase())
        );
        // setSelectedHero(filteredResults[0]);
        setSearchResults(filteredResults);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }


    return (
        <div style={{padding: "20px", fontFamily: "Arial"}}>
            <h3>Search Bar</h3>
            {/* Input field */}
            <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search by name..."
                onKeyUp={handleKeyPress}
                style={{
                    padding: "10px",
                    fontSize: "16px",
                    width: "200px",
                    marginRight: "10px"
                }}
            />
            {/* Search button */}
            <button
                onClick={handleSearch}
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    cursor: "pointer"
                }}
            >
                Search
            </button>

            <div style={{marginTop: "20px"}}>
                {searchResults.length > 0 && searchResults.length < 10? (
                    <ul>

                        {searchResults.map((result) => (
                            <li className="search-bar-results" onClick={() => setSelectedHero(result)} key={result.id}>
                                <button>{result.name}</button>
                            </li>

                        ))}
                    </ul>
                ) : searchResults.length > 10 ? (
                    <p> Too many hits be more specific</p>
                ): (<p>No results found</p>)}
            </div>
        </div>
    );
}
