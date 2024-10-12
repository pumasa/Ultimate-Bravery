async function fetchChampions() {
    const version = await fetchVersion(); 

    const jsonURL = `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`;

    try {
        const response = await fetch(jsonURL);
        const data = await response.json();
        const champions = data.data;
        const championRow = document.getElementById('champion-row');

        Object.keys(champions).forEach(championKey => {
            const champion = champions[championKey];
            const imgFileName = champion.image.full;

            const colDiv = document.createElement('div');
            colDiv.classList.add('col');
            colDiv.classList.add('padding');

            const link = document.createElement('a');
            link.href = '#';

            const img = document.createElement('img');
            img.classList.add('items-pic-small', 'items-border-normal-small');
            img.src = `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${imgFileName}`;
            img.alt = champion.name;
            
            img.addEventListener('click', function() {
                img.classList.toggle('grayscale');
            });


            link.appendChild(img);
            colDiv.appendChild(link);
            championRow.appendChild(colDiv);
        });
    } catch (error) {
        console.error('Error loading champions:', error);
    }
}

function randomizeChampion() {
    const allChampions = document.querySelectorAll('#champion-row img');
    const nonGrayscaleChampions = Array.from(allChampions).filter(img => !img.classList.contains('grayscale'));

    if (nonGrayscaleChampions.length > 0) {
        const randomIndex = Math.floor(Math.random() * nonGrayscaleChampions.length);
        const selectedChampion = nonGrayscaleChampions[randomIndex];

        // Display the selected champion
        const selectedChampionDisplay = document.getElementById('selected-champion');
        selectedChampionDisplay.innerHTML = `<img src="${selectedChampion.src}" alt="${selectedChampion.alt}" class="selected-champion-pic" />`;
    } else {
        alert('No non-grayscale champions available to randomize.');
    }
}

fetchChampions();

// Add event listener to the randomize button
document.getElementById('randomize-button').addEventListener('click', randomizeChampion);