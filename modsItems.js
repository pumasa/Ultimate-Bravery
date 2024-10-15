// Load item_list.json 
async function fetchItems() {
    const jsonURL = 'item_list.json';

    try {
        const response = await fetch(jsonURL);
        const data = await response.json();

        // Add event listener for "Randomize" button
        document.getElementById('randomize-button').addEventListener('click', function() {
            randomizeRuneStatMods(data.StatMods);
            randomizeBoots(data.Boots);
            randomizeStarterItem(data.Starter);
            randomizeLegendaryItems(data.Legendary);
        });

    } catch (error) {
        console.error('Error loading item list:', error);
    }
}

// Mods
function randomizeRuneStatMods(statMods) {
    const firstRowKeys = Object.keys(statMods.firstRow);
    const secondRowKeys = Object.keys(statMods.secondRow);
    const thirdRowKeys = Object.keys(statMods.thirdRow);

    const firstRowChoice = statMods.firstRow[firstRowKeys[Math.floor(Math.random() * firstRowKeys.length)]];
    const secondRowChoice = statMods.secondRow[secondRowKeys[Math.floor(Math.random() * secondRowKeys.length)]];
    const thirdRowChoice = statMods.thirdRow[thirdRowKeys[Math.floor(Math.random() * thirdRowKeys.length)]];

    document.getElementById('rune-stat-mods').innerHTML = `
        <img src="${firstRowChoice}" alt="First Row Rune Stat" class="rune-pic" />
        <img src="${secondRowChoice}" alt="Second Row Rune Stat" class="rune-pic" />
        <img src="${thirdRowChoice}" alt="Third Row Rune Stat" class="rune-pic" />
    `;
}

// Boots
function randomizeBoots(boots) {
    const bootKeys = Object.keys(boots);
    const randomBoot = boots[bootKeys[Math.floor(Math.random() * bootKeys.length)]];
    const bootURL = `https://ddragon.leagueoflegends.com/cdn/14.20.1/img/item/${randomBoot}`;

    document.getElementById('boots').innerHTML = `<img src="${bootURL}" alt="Boots" class="item-pic" />`;
}

// Starter Item
function randomizeStarterItem(starterItems) {
    const starterKeys = Object.keys(starterItems);
    const randomStarter = starterItems[starterKeys[Math.floor(Math.random() * starterKeys.length)]];
    const starterURL = `https://ddragon.leagueoflegends.com/cdn/14.20.1/img/item/${randomStarter}`;

    document.getElementById('starter-item').innerHTML = `<img src="${starterURL}" alt="Starter Item" class="item-pic" />`;
}

// Other 5 items
function randomizeLegendaryItems(legendaryItems) {
    const legendaryKeys = Object.keys(legendaryItems);
    const selectedItems = [];

    while (selectedItems.length < 5) {
        const randomItem = legendaryKeys[Math.floor(Math.random() * legendaryKeys.length)];
        if (!selectedItems.includes(randomItem)) {
            selectedItems.push(randomItem);
        }
    }

    const itemsHTML = selectedItems
        .map(item => `<img src="https://ddragon.leagueoflegends.com/cdn/14.20.1/img/item/${legendaryItems[item]}" alt="${item}" class="item-pic" />`)
        .join('');

    document.getElementById('five-items').innerHTML = itemsHTML;
}

// Call the function to load items
fetchItems();


// Add after:

// "Winters Approach" / "Manamune" / "Archangel's Staff"/"Immortal Shieldbow"/"Maw"/"Steraks"
// "Trailblazer" / "Dead Man's Plate"
// "Abyssal Mask"/"Cryptbloom"/"Void Staff"/"Terminus"/"Lord Dominics"/"Serylda"/"Black Cleaver"/"Mortal Reminder"/
// "Profane Hydra"/"Titanic"/"Stridebreaker"/"Ravenous"
// "Banshee"/"Edge of Night"
// "Iceborn"/"Trinity"/"Lichbane"
// "Sunfire"/"Hollow Radiance" 
