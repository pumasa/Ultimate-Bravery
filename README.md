# Ultimate Bravery

This project is a simple web application that allows users to randomly select a champion and build for the game *League of Legends*. It retrieves data from Riot's Data Dragon API to display current champions and utilizes an external JSON file for rune and item information.

## Features

- **Random Champion Selector**: Displays a random champion from the League of Legends champion list.
- **Random Rune Selector**: Randomly selects runes from different rows and displays them.
- **Random Item Selector**: Randomly selects and displays a starter item, boots, and five legendary items.
- **Dynamic Patch Version**: Automatically displays the current patch version fetched from the Riot Games API.
  
## Getting Started

### Prerequisites

You will need a basic knowledge of HTML, CSS, and JavaScript to understand this project. Additionally, you will need internet access to fetch data from the external API and the latest version of Riot's Data Dragon for *League of Legends*.

### File Structure

- `index.html`: The main webpage displaying the user interface.
- `style.css`: Contains the basic styling for the page layout.
- `version_check.js`: Fetches the latest patch version from Riot's API and displays it.
- `champ_list.js`: Fetches and displays champions from Riot's API.
- `runes.js`: Handles random selection and display of rune stats.
- `modsItems.js`: Handles random selection and display of rune mods, starter item, boots and legendary items.

### How to Use

Press the "RANDOMIZE" button to select a random champion, runes, stat modifiers, and items. These will be displayed in their respective sections.

### External Dependencies

- **Bootstrap**: Used for responsive layout and UI components.
- **Riot API**: Data Dragon API is used to fetch champions and patch versions dynamically.
- **JSON Data**: Rune stats and item data are fetched from a static JSON file (`item_list.json`).

### How to Run

1. Open `index.html` in your browser.
2. Ensure you have an active internet connection to fetch champion data from the Riot API.
3. Press the "RANDOMIZE" button to generate a random champion and build.

### Future Enhancements

- **Add Navbar**: Add a navigation bar for easier site navigation.
- **Roles Section**: Implement a role selection feature to further randomize the experience.

### Credits

- Data from Riot Games' League of Legends API.
- Bootstrap for styling.

### License

This project is open-source and free to use.

Made by Mike Picus
