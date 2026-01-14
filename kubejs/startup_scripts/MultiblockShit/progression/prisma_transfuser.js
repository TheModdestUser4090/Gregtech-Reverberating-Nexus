const $Component = Java.loadClass("net.minecraft.network.chat.Component");

const COLORS = ["black", "dark_blue", "dark_green", "dark_aqua", "dark_red", "dark_purple", "gold", "blue", "green", "aqua", "light_purple", "yellow", "white"];


// Register recipe type
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('prisma_transfuser')
        .category('prisma')
        .setEUIO('in')
        .setMaxIOSize(3, 3, 1, 0)
        .setSound(GTSoundEntries.ELECTROLYZER)
        .setSlotOverlay(true, true, GuiTextures.ATOMIC_OVERLAY_1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT);
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    // Add recipe data info display
    GTRecipeTypes.get("prisma_transfuser").addDataInfo((data) => {
    let color = String(data.getString("RequiredColor") || ""); // Convert immediately
    if (color) {
        let colorCode = COLOR_CODES[color] || "";
        let displayName = color.charAt(0).toUpperCase() + color.slice(1).replace(/_/g, ' ');
        return `Required Color: ${colorCode}${displayName}§r`;
    }
    return null;
});

    event.create('prisma_transfuser', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('prisma_transfuser')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("XXX", "XXX", "XXX")
            .aisle("XXX", "X X", "XXX")
            .aisle("XXX", "XSX", "XXX")
            .where('S', Predicates.controller(Predicates.blocks(definition.get())))
            .where('X', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/multiblock/implosion_compressor"
        )
        .recipeModifiers([
            GTRecipeModifiers.OC_NON_PERFECT,
            RandomColorModifier  // ADD YOUR MODIFIER HERE
        ]);
        // Removed .additionalDisplay() - it was calling undefined currentColor() function
});