// Player data
const players = [
    {
        name: "Finna",
        number: 112352639
    },
    {
        name: "Freya",
        number: 112460022
    },
    {
        name: "Hennex",
        number: 111660308
    },
    {
        name: "Indi",
        number: 111693052
    },
    {
        name: "Lenka",
        number: 112804288
    },
    {
        name: "Lila",
        number: 112545514
    },
    {
        name: "Ragnar",
        number: 112356241
    }
]

const characterId = 112460022;
const character = "freya";

// App data
const apps = [
    {
        name: "Arcanex",
        icon: "arcanex.png",
        content: `
            <div class="app-header">
                <h2>Arcanex</h2>
                <button class="close-btn">&times;</button>
            </div>
            <!-- Add Arcanex app content here -->
        `
    },
    {
        name: "Spellbook Sync",
        icon: "spellbook.png",
        content: `
            <div class="app-header">
                <h2>Spellbook Sync</h2>
                <button class="close-btn">&times;</button>
            </div>
            <!-- Spellbook Sync app content -->
            <div class="spellbook-sync">
                <iframe class="responsive-iframe" src="https://magicalscrolls.com"></iframe>
            </div>
        `
    },
    // {
    //     name: "Spellbook Sync",
    //     icon: "spellbook.png",
    //     content: `
    //         <div class="app-header">
    //             <h2>Spellbook Sync</h2>
    //             <button class="close-btn">&times;</button>
    //         </div>
    //         <!-- Spellbook Sync app content -->
    //         <div class="spellbook-sync">
    //         <div class="spell-list">
    //             <!-- Spell list will be dynamically generated here -->
    //         </div>
    //         <div class="spell-filters">
    //             <select id="level-filter">
    //             <option value="">All Levels</option>
    //             <!-- Options for spell levels will be added dynamically -->
    //             </select>
    //             <select id="school-filter">
    //             <option value="">All Schools</option>
    //             <!-- Options for magic schools will be added dynamically -->
    //             </select>
    //             <select id="component-filter">
    //             <option value="">All Components</option>
    //             <!-- Options for spell components will be added dynamically -->
    //             </select>
    //         </div>
    //         </div>
    //     `
    // },
    {
        name: "Bestiary",
        icon: "bestiary.png",
        content: `
            <div class="app-header">
                <h2>Bestiary</h2>
                <button class="close-btn">&times;</button>
            </div>
            <!-- Add Bestiary app content here -->
            <div class="bestiary">
                Usable once a day. Roll a DEX check to capture an image of the creature.
                DC 8: Monster Name, CR, basic creature lore
                DC 12: Resistances and Vulnerabilities
                DC 15: Entity Type and Current HP (as %)
                DC 20: Saving Throws and Skills 
                DC 25: Actions, Bonus Actions, Legendary Actions Overview
            </div>
        `
    },
    {
        name: "Treasure Appraiser",
        icon: "treasure.png",
        content: `
            <div class="app-header">
                <h2>Treasure Appraiser</h2>
                <button class="close-btn">&times;</button>
            </div>
            <!-- Add Treasure Appraiser app content here -->
            <div class="treasure">
                TBD. Just ask DM for now.
            </div>
        `
    },
    {
        name: "Map",
        icon: "map.png",
        content: `
            <div class="app-header">
                <h2>Map</h2>
                <button class="close-btn">&times;</button>
            </div>
            <!-- Add Map app content here -->
            <div class="map">
                TBD. Just ask DM for now.
            </div>
        `
    },
    {
        name: "BardBox",
        icon: "bardbox.png",
        content: `
            <div class="app-header">
                <h2>BardBox</h2>
                <button class="close-btn">&times;</button>
            </div>
            <!-- Add BardBox app content here -->
            <div class="bardbox">
                TBD. Just ask DM for now.
            </div>
        `
    },
    {
        name: "CrystalCast",
        icon: "crystalcast.png",
        content: `
            <div class="app-header">
                <h2>CrystalCast</h2>
                <button class="close-btn">&times;</button>
            </div>
            <!-- Add CrystalCast app content here -->
            <div class="crystalcast">
                TBD. Just ask DM for now.
            </div>
        `
    },
    {
        name: "Healmonger Helper",
        icon: "healhelp.png",
        content: `
            <div class="app-header">
                <h2>Healmonger Helper</h2>
                <button class="close-btn">&times;</button>
            </div>
            <!-- Add Healmonger Helper app content here -->
            <div class="healhelp">
                Coming Soon.
            </div>
        `
    },
    {
        name: "Rogue's Toolkit",
        icon: "roguetool.png",
        content: `
            <div class="app-header">
                <h2>Rogue's Toolkit</h2>
                <button class="close-btn">&times;</button>
            </div>
            <!-- Add Rogue's Toolkit app content here -->
            <div class="roguetool">
                Ability to pick digital locks. If you have time to look through a tutorial, advantage on physical locks.
            </div>
        `
    },
    {
        name: "Arcane Architect",
        icon: "arcane.png",
        content: `
            <div class="app-header">
                <h2>Arcane Architect</h2>
                <button class="close-btn">&times;</button>
            </div>
            <!-- Add Arcane Architect app content here -->
            <div class="arcane">
                Cast time of ritual spells is halved. Spells can be cast as ritual spells if they meet the following conditions:
                <ul>
                    <li>Any level up to the total spellcasting level / 2 rounded down</li>
                    <li>Does not deal damage</li>
                    <li>Does not inflict harmful status conditions</li>
                    <li>Does not summon any creatures or objects</li>
                </ul>
                If the spell cast as a ritual in this way has a casting time greater than or equal to 10 minutes, the casting time is doubled. Spells with less than 10 minutes casting time take 10 minutes to cast in this way.
            </div>
        `
    },
    {
        name: "Spell Mart",
        icon: "spellmart.png",
        content: `
            <div class="app-header">
                <h2>Spell Mart</h2>
                <button class="close-btn">&times;</button>
            </div>
            <!-- Add Spell Mart app content here -->
            <div class="spellmart">
                Coming soon. Talk to DM.
            </div>
        `
    },
    {
        name: "eFey",
        icon: "efey.png",
        content: `
            <div class="app-header">
                <h2>eFey</h2>
                <button class="close-btn">&times;</button>
            </div>
            <!-- Add eFey app content here -->
            <div class="efey">
                Coming soon. Talk to DM.
            </div>
        `
    },
    {
        name: "Arming Zone",
        icon: "armzone.png",
        content: `
            <div class="app-header">
                <h2>Arming Zone</h2>
                <button class="close-btn">&times;</button>
            </div>
            <!-- Add Arming Zone app content here -->
            <div class="armzone">
                Coming soon. Talk to DM.
            </div>
        `
    },
    // Add the remaining apps here
];

// Generate app icons on the home screen
const homeScreen = document.querySelector(".home-screen");
apps.forEach((app, index) => {
    const appIcon = document.createElement("div");
    appIcon.classList.add("app-icon");
    appIcon.innerHTML = `
        <img src="${app.icon}" alt="${app.name}">
        <span>${app.name}</span>
    `;
    appIcon.addEventListener("click", () => openApp(index));
    homeScreen.appendChild(appIcon);
});

// Open app
function openApp(index) {
    const appContainer = document.querySelector(".app-container");
    appContainer.innerHTML = apps[index].content;
    appContainer.style.display = "block";

    const closeBtn = appContainer.querySelector(".close-btn");
    closeBtn.addEventListener("click", closeApp);

    // Call openSpellbookSync when the Spellbook Sync app is opened
    if (apps[index].name === "Spellbook Sync") {
        openSpellbookSync();
    }
}
// Close app
function closeApp() {
    const appContainer = document.querySelector(".app-container");
    appContainer.style.display = "none";
}

// // Fetch spells from the D&D Beyond API for a specific character
// async function fetchSpells(characterId) {
//     const response = await fetch(`https://character-service.dndbeyond.com/character/v5/character/${characterId}`, {
//         headers: {
//             'Access-Control-Allow-Origin': '*'
//         }
//     });
//     const data = await response.json();
//     console.log(data);
//     return data.spells;
// }

// // Fetch spells from the D&D Beyond API for a specific character
// async function fetchSpells(character) {
//     const response = fetch(`./${character}.json`);
//     const data = response.json();
//     console.log(data);
//     return data.spells;
// }

// // Render spell list for a specific character
// async function renderSpellList(characterId) {
//     const spellList = document.querySelector(".spell-list");
//     const spells = await fetchSpells(characterId);

//     spellList.innerHTML = ''; // Clear the spell list before rendering

//     spells.forEach(spell => {
//         const spellItem = document.createElement("div");
//         spellItem.classList.add("spell-item");
//         spellItem.innerHTML = `
//             <h3>${spell.definition.name}</h3>
//             <p>Level: ${spell.definition.level}</p>
//             <p>School: ${spell.definition.school}</p>
//             <p>Components: ${spell.definition.components}</p>
//         `;
//         spellList.appendChild(spellItem);
//     });
// }

// // Render spell list for a specific character
// async function renderSpellList(character) {
//     const spellList = document.querySelector(".spell-list");
//     const spells = await fetchSpells(character);

//     spellList.innerHTML = ''; // Clear the spell list before rendering

//     spells.forEach(spell => {
//         const spellItem = document.createElement("div");
//         spellItem.classList.add("spell-item");
//         spellItem.innerHTML = `
//             <h3>${spell.definition.name}</h3>
//             <p>Level: ${spell.definition.level}</p>
//             <p>School: ${spell.definition.school}</p>
//             <p>Components: ${spell.definition.components}</p>
//         `;
//         spellList.appendChild(spellItem);
//     });
// }

// Call renderSpellList when the Spellbook Sync app is opened
function openSpellbookSync() {
    // ... (Previous code)
    // renderSpellList(characterId);
    // renderSpellList(character);
}