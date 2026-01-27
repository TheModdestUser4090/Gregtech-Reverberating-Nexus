Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey')
Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.ToolProperty')

GTCEuStartupEvents.registry('gtceu:material_icon_set', event => {
    event.create('infinity')
    .parent('shiny')

    event.create('omnium')
    .parent('shiny')

    event.create('nullium')
    .parent('dull')

    event.create("energium")
    .parent('rough')

})

GTCEuStartupEvents.registry("gtceu:element", event => {
    event.create("infinity")
    .protons(999)
    .neutrons(999)
    .symbol("∞")

    event.create("omnium")
    .protons(279)
    .neutrons(461)
    .symbol("Om")

    event.create('nullium')
    .protons(397)
    .neutrons(761)
    .symbol("ℵ")

    event.create('nexus')
    .protons(83)
    .neutrons(137)
    .symbol("Nx")

    event.create('mana')
    .protons(0)
    .neutrons(0)
    .symbol('Ma')

    event.create('source')
    .protons(0)
    .neutrons(1) // Can't be 0 and 0 or some recipes don't have a real duration
    .symbol('Sr')

    event.create('echo')
    .protons(22)
    .neutrons(34)
    .symbol('Ec')

    event.create('sculk')
    .protons(22)
    .neutrons(34)
    .symbol('Sl')

    event.create('taint')
    .protons(17)
    .neutrons(23)
    .symbol('Vr')

    event.create('perfected_taint')
    .protons(17)
    .neutrons(23)
    .symbol('Vr*??')

    event.create('mysterymystery')
    .protons(0)
    .neutrons(0)
    .symbol('??')

    event.create('desh')
    .protons(27)
    .neutrons(58)
    .symbol('Ds')

    event.create('ostrum')
    .protons(33)
    .neutrons(41)
    .symbol('Ot')

    event.create('calorite')
    .protons(36)
    .neutrons(68)
    .symbol('Ct')

    event.create('cryo')
    .protons(0)
    .neutrons(0)
    .symbol('Cy')

    event.create('purified_netherite')
    .protons(83)
    .neutrons(135)
    .symbol('Nh*')

    event.create('resonance')
    .protons(82)
    .neutrons(130)
    .symbol('Av')

    event.create('pure_resonance')
    .protons(82)
    .neutrons(130)
    .symbol('Av⁰')

    event.create('uranium_233')
    .isIsotope(true)
    .symbol('U²³³')
})

GTCEuStartupEvents.registry('gtceu:material', event => {


    event.create("infinity")
    .element("infinity")
    .ingot()
    .color(0xffffff)
    .cableProperties(GTValues.V[GTValues.UXV], 48, 0, true)
    .iconSet(GTMaterialIconSet.getByName("infinity"))
    .flags(bolt_and_screw, gear, small_gear, plates, ring, rod, long_rod, round, frame, rotor)

    event.create("omnium")
    .element("omnium")
    .ingot()
    .iconSet(GTMaterialIconSet.getByName("omnium"))
    .cableProperties(GTValues.V[GTValues.UEV], 24, 0, true)
    .blastTemp(10799, "high", GTValues.VA[GTValues.LuV], 1600)
    .flags(bolt_and_screw, gear, small_gear, plates, ring, rod, long_rod, round, frame)

    event.create("nullium")
    .element("nullium")
    .ingot()
    .iconSet(GTMaterialIconSet.getByName("nullium"))
    .cableProperties(GTValues.V[GTValues.UIV], 32, 0, true)
    .blastTemp(10799, "higher", GTValues.VA[GTValues.UIV], 1600)
    .flags(bolt_and_screw, gear, small_gear, plates, ring, rod, long_rod, round, frame)

    event.create('mana')
    .element('mana')
    .color(0x22a8bd)
    .dust()

    event.create('primitive_glue')
    .color(0xddcc88)
    .liquid()

    event.create('taint')
    .element('taint')
    .liquid(650)
    .color(0x7851a9)

    event.create('perfected_taint')
    .element('perfected_taint')
    .liquid(3000)
    .color(0x7851a9)
    .flags(no_decomp)
    

    event.create('source')
    .element('source')
    .color(0xae44e2).iconSet(GTMaterialIconSet.RUBY)
    .gem()
    .flags(frame, plates)
    .liquid(900)

    event.create('nexus')
    .element("nexus")
    .color(0x95abff).iconSet(GTMaterialIconSet.SHINY)
    .gem()
    .ore(2, 4, true)
    .addOreByproducts('lanthanum', 'nexus', 'gold')
    .separatedInto('gold')
    .washedIn('sodium_persulfate')

    event.create('echo')
    .element("echo")
    .color(0x111b21).iconSet(GTMaterialIconSet.SHINY)
    .dust()

    event
    .create('condensed_mana')
    .ore(2, 2, true)
    .components('3x mana')
    .color(0x020352).secondaryColor(0x3a086a)
    .iconSet(GTMaterialIconSet.DIAMOND)
    .gem()
    .flags(plates)

    event
    .create('precision')
    .element('mysterymystery')
    .color(0xd09f54)
    .liquid(2250)
    
    event
    .create('andesite_alloy')
    .ingot()
    .components('1x andesite', '1x iron')
    .color(0x839689).iconSet(GTMaterialIconSet.DULL)
    .flags(bolt_and_screw, gear, plates, ring, long_rod, frame, rotor)

    event
    .create('source_attuned_copper')
    .ingot()
    .components('1x source', '4x copper')
    .color(0xc73f27).secondaryColor(0xd0317a)
    .iconSet(GTMaterialIconSet.BRIGHT)
    .flags(plates, rod, fine_wire, no_decomp)
    .cableProperties(GTValues.V[GTValues.LV], 2, 1, false)

    event
    .create('elementally_purified_carbon')
    .dust()
    .components('4x carbon', '1x mana', '1x source')
    .color(0x202020).secondaryColor(0x2860ac)
    .flags(no_decomp)

    event.create('blue_zircon')
    .gem()
    .ore(2, 1, true)
    .color(0x57FEFF)
    .iconSet(GTMaterialIconSet.GEM_VERTICAL)
    .components('1x zirconium', '1x silicon', '4x oxygen')
    .formula('ZrSiO4')
    .flags(no_decomp)
    .addOreByproducts('zirconium', 'hafnium', 'silicon')
    .separatedInto('blue_zircon', 'zirconium', 'silicon')

    event.create('xenotime')
    .gem()
    .ore(3, 2, true)
    .color(0x431f00).secondaryColor(0x694c33)
    .iconSet(GTMaterialIconSet.GEM_VERTICAL)
    .components('1x yttrium', '1x phosphate')
    .formula('YPO4')
    .flags(no_decomp)
    .addOreByproducts('dysprosium', 'xenotime', 'hafnium', 'iron')
    .separatedInto('xenotime','dysprosium', 'hafnium')

    event.create('igneous_bronze')
        .ingot()
        .components('4x bronze', '2x andesite_alloy')
        .color(0x834b00).iconSet(GTMaterialIconSet.METALLIC)
        .flags(bolt_and_screw, gear, plates, ring, long_rod, frame, rotor, small_gear)
        .liquid(1100)
        .blastTemp(1200, "low", GTValues.VA[GTValues.LV], 400)
        .fluidPipeProperties(1123, 50, true, false, false, false)

    event
    .create('metallurgically_enhanced_source')
    .components('13x source', '8x mana', '3x igneous_bronze')
    .formula('M-E-S')
    .color(0xdc00ff).iconSet(GTMaterialIconSet.SHINY)
    .ingot()
    .flags(rod, plates, frame)

    event
    .create('permendur')
    .color(0xdcdcff).iconSet(GTMaterialIconSet.SHINY)
    .components('9x cobalt', '9x iron', '1x vanadium')
    .ingot()
    .flags(fine_wire)

    event
    .create('echoite')
    .liquid(2200)
    .color(0x24d8e7)
    .components('1x nexus', '1x echo', '1x chromium', '1x nickel', '1x tantalum')

    event
    .create('mechanical_essence')
    .components('mysterymystery')
    .liquid(2350)
    .color(0x400019)
    .flags(no_decomp)

    event
    .create('virulence_tainted_source')
    .color(0x390747)
    .liquid(1700)

    event
    .create('tainted_magmatic_mineral_sludge')
    .color(0x0e0015)
    .liquid(3700)

    event
    .create('tainted_rich_magmatic_mineral_sludge')
    .color(0x0e0015)
    .liquid(3540)

    event
    .create('tainted_medium_magmatic_mineral_sludge')
    .color(0x0e0015)
    .liquid(3540)

    event
    .create('tainted_poor_magmatic_mineral_sludge')
    .color(0x0e0015)
    .liquid(3540)

    event
    .create('calcic_rich_magmatic_mineral_sludge')
    .color(0x3b3140)
    .liquid(2845)

    event
    .create('calcic_medium_magmatic_mineral_sludge')
    .color(0x4a414e)
    .liquid(2845)

    event
    .create('calcic_poor_magmatic_mineral_sludge')
    .color(0x574f5b)
    .liquid(2845)

    event
    .create('decalcified_rich_magmatic_mineral_sludge')
    .color(0x2a264a)
    .liquid(2530)

    event
    .create('decalcified_medium_magmatic_mineral_sludge')
    .color(0x342f4e)
    .liquid(2530)

    event
    .create('decalcified_poor_magmatic_mineral_sludge')
    .color(0x342f4e)
    .liquid(2530)


    event
    .create('rich_magmatic_mineral_sludge')
    .color(0x643dab)
    .liquid(1920)

    event
    .create('medium_magmatic_mineral_sludge')
    .color(0x603da0)
    .liquid(1920)

    event
    .create('poor_magmatic_mineral_sludge')
    .color(0x593c8d)
    .liquid(1920)


    event
    .create('unpure_source')
    .color(0x3e005e)
    .liquid(795)

    event
    .create(`heat_treated_taint`)
    .color(0x56357f)
    .liquid(2300)

    event
    .create(`alloyed_taint`)
    .color(0x56357f)
    .liquid(2300)

    event
    .create(`chromatically_mutated_taint`)
    .color(0x7e90e7)
    .liquid(2300)

    event
    .create('crystalline_sludge')
    .color(0x221f47)
    .liquid(450)
    
    event
    .create('dissolved_calcium_carbonate')
    .components('6x calcium_carbonate', '1x carbon_dioxide', '3x water')
    .color(0x6b5f3b)
    .liquid(1650)
    .flags(electrolyze)

    event
    .create('tainted_calcite_concentrate')
    .components('3x dissolved_calcium_carbonate', '1x taint', '1x sulfuric_acid')
    .color(0x321e27)
    .liquid(1400)
    .flags(electrolyze)

    event
    .create('mysterymystery')
    .element('mysterymystery')

    event
    .create('cryo')
    .element('cryo')
    

    event
    .create('desh')
    .element('desh')
    .ingot()
    .color(0x8f4931).iconSet(GTMaterialIconSet.METALLIC)
    .flags(plates)
    .ore(2, 2, true)
    .washedIn('mercury')

    event
    .create('ostrum')
    .element('ostrum')
    .ingot()
    .color(0x76525f).iconSet(GTMaterialIconSet.METALLIC)
    .flags(plates)
    .ore(2, 2, true)
    .washedIn('mercury')

    event
    .create('calorite')
    .element('calorite')
    .ingot()
    .color(0xb63044).iconSet(GTMaterialIconSet.METALLIC)
    .flags(plates)
    .ore(2, 2, true)
    .washedIn('mercury')

    event
    .create('magically_manifested_mechanical')
    .dust()
    .components('1x metallurgically_enhanced_source', '1x nickel_zinc_ferrite', '1x cupronickel', '1x mechanical_essence')
    .formula('(M-E-S)(NiZnFe4O8)(CuNi)(Hooplah)')
    .color(0x1c0003).iconSet(GTMaterialIconSet.SHINY)
    .flags(no_decomp)


    event.create("mechanical_sludge")
    .liquid(930)
    .color(0x57122e)

    event.create("acidic_mechanical_sludge")
    .color(0x57122e)
    .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID))

    event.create("alkalized_mechanical_sludge")
    .liquid(930)
    .color(0x57122e)

    event.create('mechanical_concentrate')
    .liquid(930)
    .color(0x1c0003)

    event.create('nitinol')
    .color(0xdcdcff)
    .dust()
    .components('1x nickel', '1x titanium')
    .flags(foil, plates, rod, frame)
    .iconSet(GTMaterialIconSet.SHINY)
    .blastTemp(3750, "low", GTValues.VA[GTValues.EV], 700)

    event.create('cryosporsite')
    .components('1x dysprosium')
    .ingot()
    .liquid(40)
    .color(0xec8d36)
    .iconSet(GTMaterialIconSet.MAGNETIC)
    .flags(rod, long_rod)
    .formula('CyDy')

    event.create('purified_netherite')
    .components('1x platinum', '1x purified_netherite', '4x gold')
    .ingot()
    .color(0x441f45)
    .iconSet(GTMaterialIconSet.METALLIC)
    .liquid(4400)
    .flags(rod, plates, frame)
    .blastTemp(4450, "high", GTValues.VA[GTValues.IV], 600)

    event.create('tainted_zircalloy')
    .components('83x zirconium', '10x hafnium','2x titanium', '2x dysprosium','1x carbon', '1x chromium', '1x taint')
    .formula('ZrHf(TiDyCCrTn)')
    .ingot()
    .iconSet(GTMaterialIconSet.METALLIC)
    .liquid(2200)
    .blastTemp(2650, "mid", GTValues.VA[GTValues.EV], 525)
    .flags(rod, plates, frame, bolt_and_screw, long_rod)
    .ignoredTagPrefixes([TagPrefix.dustTiny])
    .color(0x3d284c)
    .rotorStats(500, 300, 4, 485000)

    event.create('extraterrestrial_resonite')
    .gem()
    .ore(2, 2, true)
    .element('resonance')
    .color(0x000999).iconSet(GTMaterialIconSet.EMERALD)
    .addOreByproducts('pitchblende', 'extraterrestrial_resonite', 'aluminium')
    .separatedInto('extraterrestrial_resonite','pitchblende', 'aluminium')
    .washedIn('mercury')

    event.create('resonite')
    .element('resonance')
    .ingot()
    .color(0x000666)
    .iconSet(GTMaterialIconSet.SHINY)
    .liquid(2200)
    .flags(rod, frame, plates, no_decomp)
    .fluidPipeProperties(1750, 1200, true, true, false, false)
    .blastTemp(2900, "mid", GTValues.VA[GTValues.EV], 600) 

    event.create('nuclear_steam')
    .components('1x mysterymystery')
    .gas(3800)
    .gem()
    .flags(no_decomp)

    event.create('charged_certus_quartz')
    .components('1x certus_quartz')
    .color(0xb9deef)
    .gem()
    .iconSet(GTMaterialIconSet.QUARTZ)

    event.create('fluix')
    .components('1x charged_certus_quartz', '1x redstone', '1x nether_quartz')
    .gem()
    .color(0x4d3b93)
    .iconSet(GTMaterialIconSet.QUARTZ)

    event.create('echoing_fluxum_steel')
    .components('1x echoite', '1x fluix', '2x steel', '1x lanthanum')
    .ingot()
    .flags(plates, rod)
    .color(0x120a6b)
    .iconSet(GTMaterialIconSet.DULL)
    .blastTemp(1400, "low", GTValues.VA[GTValues.MV], 400)

    event.create('enstatite')
    .components('1x magnesium', '1x silicon', '3x oxygen')
    .color(0xb8ae9e)
    .gem()
    .ore(2, 2, true)
    .addOreByproducts('magnesium', 'silicon', 'iron')
    .separatedInto('silicon','magnesium', 'iron')
    .washedIn('sodium_persulfate')

//resonance chain

// STEP 1: Resonite Dissolution - removes remaining metal impurities
event.create('resonite_slurry')
    .liquid()
    .color(0x4A0E4E) // Deep purple sludge
    .components('3x resonite', '4x sulfuric_acid', '1x water')
    .flags(no_decomp)

event.create('resonite_ore_waste')
    .dust()
    .color(0x3D3D3D) // Dark grey tailings (trace desh, uranium, aluminium)
    .components('1x desh', '1x pitchblende', '1x aluminium', '1x sulfur')

// STEP 2: Harmonic Filtration - removes non-resonant particulates
event.create('filtered_resonite_solution')
    .liquid()
    .color(0x6B1B6E) // Lighter purple
    .components('3x resonite', '3x sulfuric_acid')
    .flags(no_decomp)

event.create('resonite_filter_cake')
    .dust()
    .color(0x8B4789) // Purple-grey sediment
    .components('1x iron', '1x sulfur', '1x silicon')

// STEP 3: Vibrational Extraction - extracts resonant compounds into organic phase
event.create('resonant_organic_phase')
    .liquid()
    .color(0x9D4EDD) // Vibrant purple (resonite in organic solvent)
    .components('2x resonite', '3x chloroform', '2x acetone')
    .flags(no_decomp)

event.create('extraction_raffinate')
    .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID))
    .color(0x8B7D6B) // Muddy brown waste
    .components('1x sulfuric_acid', '1x iron', '1x copper')

// STEP 4: Crystallization - precipitates resonite crystals
event.create('resonite_crystal_suspension')
    .liquid()
    .color(0xC77DFF) // Bright crystalline purple
    .components('2x resonite', '2x acetone')
    .flags(no_decomp)

event.create('crude_resonite_crystal')
    .dust()
    .color(0x9D4EDD) // Purple crystals (still contains oxygen/carbon)
    .components('2x resonite', '1x oxygen', '1x carbon')
    .iconSet(SHINY)
    .flags(no_decomp)

// STEP 5: Frequency Washing - removes organic residues
event.create('washed_resonite_solution')
    .liquid()
    .color(0xE0AAFF) // Pale purple (very pure)
    .components('2x resonite', '1x ethanol')
    .flags(no_decomp)

event.create('harmonic_impurities')
    .liquid()
    .color(0x704264) // Dark purple-brown
    .components('1x chloroform', '1x carbon', '1x oxygen')

// STEP 6: Sublimation & Condensation
event.create('resonance')
    .color(0xBB86FC) // Pure glowing purple
    .element('pure_resonance')
    .iconSet(SHINY)
    .ingot()
    .plasma(new GTFluidBuilder().temperature(8000))

event.create('sublimation_residue')
    .dust()
    .color(0x4A148C) // Very dark purple ash
    .components('1x carbon', '1x oxygen')

//welcome back to reality everyone
    event.create('desnium')
    .components('4x desh', '1x resonance', '1x americium')
    .color(0x9973AD).iconSet(GTMaterialIconSet.METALLIC)
    .ingot()
    .flags(rod, plates, frame, long_rod, dense_plate)
    .fluidPipeProperties(2800, 350, true, true, true, true)
    .blastTemp(3540, "mid", GTValues.VA[GTValues.HV], 1500)
    .liquid(2800)

    event.create('osmium_steel')
    .components('3x osmium', '2x steel')
    .color(0x5959bf).iconSet(GTMaterialIconSet.METALLIC)
    .ingot()
    .flags(foil)
    .cableProperties(GTValues.V[GTValues.LuV], 5, 2, false)
    .blastTemp(4500, "mid", GTValues.VA[GTValues.LuV], 1000)
    .liquid(4450)
    

    event.create('vintanium')
    .components('1x vanadium', '1x titanium')
    .color(0x876991).iconSet(GTMaterialIconSet.METALLIC)
    .ingot()
    .flags(spring, foil, rod, long_rod, fine_wire, bolt_and_screw)
    .cableProperties(GTValues.V[GTValues.LuV], 8, 4, false)
    .blastTemp(4500, "high", GTValues.VA[GTValues.HV], 1500)
    .fluidPipeProperties(5450, 150, true, true, true, true)
    .liquid(4450)


       let addFluid = (mat, key) => {
    let prop = new $FluidProperty()
    prop.getStorage().enqueueRegistration(key, new $FluidBuilder())
    mat.setProperty(PropertyKey.FLUID, prop)
} 

    // from here on now, ONLY progression materials.

    event.create('nexus_steel')
        .ingot()
        .components('2x nexus', '6x steel')
        .color(0x99ccff).iconSet(GTMaterialIconSet.METALLIC)
        .liquid(1300)
        .secondaryColor(0x0066cc)
        .flags(bolt_and_screw, gear, plates, ring, long_rod, frame, rotor, small_gear)
        .blastTemp(1400, "low", GTValues.VA[GTValues.LV], 450)
        .fluidPipeProperties(1300, 75, true, true, true, false)
        .polarizesInto('magnetic_nexus_steel')

    event.create('magnetic_nexus_steel')
            .ingot()
            .components('2x nexus', '6x steel')
            .color(0x99ccff).iconSet(GTMaterialIconSet.MAGNETIC)
            .secondaryColor(0x0066cc)
            .flags(rod, magnetic, no_decomp)
            .arcSmeltInto('nexus_steel')
            .macerateInto('nexus_steel')
            .ingotSmeltInto('nexus_steel')


            
    event.create('echolumium')
        .ingot()
        .components('2x aluminium', '1x echo', '1x nexus', '1x chromium', '1x nickel', '1x tantalum') 
        .color(0x24d8e7).iconSet(GTMaterialIconSet.METALLIC)
        .liquid(1500)
        .flags(bolt_and_screw, gear, plates, ring, long_rod, frame, rotor, small_gear, fine_wire)
        .blastTemp(1050, "low", GTValues.VA[GTValues.MV], 500)
        .fluidPipeProperties(1050, 250, true, true, true, false)
        .cableProperties(GTValues.V[GTValues.EV], 2,2, false)

    event.create('mechanical_stainless')
        .ingot()
        .components('1x stainless_steel', '1x magically_manifested_mechanical')
        .color(0x370017).iconSet(GTMaterialIconSet.SHINY)
        .flags(bolt_and_screw, gear, plates, ring, long_rod, frame, rotor, small_gear, no_decomp, no_abs_recipe)
        .blastTemp(1800, "low", GTValues.VA[GTValues.HV], 550)
        .formula('(Fe6CrMnNi)(M-E-S)(NiZnFe4O8)(CuNi)(??)')
        .liquid(1900)
        .fluidPipeProperties(1900, 400, true, true, true, false)

    event.create('tainted_titanium')
        .ingot()
        .components('1x titanium', '1x perfected_taint')
        .color(0x3e2a58).iconSet(GTMaterialIconSet.METALLIC)
        .flags(bolt_and_screw, gear, plates, ring, long_rod, frame, rotor, small_gear, no_decomp, no_abs_recipe)
        .blastTemp(2200, "mid", GTValues.VA[GTValues.EV], 600)
        .liquid(2200)
        .fluidPipeProperties(2200, 200, true, true, true, false)

    event.create('auralloy-omega')
        .ingot()
        .components('7x tungsten_steel', '4x americium','3x purified_netherite')
        .color(0xdcdcff).iconSet(GTMaterialIconSet.METALLIC)
        .flags(bolt_and_screw, gear, plates, ring, long_rod, frame, rotor, small_gear, dense_plate, fine_wire)
        .blastTemp(4250, "mid", GTValues.VA[GTValues.EV], 650)
        .liquid(4250)
        .fluidPipeProperties(4250, 300, true, true, true, true)

    event.create('hssd')
        .ingot()
        .components('13x osmium_steel', '4x vintanium', '3x desnium')
        .color(0x6F579C).iconSet(GTMaterialIconSet.METALLIC)
        .flags(bolt_and_screw, gear, small_gear, ring, long_rod, rod, frame, rotor, plates, round, foil)
        .blastTemp(5250, "high", GTValues.VA[GTValues.EV], 700)
        .liquid(5250)

    event.create('rhodipalladic-desnite')
        .ingot()
        .components('4x rhodium_plated_palladium', '4x mana','3x desnium')
        .color(0xdcdcff).iconSet(GTMaterialIconSet.METALLIC)
        .flags(bolt_and_screw, gear, plates, ring, long_rod, frame, rotor, small_gear, dense_plate)
        .blastTemp(5100, "high", GTValues.VA[GTValues.IV], 700)
        .liquid(5100)
        .fluidPipeProperties(5100, 1450, true, true, true, true)

    











    
    
    
    
    
    
    
    
    
    
    
    
    event.create("manasteel")
    .ingot()
    .color(0x6fb6ff).secondaryColor(0x1e1fff)
    .iconSet(GTMaterialIconSet.SHINY)
    .cableProperties(GTValues.V[GTValues.LV], 4, 1, false)
    .flags(bolt_and_screw, gear, small_gear, plates, ring, rod, long_rod, round, frame, rotor)
    .components('1x nexus_steel', '3x mana')

    event.create("energite")
    .iconSet(GTMaterialIconSet.getByName("energium"))
    .components('5x redstone', '4x ruby')
    .color(0xdb4646)
    .ignoredTagPrefixes([TagPrefix.dustTiny, TagPrefix.dustSmall, TagPrefix.nugget, TagPrefix.block])
    .gem()

    

    
    GTMaterials.Dysprosium.setProperty($PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Dysprosium.setMaterialARGB(0xb87200)
    GTMaterials.Dysprosium.setProperty($PropertyKey.BLAST, new $BlastProperty(2850, "mid", 2000, 900, -1, -1))
    
    
    GTMaterials.Dysprosium.setProperty(PropertyKey.ORE, new $OreProperty())
    GTMaterials.Arsenic.setProperty(PropertyKey.ORE, new $OreProperty())
    GTMaterials.Yttrium.setProperty(PropertyKey.ORE, new $OreProperty())
    GTMaterials.Phosphate.setProperty(PropertyKey.ORE, new $OreProperty())
    GTMaterials.Zirconium.setProperty(PropertyKey.ORE, new $OreProperty())
    GTMaterials.Silicon.setProperty(PropertyKey.ORE, new $OreProperty())
    GTMaterials.SiliconDioxide.setProperty(PropertyKey.ORE, new $OreProperty())
    GTMaterials.Rutile.setProperty(PropertyKey.ORE, new $OreProperty())
    GTMaterials.Europium.setProperty(PropertyKey.ORE, new $OreProperty())
    
    
    
    GTMaterials.Zirconium.setProperty($PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Zirconium.setProperty($PropertyKey.BLAST, new $BlastProperty(4500, "mid", 1560, 650, -1, -1))
    GTMaterials.Zirconium.setMaterialARGB(0x8addff)
    GTMaterials.Zirconium.addFlags(rod, frame, plates)

    GTMaterials.Hafnium.setProperty($PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Hafnium.setProperty($PropertyKey.BLAST, new $BlastProperty(3600, "mid", 1240, 450, -1, -1))
    GTMaterials.Hafnium.setMaterialARGB(0x520089)
    GTMaterials.Hafnium.addFlags(rod, frame, plates)
    GTMaterials.Hafnium.setProperty(PropertyKey.ORE, new $OreProperty())

    GTMaterials.Lanthanum.setProperty($PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Lanthanum.setProperty($PropertyKey.BLAST, new $BlastProperty(1200, "low", 400, 350, -1, -1))
    GTMaterials.Lanthanum.addFlags(rod, frame, plates)
    GTMaterials.Lanthanum.setProperty(PropertyKey.ORE, new $OreProperty())


    GTMaterials.Helium3.setProperty(PropertyKey.ORE, new $OreProperty)
    GTMaterials.Helium3.setProperty(PropertyKey.GEM, new $GemProperty)
    GTMaterials.Helium3.setMaterialARGB(0xe8eb87)
    GTMaterials.Helium.setMaterialARGB(0xe8eb87)
    
    GTMaterials.SiliconeRubber.addFlags(frame)
    GTMaterials.Brass.addFlags(frame)
    GTMaterials.Copper.addFlags(frame)
    GTMaterials.Sculk.setComponents('1x deepslate', '2x echo')
    GTMaterials.Sapphire.addFlags(frame)
    GTMaterials.GreenSapphire.addFlags(frame)
    GTMaterials.Osmiridium.addFlags(frame)
    GTMaterials.Gold.addFlags(small_gear)
    GTMaterials.Plutonium239.addFlags(rod)
    GTMaterials.Bronze.addFlags(fine_wire)

    addFluid(GTMaterials.EchoShard, $FluidStorageKeys.LIQUID)
    addFluid(GTMaterials.Dysprosium, $FluidStorageKeys.LIQUID)

    GTMaterials.Glowstone.setComponents("1x tricalcium_phosphate", "1x gold")
    GTMaterials.Glowstone.setFormula("AuCa3(PO4)2", true)

    GTMaterials.BorosilicateGlass.setComponents("1x boron", '14x glass', '1x lanthanum')
    GTMaterials.BorosilicateGlass.setFormula("B(SiO2)14La")

    GTMaterials.StainlessSteel.setComponents('6x iron', '1x chromium', '1x manganese', '1x nickel', '2x lanthanum')
    GTMaterials.StainlessSteel.setFormula('Fe6CrMnNiLa2')
    GTMaterials.RedSteel.setComponents('1x rose_gold', '1x brass', '2x lanthanum', '4x black_steel', '2x steel')
    GTMaterials.RedSteel.setFormula('(CuAu4)(ZnCu3)La2Fe2(NI(AuAgCu3)Fe3)4')
    GTMaterials.BlueSteel.setComponents('1x sterling_silver', '1x bismuth_bronze', '2x lanthanum', '4x black_steel', '2x steel')
    GTMaterials.BlueSteel.setFormula('(CuAg4)(BiZnCu3)La2Fe2(Ni(AuAgCu3)Fe3)4')
    GTMaterials.TungstenSteel.setComponents('1x steel', '2x tungsten', '1x lanthanum')
    GTMaterials.TungstenSteel.setFormula('LaFeW2')
    
    // Change materials' components
    GTMaterials.EchoShard.setFormula('(SiO2)7(KMg3Al3F2Si3O10)Ec2')
    GTMaterials.Sculk.setFormula('(SiO2)4(KMg3Al3F2Si3O10)Ec2')
    GTMaterials.Netherite.setFormula('PtNhAu4')
    GTMaterials.Netherite.setComponents('1x platinum', '1x scrap', '4x gold')
    GTMaterials.Netherite.addFlags(frame, rod, dense_plate)
    GTMaterials.Lapotron.setComponents('3x energium', '2x lapis')
    GTMaterials.Lapotron.setFormula('((Si(FeS2)5(CrAl2O3)Hg3)5(CrAl2O3)4)(Al6Si6Ca8Na8)12(Al3Si3Na4Cl)2(FeS2)(CaCO3))')




    const compIngot = (name, elements, color, icon, blasting, flags) => {
        if (blasting.includes(blasting[0])){
            event.create(name).ingot().components(elements).color(color).iconSet(icon).flags(flags).blastTemp(blasting[0], blasting[1], blasting[2], blasting[3])
        } else {
            event.create(name).ingot().fluid().components(elements).color(color).iconSet(icon).flags(flags)
        }
    }


    // Large Multis
    const largeMulti = (name,components,color) => {
        compIngot(name, components, color, DULL, [2200, 'low', GTValues.VA[GTValues.MV], 2000], [plates, frame, rod])
    }
    const Transplatine = (name,components,color) => {
        compIngot(name, components, color, DULL, [2900, 'mid', GTValues.VA[GTValues.HV], 1900], [plates, frame, rod])
    }

    const matGen = (name, components, color ) => {
        compIngot(name, components, color, DULL, [1900, 'low', GTValues.VA[GTValues.MV], 1600], [plates, frame, gear, rod])
    }

    const matGenD = (name, components, color ) => {
        compIngot(name, components, color, DULL, [1900, 'low', GTValues.VA[GTValues.MV], 1600], [plates, frame, gear, rod, dense_plate])
    }


    largeMulti('birmabright', ['7x aluminium', '2x magnesium', '1x manganese'], 0xbfbfbf)
    largeMulti('duralumin', ['4x aluminium', '3x copper', '1x magnesium', '1x manganese'], 0x66ccff)
    largeMulti('hydronalium', ['6x aluminium', '3x magnesium', '1x manganese'], 0x660000)
    largeMulti('beryllium_aluminium_alloy', ['7x beryllium', '1x aluminium'], 0x006699)
    largeMulti('elgiloy', ['4x cobalt', '2x chromium', '1x nickel', '1x steel', '1x molybdenum', '1x manganese'], 0xff00ff)
    largeMulti('beryllium_bronze', ['10x copper', '1x beryllium'], 0x003300)
    largeMulti('silicon_bronze', ['32x copper', '2x silicon', '1x manganese'], 0x1a1a1a)
    largeMulti('kovar', ['18x iron', '11x nickel', '6x cobalt'], 0x000080)
    largeMulti('zamak', ['1x zinc', '4x aluminium', '3x copper'], 0x8c8c8c)
    largeMulti('tumbaga', ['20x copper', '6x gold', '1x silver'], 0xffdb4d)
    Transplatine('transplatine', ['17x platinum', '5x silver', '2x osmium', '2x chromium'], 0xb9b2c1)


    matGenD('signalum', ['1x silver', '3x copper', '4x redstone'], 0xff3300)
    matGenD('lumium', ['1x silver', '3x tin', '2x glowstone'], 0xffffb3)
    matGenD('enderium', ['3x lead', '1x diamond', '2x ender_pearl'], 0x006666)

    






    event.create("sodium_cyanide")
        .dust()
        .color(0x7FB4C7)
        .components("1x sodium", "1x carbon", "1x nitrogen")

    event.create("chloroacetic_mixture")
        .fluid()
        .color(0x2D80B5)

    event.create("chloroacetate")
        .dust()
        .color(0x2D8BAE)
        .components("1x chlorine", "2x carbon", "3x hydrogen", "2x oxygen")
        .flags(no_decomp)
        .formula("ClCH2CO2H")

    event.create("dichloroacetate")
        .fluid()
        .color(0x2D8BBE)
        .components("1x chlorine", "1x chloroacetate")
        .formula("Cl2CH2CO2H")

    event.create("trichloroacetate")
        .fluid()
        .color(0x2D8BCE)
        .components("1x chlorine", "1x dichloroacetate")
        .formula("Cl3CH2CO2H")

    event.create("cyanoacetic_acid")
        .dust()
        .color(0x5B8988)
        .components("1x nitrogen", "3x carbon", "3x hydrogen", "2x oxygen")
        .flags(no_decomp)
        .formula("C3H3NO2")
        .ignoredTagPrefixes([TagPrefix.dustTiny, TagPrefix.dustSmall])

    event.create("ethyl_cyanoacetate")
        .liquid()
        .color(0x488176)
        .components("1x nitrogen", "5x carbon", "7x hydrogen", "2x oxygen")
        .flags(no_decomp)
        .formula("C5H7NO2")

    event.create("uncracked_ethyl_cyanoacrylate")
        .liquid()
        .color(0x616863)
        .components("1x nitrogen", "6x carbon", "7x hydrogen", "2x oxygen")
        .flags(no_decomp)

    event.create("ethyl_cyanoacrylate")
        .liquid()
        .color(0x516863)
        .components("1x nitrogen", "6x carbon", "7x hydrogen", "2x oxygen")
        .flags(no_decomp)
        .formula("C6H7NO2")

    event.create("polyethyl_cyanoacrylate")
        .polymer()
        .liquid()
        .color(0x708787)
        .components("1x nitrogen", "6x carbon", "7x hydrogen", "2x oxygen")
        .fluidPipeProperties(3000, 12000, true, true, true, false)
        .flags(no_decomp, plates, foil, sticky)
        .formula("C6H7NO2")

    // Dimethyl sulfoxide sub-chain (PECA catalyst)
    event.create("dimethyl_sulfoxide")
        .liquid()
        .color(0xBFB178)
        .components("2x carbon", "6x hydrogen", "1x sulfur", "1x oxygen")

    event.create("dimethyl_sulfide")
        .liquid()
        .color(0xACB279)
        .components("2x carbon", "6x hydrogen", "1x sulfur")


     // my chenisy shit here:

    event.create("ammonium_hydroxide")
    .color(0x7FB4C7)
    .fluid()
    .components('1x ammonia', '1x water')
    .formula('NH4OH')
    .flags(no_decomp)

    event.create('tetrachlorosilane')
    .fluid()
    .components('1x silicon', '4x chlorine')
    .color(0xFFFFFF)

    event.create('tetraethyl_orthosilicate')
    .fluid()
    .components('1x silicon', '4x ethanol')
    .formula("SiC8H20O4")
    .color(0xFFFFFF)

    event.create('crude_ethyl_silicate')
    .fluid()
    .components('1x silicon_dioxide', '3x ethanol')
    .color(0xFFFFFF)

    event.create('wood_leachate')
    .fluid()
    .color(0xd45500)

    event.create('supercooled_ice')
    .liquid(180)
    .components('1x water')
    .flags(no_decomp)
    .color(0xb3cfec)

    event.create('cryothetic_zero')
    .liquid(0)
    .components('1x cryo')
    .flags(no_decomp)
    .color(0x8badd0)

    event.create('hydroxy')
    .liquid(293)
    .components('1x oxygen', '1x hydrogen')
    .color(0xf0f0f0)

    event.create('hydrofluoric_hydroxicide')
    .components('1x hydrofluoric_acid', '1x hydroxy')
    .color(0x8888aa)
    .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID).temperature(333))

    event.create('aqua_regihydroxide')
    .components('1x aqua_regia', '1x hydroxy')
    .color(0xffb132)
    .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID).temperature(333))

    event.create('infernal_acid')
    .components('1x aqua_regihydroxide', '1x hydrofluoric_hydroxicide')
    .formula('HELL')
    .color(0xbe842d)
    .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID).temperature(666))

    //purified netherite line (apart of the chensy shit)

        event.create('acidic_unpure_uncracked_sulfuric_netherite_slag')
        .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID).temperature(7530))
        .components('1x netherite')
        .color(0x44261f)
        .flags(no_decomp)

        event.create('unpure_uncracked_sulfuric_netherite_slag')
        .liquid(7530)
        .components('1x netherite')
        .color(0x603227)
        .flags(no_decomp)

        event.create('purified_uncracked_sulfuric_netherite_slag')
        .liquid(7200)
        .components('1x netherite')
        .color(0x503020)
        .flags(no_decomp)

        event.create('purified_uncracked_netherite_slag')
        .liquid(7200)
        .components('1x netherite')
        .color(0x4d2051)
        .flags(no_decomp)

        event.create('purified_cracked_netherite_slag')
        .liquid(6900) //nice
        .components('1x netherite')
        .color(0x3a2c29)
        .flags(no_decomp)

        event.create('purified_netherite_sludge')
        .liquid(3600)
        .components('1x purified_netherite', '2x platinum_group_sludge', '1x naquadah', '3x bastnaesite', '2x tungstate', '6x netherite')
        .color(0x4e4237)
        .flags(no_decomp)

        event.create('caesium_hydroxide')
        .dust()
        .components('1x caesium', '1x hydroxy')
        .formula('CsOH')
        .color(0x656641)
        .iconSet(GTMaterialIconSet.METALLIC)
        .ignoredTagPrefixes([TagPrefix.dustSmall, TagPrefix.dustTiny])

        event.create('caesium_sulfate')
        .dust()
        .components('1x caesium', '1x sulfur')
        .formula('CsSO4')
        .color(0xa17e06)
        .iconSet(GTMaterialIconSet.METALLIC)
        .ignoredTagPrefixes([TagPrefix.dustSmall, TagPrefix.dustTiny])

    //nuclear processing
    event.create('sodium_oxalate')
    .components('2x sodium', '2x carbon', '4x oxygen')
    .dust()
    .color(0x2831b5)
    .formula('Na2C2O4')
    .flags(no_decomp)

    event.create('sodium_formate')
    .components('1x hydrogen', '1x carbon_dioxide','1x oxygen','1x sodium')
    .dust()
    .color(0x2547a5)
    .formula('HCOO2Na')

    event.create('sodium_sulfate')
    .components('1x sodium', '1x sulfur')
    .dust()
    .color(0xffcfff)

    event.create('phosphorus_trichloride')
    .gas()
    .components('1x phosphorus', '3x chlorine')
    .color(0xdcdc01)

    event.create('phosphoryl_chloride')
    .gas()
    .components('1x phosphorus_trichloride', '2x oxygen')
    .formula('POCL3')
    .color(0xbad601)

    event.create('n-butanol')
    .gas()
    .components('2x propene', '1x carbon_monoxide', '1x water')
    .color(0xb6371e)

    event.create('tributyl_phosphate')
    .gas()
    .components('1x phosphoryl_chloride','3x n-butanol')
    .color(0xd75c00)

    event.create('oxalic_acid')
    .dust()
    .components('2x carbon', '2x hydrogen', '4x hydrogen')
    .color(0xaaaaff)
    .flags(no_decomp)
    

    //holyfuckingshit Hydroxylamine Nitrate

    event.create('ammonium')
    .components('1x ammonia', '1x hydrogen')
    .gas()

    event.create('ammonium_carbonate')
    .components('2x ammonia', '1x carbon_dioxide')
    .gas()

    event.create('dinitrogen_trioxide')
    .components('2x nitrogen', '3x oxygen')
    .gas()

    event.create('ammonium_nitrite')
    .components('1x ammonia', '1x nitrogen', '2x oxygen')
    .gas()

    event.create('hydroxylamine')
    .components('1x nitrogen', '2x hydrogen', '1x hydroxy')
    .gas()

    event.create('hydroxylamine_disulfonate')
    .components('1x hydroxylamine', '1x nitrogen', '2x sulfur_trioxide')
    .gas()

    event.create('hydroxylamine_sulfate')
    .components('2x hydroxylamine', '1x sulfuric_acid')
    .flags(no_decomp)
    .gas()

    event.create('ammonium_bisulfate')
    .components('1x ammonia', '1x sulfuric_acid')
    .formula('NH4HSO4')
    .gas()

    event.create('ammonium_sulfate')
    .components('2x ammonium', '1x sulfuric_acid')
    .dust()

    event.create('hydroxylamine_nitrate')
    .components('1x hydroxylamine', '1x nitric_acid')
    .gas()

    event.create('bisulfite')
    .components('1x hydrogen', '1x sulfur', '3x oxygen')
    .gas()

    //return to sender
    // Nuclear Processing pt.2

    event.create('radioactive_fuel_cladding_scrap')
    .components('1x steel', '4x tungsten_steel')
    .color(0x262684)
    .dust()

    event.create('thorium_dioxide')
    .color(0x002200) // Dark gray-green
    .components('1x thorium', '2x oxygen')
    .formula('ThO2')
    .flags(rod)
    .iconSet(SHINY)
    .ingot()

    event.create('mixed_oxide_fuel')
    .color(0xf26e2f) // Bright Orange
    .components('8x plutonium', '5x uranium_233', '2x plutonium_241')
    .formula('(U²³³)5(Pu²³⁹)8(Pu²⁴¹)2O30')
    .iconSet(SHINY)
    .flags(rod, no_decomp)
    .ingot()

    event.create('uranium_233')
    .color(0x3cff3c)
    .element('uranium_233')
    .iconSet(RADIOACTIVE)
    .radioactiveHazard(1)
    .flags(rod)
    .ingot()

    event.create("radioactive_bronze_ore")
    .iconSet(GTMaterialIconSet.RADIOACTIVE)
    .components('999x uranium_233', '1x bronze')
    .formula('"To advance in the steam age, we will need to mine some Bronze Ore"')
    .color(0x3CFE3B)
    .radioactiveHazard(9)
    .flags(rod)
    .ingot()
    .ore(69, 2)

    event.create('mixed_thorium_uranium_233_mass')
    .color(0x003c00)
    .components('6x thorium', '2x uranium_233')
    .dust()
    

// ========================================
// PUREX CHAIN - MATERIALS (In Process Order)
// ========================================

// SUPPORT MATERIALS (make these first)
event.create('tbp_solution')
    .liquid()
    .color(0xFFEFD5) // Papaya whip (light organic)
    .components('3x tributyl_phosphate', '7x kerosene')

event.create('dilute_nitric_acid')
    .color(0xE0FFFF) // Light cyan
    .components('1x nitric_acid', '3x water')
    .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID))

event.create('kerosene')
    .gas()
    .color(0xFFE4B5) // Light petroleum/tan color
    .components('12x carbon', '26x hydrogen')

// STEP 2: Dissolution
event.create('fuel_dissolver_solution')
    .liquid()
    .color(0x8B4513) // Brown/muddy - radioactive sludge
    .components('4x uranium', '1x plutonium', '2x caesium')
    .flags(no_decomp)

// STEP 3: Feed Adjustment
event.create('adjusted_feed_solution')
    .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID))
    .color(0x996633) // Slightly lighter brown
    .components('4x uranium', '1x plutonium', '2x caesium', '1x nitric_acid')
    .flags(no_decomp)

// STEP 4: Co-Extraction
event.create('organic_phase_u_pu')
    .liquid()
    .color(0xCCCC00) // Yellow-green (organic solvent with U+Pu)
    .components('3x uranium', '1x plutonium', '4x tributyl_phosphate')
    .flags(no_decomp)

event.create('purex_raffinate')
    .liquid()
    .color(0xFF4500) // Bright orange-red (HIGH LEVEL WASTE)
    .components('2x caesium', '1x lanthanum', '1x cerium', '1x neodymium')

// STEP 5: Scrubbing
event.create('scrubbed_organic_phase')
    .liquid()
    .color(0xCCDD00) // Brighter yellow (cleaner)
    .components('3x uranium', '1x plutonium', '4x tributyl_phosphate')
    .flags(no_decomp)

event.create('scrub_waste')
    .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID))
    .color(0xFF6347) // Tomato red (medium-active waste)
    .components('1x caesium', '1x nitric_acid')

// STEP 6: Partitioning
event.create('aqueous_plutonium_solution')
    .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID))
    .color(0x00CED1) // Dark turquoise (Pu(III) in aqueous)
    .components('1x plutonium', '1x nitric_acid', '1x americium')
    .flags(no_decomp)

event.create('organic_uranium_phase')
    .liquid()
    .color(0xFFFF00) // Bright yellow (U in organic)
    .components('3x uranium', '3x tributyl_phosphate')
    .flags(no_decomp)

// STEP 7A: Uranium Stripping
event.create('uranyl_nitrate_solution')
    .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID))
    .color(0xFFD700) // Gold (uranyl ion is yellow)
    .components('3x uranium', '2x nitric_acid')
    .flags(no_decomp)

event.create('spent_tbp')
    .liquid()
    .color(0x8B7355) // Dirty brown (degraded solvent)
    .components('3x tributyl_phosphate', '1x carbon')
    .flags(no_decomp)

// STEP 7B: Plutonium Concentration
event.create('organic_plutonium_phase')
    .liquid()
    .color(0x4682B4) // Steel blue (Pu in organic)
    .components('1x plutonium', '1x americium', '2x tributyl_phosphate')
    .flags(no_decomp)

event.create('medium_active_waste')
    .liquid()
    .color(0xFFA500) // Orange (medium-level waste)
    .components('1x caesium', '1x americium')

// STEP 8A: Uranium Concentration
event.create('concentrated_uranyl_nitrate')
    .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID))
    .color(0xFFB700) // Deep gold (concentrated)
    .components('4x uranium', '2x nitric_acid')
    .flags(no_decomp)

// STEP 9A: Uranium Oxide Chain
event.create('uranium_trioxide')
    .dust()
    .color(0xFF8C00) // Dark orange
    .components('1x uranium', '3x oxygen')
    .formula('UO3')

event.create('uranium_dioxide')
    .color(0x2F4F2F) // Dark gray-green
    .components('1x uranium', '2x oxygen')
    .iconSet(METALLIC)
    .formula('UO2')
    .flags(rod)
    .ingot()

event.create('uranium_235_dioxide')
    .color(0x366736) // Dark gray-green
    .components('1x uranium_235', '2x oxygen')
    .iconSet(SHINY)
    .formula('U²³⁵O2')
    .flags(rod)
    .ingot()

// STEP 8B: Plutonium Stripping
event.create('plutonium_nitrate_solution')
    .liquid()
    .color(0x1E90FF) // Dodger blue (Pu(IV) nitrate)
    .components('1x plutonium', '1x americium', '2x nitric_acid')
    .flags(no_decomp)

// STEP 9B: Plutonium Oxide Chain
event.create('plutonium_oxalate')
    .dust()
    .color(0x87CEEB) // Sky blue
    .components('1x plutonium', '1x americium', '1x oxalic_acid')
    .flags(no_decomp)

event.create('plutonium_dioxide')
    .color(0x8B0000) // Dark red
    .components('1x plutonium', '2x oxygen')
    .iconSet(METALLIC)
    .formula('Pu²³⁹O2')
    .flags(rod)
    .ingot()

event.create('plutonium_241_dioxide')
    .color(0x8B0000) // Dark red
    .components('1x plutonium_241', '2x oxygen')
    .iconSet(SHINY)
    .formula('Pu²⁴¹O2')
    .flags(rod)
    .ingot()

event.create('mixed_plutonium_dioxide')
    .color(0xfe1b1b) // Brightish red
    .components('3x plutonium_dioxide', '1x plutonium_241_dioxide')
    .formula('(Pu²³⁹)₃(Pu²⁴¹)O₈')
    .flags(rod)
    .ingot()

// STEP 10: Solvent Recovery
event.create('regenerated_tbp')
    .liquid()
    .color(0xF0E68C) // Khaki (clean TBP)
    .components('3x tributyl_phosphate')
    
event.create('sodium_carbonate')
    .color(0xFFFFFF) // White powder
    .components('2x sodium', '1x carbon', '3x oxygen')
    .dust()

event.create('solvent_wash_waste')
    .liquid()
    .color(0xCD853F) // Peru brown (low-level waste)
    .components('1x sodium_carbonate', '1x carbon')

//return to sender

})

StartupEvents.registry("item", event => {
        event.create('multiblock_upgrade_kit')
        .displayName('Multiblock Upgrade Kit')
        .texture('kubejs:item/upgrade_kit')
        .tooltip('§7Used to upgrade some HV machines into multiblocks capable of §6Perfect Overclock');


var universalcircuittiers = ["ulv", "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev", "uiv", "uxv"];
universalcircuittiers.forEach((universal_circuit) => {
        event.create(`${universal_circuit}_universal_circuit`)
            .tag(`gtceu:circuits/${universal_circuit}`)
            .tag("gtceu:circuits/universal")
            .displayName(`${universal_circuit.toUpperCase()} Universal Circuit`)
            .tooltip(`§7${universal_circuit.toUpperCase()} Universal Circuit`)
            .textureJson({ layer0: `kubejs:item/circuits/universal/${universal_circuit}_universal_circuit` })
    })

event.create("uxpic_wafer").texture("kubejs:item/uxpic/uxpic_wafer").displayName("UXPIC Wafer").tooltip("§7Raw Ultra Extreme Power Circuit")
    event.create("uxpic_chip").texture("kubejs:item/uxpic/uxpic_chip").displayName("UXPIC Chip").tooltip("§7Ultra Extreme Power IC")

})

StartupEvents.registry('item', event => {
    event.create('primitive_glue_tube')
        .tooltip('The Primitivest Glue')
    event.create('empty_glue_tube')
    event.create('mythical_ore_vein')
    event.create('mechanical_hands')
    event.create('glass_ampule')
    event.create('mechanical_essence_ampule')

    event.create('gtceu:cryonic_sword', 'sword').tier('netherite').attackDamageBaseline(10)
    event.create('gtceu:cryocobus_cube', 'sword').tier('netherite').attackDamageBaseline(6)

    event.create('gtceu:purified_netherite_scrap')
    .displayName("§8Purified Netherite §rScrap")
    .tooltip("§eNh*")
    .texture('gtceu:item/netherite_line/purified_scrap')

    event.create('gtceu:netherite_scrap')
    .displayName("§8Netherite §rScrap")
    .tooltip("§eNh")
    .texture('gtceu:item/netherite_line/scrap')

    event
    .create('gtceu:empty_fuel_rod')
    .textureJson({ layer0: `gtceu:item/rod/ready/empty_fuel_rod`})

var yumyumrods = ["uranium_235_oxide", "uranium_oxide", "plutonium_241_oxide", "plutonium_oxide", 'thorium_oxide']
        yumyumrods.forEach((type) => {
        let displayType = type.replace('_oxide', '')
    
    event.create(`gtceu:${type}_fuel_rod`)
    .textureJson({ layer0: `gtceu:item/rod/ready/${displayType}_rod`})

    event.create(`gtceu:spent_${type}_fuel_rod`)
    .textureJson({ layer0: `gtceu:item/rod/spent/spent_${displayType}_rod`})

    event.create(`gtceu:chopped_${type}_fuel_rod`)
    .textureJson({ layer0: `gtceu:item/rod/chopped/chopped_${displayType}_rod`})
    })

    event.create(`gtceu:mox_fuel_rod`)
    .textureJson({ layer0: `gtceu:item/rod/ready/mixed_oxide_fuel_rod`})
    .displayName('MOX Fuel Rod')

    event.create(`gtceu:spent_mox_fuel_rod`)
    .textureJson({ layer0: `gtceu:item/rod/spent/spent_mixed_oxide_fuel_rod`})
    .displayName('Spent MOX Fuel Rod')

    event.create(`gtceu:chopped_mox_fuel_rod`)
    .textureJson({ layer0: `gtceu:item/rod/chopped/chopped_mixed_oxide_fuel_rod`})
    .displayName('Chopped MOX Fuel Rod')
})


StartupEvents.registry('fluid', event => {
    event
    .create('boiling_water')
    .thinTexture(0x3448ff)
    .bucketItem.texture('kubejs:item/boiling_water')

    event
    .create('gtceu:resonant_ender')
    .stillTexture('kubejs:block/fluids/ender_still')
    .flowingTexture('kubejs:block/fluids/ender')

    event
    .create('gtceu:aqueous_ammonium_formate')
    .thinTexture(0x687f97)
    .bucketColor(0x687f97)

    

})

ItemEvents.modification(event => {
    event.modify('kubejs:primitive_glue_tube', item => {
        item.craftingRemainder = 'kubejs:empty_glue_tube'
    })
})
StartupEvents.registry('block', ore => {

ore.create("gtceu:cracked_ancient_debris")
.texture('up', 'gtceu:block/cracked_ancient_debris_top')
.texture('down', 'gtceu:block/cracked_ancient_debris_top')
.texture('east', 'gtceu:block/cracked_ancient_debris_side')
.texture('west', 'gtceu:block/cracked_ancient_debris_side')
.texture('north', 'gtceu:block/cracked_ancient_debris_side')
.texture('south', 'gtceu:block/cracked_ancient_debris_side')
.soundType("ancient_debris")
.hardness(22)
.resistance(400)
.requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_diamond_tool')

    ore.create("gtceu:crumbling_ancient_debris")
.texture('up', 'gtceu:block/crumbling_ancient_debris_top')
.texture('down', 'gtceu:block/crumbling_ancient_debris_top')
.texture('east', 'gtceu:block/crumbling_ancient_debris_side')
.texture('west', 'gtceu:block/crumbling_ancient_debris_side')
.texture('north', 'gtceu:block/crumbling_ancient_debris_side')
.texture('south', 'gtceu:block/crumbling_ancient_debris_side')
.soundType("ancient_debris")
.hardness(18)
.resistance(60)
.requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_iron_tool')

})


StartupEvents.registry('block', event => {
    event
    .create('gtceu:nexus_steel_casing')
    .textureAll('gtceu:block/casings/solid/nexus_steel_casing')
    .displayName('§bNexus Steel Casing')
    .soundType('metal')
    .hardness(13)
    .resistance(25)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_iron_tool')

    event
    .create('botania:auric_livingrock')
    .soundType('stone')
    .hardness(8)
    .resistance(13)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_iron_tool')

event
    .create('gtceu:igneous_bronze_casing')
    .textureAll('gtceu:block/casings/solid/igneous_bronze_casing')
    .displayName('§6Igneous Bronze Casing')
    .soundType('metal')
    .hardness(8)
    .resistance(13)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_stone_tool')

event
    .create('gtceu:magikstone_casing')
    .textureAll('gtceu:block/casings/solid/magikstone_casing')
    .displayName('§9Magik Stone Casing')
    .soundType('metal')
    .hardness(7)
    .resistance(13)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_stone_tool')

event
    .create('gtceu:source_casing')
    .textureAll('gtceu:block/casings/solid/source_casing')
    .displayName('§dSource Casing')
    .soundType('glass')
    .hardness(1)
    .resistance(6)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_stone_tool')

event
    .create('gtceu:echoing_fluxum_casing')
    .textureAll('gtceu:block/casings/solid/fluix_casing')
    .displayName('§9Echoing Fluxum Casing')
    .soundType('glass')
    .hardness(1)
    .resistance(6)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_stone_tool')

event
    .create('gtceu:metallurgically_enhanced_source_casing', "gtceu:active")
    .displayName('§bMetallurgically Enhanced §dSource Casing')
    .textureAll('gtceu:block/casings/solid/metallurgically_enhanced_source_casing')
    .model('gtceu:block/metallurgically_enhanced_source_casing')
    .soundType('metal')
    .hardness(9)
    .resistance(23)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_stone_tool')

event
    .create('gtceu:resonite_casing')
    .displayName('§1Resonance Manipulative Resonite Casing')
    .textureAll('gtceu:block/casings/solid/resonite_casing')
    .soundType('metal')
    .hardness(9)
    .resistance(23)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_iron_tool')

    
event
    .create('gtceu:enderium_casing')
    .displayName('§1Radiologically-Insulative Enderium Casing')
    .textureAll('gtceu:block/casings/solid/thermal_casing/enderium_casing')
    .soundType('metal')
    .hardness(9)
    .resistance(23)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_iron_tool')

event
    .create('gtceu:lumium_casing')
    .displayName('§6Photo-kinetically Absorbitive Lumium Casing')
    .textureAll('gtceu:block/casings/solid/thermal_casing/lumium_casing')
    .soundType('metal')
    .hardness(9)
    .resistance(23)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_iron_tool')

event
    .create('gtceu:signalum_casing')
    .displayName('§cParticle Attracting Signalum Casing')
    .textureAll('gtceu:block/casings/solid/thermal_casing/signalum_casing')
    .soundType('metal')
    .hardness(9)
    .resistance(23)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_iron_tool')

event
    .create('gtceu:nitinol_casing')
    .displayName('§7Seismic Resilient Nitinol Casing')
    .textureAll('gtceu:block/casings/solid/nitinol_casing')
    .soundType('metal')
    .hardness(13)
    .resistance(30)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_diamond_tool')


event
    .create('eternal_heat_core')
    .displayName('§6Eternal Heat Core')
    .soundType('sculk_catalyst')
    .fullBlock(false)
    .hardness(50)
    .resistance(12500)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_diamond_tool')
    .box(4, 4, 4, 12, 12, 12, true)

event
    .create('dormant_heat_core')
    .displayName('§8Dormant Heat Core')
    .soundType('sculk_catalyst')
    .fullBlock(false)
    .hardness(50)
    .resistance(12500)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_diamond_tool')
    .box(4, 4, 4, 12, 12, 12, true)

event
    .create('compressed_cobblestone')
    .soundType('stone')
    .hardness(3.5)
    .resistance(6)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_wooden_tool')

event
    .create('obsidian_glass')
    .soundType('glass')
    .hardness(8)
    .resistance(15)
    .requiresTool(true)
    .defaultCutout()
    .transparent(true)

event
    .create('signalum_glass')
    .soundType('glass')
    .hardness(8)
    .resistance(15)
    .requiresTool(true)
    .defaultCutout()
    .transparent(true)

event
    .create('lumium_glass')
    .soundType('glass')
    .hardness(8)
    .resistance(15)
    .requiresTool(true)
    .defaultCutout()
    .transparent(true)

event
    .create('enderium_glass')
    .soundType('glass')
    .hardness(8)
    .resistance(15)
    .requiresTool(true)
    .defaultCutout()
    .transparent(true)

event
    .create('gtceu:fuel_assembly', "gtceu:active")
    .hardness(35)
    .resistance(16000)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_diamond_tool')
    .soundType('metal')



event
    .create('gtceu:undergarden_marker')
})

ItemEvents.modification(event => {
    event.modify('gtceu:uranium_ingot', item => {
        item.foodProperties = food => {
            food.hunger(2)
            food.saturation(3600000000000)
            food.effect('minecraft:wither', 400, 4, 0.5)
            food.effect('minecraft:nausea', 400, 4, 0.5)
            food.effect('minecraft:poison', 400, 4, 1)
            food.effect('minecraft:weakness', 800, 16, 1)
        }
    })
})

GTCEuStartupEvents.registry("gtceu:world_gen_layer", event => {
    event.create("moon")
        .targets("#ad_astra:moon_stone_replaceables")
        .dimensions("ad_astra:moon")

    event.create("mars")
        .targets("#ad_astra:mars_stone_replaceables")
        .dimensions("ad_astra:mars")

    event.create("mercury")
        .targets("#ad_astra:mercury_stone_replaceables")
        .dimensions("ad_astra:mercury")

    event.create("venus")
        .targets("#ad_astra:venus_stone_replaceables")
        .dimensions("ad_astra:venus")

    event.create("glacio")
        .targets("#ad_astra:glacio_stone_replaceables")
        .dimensions("ad_astra:glacio")

    event.create("glacio_deepslate")
        .targets("#minecraft:deepslate_ore_replaceables")
        .dimensions("ad_astra:glacio")

    event.create('endocrite')
        .targets('minecraft:endstone')
        .dimensions('minecraft:the_end')

    event.create('undergarden')
        .targets('undergarden:depthrock', 'undergarden:shiverstone', 'undergarden:tremblecrust')
        .dimensions('undergarden:undergarden')
})

GTCEuStartupEvents.registry("gtceu:tag_prefix", event => {
    event.create("moon", "ore")
        .stateSupplier(() => Block.getBlock("ad_astra:moon_stone").defaultBlockState())
        .baseModelLocation("ad_astra:block/moon_stone")
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
        .miningToolTag("forge:mineable/pickaxe")

    event.create("mars", "ore")
        .stateSupplier(() => Block.getBlock("ad_astra:mars_stone").defaultBlockState())
        .baseModelLocation("ad_astra:block/mars_stone")
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
        .miningToolTag("forge:mineable/pickaxe")

    event.create("mercury", "ore")
        .stateSupplier(() => Block.getBlock("ad_astra:mercury_stone").defaultBlockState())
        .baseModelLocation("ad_astra:block/mercury_stone")
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
        .miningToolTag("forge:mineable/pickaxe")

    event.create("venus", "ore")
        .stateSupplier(() => Block.getBlock("ad_astra:venus_stone").defaultBlockState())
        .baseModelLocation("ad_astra:block/venus_stone")
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
        .miningToolTag("forge:mineable/pickaxe")

    event.create("glacio", "ore")
        .stateSupplier(() => Block.getBlock("ad_astra:glacio_stone").defaultBlockState())
        .baseModelLocation("ad_astra:block/glacio_stone")
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
        .miningToolTag("forge:mineable/pickaxe")

    event.create("depthrock", "ore")
        .stateSupplier(() => Block.getBlock("undergarden:depthrock").defaultBlockState())
        .baseModelLocation("undergarden:block/depthrock")
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
        .miningToolTag("forge:mineable/pickaxe")

    event.create("shiverstone", "ore")
        .stateSupplier(() => Block.getBlock("undergarden:shiverstone").defaultBlockState())
        .baseModelLocation("undergarden:block/shiverstone")
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
        .miningToolTag("forge:mineable/pickaxe")

    event.create("tremblecrust", "ore")
        .stateSupplier(() => Block.getBlock("undergarden:tremblecrust").defaultBlockState())
        .baseModelLocation("undergarden:block/tremblecrust")
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
        .miningToolTag("forge:mineable/pickaxe")

})


GTCEuStartupEvents.registry("gtceu:dimension_marker", event => {

    event.create("ad_astra:moon")
        .iconSupplier(() => Item.of("ad_astra:moon_globe").getItem())
        .tier(0)
        .overrideName("Moon")

    event.create("ad_astra:mars")
        .iconSupplier(() => Item.of("ad_astra:mars_globe").getItem())
        .tier(0)
        .overrideName("Mars")

    event.create("ad_astra:mercury")
        .iconSupplier(() => Item.of("ad_astra:mercury_globe").getItem())
        .tier(0)
        .overrideName("Mercury")

    event.create("ad_astra:venus")
        .iconSupplier(() => Item.of("ad_astra:venus_globe").getItem())
        .tier(0)
        .overrideName("Venus")

    event.create("ad_astra:glacio")
        .iconSupplier(() => Item.of("ad_astra:glacio_globe").getItem())
        .tier(0)
        .overrideName("Glacio")

    event.create("undergarden:undergarden")
        .iconSupplier(() => Item.of("gtceu:undergarden_marker").getItem())
        .tier(0)
        .overrideName("Undergarden")

    
})

// server_scripts/prisma_items.js





/* for future reference:

event.recipes.gtceu.runic_circuitry_assembling_station(id('runic_convergence_circuit_board'))
        .itemInputs(`128x gtceu:wetware_circuit_board`,'6x #gtceu:circuits/luv','kubejs:runic_engraved_plating')
        .perTick(true)
        .inputFluids(`gtceu:runic_convergence_infusion 5`)
        .perTick(false)
        .itemOutputs(`128x kubejs:runic_convergence_circuit_board`)
        .duration(1800)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.chemical_reactor(id('uepic_wafer'))
        .itemInputs('gtceu:uhpic_wafer','4x gtceu:silicon_carbide_over_bismuth_tritelluride_dust')
        .inputFluids('gtceu:neutronium 576')
        .itemOutputs('kubejs:uepic_wafer')
        .duration(1200)
        .EUt(GTValues.VA[GTValues.UV])
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.cutter(id('uepic_chip'))
        .itemInputs('kubejs:uepic_wafer')
        .itemOutputs('2x kubejs:uepic_chip')
        .duration(900)
        .EUt(GTValues.VA[GTValues.UV])
        .cleanroom(CleanroomType.STERILE_CLEANROOM)


        .radioactiveHazard() for Naquadite
        .gas() for gaseous liquids
        .liquid(new GTFluidBuilder().attribute($FluidAttributes.ACID))for acids


        GTCEuStartupEvents.materialModification(event => {


    TagPrefix.ingot.setIgnored(GTMaterials.get("netherite_scrap"), Ingredient.of("minecraft:netherite_scrap"))
})

*/