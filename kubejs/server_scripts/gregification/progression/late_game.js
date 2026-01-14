ServerEvents.recipes(event => {
    const GTM = event.recipes.gtceu
   // welcome to late game
   
   //resonite tree. PUREX style :D

// STEP 1: RESONITE DISSOLUTION
GTM.chemical_reactor('resonance_dissolution')
    .itemInputs('3x gtceu:resonite_dust')
    .inputFluids('gtceu:sulfuric_acid 4000', 'minecraft:water 1000')
    .outputFluids('gtceu:resonite_slurry 5000')
    .itemOutputs('gtceu:resonite_ore_waste_dust')
    .duration(300)
    .EUt(480)

// STEP 2: HARMONIC FILTRATION
GTM.centrifuge('resonance_harmonic_filtration')
    .inputFluids('gtceu:resonite_slurry 5000')
    .outputFluids('gtceu:filtered_resonite_solution 4000')
    .itemOutputs('gtceu:resonite_filter_cake_dust')
    .duration(400)
    .EUt(1920)

// STEP 3: VIBRATIONAL EXTRACTION
GTM.extraction_column('resonance_vibrational_extraction')
    .inputFluids('gtceu:filtered_resonite_solution 4000', 'gtceu:chloroform 3000', 'gtceu:acetone 2000')
    .outputFluids('gtceu:resonant_organic_phase 4000', 'gtceu:extraction_raffinate 5000')
    .duration(600)
    .EUt(1920)

// STEP 4: CRYSTALLIZATION
GTM.chemical_vat('resonance_crystallization')
    .inputFluids('gtceu:resonant_organic_phase 4000')
    .outputFluids('gtceu:resonite_crystal_suspension 3000')
    .addData("HeatPressure", 0.5)
    .addData("Temp", 273)
    .duration(500)
    .EUt(1920)

GTM.centrifuge('resonance_crystal_separation')
    .inputFluids('gtceu:resonite_crystal_suspension 3000')
    .itemOutputs('2x gtceu:crude_resonite_crystal_dust')
    .outputFluids('gtceu:acetone 2000')
    .duration(300)
    .EUt(480)

// STEP 5: FREQUENCY WASHING
GTM.chemical_reactor('resonance_frequency_washing')
    .itemInputs('2x gtceu:crude_resonite_crystal_dust')
    .inputFluids('gtceu:ethanol 1000')
    .outputFluids('gtceu:washed_resonite_solution 2000', 'gtceu:harmonic_impurities 500')
    .duration(400)
    .EUt(1920)

// STEP 6: SUBLIMATION & CONDENSATION
GTM.chemical_vat('resonance_sublimation')
    .inputFluids('gtceu:washed_resonite_solution 2000')
    .itemOutputs('2x gtceu:resonance_ingot', 'gtceu:sublimation_residue_dust')
    .addData("HeatPressure", 5.4)
    .addData("Temp", 1800)
    .duration(800)
    .EUt(7680)

GTM.fluid_solidifier('solidify_resonance_to_ingot')
.inputFluids('gtceu:resonance_plasma 144')
.notConsumable('gtceu:ingot_casting_mold')
.itemOutputs('gtceu:resonance_ingot')
.duration(20)
.EUt(7)

GTM.fluid_solidifier('solidify_resonance_to_nugget')
.inputFluids('gtceu:resonance_plasma 144')
.notConsumable('gtceu:nugget_casting_mold')
.itemOutputs('9x gtceu:resonance_nugget')
.duration(97)
.EUt(7)

GTM.fluid_solidifier('solidify_resonance_to_block')
.inputFluids('gtceu:resonance_plasma 1296')
.notConsumable('gtceu:block_casting_mold')
.itemOutputs('gtceu:resonance_block')
.duration(97)
.EUt(7)


   GTM.prisma_transfuser('blue_component')
        .itemInputs('gtceu:inert_prisma_smd')
        .inputFluids('gtceu:blue_dye 1000')
        .itemOutputs('gtceu:blue_prisma_smd')
        .EUt(480)
        .duration(200)
        .addCondition(new PrismaticCondition(false, "blue"))
    
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    //PECA (thank you monifactory)
event.recipes.gtceu.chemical_reactor("sodium_cyanide")
        .inputFluids("gtceu:hydrogen_cyanide 1000")
        .itemInputs("gtceu:sodium_hydroxide_dust")
        .outputFluids("minecraft:water 1000")
        .itemOutputs("gtceu:sodium_cyanide_dust")
        .duration(50)
        .EUt(GTValues.VHA[GTValues.HV])

    event.recipes.gtceu.chemical_reactor("chloroacetic_mixture")
        .notConsumableFluid("gtceu:acetic_anhydride 500")
        .inputFluids("gtceu:acetic_acid 1000", "gtceu:chlorine 3000")
        .outputFluids("gtceu:chloroacetic_mixture 1000")
        .duration(20)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.distillation_tower("chloroacetate_distillation")
        .inputFluids("gtceu:chloroacetic_mixture 2000")
        .itemOutputs("gtceu:small_chloroacetate_dust")
        .outputFluids("gtceu:dichloroacetate 500", "gtceu:trichloroacetate 250", "gtceu:hydrochloric_acid 1000")
        .duration(200)
        .EUt(GTValues.VHA[GTValues.IV])

    event.recipes.gtceu.large_chemical_reactor("cyanoacetic_acid")
        .itemInputs("gtceu:chloroacetate_dust", "gtceu:sodium_cyanide_dust")
        .inputFluids("gtceu:hydrochloric_acid 1000", "gtceu:oxygen 500")
        .itemOutputs("gtceu:cyanoacetic_acid_dust", "gtceu:sodium_hydroxide_dust")
        .outputFluids("gtceu:chlorine 2000")
        .duration(600)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.chemical_reactor("ethyl_cyanoacetate")
        .notConsumableFluid("gtceu:fluoroantimonic_acid 2000")
        .inputFluids("gtceu:ethanol 1000")
        .itemInputs("gtceu:cyanoacetic_acid_dust")
        .outputFluids("gtceu:ethyl_cyanoacetate 1000", "minecraft:water 1000")
        .duration(360)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.chemical_reactor("uncracked_ethyl_cyanoacrylate")
        .inputFluids("gtceu:ethyl_cyanoacetate 1000", "gtceu:formaldehyde 1000")
        .outputFluids("gtceu:uncracked_ethyl_cyanoacrylate 1000", "minecraft:water 1000")
        .duration(800)
        .EUt(GTValues.VA[GTValues.HV])

    // Cracking recipes - CR
    event.recipes.gtceu.chemical_reactor("ethyl_cyanoacrylate_hydro")
        .inputFluids("gtceu:uncracked_ethyl_cyanoacrylate 500", "gtceu:hydrogen 3000")
        .outputFluids("gtceu:ethyl_cyanoacrylate 250")
        .duration(160)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.chemical_reactor("ethyl_cyanoacrylate_steam")
        .inputFluids("gtceu:uncracked_ethyl_cyanoacrylate 1000", "gtceu:steam 1000")
        .outputFluids("gtceu:ethyl_cyanoacrylate 500")
        .duration(240)
        .EUt(GTValues.VA[GTValues.LV])

    // Cracking recipes - Cracker
    event.recipes.gtceu.cracker("ethyl_cyanoacrylate_hydro")
        .inputFluids("gtceu:uncracked_ethyl_cyanoacrylate 1000", "gtceu:hydrogen 6000")
        .outputFluids("gtceu:ethyl_cyanoacrylate 1000")
        .duration(160)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.cracker("ethyl_cyanoacrylate_steam")
        .inputFluids("gtceu:uncracked_ethyl_cyanoacrylate 1000", "gtceu:steam 1000")
        .outputFluids("gtceu:ethyl_cyanoacrylate 1000")
        .duration(240)
        .EUt(GTValues.VA[GTValues.HV])

    // Polymerization recipe
    event.recipes.gtceu.chemical_reactor("polyethyl_cyanoacrylate")
        .chancedFluidInput("gtceu:dimethyl_sulfoxide 200", 200, -40)
        .inputFluids("gtceu:ethyl_cyanoacrylate 144", "minecraft:water 1000")
        .itemOutputs("gtceu:polyethyl_cyanoacrylate_dust")
        .duration(300)
        .EUt(GTValues.VA[GTValues.LuV])

    // Polymerization recipe with distilled water
    event.recipes.gtceu.chemical_reactor("polyethyl_cyanoacrylate_distilled")
        .chancedFluidInput("gtceu:dimethyl_sulfoxide 200", 200, -40)
        .inputFluids("gtceu:ethyl_cyanoacrylate 96", "gtceu:distilled_water 1000")
        .itemOutputs("gtceu:polyethyl_cyanoacrylate_dust")
        .duration(300)
        .EUt(GTValues.VA[GTValues.LuV])

    // Dimethyl sulfoxide (catalyst) chain below
    event.recipes.gtceu.chemical_reactor("dimethyl_sulfoxide")
        .inputFluids("gtceu:dimethyl_sulfide 1000", "gtceu:nitrogen_dioxide 1000")
        .outputFluids("gtceu:dimethyl_sulfoxide 1000", "gtceu:nitric_oxide 1000")
        .duration(1000)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.chemical_reactor("dimethyl_sulfide")
        .notConsumable("gtceu:aluminium_dust")
        .inputFluids("gtceu:hydrogen_sulfide 1000", "gtceu:methanol 2000")
        .outputFluids("gtceu:dimethyl_sulfide 1000", "minecraft:water 2000")
        .duration(500)
        .EUt(GTValues.VHA[GTValues.LuV])

    // Uses for PECA with higher efficiency than PBI
    event.recipes.gtceu.bender("fluid_cell_peca")
        .itemInputs("gtceu:polyethyl_cyanoacrylate_plate")
        .itemOutputs("32x gtceu:fluid_cell")
        .duration(100)
        .EUt(GTValues.VA[GTValues.ULV])
        .circuit(12)

    event.recipes.gtceu.chemical_reactor("plastic_board_peca")
        .itemInputs("gtceu:polyethyl_cyanoacrylate_plate", "4x gtceu:copper_foil")
        .inputFluids("gtceu:sulfuric_acid 250")
        .itemOutputs("16x gtceu:plastic_circuit_board")
        .duration(500)
        .EUt(10)

    event.recipes.gtceu.assembler("duct_tape_peca")
        .itemInputs("gtceu:polyethyl_cyanoacrylate_foil", "gtceu:carbon_fiber_mesh")
        .inputFluids("gtceu:polyethylene 36")
        .itemOutputs("32x gtceu:duct_tape")
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])



})