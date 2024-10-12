async function fetchVersion() {
    const realmURL = 'https://ddragon.leagueoflegends.com/realms/na.json';
    try {
        const response = await fetch(realmURL);
        const realmData = await response.json();
        return realmData.n.champion; 
    } catch (error) {
        console.error('Error fetching version:', error);
    }
}