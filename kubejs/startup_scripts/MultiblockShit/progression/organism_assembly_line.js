GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
event.create('organism_assembly_line')
.setMaxIOSize(16, 1, 4, 0)
.category('biomechanical')
.setEUIO('in')
.setSound(GTSoundEntries.ASSEMBLER)
.setHasResearchSlot(true)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('organism_assembly_line', "multiblock")
        .rotationState(RotationState.ALL)
        .recipeTypes(GTRecipeTypes.get('organism_assembly_line'))
        .appearanceBlock(() => Block.getBlock("gtceu:flesh_alloy_casing"))
        .pattern(definition => FactoryBlockPattern.start("back", "up", "right")
                //.aisle("FFFFF", "RRRRR", "FFFFF", "     ")
                //.aisle("OIIII", "TTTTT", "AAAAA", "YYYYY")
                //.aisle("FFFFF", "RRRRR", "DDDDS", "     ")
                .aisle("FIF", "RTR", "SAG", "#Y#")
                .aisle("FIF", "RTR", "DAG", "#Y#").setRepeatable(3, 15)
                .aisle("FOF", "RTR", "DAG", "#Y#")
            .where('S', Predicates.controller(Predicates.blocks(definition.get())))
            .where('F', Predicates.blocks("gtceu:flesh_alloy_casing")
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(4)))
            .where('O', Predicates.abilities(PartAbility.EXPORT_ITEMS))
            .where('Y', Predicates.blocks("gtceu:flesh_alloy_casing")
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY)
                    .setMinGlobalLimited(1)
                    .setMaxGlobalLimited(2)))
            .where('I', Predicates.blocks('gtceu:ulv_input_bus'))
            .where('G', Predicates.blocks("gtceu:flesh_alloy_casing"))
            .where('A', Predicates.blocks("gtceu:titanium_pipe_casing"))
            .where('R', Predicates.blocks("gtceu:laminated_glass"))
            .where('T', Predicates.blocks("gtceu:titanium_gearbox"))
            .where('D', Predicates.dataHatchPredicate(Predicates.blocks("gtceu:flesh_alloy_casing")))
            .where('#', Predicates.any())
            .build())
        .workableCasingModel(
            "gtceu:block/casings/solid/flesh_alloy/casing",
            "gtceu:block/multiblock/assembly_line"
        )
});

