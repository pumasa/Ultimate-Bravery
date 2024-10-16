// Load item_list.json  
async function fetchItems() {
    const jsonURL = 'item_list.json';

    try {
        const response = await fetch(jsonURL);
        const data = await response.json();

        // Call the function to display legendary items
        displayLegendaryItems(data.Legendary);

    } catch (error) {
        console.error('Error loading item list:', error);
    }
}

// Display all legendary items
function displayLegendaryItems(legendaryItems) {
    const legendaryKeys = Object.keys(legendaryItems);
    const itemsHTML = legendaryKeys
        .map(item => `
            <div class="col">
                <img src="https://ddragon.leagueoflegends.com/cdn/14.20.1/img/item/${legendaryItems[item]}" alt="${item}" class="item-pic" />
            </div>
        `)
        .join('');

    document.getElementById('item-row').innerHTML = itemsHTML;
}

// Call the function to load items
fetchItems();
