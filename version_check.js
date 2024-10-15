async function fetchVersion() {
    const realmURL = 'https://ddragon.leagueoflegends.com/realms/na.json';
    try {
        const response = await fetch(realmURL);
        const realmData = await response.json();
        const patchVersion = realmData.n.champion; // Get patch version

        // Display the patch number in the HTML
        document.getElementById('patch-number').textContent = patchVersion;

        return patchVersion; 
    } catch (error) {
        console.error('Error fetching version:', error);
    }
}

// Call fetchVersion to update the patch number on page load
fetchVersion();
