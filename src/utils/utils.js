// const fetchDataForHeroes = async () => {
//
//     try {
//
//
//         const response = await fetch(
//             `https://gateway.marvel.com:443/v1/public/characters?limit=100&ts=${ts}&apikey=${pubkey}&hash=${hashedString}`
//         );
//         if (!response.ok) {
//             throw new Error(`HTTP error: Status ${response.status}`);
//         }
//         if (response.ok) {
//             const marvelData = await response.json()
//
//
//             // console.log(marvelData.data.results)
//             const heroes = marvelData.data.results
//             setData(heroes);
//             setError(null);
//         }
//
//     } catch (err) {
//         setError(err.message);
//         setData(null);
//     } finally {
//         setLoading(false);
//     }
// };