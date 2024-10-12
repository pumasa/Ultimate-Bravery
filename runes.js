const runeDataUrl = `https://ddragon.leagueoflegends.com/cdn/14.20.1/data/en_US/runesReforged.json`;

let runeData = []; // Will hold the fetched rune data

// Fetch the rune data when the page loads
async function fetchRunesData() {
    try {
        let response = await fetch(runeDataUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        runeData = await response.json();
    } catch (error) {
        console.error('Failed to fetch rune data:', error);
    }
}

// Function to select random runes
function randomizeRunes() {
    const runeContainer = document.getElementById('rune-container');
    runeContainer.innerHTML = ''; // Clear previous results

    if (runeData.length === 0) {
        console.error('Rune data is empty. Ensure data is loaded before randomizing.');
        return;
    }

    // Select the first rune path randomly
    const selectedClasses = [];
    const firstRunePath = selectRandomRunePath(selectedClasses);
    createRunePathIcon(firstRunePath, runeContainer); // Create first rune path

    // Select 1 more random rune path from a different class
    const secondRunePath = selectRandomRunePath(selectedClasses);
    createRunePathIcon(secondRunePath, runeContainer, true); // Create second rune path, skip first rune
}

// Function to select a random rune path from a different class
function selectRandomRunePath(selectedClasses) {
    let filteredPaths = runeData.filter(runePath => !selectedClasses.includes(runePath.id));

    // If all classes are selected, exit the function
    if (filteredPaths.length === 0) {
        console.warn('All rune classes have been selected.');
        return null;
    }

    // Pick a random rune path from the filtered paths
    const randomRunePath = filteredPaths[Math.floor(Math.random() * filteredPaths.length)];
    selectedClasses.push(randomRunePath.id); // Store the selected class ID

    return randomRunePath;
}

// Function to create rune path icon and append to the container
function createRunePathIcon(runePath, container, skipFirstRune = false) {
    if (!runePath) return;

    const pathDiv = document.createElement('div');
    pathDiv.className = 'rune-path'; // Assign class for styling

    const pathImg = document.createElement('img');
    pathImg.src = `https://ddragon.leagueoflegends.com/cdn/img/${runePath.icon}`;
    pathDiv.appendChild(pathImg);
    container.appendChild(pathDiv);

    // Loop through each slot in the rune path and select a random rune
    runePath.slots.forEach((slot, slotIndex) => {
        // Select a random rune from the slot
        const randomRune = slot.runes[Math.floor(Math.random() * slot.runes.length)];

        // Create a new div for the rune icon
        const runeDiv = document.createElement('div');
        const runeImg = document.createElement('img');
        runeImg.src = `https://ddragon.leagueoflegends.com/cdn/img/${randomRune.icon}`;
        runeDiv.appendChild(runeImg);

        // Append to the path div
        pathDiv.appendChild(runeDiv);
    });

}

// Add event listener to the randomize button
document.getElementById('randomize-button').addEventListener('click', randomizeRunes);

// Fetch rune data once the page loads
window.onload = fetchRunesData;