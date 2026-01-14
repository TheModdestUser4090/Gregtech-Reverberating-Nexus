
const COLOR_CODES = {
    "black": "§0",
    "dark_blue": "§1",
    "dark_green": "§2",
    "dark_aqua": "§3",
    "dark_red": "§4",
    "dark_purple": "§5",
    "gold": "§6",
    "gray": "§7",
    "dark_gray": "§8",
    "blue": "§9",
    "green": "§a",
    "aqua": "§b",
    "red": "§c",
    "light_purple": "§d",
    "yellow": "§e",
    "white": "§f"
};

const COLOR_NAMES = Object.keys(COLOR_CODES);

function RandomColorModifier(machine, recipe) {
    if (!(machine instanceof $MetaMachine)) return ModifierFunction.NULL;
    if (!(recipe instanceof $GTRecipe)) return ModifierFunction.NULL;
    
    // Pick a random color name
    let randomColorName = COLOR_NAMES[Math.floor(Math.random() * COLOR_NAMES.length)];
    
    // Get the recipe's required color name
    let requiredColorName = recipe.data.getString("RequiredColor");
    
    if (requiredColorName === randomColorName) {
        return ModifierFunction.IDENTITY; // Recipe runs
    } else {
        return ModifierFunction.NULL; // Recipe doesn't run
    }
}